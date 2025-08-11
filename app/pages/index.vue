<template>
  <section>
    <Nav />
    <Hero />
    <Projects id="projects" />
  </section>
</template>

<script>
import Nav from '../components/Nav.vue';
import Hero from '../components/Hero.vue';
import Projects from '../components/Projects.vue';

export default {
  name: 'HomePage',

  components: {
    Nav,
    Hero,
    Projects,
  },
};
</script>
