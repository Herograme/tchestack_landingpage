<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import PageTransition from './components/PageTransition.vue'
import { Analytics } from '@vercel/analytics/vue'
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <Analytics />
  <SpeedInsights />
  <div class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
    <Header />
    <main class="flex-1 relative overflow-hidden">

      <PageTransition>
        <router-view />
      </PageTransition>
    </main>
    <Footer />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
}

/* Previne scroll durante a transição */
.page-leave-active,
.page-enter-active {
  overflow: hidden;
}
</style>


