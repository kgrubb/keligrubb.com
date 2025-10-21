<template>
  <section class="flex items-center justify-center min-h-screen bg-primary">
    <div class="container mx-auto px-4 text-center">
      <div class="mb-4">
        <h3 class="text-2xl font-bold text-white">A Weather Generator</h3>
      </div>
      <div class="flex justify-center mb-4">
        <img alt="designed for knave" width="256" src="../assets/designed_for_knave.png">
      </div>
      <div class="mb-4">
        <button class="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-6 py-2 rounded" @click="genWeather()">
          Reroll Weather
        </button>
      </div>
      <div>
        <br>
        <p class="text-white"> {{ randomWeather }} </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      randomWeather: '',
      weather: [
        {
          description: 'Polluted air.',
          effect: 'Con save every hour of DC 10, DC+1 each successive hour. On fail gain a level of exhaustion until you spend an hour in fresh air.',
          weight: 3,
        },
        {
          description: 'A wildfire burns nearby.',
          effect: 'Fire Storm or Wall of Fire if anyone gets too close.',
          weight: 2,
        },
        {
          description: 'Clear and sunny.',
          effect: 'A gentle breeze, having little or no effects.',
          weight: 6,
        },
        {
          description: 'Light rain.',
          effect: 'Rain automatically extinguishes candles, torches, and similar unprotected flames.',
          weight: 6,
        },
        {
          description: 'Severe thunderstorm.',
          effect: '10% chance of Call Lightning or Lightning Bolt.',
          weight: 3,
        },
        {
          description: 'Illusion storm.',
          effect: 'Everything is heavily obscured, tracks and flames are smothered. The party travels in a random direction instead of their intended course.',
          weight: 1,
        },
        {
          description: 'Light wind.',
          effect: 'A steady wind with a 50% chance of extinguishing candles, torches, and similar unprotected flames.',
          weight: 6,
        },
        {
          description: 'Heavy wind.',
          effect: 'Disadvantage on sight/hearing checks, and ranged weapon attack rolls. Extinguishes open flames, disperses fog, and makes flight impossible.',
          weight: 4,
        },
        {
          description: 'Dense Fog.',
          effect: 'Fog obscures all sight beyond 5 feet. Creatures 5 feet away have concealment (attacks by or against them have a 20% miss chance).',
          weight: 2,
        },
        {
          description: 'Tornado.',
          effect: 'Hearing is nearly impossible, as all that characters can hear is the roaring of the wind. All flames are automatically extinguished. The tornado causes major desctruction to trees and buildings nearby.',
          weight: 2,
        },
      ],
    };
  },
  mounted() {
    this.genWeather();
  },
  methods: {
    async genWeather() {
      const randomWeather = Math.floor(Math.random() * this.weather.length);
      const event = this.weather[randomWeather];
      this.randomWeather = `${event.description} ${event.effect}`;
    },
  },
};
</script>

<style scoped>
section {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
    url("../assets/knave.jpg");
  background-size: cover;
}
</style>
