<template>
  <section class="container content">
    <div class="row g-0">
      <div class="col-12">
        <div>
          <div class="d-flex">
            <span class="mb-4 text-subtitle">{{ contents.name }}</span>
          </div>
          <span
            class="mt-4 text-body-lg"
            style="font-weight: var(--weight-medium); font-size: var(--text-subtitle)"
            >{{ contents.contentTitle }}</span
          >
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
            <a
              role="button"
              data-bs-toggle="modal"
              :data-bs-target="'#modal-' + sectionIndex + '-' + i"
            >
              <img
                :src="img.contentUrl"
                :alt="img.contentAlt"
                class="img-fluid shadow-sm figure-img"
                loading="lazy"
              />
            </a>

            <div
              class="modal fade"
              :id="'modal-' + sectionIndex + '-' + i"
              tabindex="-1"
              aria-hidden="true"
              data-bs-focus="false"
              data-bs-backdrop="true"
              data-bs-keyboard="true"
            >
              <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                  <div class="modal-header border-bottom-0">
                    <span class="modal-title text-subtitle">{{ contents.contentTitle }}</span>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div class="modal-body text-center p-0">
                    <img :src="img.contentUrl" class="img-fluid" :alt="img.contentAlt" />
                  </div>
                  <div class="modal-footer border-top-0">
                    <button type="button" class="btn text-light" data-bs-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
</script>

<style scoped>
.content {
  padding: 0;
  margin: 48px auto;
  max-width: 1000px;
}

.btn {
  background-color: var(--container-primary);
  border: none;
}
.btn:hover {
  background-color: var(--container-primary-hover);
}
.btn:focus,
.btn:active:focus,
.btn-primary:focus {
  box-shadow: none;
  outline: 0;
}

.btn:active,
.btn.active,
.show > .btn-primary.dropdown-toggle {
  background-color: var(--container-primary-hover);
  border-color: var(--outline-primary);
  color: var(--white);
}

.btn-custom-orange:focus {
  box-shadow: 0 0 0 0.25rem color-mix(in srgb, var(--color-orange-light-900), transparent 50%);
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
