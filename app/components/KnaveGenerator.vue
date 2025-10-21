<template>
  <HeroSection background-image="../assets/knave.jpg">
    <div class="mb-4">
      <h3 class="text-2xl font-bold text-white">{{ title }}</h3>
    </div>
    <div class="flex justify-center mb-4">
      <img alt="designed for knave" width="256" src="../assets/designed_for_knave.png">
    </div>
    <div class="mb-4">
      <button 
        class="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-6 py-2 rounded" 
        @click="$emit('generate')"
      >
        {{ buttonText }}
      </button>
    </div>
    <div>
      <br>
      <slot />
    </div>
  </HeroSection>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  },
  emits: ['generate']
}
</script>
