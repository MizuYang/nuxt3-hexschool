<script setup>

</script>

<template>
  <NuxtLink to="/">最外層首頁</NuxtLink> |
  <NuxtLink to="/front">front</NuxtLink> |
  <NuxtLink to="/front/xxx1">front/xxx1/index</NuxtLink> |
  <NuxtLink to="/admin">admin</NuxtLink> |
  <NuxtLink to="/admin/A">adminA</NuxtLink> |
  <NuxtLink to="/admin/B">adminB</NuxtLink> |
  <NuxtLink to="/product">product</NuxtLink> |
  <NuxtLink to="/product/dessert-泡芙">dessert-泡芙</NuxtLink> |
  <NuxtLink to="/product/dessert-舒芙蕾">dessert-舒芙蕾</NuxtLink> |

  <header>主要的表頭</header>
  <slot />
  <footer>主要的表尾</footer>
</template>

<style lang='scss' scope></style>