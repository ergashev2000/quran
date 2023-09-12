<template>
  <div class="vv">
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from "vue";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const props = defineProps({
  playOptions: {
    type: Object,
    default: () => ({
      fill: true,
      fluid: true,
      autoplay: true,
      controls: true,
      preload: "metadata",
      sources: [
        {
          src: "https://win.holol.com/live/quran/playlist.m3u8",
          type: "application/x-mpegURL",
        },
      ],
    }),
  },
});

const videoPlayer = ref(null);

onMounted(() => {
  videoPlayer.value = videojs(videoPlayer.value, props.playOptions);
});

onBeforeUnmount(() => {
  if (videoPlayer.value) {
    videoPlayer.value.dispose();
  }
});
</script>

<style scoped>
.vv {
  width: 500px;
  height: 400px;
}
</style>
