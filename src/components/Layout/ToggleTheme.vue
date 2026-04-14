<template>
  <label for="switchCheckDefault"
    ><span class="pe-2">{{ isDark ? 'Dark' : 'Light' }}</span></label
  >
  <div class="form-check form-switch">
    <input
      v-model="isDark"
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="switchCheckDefault"
      @click="toggleTheme"
    />
  </div>
</template>

<script setup>
import { useTheme } from '@/Composable/theme'
const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.form-switch .form-check-input:checked {
  background-color: var(--color-orange-dark-500);
  border-color: var(--color-orange-dark-500);
}
</style>
