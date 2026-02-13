<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup>
import NavBar from './components/Layout/NavBar.vue'
import Header from './components/Layout/Header.vue'
import Footer from './components/Layout/Footer.vue'
import { ref, reactive, provide } from 'vue'
</script>
