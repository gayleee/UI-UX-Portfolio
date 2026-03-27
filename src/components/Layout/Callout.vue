<template>
  <div class="container d-flex justify-content-center mt-2">
    <div class="callout-container">
      <div class="callout d-flex align-items-start gap-2">
        <ExclamationfillIcon class="flex-shrink-0 mt-1" />
        <span class="callout-text">{{ callout }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExclamationfillIcon from '../icons/exclamationfillIcon.vue'

const props = defineProps({
  callout: String,
})
</script>

<style scoped>
.callout-container {
  width: 100%;
  max-width: 1000px;
}

.callout {
  color: var(--accent-color);
  background-color: rgba(175, 87, 10, 0.1);
  border: 1px solid var(--accent-color);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.callout-text {
  font-size: 0.95rem;
  line-height: 1.5;
  font-weight: 500;
}

@media (max-width: 414px) {
  .callout {
    padding: 1rem;
    font-size: 0.85rem;
  }
}
</style>
