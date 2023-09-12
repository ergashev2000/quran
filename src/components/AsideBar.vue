<template>
  <div
    class="bg-[#343a40] min-w-[300px] py-5 pl-5 fixed top-12 left-0"
  >
    <h3 class="text-lg text-center py-2 border-b border-gray-400">
      {{ filteredSurahs[0]?.englishName }}
    </h3>
    <ul class=" h-[calc(100vh-140px)] overflow-y-scroll  pr-2 py-2">
      <li v-for="surah in props.surahs" :key="surahs.name">
        <router-link
          :to="`/surah/${surah?.number}`"
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
import { computed, defineProps, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const props = defineProps(["surahs"]);

const isLinkActive = link => {
  return route.path === link;
};

const filteredSurahs = computed(() => {
  const id = parseInt(route.params.id);
  return props.surahs.filter(surah => surah.number === id);
});
</script>

<style scoped></style>
