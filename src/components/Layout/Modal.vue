<template>
  <div
    class="modal fade"
    :id="'modal-container-' + modal.id"
    tabindex="-1"
    aria-labelledby="modalTitle"
    aria-modal="true"
    role="dialog"
    data-bs-focus="false"
    data-bs-backdrop="true"
    data-bs-keyboard="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <span class="modal-title text-subtitle" id="modalTitle">{{ modal.name }}</span>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center p-0">
          <img
            :src="modal.imageUrl"
            :alt="modal.imageAlt"
            class="w-100 h-100"
            style="object-fit: contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modal: Object,
})
</script>
