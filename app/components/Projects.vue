<template>
  <section class="bg-gray-800 text-white py-16">
    <h1 class="text-4xl font-bold text-center pt-16">
      Some of the projects I've worked on:
    </h1>
    <div class="container mx-auto px-4 pt-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-full h-full">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/elementary"
            >
              <article class="bg-white rounded-lg shadow-md p-8 text-gray-800 hover:shadow-lg transition-shadow h-full flex flex-col">
                <div class="flex justify-center mb-6">
                  <img
                    alt="elementary os"
                    src="../assets/elementary.svg"
                    class="w-48 h-32 object-contain"
                  >
                </div>
                <p class="text-center flex-grow">
                  I am a regular contributor to elementary OS.
                </p>
              </article>
            </a>
          </div>
        </div>
        <div class="text-center">
          <div class="w-full h-full">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://microluxe20.com"
            >
              <article class="bg-white rounded-lg shadow-md p-8 text-gray-800 hover:shadow-lg transition-shadow h-full flex flex-col">
                <div class="flex justify-center mb-6">
                  <img
                    alt="microluxe20"
                    src="../assets/microluxe20.jpg"
                    class="w-48 h-32 object-cover rounded-lg"
                  >
                </div>
                <p class="text-center flex-grow">
                  I built my own tabletop game using NodeJS to generate pdf files.
                </p>
              </article>
            </a>
          </div>
        </div>
        <div class="text-center">
          <div class="w-full h-full">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hvzga.com"
            >
              <article class="bg-white rounded-lg shadow-md p-8 text-gray-800 hover:shadow-lg transition-shadow h-full flex flex-col">
                <div class="flex justify-center mb-6">
                  <img
                    alt="hvzga"
                    src="../assets/hvz.jpg"
                    class="w-48 h-32 object-cover rounded-lg"
                  >
                </div>
                <p class="text-center flex-grow">
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
  name: 'ProjectsSection',
};
</script>
