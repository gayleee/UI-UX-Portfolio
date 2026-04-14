<template>
  <div>
    <p class="text-center">
      {{ intro }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  intro: {
    type: String,
    required: true,
  },
})
</script>
