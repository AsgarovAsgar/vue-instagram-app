<script setup>
import {ref} from 'vue'
const visible = ref(false)
const openModal = () => visible.value = true
</script>

<template>
  <button class="px-4 py-1.5 bg-blue-500" @click="openModal">Login</button>
  <div v-if="visible" class="fixed top-0 left-0 w-full h-full z-10 bg-gray-900/70 text-black flex justify-center items-baseline pt-20">
    <div class="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
      <div>
        asds
      </div>
      <div class="border-t px-4 pt-4 flex gap-4 justify-end">
        <button class="px-4 py-1.5 border rounded">Cancel</button>
        <button class="px-4 py-1.5 border rounded bg-blue-500 text-white">OK</button>
      </div>
    </div> 
  </div>
</template>