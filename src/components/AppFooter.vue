<script setup>
  import {ref} from 'vue';    
</script>

<template>
  <footer>
    <hr  class="mx-24 bg-gray-50  border">
    <div class="flex items-center justify-center mt-5">
      <p class="text-gray-50 mt-5">Copyrigth © {{ new Date().getFullYear() }}.</p>
      <img src="../assets/images/logo-clean3000-transparent.png" alt="logo" class="h-[35px]">    

    </div>
  </footer>
</template>