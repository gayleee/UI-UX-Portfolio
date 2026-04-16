<template>
  <a
    role="button"
    data-bs-toggle="modal"
    :data-bs-target="'#modal-container-' + gallery.id"
    aria-label="View work"
  >
    <div class="gallery-item">
      <img :src="gallery.imageUrl" :alt="gallery.imageAlt" class="w-100" loading="lazy" />
    </div>
  </a>

  <Teleport to="#modal-root">
    <Modal :modal="gallery" />
  </Teleport>
</template>

<script setup>
import Modal from '../Layout/Modal.vue'

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
