<script setup>
definePageMeta({
  layout: 'not-found'
})

const route = useRoute()
const event = useRequestEvent()
setResponseStatus(event, 404)
</script>

<template>
  <div>
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    <h1>
      404 Not Found <br />
      <del>{{  route.fullPath  }}</del>
    </h1>
    <NuxtLink to="/">返回</NuxtLink>
    <br />
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  </div>
</template>

<style lang='scss' scope></style>
