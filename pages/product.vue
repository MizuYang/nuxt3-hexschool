<script setup>
definePageMeta({
  layout: 'main-layout'
})
</script>

<template>
  <div>
    product <br />

    <NuxtPage />
  </div>
</template>

<style lang='scss' scope>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
