import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notification', () => {
  const error = ref<string | null>(null)
  const success = ref<string | null>(null)
  const info = ref<string | null>(null)

  function setError(message: string) {
    error.value = message
    // Auto-effacement après 5 secondes
    setTimeout(() => {
      error.value = null
    }, 5000)
  }

  function setSuccess(message: string) {
    success.value = message
    setTimeout(() => {
      success.value = null
    }, 5000)
  }

  function setInfo(message: string) {
    info.value = message
    setTimeout(() => {
      info.value = null
    }, 5000)
  }

  function clearAll() {
    error.value = null
    success.value = null
    info.value = null
  }

  return {
    error,
    success,
    info,
    setError,
    setSuccess,
    setInfo,
    clearAll,
  }
})
