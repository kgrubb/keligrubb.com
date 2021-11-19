<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body has-bg-img">
      <div class="container is-fluid has-text-centered">
        <h1 class="title is-1">
          Morrowind. Multiplayer. Crazy, right?
        </h1>
        <h1 class="title is-5 has-text-weight-light has-text-centered">
          To get started, download TES3MP, unzip it, and start openmw-wizard.
        </h1>
        <h1 class="title is-5 has-text-weight-light has-text-centered">
          In the wizard, browse and select the
          <span class="has-text-grey-light is-family-monospace">
            Morrowind.esm
          </span>
          file in the
          <span class="has-text-grey-light is-family-monospace">
            Data Files
          </span>
          folder.
        </h1>
        <h1 class="title is-5 has-text-weight-light has-text-centered">
          Now you can start playing by running
          <span class="has-text-grey-light is-family-monospace">
            tes3mp.exe
          </span>
        </h1>

        <a
          class="button is-primary is-inverted is-outlined"
          href="https://drive.google.com/u/0/uc?export=download&confirm=H0rv&id=1ftgA9DBSXjaxk_SoGzMoS414oNS4qI1l"
          target="_blank"
        >
          Download TES3MP
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped>
.has-bg-img {
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.6)
), url('../assets/tes3mp.jpg');
background-size: cover;
}
</style>
