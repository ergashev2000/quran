import { defineStore } from "pinia";
import axios from "axios";

export const useArabicTextStore = defineStore("arabicText", {
  state: () => ({
    arabicText: [],
    error: null,
    loading: false,
  }),

  actions: {
    async fetchArabicText(id = 1) {
      this.loading = true;
      try {
        const response = await axios.get(
          `https://api.alquran.cloud/v1/surah/${id}`
        );
        console.log(response.data.data);
        this.arabicText = response.data.data;
      } catch (err) {
        console.error("Error fetching data:", err);
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
  },
});
