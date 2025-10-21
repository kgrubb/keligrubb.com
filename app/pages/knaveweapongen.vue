<template>
  <section>
    <NavigationBar />
    <KnaveWeapongen />
  </section>
</template>

<script>
import NavigationBar from '../components/Nav.vue';
import KnaveWeapongen from '../components/KnaveWeapongen.vue';

export default {
  name: 'KnaveWeapongenPage',

  components: {
    NavigationBar,
    KnaveWeapongen,
  },
};
</script>
