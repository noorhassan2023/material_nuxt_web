export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  mode: 'universal',
  ssr: true,

  env: {
    api_token: 'Bearer 3711|8EF4wAHBiYaT6kayfcyDAgpL0FCAZkCsNSUFxUp4',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Material',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'material',
      },
      {
        name: 'google-site-verification',
        content: 'pP3gilFAJXRkTCnRwZjSmm7RFgYyiaFPHEVpK_qgYMo',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.3.1.min.js',
        type: 'text/javascript',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        type: 'text/javascript',
      },
      {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
        type: 'text/javascript',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-free/css/all.css',
    '~/assets/style/style.css',
    '~/assets/style/style_edit.css',
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
    '@nuxtjs/i18n',
    '@nuxtjs/toast',
  ],

  //vuetify object instance
  // vuetify: {
  //   customVariables: ['~/assets/variables.scss'],
  //   components: {
  //     VSkeletonLoader
  //   }
  // },

  //toast object instance
  toast: {
    position: 'top-center',
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
        },
      },
    ],
  },

  //i18n object instance

  i18n: {
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
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
    ],
    vueI18n: {
      fallbackLocale: 'en',
    },
    defaultLocale: 'en',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://staging.materiel.sa/api/v3/',
    //prefix: '/api',
    credentials: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
}
