<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import AuthModal from './components/AuthModal.vue'

const searchUsername = ref('')

const onSearch = () => {
  console.log('searhcing', searchUsername.value);
}

</script>

<template>
  <header class="bg-gray-900 flex justify-center">
    <div class="p-4 container flex justify-between">

      <div class="flex gap-4 items-center">
        <RouterLink to="/" class="font-bold text-2xl text-white">Instagram</RouterLink>
        <input v-model="searchUsername" class="p-1.5" type="text" placeholder="username..." @keypress.enter="onSearch">
      </div>
      <div class="text-white">
        <button class="px-4 py-1.5 bg-blue-500">Sign up</button>
        <AuthModal />
      </div>
    </div>
  </header>

  <RouterView />
</template>

