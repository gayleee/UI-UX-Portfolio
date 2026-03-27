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

<style>
.cta {
  display: inline-block;
  color: #fff;
  padding: 16px 26px;
  font-size: 24px;
  font-weight: 600;
  background-color: var(--accent-color);
  border-radius: 8px;
  box-shadow: 0px 8px 24px rgba(168, 42, 4, 0.2);
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  border: none;
}
.cta:hover,
.cta.router-link-active:hover,
.cta.router-link-exact-active:hover {
  color: #fff;
  background-color: #8b2303;
  transform: translateY(-3px);
  box-shadow: 0px 12px 28px rgba(168, 42, 4, 0.3);
}

.cta:active,
.cta.router-link-active:active {
  transform: translateY(0);
  filter: brightness(0.9);
}
</style>
