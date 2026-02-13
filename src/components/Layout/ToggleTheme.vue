<template>
  <span class="pe-2">{{ isDark ? 'Dark' : 'Light' }}</span>
  <div class="form-check form-switch" @click="toggleTheme">
    <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
  </div>
</template>

<script setup>
import { useTheme } from '@/Composable/theme'
const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.form-switch .form-check-input:checked {
  background-color: #402dcc;
  border-color: #402dcc;
}
</style>
