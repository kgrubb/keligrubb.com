<template>
  <section>
    <Nav />
    <KnaveWeapongen />
  </section>
</template>

<script>
import Nav from '../components/Nav.vue';
import KnaveWeapongen from '../components/KnaveWeapongen.vue';

export default {
  name: 'Knave Chargen',

  components: {
    Nav,
    KnaveWeapongen,
  },
};
</script>
