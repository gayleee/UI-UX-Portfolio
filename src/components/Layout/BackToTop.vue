<template>
  <Transition>
    <a href="#" type="button" class="btn totop" v-if="isVisible" aria-label="Scroll to top">
      <i class="bi bi-arrow-up"></i>
    </a>
  </Transition>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isVisible = ref(false)

const handleScroll = () => {
  if (window.pageYOffset > 200) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener = ('scroll', handleScroll)
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-leave-to,
.v-enter-from {
  opacity: 0;
}

.btn {
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  position: fixed;
  bottom: 20px;
  right: 32px;
  z-index: 99;
}

.btn:hover {
  background-color: #8b2303;
}

.btn:focus,
.btn:active:focus {
  box-shadow: none;
  outline: 0;
}

.btn:hover {
  background-color: #701b02;
}

.btn:active,
.btn.active {
  background-color: #d14d06;
  border-color: #d14d06;
  color: #fff;
}

.btn-custom-orange:focus {
  box-shadow: 0 0 0 0.25rem rgba(239, 89, 8, 0.25);
}
</style>
