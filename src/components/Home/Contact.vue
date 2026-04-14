<template>
  <main>
    <div class="wrapper d-flex align-items-center justify-content-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-11 col-md-8 col-lg-6 text-center d-flex flex-column align-items-center">
            <h1 class="mb-4 text-headline">Let's Work Together</h1>

            <div class="d-flex flex-column gap-2 my-4">
              <div v-for="card in cardContents" :key="card.heading">
                <Card :card="card" />
              </div>
            </div>

            <p class="my-4">
              Let's build a project together—you may also reach out to me through the contact above.
            </p>

            <div v-for="ctaContent in ctaContents" :key="ctaContent.label" class="my-4">
              <CTAButton @action="copyEmail" :cta="ctaContent" />
            </div>

            <div class="toast-container position-static mt-4">
              <div
                id="copyToast"
                class="toast align-items-center text-success bg-success bg-opacity-10 border border-success border-opacity-50"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                style="margin: 0 auto"
              >
                <div class="toast-body d-flex align-items-center p-2">
                  <checkcirclefillIcon class="me-2" />
                  <span class="me-auto fs-6">Copied to Clipboard.</span>
                  <button type="button" class="btn-close ms-3" data-bs-dismiss="toast"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import { Toast } from 'bootstrap'

import CTAButton from '../Layout/CTAButton.vue'
import Card from '../Layout/Card.vue'
import checkcirclefillIcon from '../icons/checkcirclefillIcon.vue'

const copyEmail = () => {
  const realEmail = `torrescathgaile88@gmail.com`

  navigator.clipboard.writeText(realEmail).then(() => {
    const toastElement = document.getElementById('copyToast')

    const toastBootstrap = Toast.getOrCreateInstance(toastElement)
    toastBootstrap.show()
  })
}

const ctaContents = reactive([
  {
    label: 'Copy Email Address',
    url: ``,
    link: false,
  },
])

const cardContents = reactive([
  {
    heading: 't*****c***g****8*@gmail.com',
    award: false,
    workshop: false,
    contact: true,
  },
])
</script>

<style scoped>
.contact-desc {
  margin-left: auto;
  margin-right: auto;
}
.custom-toast {
  background-color: var(--container-primary);
  backdrop-filter: blur(10px);
  border: 1px solid var(--outline-primary);
  box-shadow: 0 10px 30px var(--nuetral-900);
  border-radius: var(--radius-sm);
  color: var(--text-success);
}
.toast.bg-success-subtle {
  background-color: var(--container-success);
  border: 1px solid var(--outline-success);
}
.wrapper {
  padding-top: 100px;
  padding-bottom: 60px;
  min-height: 100vh;
  background-color: var(--surface-primary);
}

@media (max-width: 768px) {
  .wrapper {
    padding-top: 120px;
    min-height: 90vh;
  }

  h1 {
    font-size: 2.5rem;
  }
}
</style>
