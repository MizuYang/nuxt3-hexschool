<script setup>
// const apiUrl = 'https://randomuser.me/api/'
const apiUrl = 'https://nuxr3.zeabur.app/api/v1/home/news/'


// useAsyncData
// const { data: courses } = useAsyncData("courses", async () => {
//   return await $fetch(apiUrl)
// })

// $fetch
// const courses = ref({})
const courses = await getFetchData()


async function getFetchData() {
  try {
    const res = await $fetch(apiUrl, {
      method: 'GET',
      // body: {},
      // baseURL: "",
      // query: {},
      // params: {},
      // headers: {},
    })
    return res
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <div>
    <NuxtPage :courses="courses" />
  </div>
</template>

<style lang='scss' scope></style>
