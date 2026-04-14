<template>
  <div class="row my-5 entry-container">
    <div class="col-12">
      <div class="d-flex flex-column flex-lg-row gap-4 mb-4">
        <router-link
          :to="{ name: 'CaseStudy', params: { slug: caseStudy.slug } }"
          class="video-container"
          :aria-label="'View full case study for ' + caseStudy.name"
        >
          <video
            :poster="caseStudy.thumbnailUrl"
            autoplay
            loop
            muted
            playsinline
            preload="none"
            class="thumbnail-video"
          >
            <source :src="caseStudy.animationWebm" type="video/webm" />
            <source :src="caseStudy.animationMp4" type="video/mp4" />
            <track kind="captions" src="/captions.vtt" srclang="en" label="English" />
          </video>
        </router-link>

        <div class="flex-grow-1">
          <router-link
            :to="{ name: 'CaseStudy', params: { slug: caseStudy.slug } }"
            class="d-block mb-1"
          >
            <span class="mb-2 study-name-text">{{ caseStudy.name }}</span>
          </router-link>

          <p class="mb-2">
            <small>
              <span class="me-2 study-length-text">{{ caseStudy.length }}</span>
              <span class="read-time-text">{{ caseStudy.readTime }}</span>
            </small>
          </p>

          <p class="mb-3 text-body">{{ caseStudy.desc }}</p>

          <div class="d-flex flex-wrap gap-2 tags-container">
            <div v-for="(item, index) in caseStudy.tag" :key="index">
              <Tag :label="item.name" :category="item.category" />
            </div>
          </div>

          <div v-if="caseStudy.award" class="mt-3 d-flex gap-2 align-items-center award-container">
            <trophyfillIcon style="color: var(--text-tertiary)" />
            <small class="award-text">{{ caseStudy.award }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import trophyfillIcon from '../icons/trophyfillIcon.vue'
import Tag from '../Layout/Tag.vue'

const props = defineProps({
  caseStudy: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.study-name-text {
  color: var(--text-primary);
  font-size: var(--text-body-lg);
  font-family: var(--font-body-lg);
  font-weight: var(--weight-bold);
  transition: 0.3s ease-in-out;
}

.study-name-text:hover {
  color: var(--text-accent);
}

.study-length-text {
  color: var(--text-secondary);
  font-size: var(--text-label);
  font-weight: var(--weight-normal);
  text-align: center;
}

.read-time-text {
  color: var(--text-accent);
  font-size: var(--text-label);
  font-weight: var(--weight-normal);
  text-align: center;
}

.award-text {
  color: var(--text-tertiary);
  font-size: var(--text-label);
  font-weight: var(--weight-semibold);
  text-align: center;
  margin: 0;
  line-height: 1.2;
}

.award-container svg {
  flex-shrink: 0;
}

.video-container {
  flex: 0 0 auto;
  width: 100%;
  max-width: 520px;
  aspect-ratio: 520 / 272;
  overflow: hidden;
  border-radius: var(--border-radius-4);
  display: block;
}
.thumbnail-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media only screen and (max-width: 990px) {
  .entry-container,
  .award-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .award-text {
    text-align: left;
  }

  .col-12 .d-flex.flex-column {
    align-items: center !important;
    text-align: center;
  }

  .video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .thumbnail-video {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
}
</style>
