// stores/productStore.ts
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApiStore } from './apiStore'
import type { Schedule } from '@/models/Schedule'

export const useScheduleStore = defineStore('schedule', () => {
  const schedule = ref<Schedule[]>([])

  // Actions
  async function fetchSchedule(offset = 0, limit = 200) {
    const apiStore = useApiStore()

    const response = await apiStore.fetchData<Schedule>(
      'mhkch8daew4syv0',
      'vwbhx8t7i05pxcul',
      offset,
      limit,
    )

    if (response && !response.error) {
      schedule.value = response.list || {}
    }

    return response
  }

  return {
    schedule,
    fetchSchedule,
  }
})
