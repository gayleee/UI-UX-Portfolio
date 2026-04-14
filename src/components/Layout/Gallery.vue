<template>
  <div class="gallery-item">
    <img :src="gallery.imageUrl" :alt="gallery.imageAlt" class="w-100" />
  </div>
</template>

<script setup>
const props = defineProps({
  gallery: Object,
})
</script>

<style scoped>
.gallery-item {
  display: inline-block;
  width: 100%;
  margin-bottom: 1.5rem;
  break-inside: avoid;
}

img {
  border-radius: var(--border-radius-4);
  display: block;
}
</style>
