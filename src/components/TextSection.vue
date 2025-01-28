<script setup lang="ts">
    import bgImage from "../assets/foto.webp"
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                <div>
                    <div class="max-w-lg md:max-w-none">
                        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
                            Um pouco sobre nós.
                        </h2>

                        <p class="mt-4 text-gray-700 dark:text-gray-300">
                            Somos a TcheStack, uma empresa dedicada a transformar ideias em soluções digitais de
                            impacto.
                            Com foco em desenvolvimento web, mobile e SaaS, ajudamos empresas a expandir seu alcance no
                            ambiente online,
                            automatizar processos e oferecer experiências inovadoras para seus clientes.
                            Nosso compromisso é entregar tecnologia de ponta e resultados excepcionais,
                            sendo o parceiro estratégico que impulsiona o crescimento e a performance digital do seu
                            negócio
                        </p>
                    </div>
                </div>

                <div>
                    <img :src="bgImage"
                        class="rounded shadow-lg dark:shadow-gray-800" alt="Imagem da empresa" />
                </div>
            </div>
        </div>
    </section>
</template>