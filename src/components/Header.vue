<template>
  <header
    class="fixed top-0 w-full z-20 flex justify-between items-center gap-2 px-5 py-2 bg-[#343a40]"
  >
    <div class="flex gap-3 items-center">
      <router-link :to="{ name: 'home' }" class="w-fit font-semibold text-xl">
        <i>Quran.uz</i>
      </router-link>
      <nav class="w-full pl-10">
        <ul class="flex gap-3 items-center w-full justify-center">
          <li>
            <router-link to="/"> Bosh sahifa </router-link>
          </li>
          <li>
            <router-link to="/"> Biz haqimizda </router-link>
          </li>
          <li>
            <router-link to="/"> Aloqa </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="w-52">
      <audio ref="audioElement" src="https://radio.islom.uz/islomuz">
        Your browser does not support the audio element.
      </audio>
      <button
        @click="togglePlayPause"
        class="py-2 px-4 bg-red-400 rounded-md text-white flex items-center gap-3 w-40 justify-between"
      >
        <RadioIcon />
        <span class="text-end">
          {{ radioButtonText }}
        </span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import RadioIcon from "./icons/radioIcon.vue";
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
