// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    "head": {
      "viewport": "width=500, initial-scale=1",
      "title": "nuxt.config SEO title",
      "meta": [
          { "name": "description", "content": "nuxt.config SEO description" },
          { "property": "og:title", "content": "nuxt.config SEO og:title" },
          { "property": "og:url", "content": "nuxt.config SEO og:url" },
          { "property": "og:description", "content": "nuxt.config SEO og:description" },
      ]
    }
  },

  // 全域的樣式
  css: [
    '@/assets/style/modules/_bootstrap.scss'
  ],

  // "components": {
  //   "dirs": [
  //     {
  //       path: '@/components/global', // 可被 auto import 的資料夾
  //       // global: true
  //       // global: false
  //     },
  //     // "@/components/global",  // 區域註冊
  //   ]
  // }

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            // 匯入所有 SCSS 變數
            @import "@/assets/style/modules/_variables.scss";
          `,
        },
      },
    },
  },

  // auto import 的資料夾
  "imports": {
    "dirs": [
      'stores'
    ]
  },

  modules: ["@pinia/nuxt"]
})