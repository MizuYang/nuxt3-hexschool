<script setup>
const route = useRoute()

console.log('route: ', route)
</script>

<template>
  Page: 首頁 <br />

  目前路由的路徑 {{ route.fullPath }}
</template>

<style lang='scss' scope></style>
