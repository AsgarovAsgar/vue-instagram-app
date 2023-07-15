<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  post: Object
})
const baseStorageUrl = import.meta.env.VITE_BASE_STORAGE_URL

</script>

<template>
  <div class="w-full max-w-xs border shadow-lg rounded-lg overflow-hidden">
    <img :src="`${baseStorageUrl}${post.image_url}`" class="h-[300px] w-full">
    <div class="p-3 flex flex-col gap-2">
      <h3 class="font-semibold">{{ post.username }}</h3>
      <p class="text-sm">{{ post.caption }}</p>
    </div>
  </div>
</template>