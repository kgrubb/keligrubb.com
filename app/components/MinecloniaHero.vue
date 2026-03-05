<template>
  <HeroSection :background-image="background" overlay-opacity="0.25" overlay-opacity-end="0.5">
    <div class="w-full max-w-xl mx-auto px-4 py-12 sm:py-16 space-y-8">
      <div class="text-center">
        <h1 class="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">Want to play Mineclonia with me?</h1>
        <a
          href="https://www.luanti.org/en/downloads/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium
            text-primary shadow-lg transition hover:bg-white/95 focus:outline-none focus:ring-2
            focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Download Luanti
        </a>
      </div>

      <div class="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl overflow-hidden">
        <div class="p-8 sm:p-10 text-left">
          <p class="text-white/70 text-sm font-medium mb-6">How to connect</p>
          <ol class="space-y-6 list-none pl-0">
            <li class="flex gap-4">
              <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white text-xs font-medium tabular-nums">1</span>
              <p class="text-white/90 text-sm leading-relaxed pt-0.5">Open Luanti and select <strong class="text-white font-medium">Join Game</strong>.</p>
            </li>
            <li class="flex gap-4">
              <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white text-xs font-medium tabular-nums">2</span>
              <div class="min-w-0 flex-1 pt-0.5">
                <p class="text-white/90 text-sm mb-2">Add this address:</p>
                <div class="flex items-center gap-2 flex-wrap">
                  <code class="font-mono text-sm text-white/95 bg-white/5 border border-white/10 rounded-md px-3 py-2 select-all">mc.keligrubb.com</code>
                  <button
                    type="button"
                    aria-label="Copy server address"
                    class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20
                      bg-white/5 text-white/90 transition hover:bg-white/10 focus:outline-none
                      focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black/20"
                    @click="copy"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                  </button>
                </div>
                <p role="status" aria-live="polite" class="sr-only">{{ copied ? 'Copied.' : '' }}</p>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white text-xs font-medium tabular-nums">3</span>
              <p class="text-white/90 text-sm leading-relaxed pt-0.5"><strong class="text-white font-medium">Register</strong> or <strong class="text-white font-medium">Login</strong>. See you there!</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </HeroSection>
</template>

<script>
import minecraftBg from '../assets/minecraft.jpg';

const A = 'mc.keligrubb.com';
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

export default {
  name: 'MinecloniaHero',
  data: () => ({ copied: false, resetTimerId: null, background: minecraftBg }),
  beforeUnmount() { clearTimeout(this.resetTimerId); },
  methods: {
    copy() {
      clearTimeout(this.resetTimerId);
      copyToClipboard(A).then(() => {
        this.copied = true;
        this.resetTimerId = setTimeout(() => { this.copied = false; this.resetTimerId = null; }, 2000);
      });
    },
  },
};
</script>
