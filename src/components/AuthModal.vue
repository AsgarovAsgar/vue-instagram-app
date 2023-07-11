<script setup>
import { ref, defineProps } from 'vue'
import { storeToRefs } from 'pinia';
import {useUserStore} from '../stores/users'

const props = defineProps({
  isLogin: Boolean
})

const userStore = useUserStore()
const { errorMessage } = storeToRefs(userStore)

const visible = ref(false)

const userCredentials = ref({
  username: '',
  email: '',
  password: ''
})

const handleOk = () => {
  userStore.handleSignup(userCredentials.value)
}

const openModal = () => visible.value = true
const closeModal = () => visible.value = false
</script>

<template>
  <button class="px-4 py-1.5 bg-blue-500" @click="openModal">{{ props.isLogin ? 'Login' : 'Sign up' }}</button>
  <div v-if="visible" @click.self="closeModal" class="fixed top-0 left-0 w-full h-full z-10 bg-gray-900/70 text-black flex justify-center items-baseline pt-20">
    <div id="modal" class="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold pb-2 border-b">{{ props.isLogin ? 'Login' : 'Sign up' }}</h2>
      <div class="my-2 flex flex-col gap-2">
        <input v-if="!isLogin" v-model="userCredentials.username" class="border rounded px-3 py-1.5 text-sm" type="text" placeholder="User name">
        <input v-model="userCredentials.email" class="border rounded px-3 py-1.5 text-sm" type="email" placeholder="Email">
        <input v-model="userCredentials.password" class="border rounded px-3 py-1.5 text-sm" type="password" placeholder="Password">
        <p class="text-red-400 text-sm font-medium">{{ errorMessage }}</p>
      </div>
      <div class="border-t px-4 pt-2 text-sm flex gap-4 justify-end">
        <button class="px-4 py-1.5 border rounded" @click="closeModal">Cancel</button>
        <button class="px-4 py-1.5 border rounded bg-blue-500 text-white" @click="handleOk">OK</button>
      </div>
    </div> 
  </div>
</template>