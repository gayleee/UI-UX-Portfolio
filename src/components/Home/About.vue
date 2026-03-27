<template>
  <section class="about-wrapper d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-md-9 col-lg-7 text-center">
          <div class="mb-4">
            <ProfileImage />
          </div>

          <h1 class="heading mb-2">About Me</h1>

          <div class="d-flex flex-wrap justify-content-center gap-3">
            <div v-for="highlightContent in highlightContents" :key="highlightContent.primaryText">
              <Highlight :highlight="highlightContent" :theme="highlightContent.theme" />
            </div>
          </div>

          <p class="mb-5">
            Hello! I’m Cath, and I recently graduated from the
            <strong>Polytechnic University of the Philippines</strong> with a degree in information
            technology. My UI/UX journey formally began in college when our first website project
            transformed my curiosity to passion. Since then, I've taught myself to conduct user
            research, create design systems, and translate ideas into digital experiences that solve
            real-world problems. <br /><br />Today, I am actively seeking a role where I can
            contribute to building the foundation and recognition of a product. If you're looking
            for a designer seriously into making a simple, effective, and user-centric experience,
            drop me a message!
          </p>

          <div v-for="ctaContent in ctaContents" :key="ctaContent.label" class="d-inline-block">
            <CTAButton :cta="ctaContent" :url="ctaContent.url" :isExternal="ctaContent.link" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container">
    <h5 class="mb-4">Awards, Recognition, and Workshops</h5>
    <div class="d-flex flex-column gap-2">
      <div class="card">
        <span>Latin Honor - Cum Laude</span>
      </div>
      <div class="card">
        <span>Champion, ISKOnnovation: EUREKA 2025 UI Design Competition</span>
      </div>
      <div class="card">
        <span
          >ISKOnnovation: Sparking a Culture of Innovation and Multidisciplinary Collaboration
          towards Sustainable Future</span
        >
      </div>
      <div class="card">
        <span>Techquest: Decoding the Matrix of Software Development</span>
      </div>
      <div class="card">
        <span>Empower IT: Celebrating Women In Tech | Webinar</span>
      </div>
      <div class="card">
        <span
          >Unlocking your Research Potential: Research Writing Essentials, Presentations, and
          Publications</span
        >
      </div>
    </div>
  </section>

  <section class="container">
    <h5 class="mb-4">Works Outside UI/UX</h5>
    <Gallery />
  </section>
</template>

<script setup>
import { reactive } from 'vue'

import ProfileImage from '../Layout/ProfileImage.vue'
import Highlight from '../Layout/Highlight.vue'
import CTAButton from '../Layout/CTAButton.vue'
import Gallery from '../Layout/Gallery.vue'

const highlightContents = reactive([
  {
    primaryText: 'Fresh Grad',
    secondaryText: 'Based in the Philippines',
    theme: `orange`,
  },
])

const ctaContents = reactive([
  {
    label: 'Explore Work',
    url: null,
    link: false,
  },
])

// const imageContents = reactive([
//   {
//     imageUrl: sample,
//     imageAlt: `sample image alt`,
//   },
// ])
</script>
