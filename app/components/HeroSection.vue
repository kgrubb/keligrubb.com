<template>
  <section class="flex items-center justify-center min-h-screen bg-primary" :style="backgroundStyle">
    <div class="container mx-auto px-4 text-center">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      default: ''
    },
    overlayOpacity: {
      type: String,
      default: '0.5'
    }
  },
  computed: {
    backgroundStyle() {
      if (this.backgroundImage) {
        return {
          background: `linear-gradient(rgba(0, 0, 0, ${this.overlayOpacity}), rgba(0, 0, 0, 0.9)), url("/_nuxt/assets/${this.backgroundImage}")`,
          backgroundSize: 'cover'
        }
      }
      return {}
    }
  }
}
</script>
