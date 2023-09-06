<script setup>

import { useInterventionStore } from '../store/Intervention';

const interventionStore = useInterventionStore();
const intervention = interventionStore.intervention;

</script>

<template>
  <div>
    <h1 class="text-bold text-3xl text-gray-50 text-center my-10">AVIS DE PASSAGE</h1>
    <div class="border rounded-md mx-2 md:mx-24 my-6 pb-8">
      <div class="flex flex-row items-center justify-center">
        <img src="../assets/images/logo-clean3000-transparent.png" alt="logo" class="h-9">
        <p class="text-green-500 font-extrabold shadow-black text-xl mt-3 ml-5">VOUS REMERCIE POUR VOTRE CONFIANCE</p>
      </div>
      <div  class="flex flex-col md:flex-row items-center justify-evenly mt-6">
        <div class="flex flex-col items-center">
          <p class="text-gray-50">Qualité :</p>
          <p class="bg-gray-500 text-gray-50 rounded w-72 p-2 mt-2 md:mt-0 text-center">{{ intervention.choix }}</p>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-gray-50">Nom du client : </p>
          <p class="bg-gray-500 text-gray-50 rounded w-72 p-2 mt-2 md:mt-0 text-center">Nom du client : {{ intervention.nomClient }}</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center justify-evenly mt-6">
        <div class="flex flex-col items-center">
          <p class="text-gray-50">Date d' intervention :</p>
          <p class="bg-gray-500 text-gray-50 rounded w-72 p-2 mt-2 md:mt-0 text-center">{{ intervention.date }}</p>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-gray-50">Observation :</p>
          <p class="bg-gray-500 text-gray-50 rounded w-72 p-2 mt-2 md:mt-0 text-center break-words">Observation : {{ intervention.observations }}</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center justify-evenly mt-6">
        <p class="text-gray-50">signature du technicien</p>
        <img v-if="signatureTechnicien" :src="intervention.signatureTechnicien" alt="signature technicien">
        <p class="text-gray-50">signature du client</p>
        <img v-if="signatureClient" :src="intervention.signatureClient" alt="signature client">        
      </div>
    </div>
  </div>
</template>