<template>
  <section class="flex items-center justify-center min-h-screen bg-primary">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold text-center text-white">
        Hi! I'm Keli Grubb.
      </h1>
      <h1 class="text-3xl font-light text-center text-white">
        I'm {{ calculateAge }} and live in <a
          class="text-white hover:text-gray-300"
          href="https://maps.app.goo.gl/QMNiUTTbadga9HTW9"
        >Macon, Georgia</a>.
      </h1>

      <br>
      <h1 class="text-2xl font-light text-center text-white">
        I'm {{ hobby }}.
      </h1>
      <br>
      <div class="text-center">
        <a target="_blank" rel="noopener noreferrer" href="https://mastodon.online/@itsmekeli" class="text-white hover:text-gray-300">
          <span class="inline-block mx-2">
            <font-awesome-icon icon="fa-brands fa-mastodon" class="fa-xl" />
          </span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitch.tv/socialsyndrome" class="text-white hover:text-gray-300">
          <span class="inline-block mx-2">
            <font-awesome-icon icon="fa-brands fa-twitch" class="fa-xl" />
          </span>
        </a>
        <!-- <a target="_blank" rel="noopener noreferrer" href="https://github.com/kgrubb" class="text-white hover:text-gray-300">
          <span class="inline-block mx-2">
            <font-awesome-icon icon="fa-brands fa-github" class="fa-xl" />
          </span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/madison.grubb" class="text-white hover:text-gray-300">
          <span class="inline-block mx-2">
            <font-awesome-icon icon="fa-brands fa-gitlab" class="fa-xl" />
          </span>
        </a> -->
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/madisongrubb" class="text-white hover:text-gray-300">
          <span class="inline-block mx-2">
            <font-awesome-icon icon="fa-brands fa-linkedin" class="fa-xl" />
          </span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/atlasfuture" class="text-white hover:text-gray-300">
          <span class="inline-block mx-2">
            <font-awesome-icon icon="fa-brands fa-soundcloud" class="fa-xl" />
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HeroSection',
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
        'a nerf blaster modifier',
        'an airsoft enthusiast',
        'a homelabber',
        'a 3d-printer-er',
        'a casual enjoyer of software defined radio',
        'a milsim nerd',
        'a hobby drone pilot',
        'a rustacean',
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
