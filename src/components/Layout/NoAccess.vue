<template>
  <div class="wrapper d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-md-8 col-lg-6 text-center d-flex flex-column align-items-center">
          <h1 class="mb-4 text-headline">Pending Launch</h1>
          <p class="mb-4 text-body">Check back soon for the full breakdown of this project.</p>
        </div>
        <div v-for="content in ctaContents" :key="content.label">
          <CTAButton
            v-if="ctaContents[0]"
            :cta="ctaContents[0]"
            :url="ctaContents[0].url"
            :isExternal="ctaContents[0].link"
          ></CTAButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CTAButton from './CTAButton.vue'
import { reactive } from 'vue'
import { useTheme } from '@/Composable/theme'

const ctaContents = reactive([
  {
    label: `Return to Home`,
    url: `/`,
    link: false,
  },
])

const { isDark } = useTheme()
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: var(--bg-main);
}
</style>
