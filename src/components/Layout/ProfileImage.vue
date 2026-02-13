<template>
  <div class="mt-5 pt-5 text-center">
    <router-link>
      <img :src="profile" alt="Profile Image" />
    </router-link>
  </div>
</template>

<script setup>
import profile from '/src/assets/profile.png'
</script>

<style>
img {
  width: 200px;
  height: 200px;
  border-radius: 16px;
}
</style>
