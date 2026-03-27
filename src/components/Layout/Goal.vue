<template>
  <div class="check-card-wrapper d-flex align-items-stretch mb-4">
    <div class="check-box d-flex align-items-center justify-content-center">
      <checkcirclefillIcon />
    </div>

    <div class="content-card flex-grow-1">
      <span class="card-heading mb-2">{{ goal.heading }}</span>
      <p v-if="goal.desc">{{ goal.desc }}</p>
    </div>
  </div>
</template>

<script setup>
import checkcirclefillIcon from '../icons/checkcirclefillIcon.vue'

const props = defineProps({
  goal: Object,
})
</script>

<style>
.card-heading {
  color: var(--accent-color);
  font-size: 1.125rem;
  font-weight: 600;
}

.check-box {
  flex: 0 0 5rem;
  width: 5rem;
  background-color: var(--accent-color);
  color: #fff;
  border-radius: 8px 0 0 8px;
  /* opacity: 0;
  visibility: hidden; */
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease,
    transform 0.3s ease;
  transform: translateX(10px);
}

.content-card {
  background-color: var(--secondary-color);
  color: var(--secondary-text);
  border: 1px solid var(--secondary-border);
  border-left: none;
  border-radius: 0 4px 4px 0;
  padding: 24px;
  height: auto;
}

.check-card-wrapper:hover .check-box {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}
@keyframes rightToLeftFade {
  0% {
    opacity: 0;
    transform: translate(20px, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(0, -50%);
  }
}
</style>
