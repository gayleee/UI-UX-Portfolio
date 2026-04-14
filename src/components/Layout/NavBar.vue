<template>
  <header class="navbar navbar-expand-lg bg-body-tertiary fixed-top p-4">
    <div class="container-fluid">
      <router-link class="navbar-brand d-flex align-items-center justiy-content-center" to="/"
        ><img src="/src/assets/icon.svg" alt="icon" class="me-2" /><span class="text-body"
          >Cath_UI/UX</span
        ></router-link
      >

      <button
        class="navbar-toggler border border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <span class="offcanvas-title text-subtitle" id="offcanvasNavbarLabel">Explore More</span>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end align-items-center flex-grow-1 gap-4 pe-4">
            <li class="nav-item">
              <router-link class="nav-link" to="/" aria-current="page">Work</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <!--Toggle Theme-->
            <li class="nav-item">
              <div class="d-flex align-items-center">
                <Toggle-theme></Toggle-theme>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import ToggleTheme from './ToggleTheme.vue'
</script>

<style scoped>
.navbar-brand img {
  width: var(--icon-md);
  height: var(--icon-md);
}

.nav-link {
  color: var(--text-primary);
}

.nav-link:hover,
.navbar-nav .nav-link.router-link-exact-active {
  color: var(--text-accent);
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
