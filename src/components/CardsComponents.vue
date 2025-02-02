<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title: string
  description: string
  readMoreText: string
  iconSrc: string
  iconSrcDark: string
  link: string
}>()

const isPressed = ref(false)

const handleTouchStart = () => {
  isPressed.value = true
}

const handleTouchEnd = () => {
  isPressed.value = false
}
</script>

<template>
  <router-link 
    :to="link" 
    class="group relative block h-64 sm:h-80 lg:h-96"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @touchcancel="handleTouchEnd"
  >
    <!-- Borda pontilhada -->
    <span class="absolute inset-0 border-2 border-dashed border-black dark:border-white"></span>

    <!-- Card Principal -->
    <div
      class="relative flex h-full transform items-end border-2 border-black dark:border-white bg-white dark:bg-gray-800 transition-all duration-300 sm:hover:-translate-x-2 sm:hover:-translate-y-2"
      :class="{ 'scale-[0.98] bg-gray-50 dark:bg-gray-700': isPressed }"
    >
      <!-- Conteúdo Desktop -->
      <div class="hidden sm:block w-full">
        <!-- Conteúdo Inicial -->
        <div class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <img
            :src="iconSrc"
            :alt="title"
            class="size-10 sm:size-12 transition-colors dark:hidden"
          />
          <img
            :src="iconSrcDark"
            :alt="title"
            class="size-10 sm:size-12 transition-colors hidden dark:block"
          />

          <h2 class="mt-4 text-xl font-medium text-gray-900 dark:text-white sm:text-2xl">
            {{ title }}
          </h2>
        </div>

        <!-- Conteúdo Hover -->
        <div class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 class="mt-4 text-xl font-medium text-gray-900 dark:text-white sm:text-2xl">
            {{ title }}
          </h3>

          <p class="mt-4 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
            {{ description }}
          </p>

          <p class="mt-8 font-bold text-gray-900 dark:text-white">
            {{ readMoreText || 'Saiba mais' }}
          </p>
        </div>
      </div>

      <!-- Conteúdo Mobile -->
      <div class="sm:hidden w-full p-6">
        <div class="flex flex-col h-full">
          <div class="flex items-center gap-4 mb-4">
            <img
              :src="iconSrc"
              :alt="title"
              class="size-10 dark:hidden"
            />
            <img
              :src="iconSrcDark"
              :alt="title"
              class="size-10 hidden dark:block"
            />
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              {{ title }}
            </h3>
          </div>

          <p class="text-sm text-gray-700 dark:text-gray-300 flex-grow">
            {{ description }}
          </p>

          <div class="flex items-center text-gray-900 dark:text-white font-bold mt-4">
            {{ readMoreText || 'Saiba mais' }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-4 h-4 ml-2 transition-transform"
              :class="{ 'translate-x-1': isPressed }"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
@keyframes ripple {
  from {
    transform: scale(0);
    opacity: 0.4;
  }
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.animate-ripple::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background: currentColor;
  opacity: 0.4;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
  animation: ripple 600ms ease-out;
}

/* Efeitos apenas para desktop */
@media (hover: hover) {
  .group:hover .animate-ripple {
    display: none;
  }
}
</style>