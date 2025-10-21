<template>
  <section>
    <NavigationBar />
    <Hero />
    <ProjectsSection id="projects" />
  </section>
</template>

<script>
import NavigationBar from '../components/Nav.vue';
import Hero from '../components/Hero.vue';
import ProjectsSection from '../components/Projects.vue';

export default {
  name: 'HomePage',

  components: {
    NavigationBar,
    Hero,
    ProjectsSection,
  },
};
</script>
