<template>
  <section>
    <NavigationBar />
    <Knave />
  </section>
</template>

<script>
import NavigationBar from '../components/Nav.vue';
import Knave from '../components/Knave.vue';

export default {
  name: 'KnavePage',

  components: {
    NavigationBar,
    Knave,
  },
};
</script>
