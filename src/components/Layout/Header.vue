<template>
  <div class="row">
    <div class="col-12">
      <div class="d-flex align-items-center justify-content-center">
        <h1 class="heading">{{ heading }}</h1>
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

<style>
.heading {
  font-size: clamp(2rem, 5vw, 3rem);
  min-height: 3.5rem;
}
</style>
