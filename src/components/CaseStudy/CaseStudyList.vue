<template>
  <div class="container">
    <div class="row my-4 px-5 entry">
      <div class="col-12">
        <div class="d-flex flex-column flex-lg-row gap-4">
          <div>
            <router-link
              :to="{ name: 'CaseStudy', params: { caseStudyId: caseStudy.caseStudyId } }"
            >
              <img
                :src="caseStudy.imageUrl"
                :alt="caseStudy.imageAlt"
                loading="lazy"
                class="rounded-4"
              />
            </router-link>
          </div>
          <div>
            <div>
              <router-link
                :to="{ name: 'CaseStudy', params: { caseStudyId: caseStudy.caseStudyId } }"
              >
                <span class="fs-5 fw-semibold title">
                  {{ caseStudy.name }}
                </span>
              </router-link>
            </div>
            <div>
              <small>
                <span class="length">{{ caseStudy.length }}</span>
                <span class="readtime">{{ caseStudy.readTime }}</span>
              </small>
            </div>
            <div class="desc">
              <p>
                {{ caseStudy.desc }}
              </p>
            </div>
            <div class="award">
              <div class="d-flex gap-2">
                <i :class="caseStudy.icon" style="color: #666"></i>
                <p class="fw-semibold award-text">{{ caseStudy.award }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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

@media only screen and (max-width: 600px) {
  .entry,
  .award {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
</style>
