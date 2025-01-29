<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <main class="grid min-h-screen place-items-center bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-6xl font-semibold text-blue-600 dark:text-blue-400">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Página não encontrada</h1>
      <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">Desculpe, não conseguimos encontrar a página que você está procurando.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <router-link
          to="/"
          class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Voltar ao início
        </router-link>
        <button
          @click="goBack"
          class="text-sm font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
        >
          Voltar <span aria-hidden="true">&larr;</span>
        </button>
      </div>
    </div>
  </main>
</template>
