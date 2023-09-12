import { defineStore } from "pinia";

export const useAudioStore = defineStore({
  id: "audio",
  state: () => ({
    audioData: {
      src: "",
      title: "",
      address: "", 
    },
  }),
  actions: {
    playAudio(src, title, address) {
      this.audioData.src = src;
      this.audioData.title = title;
      this.audioData.address = address;
    },
  },
});
