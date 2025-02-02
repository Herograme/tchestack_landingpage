<script setup lang="ts">
import { ref, onMounted } from 'vue'

import logoDark from '../assets/logo-dark.svg'
import logoLight from '../assets/logo-light.svg'

const theme = ref(localStorage.getItem('theme') || 'light')
const isMobileMenuOpen = ref(false)

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
  document.documentElement.dataset.theme = theme.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Previne scroll quando menu está aberto
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const navigationItems = [
  {
    path: '/',
    name: 'Home',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />`
  },
  {
    path: '/sobre',
    name: 'Sobre',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />`
  },
  {
    path: '/produtos',
    name: 'Produtos',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />`
  },
  {
    path: '/fale-conosco',
    name: 'Fale Conosco',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />`
  }
]

onMounted(() => {
  // Recupera o tema do localStorage e aplica
  const savedTheme = localStorage.getItem('theme') || 'light'
  theme.value = savedTheme
  document.documentElement.dataset.theme = savedTheme
})
</script>

<template>
    <header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo e Nome da Empresa -->
          <div class="flex items-center">
            <img :src="theme === 'dark' ? logoDark : logoLight" alt="Logo" class="h-8 w-8 mr-3" />
            <span class="text-xl font-bold text-gray-900 dark:text-white">TcheStack</span>
          </div>

          <!-- Navigation Tabs -->
          <div class="flex-1 flex justify-end items-center">
            <!-- Botão Menu Mobile -->
            <button
              @click="toggleMobileMenu"
              class="sm:hidden p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            <div class="hidden sm:block">
              <nav class="flex h-16 items-center space-x-8" aria-label="Tabs">
                <router-link
                  v-for="item in navigationItems"
                  :key="item.path"
                  :to="item.path"
                  class="inline-flex h-full items-center gap-2 border-b-2 px-1"
                  :class="$route.path === item.path ? 'border-sky-500 text-sky-600 dark:text-sky-400' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                    v-html="item.icon"
                  />
                  {{ item.name }}
                </router-link>
              </nav>
            </div>

            <!-- Theme Toggle Button -->
            <button
              @click="toggleTheme"
              class="ml-6 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              <svg
                v-if="theme === 'dark'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Menu Mobile -->
    <div
      v-show="isMobileMenuOpen"
      class="fixed inset-0 z-50 sm:hidden"
      @click="closeMobileMenu"
    >
      <!-- Overlay com fade -->
      <div
        class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300"
        :class="isMobileMenuOpen ? 'opacity-100' : 'opacity-0'"
      ></div>

      <!-- Sidebar com slide -->
      <div
        class="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-xl transform transition-all duration-300 ease-in-out"
        :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
        @click.stop
      >
        <!-- Header do Menu -->
        <div 
          class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center opacity-0 animate-fade-in"
        >
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
          <button
            @click="closeMobileMenu"
            class="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Links do Menu -->
        <nav class="px-4 py-6 space-y-4">
          <router-link
            v-for="(item, index) in navigationItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 opacity-0"
            :class="[
              $route.path === item.path ? 'bg-sky-50 text-sky-600 dark:bg-sky-900/50 dark:text-sky-400' : '',
              'animate-slide-in'
            ]"
            :style="{ 'animation-delay': `${index * 100}ms` }"
            @click="closeMobileMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
              v-html="item.icon"
            />
            {{ item.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </template>

<style scoped>
/* Animação suave para o menu lateral */
.transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(1rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slideIn 0.3s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out 0.1s forwards;
}

/* Ajuste para transição suave ao fechar */
.transform {
  will-change: transform;
}

/* Otimização de performance */
.fixed {
  will-change: transform, opacity;
}
</style>