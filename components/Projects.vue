<template>
  <section class="hero is-dark is-medium">
    <h1 class="title has-text-centered is-pushed-down">
      Some of the projects I've worked on:
    </h1>
    <div class="hero-body is-pushed-up">
      <div class="columns">
        <div
          class="column has-text-centered"
        >
          <div class="container is-fluid">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/elementary"
            >
              <article class="box">
                <div class="level-item">
                  <figure class="image is-128x128">
                    <img
                      alt="elementary os"
                      src="../assets/elementary.svg"
                    >
                  </figure>
                </div>
                <br>
                <p class="has-text-centered">
                  I am a regular contributor to elementary OS.
                </p>
                <br>
              </article>
            </a>
          </div>
        </div>
        <div
          class="column has-text-centered"
        >
          <div class="container is-fluid">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://microluxe20.com"
            >
              <article class="box">
                <div class="level-item">
                  <figure class="image is-128x128">
                    <img
                      alt="microluxe20"
                      src="../assets/microluxe20.jpg"
                      class="is-bordered"
                    >
                  </figure>
                </div>
                <br>
                <p class="has-text-centered">
                  I built my own tabletop game using NodeJS to generate pdf files.
                </p>
              </article>
            </a>
          </div>
        </div>
        <div
          class="column has-text-centered"
        >
          <div class="container is-fluid">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hvzga.com"
            >
              <article class="box">
                <div class="level-item">
                  <figure class="image is-128x128">
                    <img
                      alt="hvzga"
                      src="../assets/hvz.jpg"
                      class="is-bordered"
                    >
                  </figure>
                </div>
                <br>
                <p class="has-text-centered">
                  I'm a moderator and site owner for a yearly Humans vs Zombies Invitational.
                </p>
              </article>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Projects',
};
</script>
<style scoped>
.is-bordered {
border-radius: 0.35rem;
}
.is-pushed-down {
  padding-top: 4rem;
}
.is-pushed-up {
  padding-top: 4rem !important;
}

</style>
