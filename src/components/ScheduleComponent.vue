<script setup lang="ts">
import { useScheduleStore } from '@/stores/scheduleStore'
import { ref } from 'vue'

const scheduleStore = useScheduleStore()

const formatTime = (date: string) => {
  const d = date.split(':')
  return d.length === 3 ? d[0] + ':' + d[1] : date
}

const isOpen = ref(false)

const toggleSchedule = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="horaires-section">
    <!-- Titre cliquable avec flèche -->
    <div
      @click="toggleSchedule"
      class="cursor-pointer flex justify-between items-center py-3 px-4 bg-amber-900/70 rounded-md"
    >
      <h3 class="text-xl font-bold text-yellow-200 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Nos Horaires
      </h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-yellow-200 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    <!-- Contenu des horaires (affiché/masqué) -->
    <div
      v-if="isOpen"
      class="grid grid-cols-1 gap-3 mt-3 transition-all duration-300 overflow-hidden"
    >
      <div
        v-for="jour in scheduleStore.schedule"
        :key="jour.jour"
        :class="[
          'flex justify-between items-center py-2 px-3 rounded-md',
          jour.ouvert ? 'bg-amber-800/50' : 'bg-amber-950/60 opacity-70',
        ]"
      >
        <span class="font-medium text-yellow-100">{{ jour.jour }}</span>
        <span v-if="jour.ouvert" class="text-yellow-100 text-sm">
          {{ formatTime(jour.midi_debut) }} - {{ formatTime(jour.midi_fin) }}
          <span class="mx-1">|</span>
          {{ formatTime(jour.soir_debut) }} - {{ formatTime(jour.soir_fin) }}
        </span>
        <span v-else class="text-amber-400 text-sm italic">Fermé</span>
      </div>
    </div>
  </div>
</template>
