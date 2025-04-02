<script setup lang="ts">
import { useProductStore } from '../stores/productStore'

const productStore = useProductStore()

// Accès aux données via le store
const { nouveautes, produitsAujourdhui, productsByCategory } = productStore
</script>

<template>
  <div class="product-container">
    <section id="new-products" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold text-amber-800 inline-block pb-2 border-b-4 border-yellow-400"
          >
            Nos Nouveautés
          </h2>
        </div>
        <div
          v-if="nouveautes && nouveautes.length"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="product in nouveautes"
            :key="product.Id"
            class="bg-amber-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div class="h-48 bg-amber-200 relative">
              <div v-if="product.photo" class="w-full h-full">
                <img
                  :src="product.photo[0].thumbnails.small.signedUrl"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                v-else
                class="w-full h-full bg-gradient-to-br from-amber-300 to-amber-100 flex items-center justify-center"
              >
                <span class="text-amber-800 text-5xl opacity-20">🍟</span>
              </div>
              <div
                class="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold"
              >
                NOUVEAU
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-amber-800 mb-2">{{ product.titre }}</h3>
              <p v-if="product.description" class="text-amber-700 mb-4">
                {{ product.description }}
              </p>
              <div class="flex justify-between items-center">
                <span class="text-xl font-bold text-amber-900"
                  >{{ product.prix.toFixed(2) }} €</span
                >
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center text-amber-700">Pas de nouveautés pour le moment.</div>
      </div>
    </section>

    <!-- Section des produits du jour -->
    <section id="today-products" class="py-16 bg-amber-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold text-amber-800 inline-block pb-2 border-b-4 border-yellow-400"
          >
            Suggestions du Jour
          </h2>
        </div>
        <div
          v-if="produitsAujourdhui && produitsAujourdhui.length"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="product in produitsAujourdhui"
            :key="product.Id"
            class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div class="h-48 bg-amber-200 relative">
              <div v-if="product.photo" class="w-full h-full">
                <img
                  :src="product.photo[0].thumbnails.small.signedUrl"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                v-else
                class="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-100 flex items-center justify-center"
              >
                <span class="text-amber-800 text-5xl opacity-20">🥪</span>
              </div>
              <div
                class="absolute top-2 right-2 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold"
              >
                AUJOURD'HUI
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-amber-800 mb-2">{{ product.titre }}</h3>
              <p v-if="product.description" class="text-amber-700 mb-4">
                {{ product.description }}
              </p>
              <div class="flex justify-between items-center">
                <span class="text-xl font-bold text-amber-900"
                  >{{ product.prix.toFixed(2) }} €</span
                >
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center text-amber-700">Pas de suggestions pour aujourd'hui.</div>
      </div>
    </section>

    <!-- Section des produits par catégorie -->
    <section id="products" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold text-amber-800 inline-block pb-2 border-b-4 border-yellow-400"
          >
            Notre Menu
          </h2>
        </div>

        <div v-if="productsByCategory" class="space-y-16">
          <div v-for="[category, products] in productsByCategory" :key="category" class="mb-12">
            <h3 class="text-2xl font-bold text-amber-700 mb-6 pl-4 border-l-4 border-yellow-400">
              {{ category }}
            </h3>

            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <div
                v-for="product in products"
                :key="product.Id"
                class="flex bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div v-if="product.photo" class="w-1/3 bg-amber-200">
                  <img
                    :src="product.photo[0].thumbnails.small.signedUrl"
                    alt=""
                    class="w-full h-full object-cover"
                  />
                </div>
                <div
                  v-else
                  class="w-1/3 bg-gradient-to-br from-amber-200 to-amber-50 flex items-center justify-center"
                >
                  <span class="text-amber-800 text-3xl opacity-20">🍔</span>
                </div>
                <div class="w-2/3 p-4 flex flex-col justify-between">
                  <h4 class="text-lg font-bold text-amber-800 line-clamp-2">{{ product.titre }}</h4>
                  <p v-if="product.description" class="text-sm text-amber-700 my-2 line-clamp-3">
                    {{ product.description }}
                  </p>
                  <div class="mt-2 flex justify-between items-center">
                    <span class="font-bold text-amber-900">{{ product.prix.toFixed(2) }} €</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
