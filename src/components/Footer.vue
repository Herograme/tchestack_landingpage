<script setup lang="ts">
import { ref } from 'vue'
import logoDark from '../assets/logo-dark.svg'
import logoLight from '../assets/logo-light.svg'

const theme = ref(document.documentElement.dataset.theme || 'light')

// Observa mudanças no tema
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'data-theme') {
      theme.value = document.documentElement.dataset.theme || 'light'
    }
  })
})

// Inicia a observação
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-theme']
})
</script>

<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Logo e Informações -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <img :src="theme === 'dark' ? logoDark : logoLight" alt="Logo" class="h-8 w-8" />
            <span class="text-xl font-bold text-gray-900 dark:text-white">TcheStack</span>
          </div>

          <p class="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
            Transformando ideias em soluções digitais inovadoras.
          </p>

          <ul class="mt-8 flex gap-6">
            <li>
              <a
                href="https://www.linkedin.com/company/tchestack"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 dark:text-gray-200 transition hover:opacity-75"
              >
                <span class="sr-only">LinkedIn</span>
                <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/tchestack"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 dark:text-gray-200 transition hover:opacity-75"
              >
                <span class="sr-only">Instagram</span>
                <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Links -->
        <div class="lg:text-right">
          <p class="font-medium text-gray-900 dark:text-white">Navegação</p>
          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <router-link to="/" class="text-gray-700 dark:text-gray-300 transition hover:opacity-75">Home</router-link>
            </li>
            <li>
              <router-link to="/sobre" class="text-gray-700 dark:text-gray-300 transition hover:opacity-75">Sobre</router-link>
            </li>
            <li>
              <router-link to="/produtos" class="text-gray-700 dark:text-gray-300 transition hover:opacity-75">Produtos</router-link>
            </li>
            <li>
              <router-link to="/fale-conosco" class="text-gray-700 dark:text-gray-300 transition hover:opacity-75">Fale Conosco</router-link>
            </li>
          </ul>
        </div>

        <!-- Contato -->
        <div class="lg:text-right">
          <p class="font-medium text-gray-900 dark:text-white">Contato</p>
          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a href="https://wa.me/5551999999999" class="text-gray-700 dark:text-gray-300 transition hover:opacity-75">WhatsApp</a>
            </li>
            <li>
              <a href="mailto:contato@tchestack.com.br" class="text-gray-700 dark:text-gray-300 transition hover:opacity-75">Email</a>
            </li>
            <li>
              <a href="/suporte" target="_blank" class="text-gray-700 dark:text-gray-300 transition hover:opacity-75">Suporte</a>
            </li>
            <li>
              <router-link to="/faq" class="text-gray-700 dark:text-gray-300 transition hover:opacity-75">FAQ</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 border-t border-gray-100 dark:border-gray-800 pt-8">
        <p class="text-xs text-center text-gray-500 dark:text-gray-400">
          &copy; 2024. TcheStack. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>