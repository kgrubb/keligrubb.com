<template>
  <section>
    <NavigationBar />
    <MinecloniaHero />
  </section>
</template>

<script>
import NavigationBar from '../components/Nav.vue';
import MinecloniaHero from '../components/MinecloniaHero.vue';

export default {
  name: 'MinecloniaPage',

  components: {
    NavigationBar,
    MinecloniaHero,
  },
};
</script>
