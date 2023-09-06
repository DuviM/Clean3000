<script setup>
import { ref } from 'vue';
import { useInterventionStore } from '../store/Intervention';
import AppButton from '../components/AppButton.vue';
import AppModalIntervention from '../components/AppModalIntervention.vue';
import AppSignaturePad from '../components/AppSignaturePad.vue';
import AppAvisPassage from '../components/AppAvisPassage.vue';

const interventionStore = useInterventionStore();
const intervention = interventionStore.intervention;


const submitForm = () => {
  interventionStore.updateIntervention(intervention);
  
  const signatureDataTechnicien = ref.signaturePadTechnicien.saveSignature();
  const signatureDataClient = ref.signaturePadClient.saveSignature();

  intervention.signatureTechnicien = signatureDataTechnicien.data;
  intervention.signatureClient = signatureDataClient.data;

}

const showModal = ref(false);

const showAvis = ref(false);

const clearIntervention = interventionStore.clearIntervention();

</script>

<template>
  <div class="flex items-center justify-center">
    <AppButton id="show-modal" @click="showModal = true" class="my-24" v-if="!showAvis">
      <span class="text-gray-50">
        Générer un nouvel avis de passage
      </span>
    </AppButton>
  </div>
  <div>
    <AppAvisPassage v-if="showAvis"></AppAvisPassage>
    <div class="flex items-center justify-center">
      <AppButton @click="clearIntervention, showAvis = false" v-if="showAvis">ENVOYER UN MAIL</AppButton>
      <AppButton @click="clearIntervention, showAvis = false" v-if="showAvis">ENREGISTRER</AppButton>
    </div>
  </div>
  <Teleport to="body">
    <AppModalIntervention :show="showModal" @close="showModal = false">
                  <template #header>
                    <div class="border rounded-md mx-2 md:mx-24 my-6 pb-16 bg-gray-700">
                      <form @submit.prevent="submitForm()" action="" method="get">
                        <div class="flex flex-col md:flex-row items-center justify-between mt-6 md:mx-48">
                          <fieldset class="rounded border border-solid border-gray-50 flex flex-col px-6 pb-2">
                            <legend class="text-gray-50 px-2">
                              client:
                            </legend>
                            <div>
                              <input type="radio" name="client" id="particulier" v-model="intervention.choix" value="particulier">
                              <label for="particulier" class="text-gray-50 ml-2">Particulier</label>
                            </div>
                            <div>
                              <input type="radio" name="client" id="professionnel" v-model="intervention.choix" value="professionnel" >
                              <label for="professionnel" class="text-gray-50 ml-2">Professionnel</label>
                            </div>
                          </fieldset>
                          <div>
                            <input type="text" placeholder="Nom du client/Raison sociale" class="bg-gray-500 text-gray-50 rounded w-72 p-2 mt-2 md:mt-0" v-model="intervention.nomClient">
                          </div>
                        </div>
                        <div class="flex flex-col md:flex-row items-center justify-between mt-6 md:mx-48">
                          <label for="date" class="text-gray-50 ml-2">Date d'intervention :</label>
                          <input type="dateTime-local" name="date" id="date" class="bg-gray-500 text-gray-50 rounded w-72 p-2 mt-2 md:mt-0" v-model="intervention.date">
                        </div>
                        <div class="flex flex-col md:flex-row items-center justify-between mt-6 md:mx-48">
                          <label for="observations" class="text-gray-50 ml-2">Observations :</label>
                          <textarea name="observations" id="observations" cols="30" rows="5" placeholder="Faites part de vos observations lors de l'intervention" class="bg-gray-500 text-gray-50 rounded px-2 w-72 mt-2 md:mt-0" v-model="intervention.observations"></textarea>
                        </div>
                        <div class="flex flex-col md:flex-row items-center justify-evenly mt-6">
                          <div class="flex flex-col items-center mt-0 md:mt-6">
                            <label for="signatureTechnicien" class="text-gray-50 ml-2">Signature du technicien :</label>
                            <AppSignaturePad class="h-[150px] w-72 bg-gray-50 rounded" id="signatureTechnicien" refs="signaturPadTechnicien" :options="$options" ></AppSignaturePad>
                          </div>
                          <div class="flex flex-col items-center mt-16 md:mt-6 mb-4 md:mb-0">
                            <label for="signatureClient" class="text-gray-50 ml-2">Signature du client :</label>
                            <AppSignaturePad class="h-[150px] w-72 bg-gray-50 rounded" id="signatureClient" refs="signaturePadClient" :options="$options"></AppSignaturePad>
                          </div>
                          <div>                            
                            <AppButton type="submit" class="mt-16 md:mt-8" @click ="submitForm, showModal = false, showAvis = true">Valider les informations</AppButton>
                          </div>
                        </div>
                      </form>
                    </div>
                  </template>
    </AppModalIntervention>
  </Teleport>
</template>