<script setup>
  import {RouterLink} from 'vue-router';
  import { useRoute } from 'vue-router';
  import {ref} from 'vue';
  import AppButton from './AppButton.vue';

  const route = useRoute();
  const isAuthenticated = ref(false);

  const showMenu = ref(false);
  const toggleNav = () => (showMenu.value = !showMenu.value);

</script>

<template>
  <header class="bg-gray-900 flex justify-between items-center px-6 py-4">
    <img src="../assets/images/logo-clean3000-transparent.png" alt="logo" class="">
    <nav>
      <div class="flex items-center justify-end">        
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 flex items-center list-none grid-flow-row text-gray-50">
        <li class="flex items-center my-0 mx-4">
          <RouterLink :to = "{name : 'Accueil'}">ACCEUIL</RouterLink>
        </li>
        <li class="flex items-center my-0 mx-4">
          <RouterLink :to = "{name : 'Formulaire'}">FORMULAIRE D' INTERVENTION</RouterLink>          
        </li>
        <li class="flex items-center my-0 mx-4">
          <RouterLink :to = "{name : 'Avis'}">AVIS DE PASSAGE</RouterLink>          
        </li>
        <li v-if="isAuthenticated" class="flex items-center ">
          <img class="rounded-full w-7 h-7 mr-2" src="https://xsgames.co/randomusers/avatar.php?g=male">
          <span>UserName</span>
        </li>
        <li v-else>
          <AppButton>Connexion</AppButton>
        </li>
      </ul>
    </nav>
  </header>  
</template>