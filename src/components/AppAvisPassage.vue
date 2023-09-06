<script setup>

import { useInterventionStore } from '../store/Intervention';

const interventionStore = useInterventionStore();
const intervention = interventionStore.intervention;

</script>

<template>
  <div>
    <h1 class="text-bold text-3xl text-gray-50 text-center my-10">AVIS DE PASSAGE</h1>
    <div class="border rounded-md mx-2 md:mx-24 my-6 pb-8">
      <div  class="flex flex-col md:flex-row items-center justify-evenly mt-6">
        <p class="bg-gray-500 text-gray-50 rounded w-72 p-2 mt-2 md:mt-0 text-center">{{ intervention.choix }}</p>
        <p class="bg-gray-500 text-gray-50 rounded w-72 p-2 mt-2 md:mt-0 text-center">Nom du client : {{ intervention.nomClient }}</p>
      </div>
      <div class="flex flex-col md:flex-row items-center justify-evenly mt-6">
        <p class="bg-gray-500 text-gray-50 rounded w-72 p-2 mt-2 md:mt-0 text-center">{{ intervention.date }}</p>
        <p class="bg-gray-500 text-gray-50 rounded w-72 p-2 mt-2 md:mt-0 text-center">{{ intervention.observations }}</p>
      </div>
      <div class="flex flex-col md:flex-row items-center justify-evenly mt-6">
        <p>signature du technicien</p>
        <img v-if="signatureTechnicien" :src="intervention.signatureTechnicien" alt="signature technicien">
        <p>signature du client</p>
        <img v-if="signatureClient" :src="intervention.signatureClient" alt="signature client">        
      </div>
    </div>
  </div>
</template>