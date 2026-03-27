<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <Footer></Footer>
  <BackToTop></BackToTop>
</template>

<script setup>
import NavBar from './components/Layout/NavBar.vue'
import BackToTop from './components/Layout/BackToTop.vue'
import Footer from './components/Layout/Footer.vue'
import { ref, reactive, provide } from 'vue'
</script>
