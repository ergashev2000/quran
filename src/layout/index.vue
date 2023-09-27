<template>
  <AudioPlayer :audio="store?.audioData"></AudioPlayer>
  <Header></Header>

  <main class="custom-container mx-auto min-h-screen">
    <router-view></router-view>
  </main>
</template>

<script setup>
import Header from "../components/Header.vue";
import AudioPlayer from "../components/AudioPlayer.vue";

import { useAudioStore } from "@/stores/AudioDataStore";
const store = useAudioStore();
</script>
