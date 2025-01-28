<script setup lang="ts">
import CardsComponents from './CardsComponents.vue'
import speedIcon from '../assets/speed-light.svg'
import speedIconDark from '../assets/speed-dark.svg'
import customizationIcon from '../assets/customization-light.svg'
import customizationIconDark from '../assets/customization-dark.svg'
import innovationIcon from '../assets/innovation-light.svg'
import innovationIconDark from '../assets/innovation-dark.svg'

const cards = [
  {
    title: 'Velocidade',
    description: 'Entregamos soluções rápidas e eficientes, garantindo que seu produto esteja no mercado em pouco tempo.',
    readMoreText: 'Saiba mais',
    iconSrc: speedIcon,
    iconSrcDark: speedIconDark,
    link: '/produtos'
  },
  {
    title: 'Personalização',
    description: 'Oferecemos soluções personalizadas que se adaptam às necessidades específicas do seu negócio.',
    readMoreText: 'Conheça mais',
    iconSrc: customizationIcon,
    iconSrcDark: customizationIconDark,
    link: '/produtos'
  },
  {
    title: 'Inovação',
    description: 'Desenvolvemos soluções inovadoras que impulsionam o crescimento e a eficiência do seu negócio.',
    readMoreText: 'Descubra mais',
    iconSrc: innovationIcon,
    iconSrcDark: innovationIconDark,
    link: '/produtos'
  }
]
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900 py-12">
    <div class="mx-auto max-w-screen-xl px-4">
      <!-- Título da Seção -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
          Nosso Diferencial
        </h2>
        <p class="text-lg text-gray-700 dark:text-gray-300">
          Transformando ideias em realidade com tecnologia de ponta
        </p>
      </div>

      <!-- Grid de Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardsComponents
          v-for="card in cards"
          :key="card.title"
          v-bind="card"
        />
      </div>
    </div>
  </section>
</template>
