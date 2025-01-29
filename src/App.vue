<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { Analytics } from '@vercel/analytics/vue'
</script>

<template>
  <Analytics />
  <Header />
  <router-view></router-view>
  <Footer />
</template>


