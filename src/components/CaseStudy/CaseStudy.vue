<template>
  <div v-if="study">
    <Header :heading="study.heading.title"></Header>
    <Highlight></Highlight>
    <Introduction></Introduction>
    <Bento></Bento>
    <CTAButton></CTAButton>
    <Role></Role>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { reactive, computed } from 'vue'

import Header from '../Layout/Header.vue'
import Bento from '../Layout/Bento.vue'
import Highlight from '../Layout/Highlight.vue'
import Introduction from '../Layout/Introduction.vue'
import CTAButton from '../Layout/CTAButton.vue'
import Role from '../Layout/Role.vue'

import screenshot1 from '/src/assets/ootuScreenshots/Zak_screen.png'
import screenshot2 from '/src/assets/ootuScreenshots/Gale_screen.png'
import screenshot3 from '/src/assets/ootuScreenshots/Viktor_screen.png'

const route = useRoute()
const id = route.params.caseStudyId

// const study = computed(() => {
//   return caseStudies.find((p) => p.caseStudyId === route.params.caseStudyId)
// })

console.log(route.params)
</script>
