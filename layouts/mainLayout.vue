<script setup>

</script>

<template>
  <NuxtLink to="/" activeClass="active">最外層首頁</NuxtLink> |
  <NuxtLink to="/front" activeClass="active">front</NuxtLink> |
  <NuxtLink to="/front/xxx1" activeClass="active">front/xxx1/index</NuxtLink> |
  <NuxtLink to="/admin" activeClass="active">admin</NuxtLink> |
  <NuxtLink to="/admin/A" activeClass="active">adminA</NuxtLink> |
  <NuxtLink to="/admin/B" activeClass="active">adminB</NuxtLink> |
  <NuxtLink to="/product" activeClass="active">product</NuxtLink> |
  <NuxtLink to="/product/dessert-泡芙" activeClass="active">dessert-泡芙</NuxtLink> |
  <NuxtLink to="/product/dessert-舒芙蕾" activeClass="active">dessert-舒芙蕾</NuxtLink> |

  <header>主要的表頭</header>
  <slot />
  <footer>主要的表尾</footer>
</template>

<style lang='scss' scope></style>