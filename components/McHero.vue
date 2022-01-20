<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body has-bg-img">
      <div class="container is-fluid has-text-centered">
        <h1 class="title is-1">Want to play some minecraft with me?</h1>
        <h1
          class="title is-3 has-text-weight-light has-text-centered"
        >Download my modpack & follow its instructions to get started!</h1>
        <a
          class="button is-primary is-inverted is-outlined"
          :href="getLatestRelease"
          target="_blank"
        >Download Modpack</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    getLatestRelease() {
      const xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', 'https://api.github.com/repos/kgrubb/forge/releases/latest', false);
      xmlHttp.send(null);
      return JSON.parse(xmlHttp.responseText).assets[0].browser_download_url;
    },
  },
};
</script>
<style scoped>
.has-bg-img {
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.65)),
    url("../assets/minecraft.jpg");
  background-size: cover;
}
</style>
