<template>
  <div v-if="category">
    <div class="tag" :class="category">
      <span class="text-label">{{ label }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.tag {
  background-color: var(--container-secondary);
  border: 1px solid var(--outline-tertiary);
  color: var(--text-tertiary);
  font-size: var(--text-label);
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: var(--border-radius-4);
  backdrop-filter: var(--blur-subtle);
  -webkit-backdrop-filter: var(--blur-subtle);
  width: fit-content;
  cursor: default;
}
</style>
