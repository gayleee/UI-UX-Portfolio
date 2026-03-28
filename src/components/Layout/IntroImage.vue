<template>
  <div class="intro-container container d-flex justify-content-center">
    <video
      v-if="isVideo(introImage.introUrl)"
      :src="introImage.introUrl || introImage.introMp4"
      class="intro-img"
      autoplay
      loop
      muted
      playsinline
      fetchpriority="high"
    >
      <source v-if="introImage.introUrl" :src="introImage.introUrl" type="video/webm" />
      <source v-if="introImage.introMp4" :src="introImage.introMp4" type="video/mp4" />
    </video>

    <img
      v-else
      :src="introImage.introUrl"
      :alt="introImage.introAlt || 'Case Study Intro'"
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

const isVideo = (url) => {
  if (!url) return false
  return /\.(webm|mp4)$/i.test(url)
}
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
