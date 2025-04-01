// stores/productStore.ts
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApiStore } from './apiStore'
import type { Setting } from '@/models/Setting'

export const useSettingStore = defineStore('setting', () => {
  const setting = ref<Setting[]>([])

  // Actions
  async function fetchSetting(offset = 0, limit = 200) {
    const apiStore = useApiStore()

    const response = await apiStore.fetchData<Setting>(
      'm3t6em2ksltjn3f',
      'vw56rcglrke81z2l',
      offset,
      limit,
    )

    if (response && !response.error) {
      setting.value = response.list || {}
    }

    return response
  }

  return {
    setting,
    fetchSetting,
  }
})
