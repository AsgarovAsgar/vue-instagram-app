<template>
  <div class="mt-4 space-y-6">
    <!-- USER BAR -->
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
    <!-- IMAGE GALLERY -->
    <div class="flex flex-wrap">
      <div v-for="i in 5" class="w-1/4 pr-4 pb-4">
        <img src="https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg" alt="">
      </div>
    </div>
  </div>
</template>