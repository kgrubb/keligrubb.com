<template>
  <slot />
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style>
html {
  scroll-behavior: smooth;
  /*FireFox*/
  scrollbar-width: none;
}

body {
  padding-top: 0px !important;
}
</style>
