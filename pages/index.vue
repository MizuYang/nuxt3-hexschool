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

</script>

<template>
  <div>
    <h1>最外層首頁</h1>
    <h2>composables</h2>
    {{ count }}

    <button type="button" @click="increment">增加</button>
    <button type="button" @click="decrement">減少</button>

    <br />

    <h2>stores</h2>
    {{ userName }}

    <button type="button" @click="reverseName">名字翻轉</button>


    <div class="container">
      <h1>最新消息</h1>
      <!-- <NewsCard v-for="..." :key="..."  v-bind="..." /> -->
      <template v-for="news in newsList" :key="news._id">
        <NewsCard :_id="news._id"
                  :title="news.title"
                  :image="news.image"
                  :description="news.description"
                  :createdAt="news.createdAt"
                  :updatedAt="news.updatedAt" />
      </template>
      <ClientOnly>
        <Loading v-model:active="isLoading" />
      </ClientOnly>
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
</style>
