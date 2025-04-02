<script setup lang="ts">
import { useSettingStore } from '@/stores/settingStore'
import { ref } from 'vue'

const settingStore = useSettingStore()
const { setting } = settingStore

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-amber-600 text-white shadow-lg">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <!-- <img -->
        <!--   src="/api/placeholder/80/80" -->
        <!--   alt="Logo Friterie" -->
        <!--   class="h-12 w-12 rounded-full border-2 border-yellow-200" -->
        <!-- /> -->
        <div v-if="setting.length > 0">
          <div v-for="s in setting" :key="s.Id">
            <a href="#">
              <h1 class="text-3xl font-bold text-yellow-100">{{ s.titre }}</h1>
            </a>
          </div>
        </div>
      </div>
      <nav class="hidden md:block">
        <ul class="flex gap-6 justify-center items-center">
          <li>
            <a
              class="block px-3 py-2 text-yellow-100 hover:text-white hover:bg-amber-700 rounded-md transition-colors duration-200"
              href="#new-products"
              >Nouveautés</a
            >
          </li>
          <li>
            <a
              class="block px-3 py-2 text-yellow-100 hover:text-white hover:bg-amber-700 rounded-md transition-colors duration-200"
              href="#today-products"
              >Aujourd'hui</a
            >
          </li>
          <li>
            <a
              class="block px-3 py-2 text-yellow-100 hover:text-white hover:bg-amber-700 rounded-md transition-colors duration-200"
              href="#products"
              >Menu</a
            >
          </li>
        </ul>
      </nav>
      <!-- Hamburger pour mobile -->
      <div class="md:hidden">
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="p-2 text-yellow-100 hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Menu mobile -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-amber-700 pb-4">
      <ul class="flex flex-col space-y-2 px-4">
        <li>
          <a
            @click="mobileMenuOpen = false"
            class="block py-2 text-yellow-100 hover:text-white"
            href="#new-products"
            >Nouveautés</a
          >
        </li>
        <li>
          <a
            @click="mobileMenuOpen = false"
            class="block py-2 text-yellow-100 hover:text-white"
            href="#today-products"
            >Aujourd'hui</a
          >
        </li>
        <li>
          <a
            @click="mobileMenuOpen = false"
            class="block py-2 text-yellow-100 hover:text-white"
            href="#products"
            >Menu</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>
