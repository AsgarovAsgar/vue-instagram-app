<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  isLogin: Boolean
})
const visible = ref(false)
const openModal = () => visible.value = true
const closeModal = () => visible.value = false
</script>

<template>
  <button class="px-4 py-1.5 bg-blue-500" @click="openModal">{{ props.isLogin ? 'Login' : 'Sign up' }}</button>
  <div v-if="visible" @click.self="closeModal" class="fixed top-0 left-0 w-full h-full z-10 bg-gray-900/70 text-black flex justify-center items-baseline pt-20">
    <div id="modal" class="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold pb-2 border-b">{{ props.isLogin ? 'Login' : 'Sign up' }}</h2>
      <div class="my-2 flex flex-col gap-2">
        <input v-if="isLogin" class="border rounded px-3 py-1.5 text-sm" type="text" placeholder="User name">
        <input class="border rounded px-3 py-1.5 text-sm" type="email" placeholder="Email">
        <input class="border rounded px-3 py-1.5 text-sm" type="password" placeholder="Password">
      </div>
      <div class="border-t px-4 pt-2 text-sm flex gap-4 justify-end">
        <button class="px-4 py-1.5 border rounded" @click="closeModal">Cancel</button>
        <button class="px-4 py-1.5 border rounded bg-blue-500 text-white">OK</button>
      </div>
    </div> 
  </div>
</template>