<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body has-bg-img">
      <div class="container is-fluid">
        <div class="block">
          <p class="has-text-centered">A list of generators</p>
        </div>
        <div class="block level-item has-text-centered">
          <img alt="designed for knave" width="256" src="../assets/designed_for_knave.png">
        </div>
        <br>
        <br>
        <div class="block">
          <div class="level">
            <div class="level-item">
              <button class="button is-primary is-inverted is-outlined">
                <NuxtLink to="/knavechargen">Generate Character</NuxtLink>
              </button>
            </div>
            <div class="level-item">
              <button class="button is-primary is-inverted is-outlined">
                <NuxtLink to="/knaveweapongen">Generate Weapon</NuxtLink>
              </button>
            </div>
            <div class="level-item">
              <button class="button is-primary is-inverted is-outlined">
                <NuxtLink to="/knaveweathergen">Generate Weather</NuxtLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.has-bg-img {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
    url("../assets/knave.jpg");
  background-size: cover;
}
</style>
