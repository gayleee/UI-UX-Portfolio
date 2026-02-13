<template>
  <div class="d-flex justify-content-center m-5">
    <a href="#" type="button" class="btn btn-primary btn-lg border-0 cta">{{ cta.label }}</a>
  </div>
</template>
<script setup>
const props = defineProps({
  cta: {
    type: String,
    required: false,
  },
})
</script>

<style>
.cta {
  background-color: #402dcc;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.16);
  transition: ease-in-out 0.3s;
}
.cta:hover {
  background-color: #271b79;
}
</style>
