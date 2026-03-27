<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="d-flex align-items-center justify-content-center mascot-container">
          <video
            v-if="!isDark"
            key="light"
            autoplay
            muted
            loop
            playsinline
            src="@/assets/404.mp4"
            class="mascot w-50"
            type="video/mp4"
          ></video>

          <video
            v-else
            key="dark"
            autoplay
            muted
            loop
            playsinline
            src="@/assets/404Dark.mp4"
            class="mascot w-50"
            type="video/mp4"
          ></video>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <h4>404: Meow Not Found!</h4>
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <p>
          This link is a bit lost in the sauce! We couldn't find the page you requested. Where would
          you like to go next?
        </p>
      </div>
      <!-- <div v-for="item in ctaContents" :key="item.label">
        <CTAButton :cta="item"></CTAButton>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import CTAButton from './CTAButton.vue'
import { reactive } from 'vue'
import { useTheme } from '@/Composable/theme'

const ctaContents = reactive([
  {
    label: 'Back to Home',
    link: '/',
  },
])

const { isDark } = useTheme()
</script>
