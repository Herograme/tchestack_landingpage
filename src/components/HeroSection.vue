<script setup lang="ts">
import bgImage from "../assets/ilustração 1.svg"
</script>

<template>
  <section class="relative bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Background Image Container -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Container da imagem com opacidade ajustada -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="flex items-center justify-center opacity-[0.08] dark:opacity-[0.04] transform scale-[3.75] sm:scale-[2.5]">
          <img 
            :src="bgImage" 
            alt="" 
            class="w-4/5 h-4/5 object-contain"
          />
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-20 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div class="mx-auto max-w-3xl text-center">
        <!-- Título com gradiente -->
        <h1 class="bg-gradient-to-r from-green-600 dark:from-green-300 via-blue-700 dark:via-blue-500 to-purple-800 dark:to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl mb-8 sm:mb-6">
          Automatizamos hoje
          <span class="sm:block">para o sucesso de amanhã.</span>
        </h1>

        <!-- Subtítulo -->
        <p class="mx-auto max-w-xl sm:text-xl/relaxed text-gray-700 dark:text-gray-300">
          Desenvolvimento web, mobile e SaaS que fazem a diferença
        </p>

        <!-- Botões -->
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <router-link
            class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 dark:hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            to="/fale-conosco"
          >
            Fale Conosco
          </router-link>

          <router-link
            class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            to="/produtos"
          >
            Conheça nossos serviços
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Otimizações para mobile */
@media (max-width: 640px) {
  .bg-gradient-to-r {
    font-size: 2.5rem;
    line-height: 1.2;
    padding-top: 2rem;
  }
}
</style>