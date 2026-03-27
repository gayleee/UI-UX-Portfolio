<template>
  <div class="intro-container container d-flex justify-content-center">
    <img
      :src="introImage.introUrl"
      :alt="introImage.introAlt"
      class="intro-img"
      fetchpriority="high"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  introImage: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.intro-container {
  margin-top: 2rem;
  padding: 0 1rem;
}

.intro-img {
  width: 100%;
  max-width: 1300px;
  aspect-ratio: 21 / 9;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .intro-img {
    aspect-ratio: 16 / 9;
    max-height: 250px;
    margin-top: 1rem;
  }
}
</style>
