<template>
  <div
    class="loadingio-spinner-eclipse-e8biyzuu398 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    v-if="surahsStore.loading"
  >
    <div class="ldio-icxd5xrckw">
      <div></div>
    </div>
  </div>

  <div class="p-5" v-else>
    <div
      class="bg-[url('../assets/background.jpg')] w-full bg-cover h-96 absolute top-0 left-0 inset-0 -z-10 custom-filters"
    ></div>
    <div class="w-60 [&>svg]:fill-slate-100 mx-auto pt-14 pb-6">
      <BannerImage />
    </div>

    <InputSearch @searchinputdata="handleSearchInput" />

    <div class="pt-10">
      <h2 class="text-center text-2xl font-semibold py-5">Surahs</h2>
      <ul
        class="grid grid-cols-1 pb-5 md:grid-cols-2 gap-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <li v-if="filteredSurahs.length === 0">
          <p>No surahs match your search.</p>
        </li>
        <SurahCard
          v-else
          v-for="surah in filteredSurahs"
          :key="surah.number"
          :surah="surah"
        />
      </ul>
      <hr />
      <h2 class="text-4xl text-start pt-10 font-semibold">Lives</h2>
      <div class="flex justify-between items-center gap-4 pt-2">
        <VideoPlayer v-for="src in videoSource" :src="src" :key="src.id" :poster="src?.poster" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";

import SurahCard from "../components/SurahCard.vue";
import InputSearch from "../components/UI/InputSearch.vue";
import BannerImage from "../components/icons/BannerImage.vue";
import VideoPlayer from "../components/VideoPlayer.vue";

import { useSurahsStore } from "@/stores/SurahsStore";

const surahsStore = useSurahsStore();

const searchTerm = ref("");

const videoSource = ref([
  {
    id: 3,
    name: "Quran channel",
    url: "https://win.holol.com/live/quran/playlist.m3u8",
    poster: 'https://hajjumrahplanner.com/wp-content/uploads/2017/04/masjid-al-haram-1-1024x602.jpg'
  },
  {
    id: 4,
    name: "Sunna channel",
    url: "https://win.holol.com/live/sunnah/playlist.m3u8",
    poster: 'https://zamzam.com/blog/wp-content/uploads/2021/08/shutterstock_1149365243-1.jpg'
  },
]);

const filteredSurahs = computed(() => {
  const search = searchTerm.value.toLowerCase();
  return surahsStore?.surahs.filter(surah =>
    surah.englishName.toLowerCase().includes(search)
  );
});

const handleSearchInput = value => {
  searchTerm.value = value;
};

onMounted(() => {
  surahsStore.fetchData();
});
</script>

<style scoped>
.custom-filters {
  filter: saturate(0.1) brightness(0.3) contrast(1.1);
}
</style>
