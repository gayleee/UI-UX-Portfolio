<template>
  <div class="row my-5 entry">
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
            <span class="fs-5 fw-semibold title">{{ caseStudy.name }}</span>
          </router-link>

          <p class="text-muted mb-2">
            <small>
              <span class="length me-2">{{ caseStudy.length }}</span>
              <span class="readtime">{{ caseStudy.readTime }}</span>
            </small>
          </p>

          <p class="desc mb-3">{{ caseStudy.desc }}</p>

          <div class="d-flex flex-wrap gap-2 tags">
            <div v-for="(item, index) in caseStudy.tag" :key="index">
              <Tag :label="item.name" :category="item.category" />
            </div>
          </div>

          <div v-if="caseStudy.award" class="award mt-3 d-flex gap-2 align-items-center">
            <i :class="caseStudy.icon" style="color: #666"></i>
            <span class="fw-semibold award-text small">{{ caseStudy.award }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tag from '../Layout/Tag.vue'

const props = defineProps({
  caseStudy: {
    type: Object,
    required: true,
  },
})
</script>

<style>
a {
  text-decoration: none;
  color: #000;
  transition: ease-in-out 0.3s;
}
a:hover {
  color: #271b79;
}
p {
  color: #2b2b2b;
}
.entry img {
  min-width: 520px;
  height: 272px;
}
.readtime {
  color: #402dcc;
}
.award-text {
  color: #666;
}
.video-container {
  flex: 0 0 auto;
  width: 100%;
  max-width: 520px;
  aspect-ratio: 520 / 272;
  overflow: hidden;
  border-radius: 8px;
  display: block;
}
.thumbnail-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media only screen and (max-width: 600px) {
  .entry,
  .award {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
}
</style>
