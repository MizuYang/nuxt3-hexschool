<script setup>
// import RenameMenu from '@/components/global/Menu.vue'
// import AboutHeader from '@/components/About/Header.vue'
// import Test from '@/components/Test.vue'

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";


// stores
// import { useUserStore } from '@/stores/useUserStore.js'

// composables
const { count, increment, decrement } = useCounter()
const { newsList } = useHome()

// stores
const userStore = useUserStore()
const { userName } = storeToRefs(userStore)
const { reverseName } = userStore

const loadingStore = useLoadingStore()
const { isLoading } = storeToRefs(loadingStore)

// 環境變數
// 1. 在 runtimeConfig 定義環境變數
// const runtimeConfig = useRuntimeConfig()
// //  console.log('runtimeConfig: ', runtimeConfig)
// if (process.server) {
//   // 只有伺服器端才能被讀取
//   console.log('1只有伺服器端才能被讀取: ', runtimeConfig.superSafeText)
// }
// if (process.client) {
//   console.log('2只有客戶端能被讀取: ', runtimeConfig.public.superText)
// }
// // 客戶端和伺服器端都能被讀取
// console.log('3客戶端和伺服器端都能被讀取: ', runtimeConfig.public.superText)

// 2. 使用 .env 定義環境變數
// if (process.server) {
//   // 只有伺服器端才能被讀取
//   console.log('1只有伺服器端才能被讀取: ', runtimeConfig.safeName)
// }
// if (process.client) {
//   console.log('2只有客戶端能被讀取: ', runtimeConfig.public.mizuName)
// }

// 3. 使用 vite define env 定義環境變數
// console.log(process.env.NUXT_SAFE_NAME)
// console.log(process.env.NUXT_PUBLIC_MIZU_NAME)

// if (import.meta.client) {
//   console.log('只有客戶端讀取的到')
// }
// if (import.meta.server) {
//   console.log('只有伺服器端讀取的到')
// }


function changeLayout(lauoytName) {
  setPageLayout(lauoytName)
}
</script>

<template>
  <div>
    <h1>最外層首頁</h1>

    <!-- 動態切換 layout -->
    <div>
      <button type="button" @click="changeLayout('default')">切換默認 layout</button>
      <button type="button" @click="changeLayout('main-layout')">切換主要 layout</button>
    </div>

    <!-- component.client -->
    <ClientOnly>
      <Box />
    </ClientOnly>


    <!-- NuxtLink -->
    <div>
      <h2>NuxtLink</h2>
      <!-- _self（預設）：在當前瀏覽器視窗打開連結。 -->
      <NuxtLink to="/admin" target="_self">target="在當前瀏覽器視窗打開連結。: _self"</NuxtLink>
      <br />

      <!-- _blank：在新頁籤打開連結。 -->
      <NuxtLink to="/admin" target="在新頁籤打開連結。: _blank">target="_blank"：在新頁籤打開連結。</NuxtLink>
      <br />

      <!-- _parent：在上一層父層視窗打開連結。 -->
      <NuxtLink to="/admin" target="_parent">在上一層父層視窗打開連結。: target="_parent"</NuxtLink>
      <br />

      <!-- _top：在最頂層父層視窗打開連結。 -->
      <NuxtLink to="/admin" target="_top">在最頂層父層視窗打開連結。: target="_top"</NuxtLink>
    </div>



    <!-- composables -->
    <div>
      <h2>composables</h2>
      {{ count }}
      <button type="button" @click="increment">增加</button>
      <button type="button" @click="decrement">減少</button>
    </div>

    <!-- stores -->
    <div>
      <h2>stores</h2>
      {{ userName }}
      <button type="button" @click="reverseName">名字翻轉</button>
      <div class="container">
        <h1>最新消息</h1>
        <!-- <NewsCard v-for="..." :key="..."  v-bind="..." /> -->
        <template v-for="news in newsList" :key="news._id">
          <NewsCard :_id="news._id" :title="news.title" :image="news.image" :description="news.description"
            :createdAt="news.createdAt" :updatedAt="news.updatedAt" />
        </template>
        <ClientOnly>
          <Loading v-model:active="isLoading" />
        </ClientOnly>
      </div>
    </div>


    <!-- Auto Import -->
    <!-- <Menu /> -->

    <!-- 手動匯入、改名 -->
    <!-- <div>
      RenameMenu:
      <RenameMenu />
    </div>

    <Btn />

    <AboutHeader></AboutHeader>

    <Test></Test> -->
  </div>

</template>

<style lang='scss' scope>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

.active {
  color: red;
  background-color: #f8bfbf;
}
</style>
