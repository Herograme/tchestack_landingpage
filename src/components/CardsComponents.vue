<script setup lang="ts">
import { ref, watchEffect } from 'vue'

interface CardProps {
  title: string
  description: string
  iconSrc: string
  iconSrcDark?: string // Ícone opcional para tema escuro
  readMoreText?: string
  link?: string
}

const props = defineProps<CardProps>()
const currentIcon = ref(props.iconSrc)

watchEffect(() => {
  const isDark = document.documentElement.dataset.theme === 'dark'
  currentIcon.value = isDark && props.iconSrcDark ? props.iconSrcDark : props.iconSrc
})
</script>

<template>
  <a :href="link" class="group relative block h-64 sm:h-80 lg:h-96">
    <span class="absolute inset-0 border-2 border-dashed border-black dark:border-white"></span>

    <div
      class="relative flex h-full transform items-end border-2 border-black dark:border-white bg-white dark:bg-gray-800 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
    >
      <div
        class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
      >
        <img 
          :src="currentIcon"
          :alt="title"
          class="size-10 sm:size-12 transition-colors"
        />

        <h2 class="mt-4 text-xl font-medium text-gray-900 dark:text-white sm:text-2xl">
          {{ title }}
        </h2>
      </div>

      <div
        class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
      >
        <h3 class="mt-4 text-xl font-medium text-gray-900 dark:text-white sm:text-2xl">
          {{ title }}
        </h3>

        <p class="mt-4 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
          {{ description }}
        </p>

        <p class="mt-8 font-bold text-gray-900 dark:text-white">
          {{ readMoreText || 'Read more' }}
        </p>
      </div>
    </div>
  </a>
</template>