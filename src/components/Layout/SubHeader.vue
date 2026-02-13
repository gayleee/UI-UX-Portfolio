<template>
  <div class="row">
    <div class="col-12">
      <div class="d-flex justify-content-center mt-5 mb-4">
        <h4 class="fw-normal subheading">{{ subheading.title }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  subheading: {
    type: Object,
    required: true,
  },
})
</script>

<style>
p {
  white-space: pre-wrap;
}
.subheading {
  text-align: center;
  font-family: 'Unbounded', sans-serif;
  font-optical-sizing: auto;
  color: #fff;
}
</style>
