<template>
  <section class="container content">
    <div class="row g-0">
      <div class="col-12">
        <h5 style="color: var(--text-accent)">{{ learning.heading }}</h5>
        <p>
          {{ learning.desc }}
        </p>
        <img :src="learning.contentUrl" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  learning: Object,
})
</script>

<style scoped>
.content {
  padding: 0;
  margin: 48px auto;
  max-width: 1000px;
}
</style>
