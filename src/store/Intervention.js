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
  // getters: {
  //   isInterventionEmpty: (state) => {
  //     return Object.keys(state.intervention).length === 0;
  //   }
  // },
  actions : {

    updateIntervention(data) {
      this.intervention = data;
    },
    // submitForm (intervention) {
    //   this.intervention = intervention
    //   console.log('turlutut');
    // },
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