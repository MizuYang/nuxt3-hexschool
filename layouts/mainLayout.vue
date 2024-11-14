<script setup>

</script>

<template>
  <NuxtLink to="/">最外層首頁</NuxtLink> |
  <NuxtLink to="/front">front</NuxtLink> |
  <NuxtLink to="/admin">admin</NuxtLink>
  <header>主要的表頭</header>
  <slot />
  <footer>主要的表尾</footer>
</template>

<style lang='scss' scope></style>
