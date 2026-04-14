<template>
  <main>
    <section class="container hero min-vh-100 d-flex flex-column justify-content-center">
      <div class="row g-0">
        <div class="col-12">
          <div v-if="currentStudy" class="py-5">
            <Header :heading="currentStudy.name" class="mt-4 text-center" />

            <Highlight
              :highlight="currentStudy.highlightData"
              :theme="currentStudy.highlightData.theme"
            />
            <Introduction :intro="currentStudy.desc" />
            <IntroImage :introImage="currentStudy.introData" />

            <div
              class="d-flex flex-wrap flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5"
            >
              <SecondaryButton />
              <CTAButton
                v-if="!currentStudy.calloutData.isNDA"
                :cta="currentStudy.ctaData"
                :url="currentStudy.url"
                :isExternal="currentStudy.link"
              />
              <Callout v-else :callout="currentStudy.calloutData.ndaMessage" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid section-inverted py-5">
      <div class="row g-0">
        <div class="col-12 d-flex flex-column align-items-center">
          <span class="text-light mb-4 text-subtitle">My Role</span>

          <Highlight
            :highlight="currentStudy.roleData"
            :theme="currentStudy.roleData.theme"
            class="w-100"
          />
          <p class="text-light text-center px-3">{{ currentStudy.roleDesc }}</p>
        </div>
      </div>
    </section>

    <Content
      v-for="(item, index) in currentStudy.contents"
      :key="index"
      :contents="item"
      :section-index="index"
    />

    <section class="container section-wrapper">
      <span class="text-subtitle">Learnings and Reflections</span>
      <div v-for="(item, index) in currentStudy.cards" :key="index">
        <Card :card="item" class="my-4" />
      </div>
    </section>

    <div class="container section-wrapper">
      <Pagination />
    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { studies } from '@/data/studies'

import Header from '../Layout/Header.vue'
import Highlight from '../Layout/Highlight.vue'
import Introduction from '../Layout/Introduction.vue'
import CTAButton from '../Layout/CTAButton.vue'
import Content from '../Layout/Content.vue'
import IntroImage from '../Layout/IntroImage.vue'
import Callout from '../Layout/Callout.vue'
import SecondaryButton from '../Layout/SecondaryButton.vue'
import Card from '../Layout/Card.vue'
import Pagination from '../Layout/Pagination.vue'

const route = useRoute()

const studySlug = route.params.slug

const currentStudy = studies.find((s) => s.slug === studySlug)

// console.log(route.params)
// console.log(currentStudy.roleData.theme)
</script>

<style scoped>
.section-inverted p {
  padding: 0;
  /* margin: 48px auto; */
  max-width: 1000px;
}
.section-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

@media only screen and (max-width: 600px) {
  section.section-inverted {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }
}
</style>
