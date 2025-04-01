// stores/productStore.ts
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApiStore } from './apiStore'
import type { SocialNetwork } from '@/models/SocialNetwork'

export const useNetworkStore = defineStore('network', () => {
  const network = ref<SocialNetwork[]>([])

  // Actions
  async function fetchNetwork(offset = 0, limit = 200) {
    const apiStore = useApiStore()

    const response = await apiStore.fetchData<SocialNetwork>(
      'm5mdv5ly9q3z8fj',
      'vwdjkbytq03r8m1y',
      offset,
      limit,
    )

    if (response && !response.error) {
      network.value = response.list || {}
    }

    return response
  }

  return {
    network,
    fetchNetwork,
  }
})
