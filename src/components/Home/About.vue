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

    <section class="container">
      <span class="mb-4 text-subtitle">Awards, Recognition, and Workshops</span>
      <div class="d-flex flex-column gap-2 my-4">
        <div v-for="card in cardContents" :key="card.heading">
          <Card :card="card" />
        </div>
      </div>
    </section>

    <section class="container">
      <span class="mb-4 text-subtitle">Works Outside UI/UX</span>
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

import brochureFront from '@/assets/galleryAssets/brochureFront.webp'
import brochureBack from '@/assets/galleryAssets/brochureBack.webp'
import ccgamesLogo from '@/assets/galleryAssets/ccgamesLogo.webp'
import utahime from '@/assets/galleryAssets/utahime.webp'
import igbeLogo from '@/assets/galleryAssets/igbeLogo.webp'
import jobListing from '@/assets/galleryAssets/jobListing.webp'

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
  {
    desc: 'ISKOnnovation: Sparking a Culture of Innovation and Multidisciplinary Collaboration towards Sustainable Future',
    award: false,
    workshop: true,
  },
  {
    desc: 'Techquest: Decoding the Matrix of Software Development',
    award: false,
    workshop: true,
  },
  {
    desc: 'Empower IT: Celebrating Women In Tech | Webinar',
    award: false,
    workshop: true,
  },
  {
    desc: 'Unlocking your Research Potential: Research Writing Essentials, Presentations, and Publications',
    award: false,
    workshop: true,
  },
])

const galleryContents = reactive([
  {
    imageUrl: brochureFront,
    imageAlt: `Tekken Brochure Front Page`,
  },
  {
    imageUrl: jobListing,
    imageAlt: `Job Listing Graphic Design`,
  },
  {
    imageUrl: ccgamesLogo,
    imageAlt: `ChanChan Games Logo Redesign`,
  },
  {
    imageUrl: utahime,
    imageAlt: `Utahime Sprite Custom Design`,
  },
  {
    imageUrl: brochureBack,
    imageAlt: `Tekken Brochure Back Page`,
  },
  {
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
