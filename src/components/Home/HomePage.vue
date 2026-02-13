<template>
  <div class="container">
    <div class="row">
      <div class="my-5 py-5">
        <!--Heading-->
        <div v-for="headingContent in headingContents" :key="headingContent.title">
          <Header :heading="headingContent"></Header>
        </div>
        <!--Highlight-->
        <div v-for="highlightContent in highlightContents" :key="highlightContent.primaryText">
          <Highlight :highlight="highlightContent"></Highlight>
        </div>
        <!--CTA Button-->
        <div v-for="ctaContent in ctaContents" :key="ctaContent.label">
          <CTAButton :cta="ctaContent"></CTAButton>
        </div>
      </div>
      <!--Case Study List-->
      <h4>Case Studies</h4>
      <div v-for="caseStudy in caseStudies" :key="caseStudy.name" class="col">
        <CaseStudyList :case-study="caseStudy"></CaseStudyList>
      </div>
    </div>
    <!--Profile Image-->
    <div>
      <ProfileImage></ProfileImage>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import Header from '../Layout/Header.vue'
import CaseStudyList from '../CaseStudy/CaseStudyList.vue'
import ProfileImage from '../Layout/ProfileImage.vue'
import Highlight from '../Layout/Highlight.vue'
import CTAButton from '../Layout/CTAButton.vue'

import ticaThumbnail from '/src/assets/thumbnails/TicaThumbnail.png'
import excellThumbnail from '/src/assets/thumbnails/ExcellThumbnail.png'
import niicheThumbnail from '/src/assets/thumbnails/NiicheThumbnail.png'
import ootuThumbnail from '/src/assets/thumbnails/OrderoftheUndeadThumbnail.png'

const caseStudies = reactive([
  {
    caseStudyId: 0,
    imageUrl: ootuThumbnail,
    imageAlt: "I'm Gonna Be Evil - Visual Novel Thumbnail",
    name: "I'm Gonna Be Evil - Visual Novel",
    length: 'December 2025 - January 2026',
    readTime: '• 15 min read',
    desc: 'A visual novel project is to be released soon on Steam. I am given a huge opportunity to work on a new visual novel by the same game developer studio whom I had already worked with in the past. This particular game is optimized for Steam Deck and has given me a new challenge to design for multiple platforms outside my domain.',
  },
  {
    caseStudyId: 1,
    imageUrl: ootuThumbnail,
    imageAlt: 'Order of the Undead Project Thumbnail',
    name: 'Order of the Undead - Spooktober 7th Annual Visual Novel Jam',
    length: 'September 2025',
    readTime: '• 10 min read',
    desc: 'A visual novel project with Halloween themes competing against almost 200 entries. As a member of a truly passionate team, I was able to experience firsthand the incredible creative freedom of game development, as well as the important technical and design constraints that shape a project. This game was a labor of love, and a testament to what a dedicated team can achieve together.',
    icon: 'bi bi-trophy-fill',
    award: 'Overall 45th out of 250 entries, Visual Novel Jam 2025',
  },
  {
    caseStudyId: 2,
    imageUrl: niicheThumbnail,
    imageAlt: 'Niiche Project Thumbnail',
    name: 'Niiche Web Platorm',
    length: 'June 2025',
    readTime: '• 5 min read',
    desc: 'A web platform that is focused on connecting individuals around niche interests. A competition with predefined branding guidelines and  various tech professional that judges the work of each participant.',
    icon: 'bi bi-trophy-fill',
    award: 'Champion, ISKOnnovation: EUREKA 2025 UI Design Competition',
  },
  {
    caseStudyId: 3,
    imageUrl: excellThumbnail,
    imageAlt: 'Excell Project Thumbnail',
    name: 'Excell Energy and Powergen Corp (EEPC) - Website Revamp',
    length: 'March - June 2025',
    readTime: '• 10 min read',
    desc: 'A full website revamp for a B2B solar energy provider, completed over 3 months as an internship deliverable. This project was an intensive UI/UX journey that significantly pushed my skills and adaptability in a professional environment, proving to be my most challenging yet. My work aimed to fully enhance and modernize their digital presence and user experience.',
  },
  {
    caseStudyId: 4,
    imageUrl: ticaThumbnail,
    imageAlt: 'TICA Project Thumbnail',
    name: 'TICA: A Technological Innovation for Communication in Apraxia - A Mobile Application Utilizing AI-Driven Speech Therapy for Children with Apraxia',
    length: 'August 2024 - January 2025',
    readTime: '• 15 min read',
    desc: 'A mobile application developed over 6 months, offering AI-powered speech therapy for children with CAS. In my dual role, I directly contributed to delivering its user-friendly design and front-end, built with Python. Notably, this project also competed in a week-long hybrid innovation event open to all PUPSTC students.',
    icon: 'bi bi-trophy-fill',
    award: '3rd Place, ISKOnnovation: The GDSC Ideathon 2024',
  },
])

const headingContents = reactive([
  {
    title:
      "Unsure where your design should go? Don't stress the start. I build UI/UX that works today & scales tomorrow.",
    highlight: 'Available For Work',
    cta: 'Build & Scale Now',
  },
])

const highlightContents = reactive([
  {
    primaryText: 'Available for work',
  },
])

const ctaContents = reactive([
  {
    label: "Let's Connect",
  },
])
</script>
