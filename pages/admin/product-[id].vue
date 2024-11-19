<script setup>
const route = useRoute()
</script>

<template>
  <div>
    動態路由：{{ route.fullPath }}
  </div>
</template>

<style lang='scss' scope></style>
