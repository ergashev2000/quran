import { defineStore } from "pinia";

export const usaTogglePlayPause = defineStore({
  id: "playing",
  state: () => ({
    isPlayingRadio: false,
    isPlayingSurah: false,
  }),
  actions: {
    togglePlayPauseRadio(toggle) {
      this.isPlayingRadio = toggle
      this.isPlayingSurah = false;
    },
    togglePlayPauseSurahs(toggle) {
      this.isPlayingSurah = toggle;
      this.isPlayingRadio = false;
    },
  },
});
