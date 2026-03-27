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
.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.secondaryText,
.primaryText {
  white-space: normal;
  max-width: 100%;
}

.lightOrange .primaryText {
  color: var(--lighter-accent);
  font-size: 18px;
  text-align: center;
}
.lightOrange .secondaryText {
  color: #fff;
  font-size: 18px;
  text-align: center;
}
.lightOrange .circle {
  background-color: var(--lighter-accent);
}

.orange .primaryText {
  color: var(--accent-color);
  font-size: 18px;
  text-align: center;
}
.orange .circle {
  background-color: var(--accent-color);
}
</style>
