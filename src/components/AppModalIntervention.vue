<script setup>
const props = defineProps({
  show: Boolean
})


</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="fixed bg-black bg-opacity-50 z-50 top-0 left-0 h-full w-full flex transition-opacity ease-in-out duration-300" @click.self="$emit('close')">
      <div class="w-full max-w-7xl m-auto py-[20px] px-[30px] bg-gray-700 rounded transition-all ease-in-out duration-300 shadow-xl">
        <div class="modal-header">
          <slot name="header">            
          </slot>
        </div>

        <div class="my-[20px] mx-0">
          <slot />
        </div>

        <div class="modal-footer">
          <slot name="footer">
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>