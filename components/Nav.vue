<template>
  <nav
    class="navbar is-fixed-top is-transparent"
  >
    <div class="navbar-brand">
      <NuxtLink
        class="navbar-item"
        to="/"
      >
        <figure class="image is-24x24">
          <img
            class="is-rounded"
            alt="profile"
            src="../assets/profile.png"
          >
        </figure>
        <span class="is-bumped has-text-light">Home</span>
      </NuxtLink>
    </div>
    <div class="navbar-start">
      <NuxtLink
        to="/#projects"
        class="navbar-item has-text-light"
      >
        Projects
      </NuxtLink>
      <NuxtLink
        to="/minecraft"
        class="navbar-item has-text-light"
      >
        Minecraft
      </NuxtLink>
      <NuxtLink to="/knave" class="navbar-item has-text-light">
        Knave
      </NuxtLink>
    </div>
  </nav>
</template>
<style lang="scss" scoped>

.is-bumped {
  padding-left: 8px;
}
</style>
