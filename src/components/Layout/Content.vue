<template>
  <section class="container content">
    <div class="row g-0">
      <div class="col-12">
        <div class="d-flex flex-column">
          <span class="mb-4 text-subtitle">{{ contents.name }}</span>

          <span class="text-body-lg">
            {{ contents.contentTitle }}
          </span>

          <p class="mt-2">
            {{ contents.contentDesc }}
          </p>
        </div>

        <div class="row g-4">
          <figure
            v-for="(img, i) in contents.contentImages"
            :key="i"
            :class="['col-12', contents.contentImages.length > 1 ? 'col-lg-6' : 'col-lg-12']"
          >
            <a role="button" @click="$emit('open', img)">
              <img
                :src="img.contentUrl"
                :alt="img.contentAlt"
                class="img-fluid shadow-sm figure-img"
                loading="lazy"
              />
            </a>

            <figcaption v-if="img.contentImgDesc" class="mt-2 text-label">
              <small>{{ img.contentImgDesc }}</small>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  contents: Object,
  sectionIndex: Number,
})

defineEmits(['open'])
</script>

<style scoped>
.content {
  padding: 0;
  margin: var(--space-2xl) auto;
  max-width: 1000px;
}

.content-img {
  width: 100%;
  object-fit: cover;
  max-height: 70vh;
}

.figure-img {
  border-radius: var(--border-radius-4);
}

@media only screen and (max-width: 600px) {
  .content {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
