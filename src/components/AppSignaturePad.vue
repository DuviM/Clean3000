      <script>
      
      export default {
        name: "App",
        data: () => ({
          options: {
            penColor: "#c0f",
          },
        }),
        methods: {
          undo() {
            this.$refs.signaturePad.undoSignature();
          },
          save() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();

            console.log(isEmpty);
            console.log(data);
          },
          change() {
            this.options = {
              penColor: "#00f",
            };
          },
          resume() {
            this.options = {
              penColor: "#c0f",
            };
          },
        },
      };
      </script>

<script setup>
import AppButton from './AppButton.vue';

</script>
      
<template>
  <div class="flex flex-col items-center">
    <div class="container">
      <VueSignaturePad
        id="signature"
        ref="signaturePad"
        :options="options"
        class="bg-gray-50 rounded"
      />
    </div>
    <!-- <div class="flex flex-row"> -->
      <div class="flex flex-row mt-8">
        <AppButton @click="undo" class="text-xs">Undo</AppButton>
        <AppButton @click="save" class="text-xs">Save</AppButton>
      </div>
      <!-- <div class="flex flex-col md:flex-row">
        <AppButton @click="change" class="text-xs">Change</AppButton>
        <AppButton @click="resume" class="text-xs">Resume</AppButton>
      </div> -->
    <!-- </div> -->
  </div>
</template>
