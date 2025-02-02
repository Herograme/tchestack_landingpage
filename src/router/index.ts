import { createRouter, createWebHistory } from 'vue-router'
import { scrollToTop } from '../util/toppage'
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
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

// Adiciona o scroll to top e reseta a transição após cada navegação
router.afterEach(() => {
  scrollToTop()
})

export default router 