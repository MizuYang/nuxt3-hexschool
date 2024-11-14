// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // 全域的樣式
  css: [
    '@/assets/style/modules/_bootstrap.scss'
  ],

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
  }
})
