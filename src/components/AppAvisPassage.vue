<script setup>

import { useInterventionStore } from '../store/Intervention';

const interventionStore = useInterventionStore();

const {choix, nomClient, date, observations, signatureTechnicien, signatureClient} = interventionStore;

</script>

<template>
  <div>
    <h1>AVIS DE PASSAGE</h1>
    <div>
      <p>{{ choix }}</p>
      <p>{{ nomClient }}</p>
      <p>{{ date }}</p>
      <p>{{ observations }}</p>
      <p>signature du technicien</p>
      <img v-if="signatureTechnicien" :src="signatureTechnicien" alt="signature technicien">
      <p>signature du client</p>
      <img v-if="signatureClient" :src="signatureClient" alt="signature client">
    </div>
  </div>
</template>