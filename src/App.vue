<script setup lang="ts">
import ProductList from '@/components/ProductList.vue'
import GlobalNotification from '@/components/GlobalNotification.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
</script>

<template>
  <div class="app scroll-smooth">
    <GlobalNotification />
    <HeaderComponent />
    <HeroComponent />

    <main class="pt-28">
      <ProductList />
    </main>

    <FooterComponent />
  </div>
</template>
