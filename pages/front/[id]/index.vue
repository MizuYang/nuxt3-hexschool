<script setup>
const route = useRoute()
</script>

<template>
  <div>
    動態路由首頁 <br />
    動態路由：{{  route.fullPath  }}

    <NuxtLink to="/front/xxx1/A">front/xxx1/A</NuxtLink> |
    <NuxtLink to="/front/xxx1/B">front/xxx1/B</NuxtLink> |
  </div>
</template>

<style lang='scss' scope></style>

