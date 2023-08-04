//import vuetifyOptions from './vuetify.options'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
  ssr: true,

  head: {
    titleTemplate: '%s - Grand Community',
    title: 'Grand',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
    ],
  },
  // head() {

  //   // const metaData = getMeta('default', this.$i18n?.locale)
  //   const lang = this.$i18n?.locale || 'en'
  //   const defaultSeo = {
  //     title: {
  //       ar: ' جراند كومينتي',
  //       en: 'Grand Community'
  //     },
  //     longTitle: {
  //       ar: 'منصة تجمع العلامات التجارية والمؤثرين في مكان واحد لتحقيق حملات تسويقية مبتكرة!',
  //       en: "Bring your marketing goals to life with the best influencer marketing campaigns."
  //     },
  //     description: {
  //       ar: 'جراند كومينتي هي المنصة الأولى للتسويق وإدارة الحملات التسويقية من خلال المؤثرين، اشترك الآن مع حملات تسويقية بالتعاون مع المؤثرين المشاهير وابدأ الحملة في 24 ساعة فقط',
  //       en: "Grand Community, the top influencer marketing and campaign management platform, Grow your business now with persuasive campaigns lead by worldwide celebrities."
  //     },
  //     keywords: { ar: 'influencers marketing', en: "influencers marketing" },
  //     image: 'https://kw.grand-community.com/assets/images/home.png'
  //   }

  //   return {
  //     titleTemplate: `%s - ${defaultSeo.title[lang]}`,
  //     title: defaultSeo.longTitle[lang],
  //     meta: [
  //       {
  //         charset: 'utf-8',
  //       },
  //       {
  //         name: 'viewport',
  //         content: 'width=device-width, initial-scale=1',
  //       },
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: defaultSeo.description[lang],
  //       },
  //       {
  //         hid: 'keywords',
  //         name: 'keywords',
  //         content: defaultSeo.keywords[lang],
  //       },
  //       {
  //         name: 'format-detection',
  //         content: 'telephone=no',
  //       },
  //     ],
  //     link: [
  //       {
  //         rel: 'icon',
  //         type: 'image/x-icon',
  //         href: '/favicon.png',
  //       },
  //     ],
  //   }
  // },

// Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@fortawesome/fontawesome-free/css/all.css",
    "~/assets/style/style.css",
    "~/assets/style/style_edit.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
    { src: '~/plugins/custom.js' },
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    // https://go.nuxtjs.dev/vuetify


   // 'nuxt-gsap-module',
  ],

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done,
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done,
      })
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules

   modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
	 '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
	  '@nuxtjs/toast',
	
	['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
  

  // Axios module configuration
  axios: {
    // proxy: true,
    withCredentials: true,
    baseURL: process.env.API_URL,
  },
  // -------------------------


  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    defaultDirection: 'ltr',
    lazy: true,
    langDir: 'locales/',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        dir: 'ltr',
      },
      {
        code: 'ar',
        iso: 'ar-EG',
        file: 'ar.json',
        dir: 'rtl',
      },
    ],
    vueI18n: {
      fallbackLocale: 'en',
    },
    detectBrowserLanguage: false,
  },

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },
  // Middleware
  // serverMiddleware: [],
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  // devtools: true,
  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
}
