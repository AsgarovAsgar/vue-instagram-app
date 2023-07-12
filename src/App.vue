<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import AuthModal from './components/AuthModal.vue'

import { useUserStore } from './stores/users'
const userStore = useUserStore()
const { user, loadingUser } = storeToRefs(userStore)


onMounted(() => {
  userStore.getUser()
})

const router = useRouter()
const searchUsername = ref('')

const onSearch = () => {
  if(!searchUsername.value) return
  router.push(`/profile/${searchUsername.value}`)
  searchUsername.value = ''
}

const handleLogout = () => {
  userStore.handleLogout()
}

</script>

<template>
  <header class="bg-gray-900 flex justify-center">
    <div class="p-4 container flex justify-between">

      <div class="flex gap-4 items-center">
        <RouterLink to="/" class="font-bold text-2xl text-white">Instagram</RouterLink>
        <div class="flex">
          <input v-model="searchUsername" class="p-1.5 outline-none" type="text" placeholder="type username..." @keypress.enter="onSearch">
          <button @click="onSearch" class="border-l p-2 bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
      </div>
      <div v-if="!loadingUser">
        <div v-if="!user" class="text-white flex gap-2">
          <AuthModal :isLogin="false" />
          <AuthModal :isLogin="true" />
        </div>
        <div v-else class="text-white flex gap-2">
          <button class="px-4 py-1.5 bg-blue-500">Profile</button>
          <button @click="handleLogout" class="px-4 py-1.5 bg-blue-500">Log out</button>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

