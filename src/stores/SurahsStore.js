import { defineStore } from "pinia";
import axios from "axios";

export const useSurahsStore = defineStore("surahs", {
  state: () => ({
    surahs: [],
    error: null,
    loading: false, // Add a loading state
  }),

  actions: {
    async fetchData() {
      this.loading = true; // Set loading to true when starting the request
      try {
        const response = await axios.get("https://api.alquran.cloud/v1/surah");
        this.surahs = response.data.data;
      } catch (err) {
        console.error("Error fetching data:", err);
        this.error = err;
      } finally {
        this.loading = false; // Set loading to false when the request is complete (whether successful or not)
      }
    },
  },
});
