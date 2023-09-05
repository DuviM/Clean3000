import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name : 'Accueil',
      path : '/',
      component : () => import('../views/Accueil.vue')
    },
    {
      name: 'Formulaire',
      path: '/formulaire',
      component : () => import('')
    },
    {
      name: 'Avis',
      path: '/avis',
      component : () => import('')
    },
  ]
});

export default router

