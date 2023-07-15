<script setup>
import { onMounted, ref } from 'vue';

const observer = ref(null)
const root = ref(null)

const emits = defineEmits(['intersect'])

onMounted(() => {
  observer.value = new IntersectionObserver((entry) => {
    if(entry && entry[0].isIntersecting) {
      // console.log('aaaae', entry);
      emits('intersect')
    }
  })

  observer.value.observe(root.value)
})

</script>

<template>
  <div class="w-full h-1 relative -top-20" ref="root"></div>
</template>