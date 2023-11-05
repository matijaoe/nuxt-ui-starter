export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/devtools",
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
  ],

  ui: {
    global: true,
    icons: ["ph", "simple-icons"],
  },

  experimental: {
    typedPages: true,
  },

  fontMetrics: {
    fonts: ["DM Sans"],
  },

  googleFonts: {
    display: "swap",
    download: true,
    families: {
      "DM+Sans": [400, 500, 600, 700],
    },
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  postcss: {
    plugins: {
      "postcss-nesting": {},
    },
  },

  app: {
    head: {
      title: "Nuxt Starter",
    },
  },

  devtools: {
    enabled: true,
  },
});
