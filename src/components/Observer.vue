<script setup>
import { onMounted, ref } from 'vue';

const observer = ref(null)
const root = ref(null)

const emits = defineEmits('intersect')

onMounted(() => {
  observer.value = new IntersectionObserver((entry) => {
    if(entry && entry[0].isIntersecting) {
      console.log('aaaae', entry);
      emits('intersect')
    }
  })

  observer.value.observe(root.value)
})

</script>

<template>
  <div class="w-full h-2 bg-red-500" ref="root"></div>
</template>