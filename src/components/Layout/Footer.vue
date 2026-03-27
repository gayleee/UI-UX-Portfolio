<template>
  <footer class="footer-container">
    <div class="container h-100 d-flex flex-column justify-content-between">
      <div class="footer-top">
        <div class="d-flex justify-content-center gap-5">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="LinkedIn"
          >
            <linkedinIcon class="icon-svg" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="X">
            <xtwitterIcon class="icon-svg" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="BlueSky"
          >
            <blueskyIcon class="icon-svg" />
          </a>
        </div>
      </div>

      <div class="footer-divider-wrapper">
        <hr class="footer-hr" />
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Cath_UI/UX Portfolio. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import linkedinIcon from '../icons/linkedinIcon.vue'
import xtwitterIcon from '../icons/xtwitterIcon.vue'
import blueskyIcon from '../icons/blueskyIcon.vue'

const props = defineProps({
  type: Object,
  required: true,
})
</script>
