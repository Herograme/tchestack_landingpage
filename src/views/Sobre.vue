<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { sobreSeo } from '../seo.config'

useHead(sobreSeo)
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">

    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">Sobre Nós</h1>
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Quem Somos?
          </h2>
          
          <div class="prose prose-gray dark:prose-invert max-w-none">
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              A Tche Stack é uma empresa dedicada a desenvolver aplicativos, sites e sistemas personalizados, criados especialmente para atender às demandas específicas de cada cliente. Com um compromisso sólido em oferecer soluções tecnológicas de alta qualidade, trabalhamos para transformar suas ideias em ferramentas digitais funcionais e inovadoras.
            </p>

            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Nosso diferencial está no atendimento personalizado e na busca por entender profundamente as necessidades do seu negócio. Sabemos que cada desafio é único, e por isso oferecemos soluções sob medida que vão além do convencional, unindo tecnologia de ponta, design inteligente e uma experiência otimizada para o usuário.
            </p>

            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Na Tche Stack, nosso objetivo principal é ajudar você a superar os desafios do mundo digital, seja otimizando processos internos, fortalecendo sua presença online ou desenvolvendo sistemas que impulsionem o crescimento do seu negócio. Mais do que criar aplicativos ou sites, entregamos soluções que geram impacto, agregam valor e fazem a diferença no mercado.
            </p>

            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Conte com a Tche Stack para construir o futuro digital do seu negócio com inovação, qualidade e eficiência.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 