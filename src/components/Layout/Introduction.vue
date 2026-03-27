<template>
  <p class="text-center">
    {{ intro }}
  </p>
</template>

<script setup>
const props = defineProps({
  intro: {
    type: String,
    required: true,
  },
})
</script>
