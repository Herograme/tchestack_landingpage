<template>
    <section class="bg-gray-100 dark:bg-gray-800 py-12">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
          Impacte seu negócio com tecnologia de ponta
        </h2>
        <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(item, index) in stats"
            :key="index"
            class="bg-white dark:bg-gray-700 shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform"
          >
            <h3 class="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">{{ item.value }}</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        stats: [
        {
          value: "73%",
          description: "Das empresas brasileiras venderam online durante a pandemia, destacando a importância da presença digital."
        },
        {
          value: "94%",
          description: "Das empresas no Brasil utilizam o marketing digital como estratégia de crescimento."
        },
        {
          value: "57%",
          description: "Das empresas possuem redes sociais ou websites para conquistar clientes."
        }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  