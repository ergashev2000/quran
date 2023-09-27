<template>
  <header
    class="fixed top-0 w-full z-20 flex justify-between items-center gap-2 py-2 bg-[rgb(52,58,64)] xl:px-5 px-2"
  >
    <div class="flex gap-3 items-center">
      <router-link :to="{ name: 'home' }" class="w-fit font-semibold text-xl">
        <i>Quran.uz</i>
      </router-link>
      <nav class="w-full xl:pl-10 ">
        <ul class="flex gap-3 items-center w-full justify-center">
          <li class="text-[14px] xl:text-sm">
            <router-link to="/"> Bosh sahifa </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="">
      <audio ref="audioElement" src="https://radio.islom.uz/islomuz">
        Your browser does not support the audio element.
      </audio>
      <button
        @click="togglePlayPause"
        class="py-2 px-4 bg-red-400 rounded-md text-white flex items-center gap-1  xl:w-36 w-32 justify-between"
      >
        <RadioIcon />
        <span class="text-end text-[14px] text-sm">
          {{ radioButtonText }}
        </span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import RadioIcon from "./icons/RadioIcon.vue";
import { usaTogglePlayPause } from "@/stores/PlayerToggle";

const playerToggle = usaTogglePlayPause();

const audioElement = ref(null);

const radioButtonText = computed(() => {
  return playerToggle.isPlayingRadio ? "Pause Radio" : "Play Radio";
});

const togglePlayPause = () => {
  if (audioElement.value.paused) {
    audioElement.value.play();
    playerToggle.togglePlayPauseRadio(true);
  } else {
    audioElement.value?.pause();
    playerToggle.togglePlayPauseRadio(false);
  }
};

watch(playerToggle, newVal => {
  if (newVal.isPlayingSurah) {
    audioElement.value.pause();
  }
});
</script>
