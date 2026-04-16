<template>
  <main>
    <section class="about-wrapper d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-11 col-md-9 col-lg-7 text-center">
            <div class="mb-4">
              <ProfileImage />
            </div>

            <h1 class="mb-2">About Me</h1>

            <div class="d-flex flex-wrap justify-content-center gap-3">
              <div
                v-for="highlightContent in highlightContents"
                :key="highlightContent.primaryText"
              >
                <Highlight :highlight="highlightContent" :theme="highlightContent.theme" />
              </div>
            </div>

            <p class="mb-5">
              Hello! I’m Cath, and I recently graduated from the
              <strong>Polytechnic University of the Philippines</strong> with a degree in
              information technology. My UI/UX journey formally began in college when our first
              website project transformed my curiosity to passion. Since then, I've taught myself to
              conduct user research, create design systems, and translate ideas into digital
              experiences that solve real-world problems. <br /><br />Today, I am actively seeking a
              role where I can contribute to building the foundation and recognition of a product.
              If you're looking for a designer, drop me a message!
            </p>

            <div v-for="ctaContent in ctaContents" :key="ctaContent.label" class="d-inline-block">
              <CTAButton :cta="ctaContent" :url="ctaContent.url" :isExternal="ctaContent.link" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Logo-->
    <section class="container-fluid section-inverted" id="client-section">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col">
          <div class="d-flex flex-column align-items-center justify-content-center">
            <span class="text-light my-4 text-subtitle">Tech Stack</span>
            <div class="d-flex flex-wrap gap-4 justify-content-center">
              <div v-for="skill in skillContents" :key="skill.desc" class="logo-wrapper">
                <img :src="skill.url" :alt="skill.alt" class="img-fluid logo" />
                <span class="tooltip-text">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <span class="mb-4 text-subtitle">Awards</span>
      <div class="d-flex flex-column gap-2 my-4">
        <div v-for="card in cardContents" :key="card.desc">
          <Card :card="card" />
        </div>
      </div>
      <span class="mb-4 text-subtitle">Language</span>
      <div class="d-flex flex-column gap-2 mt-4">
        <div v-for="lang in langContents" :key="lang.desc">
          <Card :card="lang" />
        </div>
      </div>
    </section>

    <section class="container">
      <div class="d-flex flex-wrap align-items-center gap-2">
        <span class="text-subtitle">Works Outside UI/UX</span>

        <div class="d-flex align-items-center gap-2">
          <div class="circle" style="background-color: var(--container-primary)"></div>
          <span class="text-subtitle" style="color: var(--text-accent)">Graphic Design</span>
        </div>
      </div>

      <div class="my-4 gallery-wrapper">
        <div v-for="image in galleryContents" :key="image.imageUrl">
          <Gallery :gallery="image" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from 'vue'

import ProfileImage from '../Layout/ProfileImage.vue'
import Highlight from '../Layout/Highlight.vue'
import CTAButton from '../Layout/CTAButton.vue'
import Gallery from '../Layout/Gallery.vue'
import Card from '../Layout/Card.vue'
import Modal from '../Layout/Modal.vue'

import brochureFront from '@/assets/galleryAssets/brochureFront.webp'
import brochureBack from '@/assets/galleryAssets/brochureBack.webp'
import ccgamesLogo from '@/assets/galleryAssets/ccgamesLogo.webp'
import utahime from '@/assets/galleryAssets/utahime.webp'
import igbeLogo from '@/assets/galleryAssets/igbeLogo.webp'
import jobListing from '@/assets/galleryAssets/jobListing.webp'

import html from '/src/assets/techLogos/html.webp'
import css from '/src/assets/techLogos/css.webp'
import bootstrap from '/src/assets/techLogos/bootstrap.webp'
import vue from '/src/assets/techLogos/vue.webp'

const highlightContents = reactive([
  {
    primaryText: 'Fresh Grad',
    secondaryText: 'Based in the Philippines',
    theme: `highlight-metadata`,
  },
])

const ctaContents = reactive([
  {
    label: 'Explore Work',
    url: `/`,
    link: false,
  },
])

const cardContents = reactive([
  {
    desc: 'Latin Honor - Cum Laude',
    award: true,
    workshop: false,
  },
  {
    desc: 'Champion, ISKOnnovation: EUREKA 2025 UI Design Competition',
    award: true,
    workshop: false,
  },
])

const skillContents = reactive([
  { url: html, alt: `HTML Logo`, name: `HTML` },
  { url: css, alt: `CSS Logo`, name: `CSS` },
  { url: bootstrap, alt: `Bootstrap Logo`, name: `Bootstrap 5.3` },
  { url: vue, alt: `Vue Logo`, name: `Vue.JS` },
])

const langContents = reactive([
  {
    desc: 'Filipino - Mother Tongue',
    language: true,
  },
  {
    desc: 'English',
    language: true,
  },
])

const galleryContents = reactive([
  {
    id: `design-0`,
    name: `Tekken 8 Brochure - Front Page`,
    imageUrl: brochureFront,
    imageAlt: `Tekken Brochure Front Page`,
  },
  {
    id: `design-1`,
    name: `Job Listing Designs`,
    imageUrl: jobListing,
    imageAlt: `Job Listing Designs`,
  },
  {
    id: `design-2`,
    name: `ChanChan Games Logo Redesign`,
    imageUrl: ccgamesLogo,
    imageAlt: `ChanChan Games Logo Redesign`,
  },
  {
    id: `design-3`,
    name: `Utahime Sprite Custom Design`,
    imageUrl: utahime,
    imageAlt: `Utahime Sprite Custom Design`,
  },
  {
    id: `design-4`,
    name: `Tekken 8 Brochure - Back Page`,
    imageUrl: brochureBack,
    imageAlt: `Tekken Brochure Back Page`,
  },
  {
    id: `design-5`,
    name: `I'm Gonna Be Evil - Visual Novel Logo Design`,
    imageUrl: igbeLogo,
    imageAlt: `I'm Gonna Be Evil Visual Novel Logo Design`,
  },
])
</script>

<style scoped>
.about-wrapper {
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: var(--bg-main);
}

.about-text {
  color: var(--text-body);
  line-height: 1.8;
}

.d-flex.align-items-center.gap-2 {
  white-space: nowrap;
}

.gallery-wrapper {
  column-count: 3;
  column-gap: 1.5rem;
}

:deep(.gallery-item) {
  display: inline-block;
  width: 100%;
  margin-bottom: 1.5rem;
}

@media (max-width: 992px) {
  .gallery-wrapper {
    column-count: 2;
  }
}
@media (max-width: 768px) {
  .gallery-wrapper {
    column-count: 1;
  }
}
</style>
