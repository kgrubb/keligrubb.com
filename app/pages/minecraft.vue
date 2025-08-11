<template>
  <section>
    <Nav />
    <McHero />
  </section>
</template>

<script>
import Nav from '../components/Nav.vue';
import McHero from '../components/McHero.vue';

export default {
  name: 'Minecraft',

  components: {
    Nav,
    McHero,
  },
};
</script>
