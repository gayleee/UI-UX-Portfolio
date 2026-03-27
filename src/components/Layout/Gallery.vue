<template>
  <div class="row">
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <img
        :src="brochureFront"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Tekken Brochure Front Page"
      />
      <img
        :src="ccgamesLogo"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="ChanChan Games Logo Redesign Mockup"
      />
    </div>

    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
        :src="ccgamesLogo"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in the Clouds"
      />
      <img
        :src="utahime"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Tekken Brochure Back Page"
      />
    </div>

    <div class="col-lg-4 mb-4 mb-lg-0">
      <img :src="brochureBack" class="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" />
      <img
        :src="ccgamesLogo"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Yosemite National Park"
      />
    </div>
  </div>
  <!-- Gallery -->
</template>

<script setup>
import brochureFront from '@/assets/galleryAssets/brochureFront.webp'
import brochureBack from '@/assets/galleryAssets/brochureBack.webp'
import ccgamesLogo from '@/assets/galleryAssets/ccgamesLogo.webp'
import utahime from '@/assets/galleryAssets/utahime.webp'

const props = defineProps({
  galleryImages: String,
  galleryAlts: String,
})
</script>
