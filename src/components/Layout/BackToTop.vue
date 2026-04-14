<template>
  <div>
    <Transition>
      <a href="#" type="button" class="btn totop" v-if="isVisible" aria-label="Scroll to top">
        <arrowupIcon />
      </a>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import arrowupIcon from '../icons/arrowupIcon.vue'

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
  transition: opacity 0.3s ease;
}

.v-leave-to,
.v-enter-from {
  opacity: 0;
}

.btn {
  color: var(--white);
  border-radius: var(--border-radius-4);
  background-color: var(--container-primary);
  border: none;
  position: fixed;
  bottom: 20px;
  right: 32px;
  z-index: 99;
}

.btn:hover {
  background-color: var(--container-primary-hover);
}

.btn:focus,
.btn:active:focus {
  box-shadow: none;
  outline: 0;
}

.btn:active,
.btn.active {
  background-color: var(--container-primary-hover);
  border-color: var(--container-primary-hover);
  color: var(--white);
}

.btn-custom-orange:focus {
  box-shadow: 0 0 0 0.25rem color-mix(in srgb, var(--color-orange-light-900), transparent 50%);
}
</style>
