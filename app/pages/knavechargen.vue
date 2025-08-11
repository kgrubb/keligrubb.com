<template>
  <section>
    <Nav />
    <KnaveChargen />
  </section>
</template>

<script>
import Nav from '../components/Nav.vue';
import KnaveChargen from '../components/KnaveChargen.vue';

export default {
  name: 'Knave Chargen',

  components: {
    Nav,
    KnaveChargen,
  },
};
</script>
