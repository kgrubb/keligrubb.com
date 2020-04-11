<template>
  <b-navbar
    :fixed-top="true"
    class="is-transparent"
    :mobile-burger="false"
  >
    <template slot="brand">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
      >
        <figure class="image is-24x24">
          <img
            class="is-rounded"
            src="../assets/profile.png"
          >
        </figure>
        <span class="is-bumped has-text-light">Home</span>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item
        href="#projects"
        class="has-text-light"
      >
        Projects
      </b-navbar-item>
      <!-- <b-navbar-item
        href="#resume"
        class="has-text-light"
      >
        Resume
      </b-navbar-item> -->
    </template>
  </b-navbar>
</template>
<style lang="scss" scoped>

.is-bumped {
  padding-left: 8px;
}
</style>
