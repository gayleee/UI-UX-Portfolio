<template>
  <div class="container my-5">
    <div class="row g-4">
      <!-- Featured Card -->
      <div class="col-md-8">
        <div
          class="bento-card rounded-4 bg-primary text-white p-4 h-400 d-flex align-items-center justify-content-center"
        >
          <h3>Featured Content</h3>
        </div>
      </div>

      <!-- Sidebar Cards -->
      <div class="col-md-4">
        <div class="row g-4">
          <div class="col-12">
            <div
              class="bento-card rounded-4 bg-success text-white p-4 h-200 d-flex align-items-center justify-content-center"
            >
              <h4>Card 1</h4>
            </div>
          </div>
          <div class="col-12">
            <div
              class="bento-card rounded-4 bg-info text-white p-4 h-200 d-flex align-items-center justify-content-center"
            >
              <h4>Card 2</h4>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Row Cards -->
      <div class="col-md-4">
        <div
          class="bento-card rounded-4 bg-warning text-dark p-4 h-200 d-flex align-items-center justify-content-center"
        >
          <h4>Card 3</h4>
        </div>
      </div>
      <div class="col-md-4">
        <div
          class="bento-card rounded-4 bg-danger text-white p-4 h-200 d-flex align-items-center justify-content-center"
        >
          <h4>Card 4</h4>
        </div>
      </div>
      <div class="col-md-4">
        <div
          class="bento-card rounded-4 bg-secondary text-white p-4 h-200 d-flex align-items-center justify-content-center"
        >
          <h4>Card 5</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
})
</script>

<style>
.bento-card {
  height: 100%;
  transition: transform 0.3s;
}

.bento-card:hover {
  transform: scale(1.02);
}

.h-200 {
  height: 200px;
}

.h-400 {
  height: 400px;
}
</style>
