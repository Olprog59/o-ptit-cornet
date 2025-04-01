import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useProductStore } from './stores/productStore'
import { useSettingStore } from './stores/settingStore'
import { useNetworkStore } from './stores/networkStore'
import { useScheduleStore } from './stores/scheduleStore'

const bootstrap = async () => {
  const app = createApp(App)
  const pinia = createPinia()

  app.use(pinia)

  // Précharger les données avant de monter l'application
  const productStore = useProductStore()
  await productStore.fetchProducts()

  const settingStore = useSettingStore()
  await settingStore.fetchSetting()

  const networkStore = useNetworkStore()
  await networkStore.fetchNetwork()

  const scheduleStore = useScheduleStore()
  await scheduleStore.fetchSchedule()

  // Une fois les données chargées, montez l'application
  app.mount('#app')
}

// Démarrer l'application
bootstrap().catch((error) => {
  console.error("Erreur lors du chargement initial de l'application :", error)
})
