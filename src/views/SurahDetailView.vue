<template>
  <AslideBar />
  <div class="flex gap-5 justify-end mt-16">
    <AsideBar :surahs="surahsStore?.surahs" />
    <div class="flex flex-col gap-5 w-[calc(100%-310px)]">
      <div
        v-for="(ayahs, index) in translationTextStore?.detailSurah?.ayahs"
        :key="ayahs.number"
        class="border border-gray-400 p-5 mr-5"
      >
        <div
          class="bg-red-500 h-8 w-10"
          @click="
            handlePlayAudio(
              arabicAudioStore?.arabicAudio?.ayahs[index]?.audio,
              translationTextStore?.detailSurah?.englishName
            )
          "
        >
          Play
        </div>
        <p>{{ ayahs?.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

import { useSurahsStore } from "@/stores/SurahsStore";
import { useTranslationTextStore } from "@/stores/TranslationTextStore";
import { useArabicTextStore } from "@/stores/ArabicTextStore";
import { useArabicAudioStore } from "@/stores/ArabicAudioStore";
import AsideBar from "@/components/AsideBar.vue";

import { useAudioStore } from "@/stores/AudioDataStore";
const store = useAudioStore();

const surahsStore = useSurahsStore();
const translationTextStore = useTranslationTextStore();
const arabicTextStore = useArabicTextStore();
const arabicAudioStore = useArabicAudioStore();

onMounted(() => {
  fetchData();
});

watch(
  () => route.params.id,
  newId => {
    fetchData(newId);
  }
);

const handlePlayAudio = (audio, title) => {
  store?.playAudio(audio, title);
};

async function fetchData(id = route.params.id) {
  surahsStore.fetchData();
  translationTextStore.fetchTranslationTextData(id);
  arabicTextStore.fetchArabicText(id);
  arabicAudioStore.fetchArabicAudio(id);
}
</script>

<style scoped></style>
