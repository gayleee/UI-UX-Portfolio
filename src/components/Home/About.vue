<template>
  <div class="container">
    <div class="row">
      <!--Profile Image-->
      <ProfileImage></ProfileImage>
      <!--Heading-->
      <div v-for="headingContent in headingContents" :key="headingContent.title">
        <Header :heading="headingContent"></Header>
      </div>
      <!--Highlight-->
      <div v-for="highlightContent in highlightContents" :key="highlightContent.primaryText">
        <Highlight :highlight="highlightContent"></Highlight>
      </div>
      <!--Body Text-->
      <div v-for="introContent in introContents" :key="introContent.firstParagraph">
        <Introduction :intro="introContent"></Introduction>
      </div>
      <!--CTA Button-->
      <div v-for="ctaContent in ctaContents" :key="ctaContent.label">
        <CTAButton :cta="ctaContent"></CTAButton>
      </div>
    </div>
  </div>

  <div class="container-fluid my-5 darker-bg-dark">
    <div class="row">
      <!--SubHeading -->
      <div v-for="subheadingContent in subheadingContents" :key="subheadingContent.title">
        <SubHeader :subheading="subheadingContent"></SubHeader>
      </div>
      <!--Two Columns-->
      <div>
        <TwoColumn></TwoColumn>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <h4 class="text-center mt-5 mb-4">Designs</h4>
      <!--Bento-->
      <Bento></Bento>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import Header from '../Layout/Header.vue'
import SubHeader from '../Layout/SubHeader.vue'
import ProfileImage from '../Layout/ProfileImage.vue'
import Highlight from '../Layout/Highlight.vue'
import Introduction from '../Layout/Introduction.vue'
import Bento from '../Layout/Bento.vue'
import CTAButton from '../Layout/CTAButton.vue'

import profile from '/src/assets/profile.png'
import TwoColumn from '../Layout/TwoColumn.vue'

const headingContents = reactive([
  {
    imageSrc: profile,
    imageAlt: 'Profile Picture',
    title: 'About Me',
  },
])

const subheadingContents = reactive([
  {
    title: 'Life Outside the Grid & Screen',
  },
])

const highlightContents = reactive([
  {
    primaryText: 'UI/UX Designer',
    secondaryText: 'Based in the Philippines',
  },
])

const ctaContents = reactive([
  {
    label: 'Discover The Results',
  },
])

const introContents = reactive([
  {
    firstParagraph:
      "Hello! I'm Cath and I recently graduated from Polytechnic University of the Philippines with a degree in Information Technology.",
    secondParagraph:
      "My UI/UX journey formally began in college when a simple website project transformed my curiosity to passion. Since then, I've taught myself to conduct user research, create design systems, and translate ideas into user friendly digital experiences. I am able to apply these during my internship at MabuhayPower Holdings Corporation with a primary role of a web designer and even on my designs at present.",
  },
])
</script>
