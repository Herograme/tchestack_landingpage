<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">Fale Conosco</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Formulário de Contato -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg transform transition-all hover:scale-[1.02]">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Envie uma mensagem
          </h2>

          <form class="space-y-8" @submit="sendEmail">
            <div class="space-y-2">
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="block w-full rounded-lg border-0 px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:focus:ring-sky-500 sm:text-sm sm:leading-6 transition-all"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div class="space-y-2">
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="block w-full rounded-lg border-0 px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:focus:ring-sky-500 sm:text-sm sm:leading-6 transition-all"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div class="space-y-2">
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Mensagem
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="6"
                class="block w-full rounded-lg border-0 px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:focus:ring-sky-500 sm:text-sm sm:leading-6 transition-all resize-none"
                placeholder="Digite sua mensagem..."
                required
              ></textarea>
            </div>

            <!-- Mensagens de Feedback -->
            <div v-if="error" class="rounded-md bg-red-50 dark:bg-red-900/50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-red-700 dark:text-red-200">{{ error }}</p>
                </div>
              </div>
            </div>

            <div v-if="success" class="rounded-md bg-green-50 dark:bg-green-900/50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-green-700 dark:text-green-200">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full flex justify-center items-center gap-2 py-3 px-6 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{{ loading ? 'Enviando...' : 'Enviar mensagem' }}</span>
              <svg v-if="!loading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <svg v-else class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </form>
        </div>

        <!-- Informações de Contato -->
        <div class="space-y-8">
          <!-- WhatsApp Card -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg transform transition-all hover:scale-[1.02]">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Atendimento via WhatsApp
            </h3>
            <a
              href="https://wa.me/5551981209926"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between gap-4 p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all group"
            >
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span class="font-medium">Iniciar conversa</span>
              </div>
              <svg class="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <!-- Redes Sociais -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg transform transition-all hover:scale-[1.02]">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Redes Sociais
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://www.linkedin.com/company/tche-stack"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between gap-3 p-4 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg transition-all group"
              >
                <div class="flex items-center gap-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span class="font-medium">LinkedIn</span>
                </div>
                <svg class="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/tchestack"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between gap-3 p-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:from-[#722F9A] hover:via-[#E31A1A] hover:to-[#DE6C32] text-white rounded-lg transition-all group"
              >
                <div class="flex items-center gap-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                  <span class="font-medium">Instagram</span>
                </div>
                <svg class="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Horário de Atendimento -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg transform transition-all hover:scale-[1.02]">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Horário de Atendimento
            </h3>
            <div class="space-y-4 text-gray-600 dark:text-gray-300">
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Segunda a Sexta: 9h às 18h</p>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Sábado: 9h às 13h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = import.meta.env

const loading = ref(false)
const success = ref(false)
const error = ref('')

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const sendEmail = async (e: Event) => {
  e.preventDefault()
  loading.value = true
  error.value = ''
  
  try {
    const templateParams = {
      from_name: formData.value.name,
      from_email: formData.value.email,
      message: formData.value.message,
      to_email: 'contato@tchestack.com.br'
    }

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    )

    success.value = true
    formData.value = {
      name: '',
      email: '',
      message: ''
    }
  } catch (err) {
    error.value = 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'
    console.error('ERRO:', err)
  } finally {
    loading.value = false
  }
}
</script> 