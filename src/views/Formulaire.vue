<script setup>
  
  import AppButton from '../components/AppButton.vue';
  import AppSignaturePad from '../components/AppSignaturePad.vue';
  


</script>

<template>
  <h1 class="text-bold text-3xl text-gray-50 text-center my-10">FORMULAIRE D'INTERVENTION</h1>
  <div class="border rounded-md mx-2 md:mx-24 my-6 pb-8">
    <form action="" method="get">
      <div class="flex flex-col md:flex-row items-center justify-evenly mt-6">
        <fieldset class="rounded border border-solid border-gray-50 flex flex-col px-6 pb-2">
          <legend class="text-gray-50 px-2">
            client:
          </legend>
          <div>
            <input type="checkbox" name="particulier" id="particulier" v-model="client" value="particulier">
            <label for="particulier" class="text-gray-50 ml-2">Particulier</label>
          </div>
          <div>
            <input type="checkbox" name="professionnel" id="professionnel" v-model="client" value="professionnel">
            <label for="professionnel" class="text-gray-50 ml-2">Professionnel</label>
          </div>
        </fieldset>
        <div>
          <input type="text" placeholder="Nom du client/Raison sociale" class="bg-gray-500 text-gray-50 rounded w-72 p-2 mt-2 md:mt-0" v-model="clientName">
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center justify-evenly mt-6">
        <label for="date" class="text-gray-50 ml-2">Date d'intervention :</label>
        <input type="datetime-local" name="date" id="date" class="bg-gray-500 text-gray-50 rounded w-72 p-2 mt-2 md:mt-0" v-model="dateIntervention">
      </div>
      <div class="flex flex-col md:flex-row items-center justify-evenly mt-6">
        <label for="observations" class="text-gray-50 ml-2">Observations :</label>
        <textarea name="observations" id="observations" cols="30" rows="5" placeholder="Faites part de vos observations lors de l'intervention" class="bg-gray-500 text-gray-50 rounded px-2 w-72 mt-2 md:mt-0" v-model="observations"></textarea>
      </div>
      <div class="flex flex-col md:flex-row items-center justify-evenly mt-6">
        <div class="flex flex-col items-center mt-0 md:mt-6">
          <label for="signatureTechnicien" class="text-gray-50 ml-2">Signature du technicien :</label>
          <AppSignaturePad class="h-[150px] w-[300px]" v-model="signatureTechnicien"></AppSignaturePad>
        </div>
        <div class="flex flex-col items-center mt-16 md:mt-6 mb-4 md:mb-0">
          <label for="signatureClient" class="text-gray-50 ml-2">Signature su client :</label>
          <AppSignaturePad class="h-[150px] w-[300px]" v-model="signatureClient"></AppSignaturePad>
        </div>
        <div>
          <AppButton type="submit" class="mt-16 md:mt-8" @click="submitForm">Valider l'avis de passage</AppButton>
        </div>
      </div>
    </form>
  </div>
</template>