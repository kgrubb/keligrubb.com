<template>
  <section>
    <Nav />
    <tes3mpHero />
  </section>
</template>

<script>
import Nav from '../components/Nav.vue';
import tes3mpHero from '../components/tes3mpHero.vue';

export default {
  name: 'TES3MP',

  components: {
    Nav,
    tes3mpHero,
  },
};
</script>
