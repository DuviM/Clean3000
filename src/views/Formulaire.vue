<script setup>
  import AppButton from '../components/AppButton.vue';
</script>

<template>
  <h1 class="text-bold text-3xl text-gray-50 text-center my-10">FORMULAIRE D'INTERVENTION</h1>
  <div class="border rounded-md mx-24 my-6">
    <form action="" method="get">
      <div class="flex flex-row items-center justify-evenly mt-6">
        <fieldset class="rounded border border-solid border-gray-50 flex flex-col px-6 pb-2">
          <legend class="text-gray-50 px-2">
            client:
          </legend>
          <div>
            <input type="checkbox" name="particulier" id="particulier">
            <label for="particulier" class="text-gray-50 ml-2">Particulier</label>
          </div>
          <div>
            <input type="checkbox" name="Professionnel" id="particulier">
            <label for="professionnel" class="text-gray-50 ml-2">Professionnel</label>
          </div>
        </fieldset>
        <div>
          <input type="text" placeholder="Nom du client/Raison sociale" class="bg-gray-500 text-gray-50 rounded w-72" >
        </div>
      </div>
      <div class="flex flex-row items-center justify-evenly mt-6">
        <label for="date" class="text-gray-50 ml-2">Date d'intervention</label>
        <input type="datetime-local" name="date" id="date" class="bg-gray-500 text-gray-50 rounded px-2 w-72">
      </div>
      <div class="flex flex-row items-center justify-evenly mt-6">
        <label for="observations" class="text-gray-50 ml-2">Observations</label>
        <textarea name="observations" id="observations" cols="30" rows="5" placeholder="Faites part de vos observations lors de l'intervention" class="bg-gray-500 text-gray-50 rounded px-2 w-72"></textarea>
      </div>
      <div class="flex flex-row items-center justify-evenly mt-6">
        <div>
          <label for="signatureTechnicien">Signature du technicien :</label>
                    
        </div>
        <div>
          <label for="signatureClient">Signature su client :</label>
        </div>
        <div>
          <AppButton>Valider l'avis de passage </AppButton>
        </div>
      </div>
    </form>
  </div>
</template>