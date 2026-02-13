<template>
  <div class="d-flex justify-content-center align-items-center gap-2 my-4">
    <span class="fw-medium secondaryText">{{ highlight.secondaryText }}</span>
    <div :class="circleColor" class="circle"></div>
    <span :class="textColor" v-if="highlight.primaryText" class="greenPrimaryText">{{
      highlight.primaryText
    }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isHomePage = computed(() => route.path === '/')

const textColor = computed(() => {
  return isHomePage.value ? 'greenPrimaryText' : 'purplePrimaryText'
})

const circleColor = computed(() => {
  return isHomePage.value ? 'greenCircle' : 'purpleCircle'
})

const props = defineProps({
  highlight: {
    type: Object,
    required: false,
  },
})
</script>

<style>
.greenPrimaryText {
  color: #2ab075;
  font-size: 18px;
  font-weight: 500;
}
.purplePrimaryText {
  color: #402dcc;
  font-size: 18px;
  font-weight: 500;
}
.greenCircle {
  width: 8px;
  height: 8px;
  background-color: #2ab075;
  border-radius: 50%;
}
.purpleCircle {
  width: 8px;
  height: 8px;
  background-color: #402dcc;
  border-radius: 50%;
}
</style>
