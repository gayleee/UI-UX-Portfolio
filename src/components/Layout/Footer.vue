<template>
  <footer class="footer-container">
    <div class="container h-100 d-flex flex-column justify-content-between">
      <div class="footer-top">
        <div class="d-flex justify-content-center gap-5">
          <a
            href="www.linkedin.com/in/catherine-torres-60215a34a"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="LinkedIn"
          >
            <linkedinIcon class="icon-svg" />
          </a>
          <a
            href="https://x.com/cath_uiux"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="X"
          >
            <xtwitterIcon class="icon-svg" />
          </a>
          <a
            href="https://bsky.app/profile/cath-uiux.bsky.social"
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
        <p class="copyright-text">&copy; 2026 Cath_UI/UX Portfolio. All rights reserved.</p>
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

<style scoped>
.footer-container {
  min-height: 280px;
  padding: 80px 0 48px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.footer-top {
  margin-bottom: 48px;
}
.icon-svg {
  color: var(--text-tertiary);
  width: var(--icon-md);
  height: var(--icon-md);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.social-link:hover .icon-svg {
  color: var(--text-accent);
  transform: scale(1.2) translateY(-5px);
}
.footer-hr {
  width: 64px;
  margin: 0 auto;
  border-top: 2px solid var(--text-accent);
  opacity: 1;
}
.footer-bottom {
  margin-top: 48px;
}
.copyright-text {
  color: var(--text-tertiary);
  font-size: var(--text-label);
}
</style>
