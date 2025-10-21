<template>
  <section>
    <NavigationBar />
    <KnaveChargen />
  </section>
</template>

<script>
import NavigationBar from '../components/Nav.vue';
import KnaveChargen from '../components/KnaveChargen.vue';

export default {
  name: 'KnaveChargenPage',

  components: {
    NavigationBar,
    KnaveChargen,
  },
};
</script>
