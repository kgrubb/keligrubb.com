<template>
  <section>
    <Nav />
    <KnaveWeathergen />
  </section>
</template>

<script>
import Nav from '../components/Nav.vue';
import KnaveWeathergen from '../components/KnaveWeathergen.vue';

export default {
  name: 'Knave Chargen',

  components: {
    Nav,
    KnaveWeathergen,
  },
};
</script>
