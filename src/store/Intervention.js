import { defineStore } from 'pinia';

export const useInterventionStore = defineStore('Intervention', {
  state : () => ({
    intervention :{
      checkboxParticulier : false,
      checkboxProfessionnel : false,
      nameInput : '',
      dateInput : '',
      observations : '',
      signatureTechnicien : null,
      signatureClient : null,
    }
  }),

  actions : {
    updateCheckboxParticulier(value) {
      this.intervention.checkboxParticulier = value;
    },
    updateCheckboxProfessionnel(value) {
      this.intervention.checkboxProfessionnel = value;
    },
    updateNameInput(value) {
      this.intervention.nameInput =value;
    },
    updateDateInput(value) {
      this.intervention.dateInput = value;
    },
    updateObservations(value) {
      this.intervention.observations = value;
    },
    updateSignatureTechnicien(imageData) {
      this.intervention.signatureTechnicien = imageData;
    },
    updateSignatureClient(imageData) {
      this.intervention.signatureClient = imageData;
    }
  }
});