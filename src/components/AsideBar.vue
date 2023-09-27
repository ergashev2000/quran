<template>
  <div
    class="bg-[#343a40] min-w-[300px] py-5 pl-5 fixed top-12 z-20 transition-all duration-500 xl:-translate-x-0 xl:left-0"
    :class="toggleMenu ? 'translate-x-full' : 'xl:translate-x-0 '"
  >
    <button
      class="-left-7 z-20 text-white top-1 absolute bg-black bg-opacity-70  justify-center items-center w-8 h-8 rounded flex xl:hidden"
      @click="toggleMenu = !toggleMenu"
    >
      <Arrow class="w-6 h-6" />
    </button>
    <h3 class="text-lg text-center py-2 border-b border-gray-400">
      {{ filteredSurahs[0]?.englishName }}
    </h3>
    <ul class="h-[calc(100vh-140px)] overflow-y-scroll pr-2 py-2 aside-scroll">
      <li
        v-for="surah in props.surahs"
        :key="surah.name"
        @click="toggleMenu = !toggleMenu"
      >
        <router-link
          :to="{ name: 'SurahDetail', params: { id: surah?.number } }"
          :class="{
            'flex gap-2 p-2 rounded-md text-sm': true,
            'bg-[#212529] ': isLinkActive(`/surah/${surah?.number}`),
          }"
        >
          <strong class="w-5 text-center">{{ surah?.number }}</strong>
          <h4>{{ surah?.englishName }}</h4>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";
import { useRoute } from "vue-router";
import Arrow from "./icons/Arrow.vue";
const route = useRoute();
const toggleMenu = ref(true);

const props = defineProps(["surahs"]);

const isLinkActive = link => {
  return route.path === link;
};

const filteredSurahs = computed(() => {
  const id = parseInt(route.params.id);
  return props?.surahs?.filter(surah => surah.number === id);
});
</script>

<style scoped></style>
