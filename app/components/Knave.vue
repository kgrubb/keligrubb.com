<template>
  <section class="flex items-center justify-center min-h-screen bg-primary">
    <div class="container mx-auto px-4">
      <div class="mb-4">
        <p class="text-center text-white">A list of generators</p>
      </div>
      <div class="flex justify-center mb-4">
        <img alt="designed for knave" width="256" src="../assets/designed_for_knave.png">
      </div>
      <br>
      <br>
      <div class="mb-4">
        <div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div class="flex justify-center">
            <button class="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-6 py-2 rounded">
              <NuxtLink class="text-white hover:text-primary" to="/knavechargen">Generate Character</NuxtLink>
            </button>
          </div>
          <div class="flex justify-center">
            <button class="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-6 py-2 rounded">
              <NuxtLink class="text-white hover:text-primary" to="/knaveweapongen">Generate Weapon</NuxtLink>
            </button>
          </div>
          <div class="flex justify-center">
            <button class="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-6 py-2 rounded">
              <NuxtLink class="text-white hover:text-primary" to="/knaveweathergen">Generate Weather</NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'KnaveSection',
};
</script>

<style scoped>
section {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
    url("../assets/knave.jpg");
  background-size: cover;
}
</style>
