<template>
  <section class="container content">
    <div class="row g-0">
      <div class="col-12">
        <div>
          <div class="d-flex">
            <h4>{{ contents.name }}</h4>
          </div>
          <h5 class="challengeTitle mt-4">{{ contents.contentTitle }}</h5>
          <p class="mt-2">
            {{ contents.contentDesc }}
            <strong v-if="contents.contentStrong">{{ contents.contentStrong }}</strong>
            {{ contents.contentDesc1 }}
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
                class="img-fluid rounded shadow-sm figure-img"
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
              <div class="modal-dialog modal-fullscreen modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5">{{ contents.contentTitle }}</h1>
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

            <figcaption v-if="img.contentImgDesc" class="mt-2">
              <small class="text-muted">{{ img.contentImgDesc }}</small>
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
  background-color: var(--accent-color);
  border: none;
}
.btn:hover {
  background-color: #8b2303;
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
  background-color: #d14d06;
  border-color: #d14d06;
  color: #fff;
}

.btn-custom-orange:focus {
  box-shadow: 0 0 0 0.25rem rgba(239, 89, 8, 0.25);
}

img {
  width: 100%;
  object-fit: cover;
  max-height: 70vh;
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
