<!-- Layout.vue -->
<template>
  <AudioPlayer :audio="store?.audioData"></AudioPlayer>
  <Header></Header>

  <main class="custom-container mx-auto min-h-screen">
    <router-view></router-view>
  </main>

  <footer>
    <p>Footer ma'lumotlari</p>
  </footer>
</template>

<script setup>
import Header from "../components/Header.vue";
import AudioPlayer from "../components/AudioPlayer.vue";

import { useAudioStore } from "@/stores/AudioDataStore";
const store = useAudioStore();

</script>

<style scoped>
/* Your layout styles here */
</style>
