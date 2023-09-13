<template>
  <li>
      <router-link :to="`/surah/${props?.surah?.number}`"
      class="flex p-3 mx-auto rounded max-w-sm w-fullflex justify-between gap-2 items-center border-2 border-[#343a40] hover:shadow-[#2ca4ab] shadow-md transition-all duration-500"
    >
      <div class="h-10 relative [&>svg]:w-full [&>svg]:h-full w-20">
       <NumberEffectIcon/>

        <span
          class="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2"
          >{{ props?.surah?.number }}</span
        >
      </div>
      <div class="w-full">
        <h3>{{ props?.surah?.englishName }}</h3>
        <p class="text-gray-400 text-sm">{{ props?.surah?.revelationType }}</p>
      </div>
      <div class="w-max whitespace-nowrap">
        <h4 class="text-sm">{{ props?.surah?.name }}</h4>
        <p class="text-gray-400 text-[15px]">
          <span class="text-[#2ca4ab]">{{ props?.surah?.numberOfAyahs }} </span>
          Ayahs
        </p>
      </div>
    </router-link>
  </li>
</template>

<script setup>
import NumberEffectIcon from './icons/NumberEffectIcon.vue';

const props = defineProps(["surah"]);
</script>

<style scoped></style>
