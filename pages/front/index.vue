<script setup>
// 匯入樣式
// import "@/assets/style/index.scss"

const route = useRoute()

console.log('route: ', route)
</script>

<template>
  <!-- <div class="secondary-text">Page: 首頁</div> <br />

  <span class="text-style">目前路由的路徑 {{ route.fullPath }}</span>

  <div class="container mt-5">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
  </div> -->

  我是內容，並使用默認 layouts
</template>

<style lang='scss' scope>
/** SCSS 變數、樣式 */
$primary: purple;

.text-style {
  font-size: 30px;
  color: $primary;
}

// 匯入樣式
// @import "@/assets/style/index.scss";

.secondary-text {
  // 吃的到 nuxt.config.ts 的 SCSS 全域變數
  color: $secondary;
}
</style>
