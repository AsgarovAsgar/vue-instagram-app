<script setup>
import Profile from '../components/Profile.vue'

</script>

<template>
  <main class="flex justify-center">
    <div class="p-4 container flex justify-between">
      <Profile :key="$route.params.username" />
    </div>
  </main>
</template>
