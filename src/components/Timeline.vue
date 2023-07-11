<script setup>
import Card from './Card.vue';
const data = [
  {
    id: 1,
    username: 'Taylow Swift',
    url: 'https://m.media-amazon.com/images/M/MV5BZGM0YjhkZmEtNGYxYy00OTk0LThlNDgtNGQzM2YwNjU0NDQzXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_FMjpg_UX1000_.jpg',
    caption: ''
  },
  {
    id: 2,
    username: 'Leo Messi',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
    caption: 'goat'
  }
]
</script>

<template>
  <div class="border w-full flex flex-col items-center gap-4 p-4">
    <Card v-for="post in data" :key="post.id" :post="post" />
  </div>
</template>