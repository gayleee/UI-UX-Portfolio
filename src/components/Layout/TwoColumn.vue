<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-lg-6 mb-4">
        <div
          class="bento-card rounded-4 bg-success text-white p-4 h-400 d-flex align-items-center justify-content-center"
        >
          <h4>Card 1</h4>
        </div>
      </div>
      <div class="col-lg-6 mb-4">
        <!--Heading-->
        <h5 class="text-light mb-4">Every Road Leads to Design</h5>
        <p class="text-light">
          My design philosophy is fueled not only by curiosity but with the grand purpose of
          broadening my perspective. While building and repairing my own hardware might seem
          disconnected from UI/UX, it has been a masterclass in User Empathy. It forced me to
          consider the 'broken arrow key' scenario: how do we ensure a game remains accessible when
          the user's hardware fails? My answer is to provide redundant options that respect the
          user’s constraints. <br />
          <br />
          By exploring art, animation, and many more, I’ve learned to design with a consideration
          not just the person behind the screen, but the engineers and artists working alongside me
          to bring the vision to life.
          <br />
          <br />
          You may also explore my designs outside UI/UX below:
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubHeader from './Header.vue'
import { reactive } from 'vue'

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
})
</script>
