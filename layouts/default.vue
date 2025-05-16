<template>
  <slot />
</template>
<style lang="scss">
@use "bulma/sass" with (
  $primary: #424874,
  $control-border-width: 0.125em,
  $custom-colors: (
    "darkish": (
      "color": #4a4a4a,
      "invert": #fff,
    )
  ),
  $link: #424874,
);

html {
  scroll-behavior: smooth;
  /*FireFox*/
  scrollbar-width: none;
}

body {
  padding-top: 0px !important;
}

.navbar {
  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
}
</style>
