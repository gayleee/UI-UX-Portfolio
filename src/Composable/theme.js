import { ref, watch } from 'vue'

const initialTheme = () => {
  const saved = localStorage.getItem('isSavedDark')
  return saved ? JSON.parse(saved) : false
}

const isDark = ref(initialTheme())
document.documentElement.setAttribute('data-bs-theme', isDark.value ? 'dark' : 'light')

watch(isDark, (val) => {
  localStorage.setItem('isSavedDark', JSON.stringify(val))
})

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.setAttribute('data-bs-theme', isDark.value ? 'dark' : 'light')
  }

  return { isDark, toggleTheme }
}
