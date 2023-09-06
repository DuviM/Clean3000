import { defineStore } from 'pinia';

export const useInterventionStore = defineStore('intervention', {
  state : () => ({
      intervention :{
        choix : '',
        nomClient : '',
        date : '',
        observations : '',
        signatureTechnicien: null,
        signatureClient : null,
      }
    }
  ),
  actions : {

    updateIntervention(data) {
      this.intervention = data;
    },
    clearIntervention () {
      this.intervention.choix = '';
      this.intervention.nomClient = '';
      this.intervention.date = '';
      this.intervention.observations = '';
      this.intervention.signatureTechnicien = null;
      this.intervention.signatureClient = null;
    },
  }
});