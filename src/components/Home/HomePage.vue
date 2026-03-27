<template>
  <main class="container vh-100 d-flex align-items-center justify content-center" id="hero-section">
    <div class="row my-5 py-5 g-0">
      <div
        class="d-flex flex-column align-items-center justify-content-center mt-5 pt-5 greeting-container"
      >
        <!--Heading-->
        <transition name="fade" mode="out-in">
          <span :key="currentGreeting.language" class="language">
            {{ currentGreeting.language }}
          </span>
        </transition>
        <h1 class="heading text-center">
          I design UI/UX across diverse niches—building systems that solves real-world problems.
        </h1>
        <!--Highlight-->
        <div
          v-for="highlightContent in highlightContents"
          :key="highlightContent.primaryText"
          class="mb-5"
        >
          <Highlight :highlight="highlightContent"></Highlight>
        </div>

        <!--CTA Button-->
        <div class="hero-section">
          <CTAButton
            v-if="ctaContents[0]"
            :cta="ctaContents[0]"
            :url="ctaContents[0].url"
            :isExternal="ctaContents[0].link"
          />
        </div>
      </div>
    </div>
  </main>

  <!--Logo-->
  <div class="container-fluid darker-bg-dark" id="client-section">
    <div class="row">
      <div class="col d-flex flex-column align-items-center justify-content-center p-3 p-md-5">
        <h5 class="text-light text-center m-4">Worked with</h5>

        <div class="d-flex flex-wrap gap-4 justify-content-center">
          <img
            v-for="logo in logos"
            :key="logo.url"
            :src="logo.url"
            :alt="logo.alt"
            class="img-fluid logo"
          />
        </div>
      </div>
    </div>
  </div>

  <section class="container">
    <div class="row">
      <div class="col mt-5 pt-5">
        <!--Case Studies-->
        <h5>Case Studies</h5>
        <div v-for="study in studies" :key="study.id" class="col">
          <CaseStudyList :caseStudy="study" />
        </div>
      </div>
    </div>
  </section>

  <section class="container-fluid darker-bg-dark" id="bio-section">
    <div class="row">
      <div class="col">
        <!--Profile Image-->
        <ProfileImage />
        <!--SubHeading-->
        <div class="text-center mb-5">
          <h4 class="mt-4 text-light">All Roads Lead to Design.</h4>
          <p style="color: #f8f8f8">
            No matter the complexity, the path to a scalable result always circles back to
            intentional design. Let’s build that together.
          </p>
        </div>
        <!--CTA Button-->
        <div class="bio-section">
          <CTAButton
            v-if="ctaContents[1]"
            :cta="ctaContents[1]"
            :url="ctaContents[1].url"
            :isExternal="ctaContents[1].link"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { studies } from '@/data/studies'

// import Header from '../Layout/Header.vue'
import CaseStudyList from '../CaseStudy/CaseStudyList.vue'
import ProfileImage from '../Layout/ProfileImage.vue'
import Highlight from '../Layout/Highlight.vue'
import CTAButton from '../Layout/CTAButton.vue'

import chanchan from '/src/assets/clientLogos/chanchangames.webp'
import excell from '/src/assets/clientLogos/excell.webp'
import healspace from '/src/assets/clientLogos/healspace.webp'

const greetings = [
  {
    language: `Hello! I'm Cath,`,
  },
  {
    language: `Hello! Ako si Cath,`,
  },
  {
    language: `Hallo! Ich bin Cath,`,
  },
]

const currentIndex = ref(0)
const currentGreeting = ref(greetings[0])

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % greetings.length
    currentGreeting.value = greetings[currentIndex.value]
  }, 5000)
})

const logos = [
  { url: chanchan, alt: `chanchan logo` },
  { url: healspace, alt: `healspace logo` },
  { url: excell, alt: `excell energy logo` },
]

const ctaContents = reactive([
  {
    label: `Let’s Connect`,
    url: `/contact`,
    link: false,
  },
  {
    label: `Read Bio`,
    url: `/about`,
    link: false,
  },
])

const highlightContents = reactive([
  {
    primaryText: `Available for Work`,
    secondaryText: ``,
    theme: `green`,
  },
])
</script>

<style>
.language {
  color: #a82a04;
  font-size: 32px;
  font-weight: medium;
}
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.logo {
  width: clamp(80px, 20vw, 144px);
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  opacity: 0.4;
  transition: opacity 0.3s ease;
}
.logo:hover {
  opacity: 1;
}
#bio-section {
  clip-path: polygon(0% 0%, 50% 60px, 100% 0%, 100% 100%, 0% 100%);
  margin-top: -60px;
  padding-top: 100px;
}
/* #hero-section {
  clip-path: inset(0% 0% 0% 0% round 0 0 80px 80px);
  position: relative;
  z-index: 2;
  padding-bottom: 80px;
}
#client-section {
  margin-top: -80px;
  padding-top: 100px;
  z-index: 1;
} */

@media only screen and (max-width: 600px) {
  section.darker-bg-dark {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }
}
</style>
