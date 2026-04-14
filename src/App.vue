<template>
  <NavBar></NavBar>
  <!-- <router-view></router-view> -->
  <!-- <router-view :key="$route.path"></router-view> -->
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component
        :is="Component"
        :key="route.name === 'CaseStudy' ? route.fullPath : 'static-key'"
      />
    </transition>
  </router-view>
  <Footer></Footer>
  <BackToTop></BackToTop>
</template>

<script setup>
import NavBar from './components/Layout/NavBar.vue'
import BackToTop from './components/Layout/BackToTop.vue'
import Footer from './components/Layout/Footer.vue'
// import { useRoute } from 'vue-router'
// import { ref, reactive, provide } from 'vue'
// const route = useRoute()
</script>
