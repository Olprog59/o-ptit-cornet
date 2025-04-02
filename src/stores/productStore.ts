// stores/productStore.ts
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useApiStore } from './apiStore'
import type { Product } from '../models/Product'

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const totalProducts = ref(0)

  // Getters sous forme de computed
  const nouveautes = computed(() => products.value.filter((p) => p.actif && p.nouveaute))

  const produitsAujourdhui = computed(() => products.value.filter((p) => p.actif && p.aujourdhui))

  const productsByCategory = computed(() => {
    const categories = new Map<string, Product[]>()

    products.value
      .filter((p) => p.actif)
      .forEach((product) => {
        const categoryName = product.category
        if (!categories.has(categoryName)) {
          categories.set(categoryName, [])
        }

        categories.get(categoryName)?.push(product)
      })

    return categories
  })

  // Actions
  async function fetchProducts(offset = 0, limit = 200) {
    const apiStore = useApiStore()

    const response = await apiStore.fetchData<Product>(
      'mpyu2uyhvlzjgnp',
      'vwpivq6t7ztpcdx9',
      offset,
      limit,
    )

    if (response && !response.error) {
      products.value = response.list || []
      totalProducts.value = response.pageInfo?.totalRows || 0
    }

    return response
  }

  return {
    products,
    totalProducts,
    nouveautes,
    produitsAujourdhui,
    productsByCategory,
    fetchProducts,
  }
})
