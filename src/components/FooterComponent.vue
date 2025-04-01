<script setup lang="ts">
import { useNetworkStore } from '@/stores/networkStore'
import { useSettingStore } from '@/stores/settingStore'
import SocialNetwork from './SocialNetwork.vue'

const settingStore = useSettingStore()
const networkStore = useNetworkStore()
</script>

<template>
  <footer class="bg-amber-900 text-amber-100 py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <h3 class="text-xl font-bold mb-2">
            {{ settingStore.setting ? settingStore.setting[0].titre : 'Friterie de Comines' }}
          </h3>
          <p class="text-amber-200 w-full md:w-2/3" v-if="settingStore.setting">
            {{ settingStore.setting[0].description }}
          </p>
        </div>

        <div class="flex space-x-6">
          <SocialNetwork
            :url="n.lien"
            :label="n.reseau"
            :platform="n.label"
            v-for="n in networkStore.network"
            :key="n.Id"
          />
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-amber-800 text-center text-sm text-amber-300">
        &copy; {{ new Date().getFullYear() }}
        {{ settingStore.setting ? settingStore.setting[0].titre : 'Friterie du Comines' }}. Tous
        droits réservés.
      </div>
    </div>
  </footer>
</template>
