import { $content } from '@nuxt/content'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Satofactoin.net | Fumihiko Sato Portfolio',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/normal.scss',
    '@/assets/scss/common.scss',
    '@/assets/scss/nuxt_content.scss',
    '@mdi/font/css/materialdesignicons.css',
  ],
  styleResources: {
    scss: ['@/assets/scss/variables.scss', '@/assets/scss/mixin.scss'],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/pixi', ssr: false },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    ['@nuxtjs/moment', ['ja']],
    'nuxt-webfontloader',
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap',
  ],
  webfontloader: {
    custom: {
      families: ['Noto Sans JP'],
      urls: [
        'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap',
      ],
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {},
  },
  'google-gtag': { id: 'G-L23H14FV4P' },
  sitemap: {
    hostname: 'https://satofaction.net',
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const blog = await $content('blog').only(['path']).fetch()
      const portfolio = await $content('portfolio').only(['path']).fetch()

      const content = [
        blog.map((p) => p.path),
        portfolio.map((p) => p.path),
      ].flat()

      return content
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        [
          '@babel/plugin-proposal-private-methods',
          {
            loose: true,
          },
        ],
      ],
    },
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
      })
    },
  },
  router: {
    base: '/',
  },
}
