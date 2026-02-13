<template>
  <nav class="navbar navbar-expand-lg p-3">
    <div class="container-fluid">
      <router-link class="navbar-brand d-flex align-items-center justiy-content-center" to="/"
        ><img src="/src/assets/icon.svg" alt="icon" class="me-2" />cath_ui/ux</router-link
      >
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
          <li class="nav-item px-4">
            <router-link class="nav-link" aria-current="page" to="/">Work</router-link>
          </li>
          <li class="nav-item px-4">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item px-4">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item px-4 d-flex"><Toggle-theme></Toggle-theme></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import ToggleTheme from './ToggleTheme.vue'
</script>

<style scoped>
.navbar {
  box-shadow: 0px 8px 160px #a8aced;
}
.navbar-brand img {
  width: 24px;
  height: 24px;
}
.form-switch .form-check-input:checked {
  background-color: #402dcc;
  border-color: #402dcc;
}
@media only screen and (max-width: 600px) {
  .navbar-brand {
    display: none;
  }
  .navbar {
    align-items: center;
    justify-content: center;
    display: flex;
  }
}
</style>
