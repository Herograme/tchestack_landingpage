<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { homeSeo } from '../seo.config'
import HeroSection from '../components/HeroSection.vue'
import TextSection from '../components/TextSection.vue'
import CardsSection from '../components/CardsSection.vue'
import StatsSection from '../components/StatsSection.vue'

useHead(homeSeo)
</script>

<template>
  <HeroSection />
  <TextSection />
  <CardsSection />
  <StatsSection />
</template> 