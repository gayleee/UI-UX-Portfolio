<template>
  <div class="d-flex justify-content-center">
    <a
      v-if="url && isExternal"
      :href="url"
      type="button"
      target="_blank"
      rel="noopener"
      class="cta"
      >{{ cta.label }}</a
    >

    <button v-else-if="!url" type="button" class="cta btn-action" @click="$emit('action')">
      {{ cta.label }}
    </button>

    <router-link v-else :to="url" class="cta">{{ cta.label }}</router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  cta: { type: Object, required: true },
  url: { type: String, default: null },
  isExternal: { type: Boolean, default: false },
})
</script>

<style scoped>
.cta {
  display: inline-block;
  color: var(--white);
  padding: var(--space-md) var(--space-lg);
  font-size: var(--text-subtitle);
  font-weight: var(--weight-semibold);
  background-color: var(--container-primary);
  border-radius: var(--border-radius-4);
  box-shadow: 0px 8px 24px color-mix(in srgb, var(--color-orange-light-900), transparent 50%);
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  border: none;
}
.cta:hover,
.cta.router-link-active:hover,
.cta.router-link-exact-active:hover {
  color: var(--white);
  background-color: var(--container-primary-hover);
  transform: translateY(-4px);
  box-shadow: 0px 12px 28px color-mix(in srgb, var(--color-orange-dark-900), transparent 50%);
}

.cta:active,
.cta.router-link-active:active {
  transform: translateY(0);
  filter: brightness(0.9);
}
</style>
