<template>
  <Nuxt />
</template>
<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #424874;
$light-invert: findColorInvert($light);
$primary-invert: findColorInvert($primary);
$darkish: #4a4a4a;
$darkish-invert: findColorInvert($darkish);
$control-border-width: 0.125em;

// Setup $colors to use as bulma classes (e.g. 'is-light-blue')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "darkish": (
    $darkish,
    $darkish-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
@import "@fortawesome/fontawesome-free/css/all.css";
html {
  scroll-behavior:smooth
}
body{
  padding-top: 0px!important;
}
.navbar {
  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
}
</style>
