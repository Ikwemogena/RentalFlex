// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/supabase',
    'nuxt-swiper'
  ],
  app: {
    head: {
      title: "Shortlet ",
      meta: [
        {name: 'description', content: 'TO-DO template'}
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/main.css',
  },
  supabase: {
    // Options
    redirect: false,
    // redirectOptions: {
    //   login: '/login',
    //   callback: '/confirm',
    //   exclude: [],
    // }
  },
})
