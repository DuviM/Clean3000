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
      component : () => import('../views/Formulaire.vue')
    },
    {
      name: 'Avis',
      path: '/avis',
      component : () => import('../views/Avis.vue')
    },
  ]
});

export default router

