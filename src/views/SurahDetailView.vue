<template>
  <div class="flex gap-5 justify-end my-16">
    <AsideBar :surahs="surahsStore?.surahs" />

    <div class="flex flex-col gap-5 w-[calc(100%-310px)] relative min-h-screen">
      <div
        class="loadingio-spinner-eclipse-e8biyzuu398 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        v-if="translationTextStore.loading"
      >
        <div class="ldio-icxd5xrckw">
          <div></div>
        </div>
      </div>
      <template v-else>
        <div class="text-center bg-[#272f33] py-7 rounded-md mr-5">
          <h2 class="text-3xl font-semibold">
            {{ translationTextStore?.detailSurah?.englishName }}
          </h2>
          <div class="flex gap-3 justify-center py-1">
            <p>
              {{ translationTextStore?.detailSurah?.englishNameTranslation }}
            </p>
            <p>{{ arabicAudioStore?.arabicAudio?.numberOfAyahs }} oyat</p>
          </div>
          <p class="text-3xl font-semibold">
            {{ translationTextStore?.detailSurah?.name }}
          </p>
        </div>
        <div
          v-for="(ayahs, index) in translationTextStore?.detailSurah?.ayahs"
          :key="ayahs.number"
          :class="{
            'border-b border-gray-400 p-5 mr-5 relative': true,
            'bg-[#212529]': activeButtonIndex === index,
          }"
        >
          <div class="flex justify-between items-center gap-3">
            <div class="h-12 relative [&>svg]:w-full [&>svg]:h-full w-fit">
              <NumberEffectIcon />

              <span
                class="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2"
                >{{
                  arabicAudioStore?.arabicAudio?.ayahs[index]?.numberInSurah
                }}</span
              >
            </div>

            <button
              class="bg-[#2ca4ab] flex items-center gap-2 py-1 px-3 text-white rounded-md"
              @click="
                handlePlayAudio(
                  arabicAudioStore?.arabicAudio?.ayahs[index]?.audio,
                  translationTextStore?.detailSurah?.englishName,
                  `${arabicAudioStore?.arabicAudio?.number} : ${arabicAudioStore?.arabicAudio?.ayahs[index]?.numberInSurah} `,
                  index
                )
              "
            >
              <span
                v-if="
                  playerToggle.isPlayingSurah && activeButtonIndex === index
                "
              >
                <PauseIcon />
              </span>
              <span v-else>
                <PlayingIcon />
              </span>

              Play Audio
            </button>
          </div>
          <p class="text-end font-semibold text-2xl py-5">
            {{ arabicTextStore?.arabicText?.ayahs[index].text }}
          </p>
          <p>{{ ayahs?.text }}</p>
          <div class="absolute right-5 bottom-1 text-sm font-semibold">
            <span>
              {{ arabicAudioStore?.arabicAudio?.number }} :
              {{ arabicAudioStore?.arabicAudio?.ayahs[index]?.numberInSurah }}
            </span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

import AsideBar from "../components/AsideBar.vue";
import NumberEffectIcon from "../components/icons/NumberEffectIcon.vue";
import PlayingIcon from "../components/icons/PlayingIcon.vue";
import PauseIcon from "../components/icons/PauseIcon.vue";

import { useSurahsStore } from "@/stores/SurahsStore";
import { useTranslationTextStore } from "@/stores/TranslationTextStore";
import { useArabicTextStore } from "@/stores/ArabicTextStore";
import { useArabicAudioStore } from "@/stores/ArabicAudioStore";
import { useAudioStore } from "@/stores/AudioDataStore";
import { usaTogglePlayPause } from "@/stores/PlayerToggle";

const activeButtonIndex = ref(null);

const route = useRoute();
const store = useAudioStore();

const surahsStore = useSurahsStore();
const translationTextStore = useTranslationTextStore();
const arabicTextStore = useArabicTextStore();
const arabicAudioStore = useArabicAudioStore();
const playerToggle = usaTogglePlayPause();

onMounted(() => {
  fetchData();
});

watch(
  () => route.params.id,
  newId => {
    fetchData(newId);
    window.scrollTo({
      top: 0,
    });
  }
);

window.scrollTo({
  top: 0,
});

const handlePlayAudio = (audio, title, address, index) => {
  playerToggle.togglePlayPauseSurahs(true);
  store?.playAudio(audio, title, address);

  activeButtonIndex.value = index;
};

async function fetchData(id = route.params.id) {
  surahsStore.fetchData();
  translationTextStore.fetchTranslationTextData(id);
  arabicTextStore.fetchArabicText(id);
  arabicAudioStore.fetchArabicAudio(id);
}
</script>

<style scoped></style>
