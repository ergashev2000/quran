import { defineStore } from "pinia";
import axios from "axios";

export const useArabicAudioStore = defineStore("arabicAudio", {
  state: () => ({
    arabicAudio: null,
    error: null,
    loading: false,
  }),

  actions: {
    async fetchArabicAudio(id = 1) {
      this.loading = true;
      try {
        const response = await axios.get(
          `https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`
        );
        console.log(response.data.data);
        this.arabicAudio = response.data.data;
      } catch (err) {
        console.error("Error fetching data:", err);
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
  },
});
