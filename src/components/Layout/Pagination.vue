<template>
  <div class="container my-5">
    <footer class="d-flex align-items-center justify-content-between">
      <button
        @click="prevStudy"
        :disabled="currentIndex === 0"
        class="d-flex border border-0 bg-transparent align-items-center gap-2"
      >
        <ChevronDoubleLeftIcon
          :style="{
            color:
              currentIndex === studies.length - 1 ? 'var(--text-muted)' : 'var(--text-primary)',
          }"
        />
        <span
          :style="{
            color:
              currentIndex === studies.length - 1 ? 'var(--text-muted)' : 'var(--text-primary)',
          }"
          >Previous</span
        >
      </button>

      {{ currentIndex + 1 }} / {{ studies.length }}

      <button
        @click="nextStudy"
        :disabled="currentIndex === studies.length - 1"
        class="d-flex border border-0 bg-transparent align-items-center gap-2"
      >
        <span
          :style="{
            color: currentIndex === studies.length - 1 ? 'var(--text-muted)' : 'var(--text-accent)',
          }"
          >Next</span
        >
        <ChevronDoubleRightIcon
          :style="{
            color: currentIndex === studies.length - 1 ? 'var(--text-muted)' : 'var(--text-accent)',
          }"
        />
      </button>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { studies } from '@/data/studies'
import ChevronDoubleLeftIcon from '../icons/chevrondoubleleftIcon.vue'
import ChevronDoubleRightIcon from '../icons/chevrondoublerightIcon.vue'

const route = useRoute()
const router = useRouter()

const currentIndex = ref(0)

const setIndexFromRoute = () => {
  const index = studies.findIndex((s) => s.slug === route.params.slug)
  if (index !== -1) {
    currentIndex.value = index
  }
}

onMounted(() => {
  setIndexFromRoute()
})

watch(
  () => route.params.slug,
  () => {
    setIndexFromRoute()
  },
)

const currentStudy = computed(() => studies[currentIndex.value])

const nextStudy = () => {
  if (currentIndex.value < studies.length - 1) {
    const nextSlug = studies[currentIndex.value + 1].slug
    router.push({ name: 'CaseStudy', params: { slug: nextSlug } })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const prevStudy = () => {
  if (currentIndex.value > 0) {
    const prevSlug = studies[currentIndex.value - 1].slug
    router.push({ name: 'CaseStudy', params: { slug: prevSlug } })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
