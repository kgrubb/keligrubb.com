<template>
  <nav class="navbar is-fixed-top is-transparent">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/">
        <figure class="image is-24x24">
          <img
            class="is-rounded"
            alt="profile"
            src="../assets/profile.png"
          >
        </figure>
        <span class="is-bumped has-text-light">Home</span>
      </NuxtLink>
      <button @click="burger" class="button navbar-burger has-text-white is-hoverable"
        data-target="navMenu"
        v-bind:class="{ 'is-active': activator }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar-menu" id="navMenu" v-bind:class="{ 'is-active': activator }">
      <NuxtLink to="/#projects" class="navbar-item has-text-light">
        Projects
      </NuxtLink>
      <NuxtLink to="/minecraft" class="navbar-item has-text-light">
        Minecraft
      </NuxtLink>
      <NuxtLink to="/knave" class="navbar-item has-text-light">
        Knave
      </NuxtLink>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      msg: '',
      activator: false,
    };
  },
  methods: {
    closeBurger() {
      this.activator = false;
      return this.activator;
    },
    burger() {
      this.activator = !this.activator;
      return this.activator;
    },
  },
};
</script>
<style lang="scss" scoped>
.is-bumped {
  padding-left: 8px;
}

.navbar-menu, a.navbar-item:hover {
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
}
</style>
