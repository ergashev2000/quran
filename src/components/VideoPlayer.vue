<template>
  <div class="vv">
    <video ref="videoPlayer" class="video-js" :poster="poster"></video>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from "vue";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const props = defineProps({
  src: {
    type: Object,
    default: () => ({
      url: "",
    }),
  },
  poster: String,
});

const videoPlayer = ref(null);

const playOptions = {
  fill: true,
  fluid: true,
  autoplay: true,
  controls: true,
  preload: "metadata",
  sources: [
    {
      src: props.src.url,
      type: "application/x-mpegURL",
    },
  ],
};

onMounted(() => {
  videoPlayer.value = videojs(videoPlayer.value, playOptions);
});

onBeforeUnmount(() => {
  if (videoPlayer.value) {
    videoPlayer.value.dispose();
  }
});
</script>

<style scoped>
.vv {
  width: 100%;
  height: 500px;
}
</style>
