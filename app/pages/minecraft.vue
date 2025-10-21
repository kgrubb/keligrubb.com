<template>
  <section>
    <NavigationBar />
    <McHero />
  </section>
</template>

<script>
import NavigationBar from '../components/Nav.vue';
import McHero from '../components/McHero.vue';

export default {
  name: 'MinecraftPage',

  components: {
    NavigationBar,
    McHero,
  },
};
</script>
