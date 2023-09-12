import { defineStore } from "pinia";
import axios from "axios";

export const useTranslationTextStore = defineStore("detailSurah", {
  state: () => ({
    detailSurah: [],
    error: null,
    loading: false,
  }),

  actions: {
    async fetchTranslationTextData(id = 1) {
      this.loading = true;
      try {
        const response = await axios.get(
          `https://api.alquran.cloud/v1/surah/${id}/uz.sodik`
        );
        this.detailSurah = response.data.data;
      } catch (err) {
        console.error("Error fetching data:", err);
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
  },
});
