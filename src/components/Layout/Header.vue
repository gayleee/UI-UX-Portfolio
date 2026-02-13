<template>
  <div class="row">
    <div class="col-12">
      <div class="d-flex justify-content-center mt-4">
        <span class="display-5 fw-normal heading">{{ heading.title }}</span>
      </div>

      <div>
        <Highlight></Highlight>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  heading: {
    type: Object,
    required: true,
  },
})
</script>

<style>
p {
  white-space: pre-wrap;
}
.heading {
  text-align: center;
  font-family: 'Unbounded', sans-serif;
  font-optical-sizing: auto;
}
</style>
