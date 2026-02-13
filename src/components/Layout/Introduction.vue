<template>
  <div class="mx-5 px-5 mt-4">
    <p class="text-center">
      <span>{{ intro.firstParagraph }}</span>
      <br /><br />
      <span>{{ intro.secondParagraph }}</span>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  intro: {
    type: Object,
    required: false,
  },
})
</script>
