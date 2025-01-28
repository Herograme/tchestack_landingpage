<script setup lang="ts">
import bgImage from "../assets/ilustração 1.svg"
</script>

<template>
  <section class="relative bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Background Image Container -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900 z-10"></div>
      <!-- Container da imagem com opacidade ajustada -->
      <div class="absolute inset-0 flex items-center justify-center opacity-75 dark:opacity-30">
        <img 
          :src="bgImage" 
          alt="" 
          class="w-4/5 h-4/5 object-contain"
        />
      </div>
    </div>

    

    <!-- Content -->
    <div class="relative z-20 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div class="mx-auto max-w-3xl text-center">
        <h1
          class="bg-gradient-to-r from-green-600 dark:from-green-300 via-blue-700 dark:via-blue-500 to-purple-800 dark:to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
        
        Automatizamos hoje 
          <span class="sm:block"> para o sucesso de amanhã. </span>
        </h1>

        <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-700 dark:text-gray-300">
            Desenvolvimento web, mobile e SaaS que fazem a diferença
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a
            class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 dark:hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="#"
          >
            Fale Conosco
          </a>

          <a
            class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="#"
          >
            Conheça nossos serviços
          </a>
        </div>
      </div>
    </div>
  </section>
</template>