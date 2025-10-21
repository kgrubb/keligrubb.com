<template>
  <section>
    <NavigationBar />
    <tes3mpHero />
  </section>
</template>

<script>
import NavigationBar from '../components/Nav.vue';
import tes3mpHero from '../components/tes3mpHero.vue';

export default {
  name: 'Tes3mpPage',

  components: {
    NavigationBar,
    tes3mpHero,
  },
};
</script>
