<script setup>

</script>

<template>
  <NuxtLink to="/">最外層首頁</NuxtLink> |
  <NuxtLink to="/front">front</NuxtLink> |
  <NuxtLink to="/admin">admin</NuxtLink> |
  <NuxtLink to="/admin/A">adminA</NuxtLink> |
  <NuxtLink to="/admin/B">adminB</NuxtLink> |
  <header>默認表頭</header>
  <slot />
  <footer>默認表尾</footer>
</template>

<style lang='scss' scope></style>
