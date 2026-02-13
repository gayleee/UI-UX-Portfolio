<template>
  <div class="container">
    <div class="row">
      <div class="my-5 py-5">
        <!--Heading-->
        <div v-for="headingContent in headingContents" :key="headingContent.title">
          <Header :heading="headingContent"></Header>
        </div>
        <!--Desc-->
        <div v-for="introContent in introContents" :key="introContent.firstParagraph">
          <Introduction :intro="introContent"></Introduction>
        </div>
        <!--Contact Number-->
        <div>
          <h4 class="text-secondary text-center">+639-XXXX-XXXXX</h4>
        </div>
        <!--CTA Button-->
        <div v-for="ctaContent in ctaContents" :key="ctaContent.label">
          <CTAButton @click="copyNumber" :cta="ctaContent"></CTAButton>
        </div>
        <!--Toast-->
        <div class="container">
          <div class="row">
            <div class="col d-flex justify-content-center align-items-center mt-4">
              <div class="toast-container text-center rounded-2">
                <div
                  id="copyToast"
                  class="toast align-items-center text-success bg-success bg-opacity-25 border border-success"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div class="toast-body d-flex align-items-center p-1">
                    <i class="bi bi-check text-success ms-4" style="font-size: 32px"></i>
                    <span class="me-auto text-success">Copied to Clipboard.</span>
                    <button
                      type="button"
                      class="btn-close ms-4 me-2"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import Header from '../Layout/Header.vue'
import Introduction from '../Layout/Introduction.vue'
import CTAButton from '../Layout/CTAButton.vue'

const copyNumber = () => {
  const realNumber = '+63 9XX XXX XXXX'

  navigator.clipboard.writeText(realNumber).then(() => {
    const toastElement = document.getElementById('copyToast')

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement)

    toastBootstrap.show()
  })
}

const headingContents = reactive([
  {
    title: "Let's Work Together",
  },
])

const introContents = reactive([
  {
    firstParagraph:
      "Ready to launch or rebuild your digital presence? Let's discuss today. Below are my main contact channels, but you may also start a conversation through here:",
  },
])

const ctaContents = reactive([
  {
    label: 'Copy Contact Number',
  },
])
</script>
