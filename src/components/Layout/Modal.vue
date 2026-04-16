<template>
  <Teleport to="#modal-root">
    <div v-if="show" class="modal-backdrop-custom" @click.self="$emit('close')">
      <div class="modal-content-custom">
        <div class="modal-header">
          <span>{{ modal.name }}</span>
          <button class="btn-close" @click="$emit('close')"></button>
        </div>

        <div class="modal-body text-center p-0">
          <img
            :src="modal.imageUrl"
            :alt="modal.imageAlt"
            class="w-100 h-100 modal-image"
            style="object-fit: contain"
          />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
  modal: Object,
  show: Boolean,
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

watch(
  () => props.show,
  (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
  { immediate: true },
)

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-backdrop-custom {
  position: fixed;
  inset: 0;
  z-index: 9999;
  overflow-y: auto;
  padding: var(--space-lg);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(from var(--black) r g b / 0.5);
  backdrop-filter: blur(8px);
}

.modal-content-custom {
  width: 100%;
  max-width: auto;
  margin: auto;
  /* margin: 0 auto; */
  background-color: var(--container-secondary);
  border-radius: var(--border-radius-4);
  display: flex;
  flex-direction: column;
  /* max-height: calc(100vh - 6rem); */
}

.modal-header {
  padding: 1rem;
}

.modal-image {
  max-width: 100%;
  max-height: 100vh;
  width: auto;
  height: auto;
  object-fit: contain;
}
</style>
