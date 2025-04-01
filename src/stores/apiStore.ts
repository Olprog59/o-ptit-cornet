// stores/apiStore.ts
import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { ResponseData } from '../models/ResponseData'
import { useNotificationStore } from './notificationStore'

// Créer une instance axios avec configuration
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'xc-token': import.meta.env.VITE_API_TOKEN,
  },
})

export const useApiStore = defineStore('api', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchData<T>(
    table: string,
    viewId: string,
    offset: number = 0,
    limit: number = 200,
  ): Promise<ResponseData<T> | null> {
    loading.value = true
    error.value = null
    const notificationStore = useNotificationStore()

    try {
      const response = await apiClient.get<ResponseData<T>>(`/${table}/records`, {
        params: { offset, limit, viewId },
      })

      return response.data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const errorMessage = err.message || 'Une erreur est survenue'
      error.value = errorMessage
      // Afficher l'erreur dans le système de notification global
      notificationStore.setError(errorMessage)

      console.error('Erreur:', err)
      const errorResponse = {} as ResponseData<T>
      errorResponse.error = `${err}`
      return errorResponse
    } finally {
      loading.value = false
    }
  }

  function simulateError(errorMessage: string) {
    error.value = errorMessage
    return null
  }

  return {
    loading,
    error,
    fetchData,
    simulateError,
  }
})
