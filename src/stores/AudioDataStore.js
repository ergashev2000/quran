import { defineStore } from "pinia";

export const useAudioStore = defineStore({
  id: "audio",
  state: () => ({
    audioData: {
      src: "", // Initial source URL
      title: "", // Initial title
    },
  }),
  actions: {
    playAudio(src, title) {
      this.audioData.src = src;
      this.audioData.title = title;
    },
  },
});
