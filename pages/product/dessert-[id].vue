<script setup>
const route = useRoute()
</script>

<template>
  <div>
    甜點名稱：{{ route.fullPath }}
  </div>
</template>

<style lang='scss' scope></style>
