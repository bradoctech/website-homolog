// routerBase default value = "/"
const routerBase = '/website-homolog/'

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Ai Solutions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Ai Solutions é uma empresa focada no desenvolvimento de soluções tecnológicas com inteligência artificial e machine Learning.'
      },
      { hid: 'og:title', name: 'og:title', content: 'Ai Solutions' },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Ai Solutions é uma empresa focada no desenvolvimento de soluções tecnológicas com inteligência artificial e machine Learning.'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: routerBase + 'icon.png'
      },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Ai Solutions' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:locale', name: 'og:locale', content: 'pt_BR' }
    ],
    link: [
      // {
      //   rel: "icon",
      //   type: "image/x-icon",
      //   href: routerBase + "favicon.ico"
      // }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: 'bootstrap/dist/css/bootstrap.min.css', lang: 'css' },
    { src: '@fortawesome/fontawesome-free/css/all.min.css', lang: 'css' },
    { src: 'animate.css/animate.min.css', lang: 'css' },
    { src: '~assets/app/app.css', lang: 'css' },
    { src: 'animate.css/animate.min.css', lang: 'css' },
    { src: 'owl.carousel/dist/assets/owl.carousel.css', lang: 'css' },
    { src: 'owl.carousel/dist/assets/owl.theme.default.css', lang: 'css' },
    { src: '~/assets/css/Chart.min.css', lang: 'css' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/theme.js'],
  /*
   ** Router Base Path
   * */
  router: {
    base: routerBase,
    linkActiveClass: 'current-menu-item',
    linkExactActiveClass: 'current-menu-item'
  },
  // Static Deployment
  target: 'static',
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    /* "@nuxtjs/eslint-module" */
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // RealFaviconGenerator Favicon's for NUXT
    // https://github.com/pimlie/nuxt-rfg-icon
    ['nuxt-rfg-icon', { masterPicture: 'static/icon.svg' }],
    '@nuxtjs/manifest'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extractCSS: {
    //   allChunks: true,
    // },
    optimization: {
      // minimize: true,
      // minimizer: [
      //   // terser-webpack-plugin
      //   // optimize-css-assets-webpack-plugin
      // ],
      // splitChunks: {
      //   chunks: 'all',
      //   automaticNameDelimiter: '.',
      //   name: undefined,
      //   cacheGroups: {}
      // }
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    // vendor: ["jquery", "bootstrap"],
    extend (config, ctx) {},
    babel: {
      compact: true,
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  },
  server: {
    port: 5020 // default: 3000
  },
  // disabling nuxt telemetry: https://github.com/nuxt/telemetry#opting-out
  telemetry: false
}
