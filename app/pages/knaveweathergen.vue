<template>
  <section>
    <NavigationBar />
    <KnaveWeathergen />
  </section>
</template>

<script>
import NavigationBar from '../components/Nav.vue';
import KnaveWeathergen from '../components/KnaveWeathergen.vue';

export default {
  name: 'KnaveWeathergenPage',

  components: {
    NavigationBar,
    KnaveWeathergen,
  },
};
</script>
