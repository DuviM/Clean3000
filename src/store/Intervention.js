import { defineStore } from 'pinia';

export const useInterventionStore = defineStore('intervention', {
  state : () => {
    return {
      intervention :{
        choix : '',
        nomClient : '',
        date : '',
        observations : '',
        signatureTechnicien: null,
        signatureClient : null,
      }
    }
  },
  getters: {
    isInterventionEmpty: (state) => {
      return Object.keys(state.intervention).length === 0;
    }
  },
  actions : {
    submitForm () {
      const intervention = this.intervention;
      console.log(intervention);
    },
    clearIntervention () {
      this.intervention = {}; 
    },
  }
});