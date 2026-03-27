<template>
  <div v-if="category">
    <div class="tag" :class="category">
      <span>{{ label }}</span>
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

<style>
.tag {
  font-size: 14px;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 4px;
  width: fit-content;
  transition: ease-in-out 0.3s;
}
.tag.platform {
  color: var(--secondary-text);
  background-color: var(--secondary-color);
  border: 1px solid var(--secondary-border);
}
.tag.niche {
  color: var(--secondary-text);
  background-color: var(--secondary-color);
  border: 1px solid var(--secondary-border);
}
.tag.tools {
  color: var(--secondary-text);
  background-color: var(--secondary-color);
  border: 1px solid var(--secondary-border);
}
</style>
