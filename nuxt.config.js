export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  env: {
    api_token: "Bearer 3711|8EF4wAHBiYaT6kayfcyDAgpL0FCAZkCsNSUFxUp4"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nora',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@fortawesome/fontawesome-free/css/all.css",
    "~/assets/style/style.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
    { src: '~/plugins/custom.js' },
	
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n'
  ],
  i18n:
  {
    lazy: true,
    langDir: 'locales/',
    strategy: "prefix_except_default",
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English',
        dir: 'ltr',
      },
      {
        code: 'ar',
        iso: 'ar-SA',
        file: 'ar.json',
        name: 'Arabic',
        dir: 'rtl',
      },
    ], vueI18n: {
      fallbackLocale: 'en',
    }, defaultLocale: 'en',
  },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://staging.materiel.sa/api/v3/',
	//prefix: '/api',
    credentials: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
