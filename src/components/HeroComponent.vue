<script setup lang="ts">
import { useSettingStore } from '@/stores/settingStore'
import { computed } from 'vue'
import ScheduleComponent from './ScheduleComponent.vue'
import MySVG from './MySVG.vue'

const settingStore = useSettingStore()
const { setting } = settingStore
const s = computed(() => (setting.length > 0 ? setting[0] : null))
</script>

<template>
  <!-- Hero Section avec grande image de fond et informations -->
  <section class="relative h-screen" v-if="s">
    <!-- Image de fond en plein écran -->
    <div class="absolute inset-0 w-full h-full" v-if="s.photo">
      <img
        :src="s.photo[0].signedUrl"
        :alt="s.description_courte"
        class="w-full h-full object-cover"
      />
      <!-- Overlay pour améliorer la lisibilité du texte -->
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
    </div>

    <!-- Contenu superposé à l'image -->
    <div class="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
      <div class="container mx-auto">
        <div
          class="bg-amber-900/80 backdrop-blur-sm p-6 md:p-8 rounded-lg max-w-2xl animate-fadeIn"
        >
          <h1 class="text-4xl md:text-5xl font-bold text-yellow-100 mb-4 flex items-end">
            <MySVG csv="w-16" />
            {{ s.titre }}
          </h1>
          <h2 class="text-2xl md:text-3xl font-medium text-yellow-200 mb-6">
            {{ s.description_courte }}
          </h2>

          <div class="space-y-4 mb-6">
            <div class="flex items-start space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mt-0.5 flex-shrink-0 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p class="text-yellow-100">
                <a :href="'http://maps.google.com/?q=' + s.adresse" target="_blank">{{
                  s.adresse
                }}</a>
              </p>
            </div>

            <div class="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 flex-shrink-0 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p class="text-yellow-100">
                <a :href="'tel:' + s.telephone" target="_blank">{{ s.telephone }}</a>
              </p>
            </div>

            <div class="flex items-start space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mt-0.5 flex-shrink-0 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="text-yellow-100">
                {{ s.description }}
              </p>
            </div>
          </div>
          <ScheduleComponent />
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#new-products">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-in-out;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-10px) translateX(-50%);
  }
}
</style>
