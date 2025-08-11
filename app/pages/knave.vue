<template>
  <section>
    <Nav />
    <Knave />
  </section>
</template>

<script>
import Nav from '../components/Nav.vue';
import Knave from '../components/Knave.vue';

export default {
  name: 'Knave',

  components: {
    Nav,
    Knave,
  },
};
</script>
