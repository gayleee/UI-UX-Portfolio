<template>
  <router-link to="/" class="btn">Back to Home</router-link>
</template>

<style scoped>
.btn {
  display: inline-block;
  align-self: center;
  color: var(--secondary-text);
  padding: 16px 26px;
  font-size: 24px;
  font-weight: 400;
  background-color: var(--secondary-color);
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  border: 1px solid var(--secondary-border);
}
.btn:hover,
.btn.router-link-active:hover,
.btn.router-link-exact-active:hover {
  color: var(--secondary-text);
  background-color: var(--secondary-color);
  border: 1px solid var(--secondary-border);
  transform: translateY(-3px);
}

.btn:active,
.btn.router-link-active:active {
  background-color: var(--secondary-color);
  border: 1px solid var(--secondary-border);
  transform: translateY(0);
  filter: brightness(0.9);
}
</style>
