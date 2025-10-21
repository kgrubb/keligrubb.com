<template>
  <HeroSection background-image="minecraft.jpg" overlay-opacity="0.25">
    <h1 class="text-5xl font-bold text-white">
      Want to play some minecraft with me?
    </h1>
    <h1 class="text-3xl font-light text-center text-white">
      Download my modpack & follow its instructions to get started!
    </h1>
    <a
      class="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-6 py-2 rounded inline-block mt-4"
      :href="latestRelease"
      target="_blank"
    >Download Modpack</a>
  </HeroSection>
</template>
<script>
export default {
  data() {
    return {
      latestRelease: '',
    };
  },
  mounted() {
    this.getLatestRelease();
  },
  methods: {
    async getLatestRelease() {
      const res = await fetch('https://api.github.com/repos/kgrubb/forge/releases/latest');
      if (res.ok) {
        const data = await res.json();
        this.latestRelease = data.assets[1].browser_download_url;
        return data.assets[0].browser_download_url;
      }
      this.latestRelease = 'https://github.com/kgrubb/forge/releases';
      return 'https://github.com/kgrubb/forge/releases';
    },
  },
};
</script>
