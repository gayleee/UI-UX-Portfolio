<template>
  <div
    class="highlight-container d-flex justify-content-center align-items-center flex-wrap gap-2 my-4"
    :class="highlight.theme"
  >
    <span class="secondaryText">{{ highlight.secondaryText }}</span>
    <div class="circle"></div>
    <span class="primaryText">{{ highlight.primaryText }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  highlight: {
    type: Object,
    default: () => ({
      primaryText: '',
      secondaryText: '',
      theme: 'green',
    }),
  },
})
</script>

<style scoped>
.secondaryText,
.primaryText {
  font-weight: var(--weight-semibold);
  white-space: normal;
  max-width: 100%;
}

.highlight-metadata .circle {
  background-color: var(--text-accent);
}

.highlight-metadata .primaryText {
  color: var(--text-accent);
  font-size: var(--text-body);
  text-align: center;
}

.highlight-metadata .secondaryText {
  color: var(--text-secondary);
  font-size: var(--text-body);
  text-align: center;
}

.highlight-role .circle {
  background-color: var(--text-accent-on-dark);
}

.highlight-role .primaryText {
  color: var(--text-accent-on-dark);
  font-size: var(--text-body);
  text-align: center;
}

.highlight-role .secondaryText {
  color: var(--white);
  font-size: var(--text-body);
  text-align: center;
}

.highlight-status .primaryText,
.highlight-status .secondaryText {
  color: var(--text-status);
  font-size: var(--text-body);
  text-align: center;
}

.highlight-status .circle {
  background-color: var(--text-status);
}
</style>
