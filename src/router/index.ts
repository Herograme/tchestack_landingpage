import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/Sobre.vue')
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: () => import('../views/Produtos.vue')
    },
    {
      path: '/fale-conosco',
      name: 'fale-conosco',
      component: () => import('../views/FaleConosco.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQ.vue')
    },
    {
      path: '/suporte',
      name: 'suporte',
      component: () => import('../views/Suporte.vue')
    }


  ]
})

export default router 