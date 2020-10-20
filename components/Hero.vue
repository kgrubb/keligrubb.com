<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container is-fluid">
        <h1 class="title is-1 has-text-centered">
          Hi! I'm Keli Grubb.
        </h1>
        <h1 class="title is-3 has-text-weight-light has-text-centered">
          I'm {{ calculateAge }} and live in <a
            class="has-text-light"
            href="https://goo.gl/maps/USRax4VdsGRMZJuQ7"
          >Atlanta, Georgia</a>.
        </h1>

        <br>
        <h1 class="title is-4 has-text-weight-light has-text-centered">
          I'm {{ hobby }}.
        </h1>
        <br>
        <div class="has-text-centered">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/itsmekeli"
            class="has-text-light"
          >
            <span class="icon is-large">
              <i class="fab fa-lg fa-twitter" />
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitch.tv/socialsyndrome"
            class="has-text-light"
          >
            <span class="icon is-large">
              <i class="fab fa-lg fa-twitch" />
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kgrubb"
            class="has-text-light"
          >
            <span class="icon is-large">
              <i class="fab fa-lg fa-github" />
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gitlab.com/madison.grubb"
            class="has-text-light"
          >
            <span class="icon is-large">
              <i class="fab fa-lg fa-gitlab" />
            </span>
          </a><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/madisongrubb"
            class="has-text-light"
          >
            <span class="icon is-large">
              <i class="fab fa-lg fa-linkedin" />
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://soundcloud.com/atlasfuture"
            class="has-text-light"
          >
            <span class="icon is-large">
              <i class="fab fa-lg fa-soundcloud" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      age: '',
      hobbies: [
        'an os developer',
        'an ops nerd',
        'a pink starburst fanatic',
        'a tabletop adventurer',
        'a husband',
        'a shell wizard',
        'an ableton producer',
        'a wildberry poptarts fan',
        'a Pokémon master',
        'a lego builder',
        'a father',
        'a developer',
        'a jelly bean connoisseur',
        'a javascript developer',
        'a fan of golang',
        'an open source advocate',
        'a proponent of strong ci/cd practice',
        'an automator',
        'definitely not a robot',
        'an AOSP tinkerer',
        'a linux gamer',
        'a maintainer of various open source docker images',
        'a tabletop battlemaps artist',
        'a kubernetes engineer',
        'an app developer',
        'a Humans vs Zombies Moderator',
      ],
      hobbyIndex: 0,
      hobby: 'a software engineer',
    };
  },
  computed: {
    calculateAge() {
      const birthday = new Date('03/24/1993');
      const ageDifMs = Date.now() - birthday.getTime();
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
  },
  mounted() {
    this.cycleHobbies();
  },
  methods: {
    cycleHobbies() {
      return setInterval(() => {
        if (this.hobbyIndex === this.hobbies.length) {
          this.hobbyIndex = 0;
        }
        this.hobby = this.hobbies[this.hobbyIndex];
        this.hobbyIndex += 1;
        return this.hobby;
      }, 2000);
    },
  },
};
</script>
