<template>
  <footer class="text-center m-5">
    <div class="d-flex justify-content-center gap-4">
      <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-envelope-fill"></i></a>
      <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
      <a href="https://x.com/cath_uiux" target="_blank" rel="noopener noreferrer"
        ><i class="bi bi-twitter-x"></i
      ></a>
      <a
        href="https://bsky.app/profile/cath-uiux.bsky.social"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="bi bi-bluesky"></i
      ></a>
    </div>
    <!--Divider-->
    <hr />
    <!--Copyright-->
    <div class="text-center p-3">
      <small>cath_ui-ux © 2026. All rights reserved.</small>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  type: Object,
  required: true,
})
</script>

<style>
hr {
  margin: 30px 0;
  height: 1px;
  border: none;
  background: linear-gradient(to right, transparent 0%, black 50%, transparent 100%);
}
</style>
