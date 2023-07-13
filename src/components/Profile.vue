<script setup>
import UploadPhotoModal from './UploadPhotoModal.vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '../stores/users';
import { storeToRefs } from 'pinia';

const route = useRoute()

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const { username: profileUsername } = route.params

</script>

<template>
  <div class="mt-4 space-y-6">
    <!-- USER BAR -->
    <div class="flex justify-between items-center">
      <div class="space-y-4">
        <div>
          <h1 class="text-3xl font-bold">asgarasgarov</h1>
        </div>
        <div class="flex gap-6">
          <p class="font-bold">4 posts</p>
          <p class="font-bold">400 followers</p>
          <p class="font-bold">4000 following</p>
        </div>
      </div>
      <UploadPhotoModal v-if="user?.username === profileUsername" />
    </div>
    <!-- IMAGE GALLERY -->
    <div class="grid grid-cols-4 gap-4">
      <div v-for="i in 5" class="border">
        <img src="https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg" alt="">
      </div>
    </div>
  </div>
</template>