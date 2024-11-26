// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    // "head": {
    //   "viewport": "width=500, initial-scale=1",
    //   "title": "nuxt.config SEO title",
    //   "meta": [
    //     { "name": "description", "content": "nuxt.config SEO description" },
    //     { "property": "og:title", "content": "nuxt.config SEO og:title" },
    //     { "property": "og:url", "content": "nuxt.config SEO og:url" },
    //     { "property": "og:description", "content": "nuxt.config SEO og:description" },
    //   ],
    //   // 全域載入外部資源
    //   // link: [
    //   //   {
    //   //     rel: "stylesheet",
    //   //     href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    //   //   },
    //   // ],
    //   // script: [
    //   //   {
    //   //     src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
    //   //     async: true,
    //   //   },
    //   // ],
    // }
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

  // 環境變數
  runtimeConfig: {
    // 只能被 server 端讀取的環境變數
    // superSafeText: '只有伺服器端才可讀取',
    // safeName: '',
    
    
    // 可被 client, server 端讀取的環境變數
    // public: {
    //   superText: '客戶端、伺服器端皆可讀取',
    //   mizuName: '',
    // }
  },

  // auto import 的資料夾
  "imports": {
    "dirs": [
      'stores'
    ]
  },

  modules: ["@pinia/nuxt"]
})