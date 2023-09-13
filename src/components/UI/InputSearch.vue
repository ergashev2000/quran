<template>
  <div
    class="rounded-3xl border border-gray-500 relative max-w-2xl w-full mx-auto"
  >
    <div
      class="w-5 [&>svg]:fill-slate-400 absolute top-1/2 -translate-y-1/2 left-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search">
        <g data-name="Layer 2">
          <path
            d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
            data-name="search"
          ></path>
        </g>
      </svg>
    </div>
    <input
      type="text"
      class="py-3 px-8 rounded-3xl bg-white text-black outline-none w-full"
      placeholder="Search"
      v-model="searchTerm"
      @input="emitSearchInput"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const { modelValue } = defineProps(["modelValue"]);
const emit = defineEmits();

const searchTerm = ref(modelValue);

const emitSearchInput = () => {
  emit("searchinputdata", searchTerm.value);
};
</script>
