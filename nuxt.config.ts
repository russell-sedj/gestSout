// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ["@sidebase/nuxt-auth", "@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      currentYear: "2023-2024",
    },
  },

  auth: {
    enableGlobalAppMiddleware: true,
  },

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Les pages utilisent `await $fetch` au niveau supérieur du <script setup>.
  // On cible les navigateurs modernes pour que Vite accepte le top-level await.
  vite: {
    build: {
      target: "esnext",
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },
});
