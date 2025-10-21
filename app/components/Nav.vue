<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-transparent">
    <div class="flex items-center px-4 py-3">
      <!-- Logo/Brand -->
      <NuxtLink class="flex items-center text-white hover:text-gray-300 mr-8" to="/">
        <img
          class="w-6 h-6 rounded-full"
          alt="profile"
          src="../assets/profile.png"
        >
        <span class="ml-2">Home</span>
      </NuxtLink>
      
      <!-- Navigation Links -->
      <div class="flex items-center space-x-6">
        <NuxtLink to="/#projects" class="text-white hover:text-gray-300 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200">
          Projects
        </NuxtLink>
        <NuxtLink to="/minecraft" class="text-white hover:text-gray-300 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200">
          Minecraft
        </NuxtLink>
        <NuxtLink to="/knave" class="text-white hover:text-gray-300 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200">
          Knave
        </NuxtLink>
      </div>
      
      <!-- Mobile toggle button -->
      <button 
        @click="burger" 
        class="ml-auto md:hidden text-white hover:text-gray-300 p-2"
        :class="{ 'active': activator }"
      >
        <div class="w-6 h-6 flex flex-col justify-center space-y-1">
          <span class="block w-full h-0.5 bg-white transition-all duration-300" :class="{ 'rotate-45 translate-y-1.5': activator }"></span>
          <span class="block w-full h-0.5 bg-white transition-all duration-300" :class="{ 'opacity-0': activator }"></span>
          <span class="block w-full h-0.5 bg-white transition-all duration-300" :class="{ '-rotate-45 -translate-y-1.5': activator }"></span>
        </div>
      </button>
    </div>
    
    <!-- Mobile menu -->
    <div class="md:hidden bg-black bg-opacity-90" v-show="activator">
      <div class="px-4 py-2 space-y-2">
        <NuxtLink to="/#projects" class="block text-white hover:text-gray-300 px-4 py-2" @click="closeBurger">
          Projects
        </NuxtLink>
        <NuxtLink to="/minecraft" class="block text-white hover:text-gray-300 px-4 py-2" @click="closeBurger">
          Minecraft
        </NuxtLink>
        <NuxtLink to="/knave" class="block text-white hover:text-gray-300 px-4 py-2" @click="closeBurger">
          Knave
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      msg: '',
      activator: false,
    };
  },
  methods: {
    closeBurger() {
      this.activator = false;
      return this.activator;
    },
    burger() {
      this.activator = !this.activator;
      return this.activator;
    },
  },
};
</script>
