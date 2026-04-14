<template>
  <div class="row">
    <div class="col-12">
      <div class="d-flex align-items-center justify-content-center">
        <h1>{{ heading }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  heading: {
    type: String,
  },
})
</script>
