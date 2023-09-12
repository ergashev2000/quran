<template>
  <div
    :class="`bg-[#1f2125] w-full fixed bottom-0 z-50 transition-all duration-500 ${
      props.audio?.src ? 'translate-y-0' : 'translate-y-full'
    } `"
  >
    <div class="h-1 bg-gray-300">
      <div
        class="h-1 transition-width duration-500 bg-[#2ca4ab] before:w-3 before:rounded-full before:h-3 before:bg-[#2ca4ab] before:absolute relative before:right-0 before:bottom-[-6px]"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
    <div class="flex gap-2 items-center justify-center">
      <h2 class="fixed left-5 bottom-2">
        {{ props?.audio?.title }} - {{ props?.audio?.address }}
      </h2>

      <audio
        ref="audioElement"
        :src="props?.audio?.src"
        autoplay
        @timeupdate="updateProgress"
      >
        Your browser does not support the audio element.
      </audio>
      <div class="mt-2 flex gap-2 items-center">
        <div>
          <button @click="skipBackward">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-skip-back"
            >
              <polygon points="19 20 9 12 19 4 19 20" />
              <line x1="5" y1="19" x2="5" y2="5" />
            </svg>
          </button>
        </div>

        <div v-if="!isPlaying">
          <button @click="togglePlayPause">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-play-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </button>
        </div>
        <div v-else>
          <button @click="togglePlayPause">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-pause-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="10" x2="10" y1="15" y2="9" />
              <line x1="14" x2="14" y1="15" y2="9" />
            </svg>
          </button>
        </div>

        <div>
          <button @click="skipForward">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-skip-forward"
            >
              <polygon points="5 4 15 12 5 20 5 4" />
              <line x1="19" y1="5" x2="19" y2="19" />
            </svg>
          </button>
        </div>
        <div>
          <button class="fixed bottom-2 right-5" @click="closeAudioPlayer">
            <!-- Close button -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineProps } from "vue";

const audioElement = ref(null);
const isPlaying = ref(true);
const progress = ref(0);

const props = defineProps(["audio"]);

const togglePlayPause = () => {
  if (audioElement.value.paused) {
    audioElement.value.play();
    isPlaying.value = true;
  } else {
    audioElement.value.pause();
    isPlaying.value = false;
  }
};

const closeAudioPlayer = () => {
  // Stop the audio and hide the player
  audioElement.value.pause();
  props.audio.src = "";
};

const updateProgress = () => {
  const currentTime = audioElement.value.currentTime;
  const duration = audioElement.value.duration;
  progress.value = (currentTime / duration) * 100;
};

const skipForward = () => {
  audioElement.value.currentTime += 1; // Skip forward 2 seconds
};

const skipBackward = () => {
  audioElement.value.currentTime -= 1; // Skip backward 2 seconds
};

watch(isPlaying, newVal => {
  if (newVal) {
    audioElement.value.play();
  } else {
    audioElement.value.pause();
  }
});
</script>

<style scoped></style>
