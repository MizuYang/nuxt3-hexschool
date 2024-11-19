<script setup>
import axios from 'axios'

const apiUrl = 'https://nuxr3.zeabur.app/api/v1/home/news/'
// const apiUrl = 'https://randomuser.me/api/'

// $fetch 客戶端(O)、伺服器端(O)
// const data = ref({})
// data.value = await $fetch(apiUrl)

// useFetch 客戶端(X)、伺服器端(O)
// const { data } = await useFetch(apiUrl)

//useAsyncData 客戶端(X)、伺服器端(O)
// const { data } = await useAsyncData("test1", async () => {
//   const res = await $fetch(apiUrl)
//   return res
// })

// 多個 api
// const { data } = useAsyncData("test2", async () => {
//   const res1 = await $fetch(apiUrl)
//   const res2 = await $fetch(apiUrl)
//   const res3 = await $fetch(apiUrl)
//   const res4 = await $fetch(apiUrl)

//   return {
//     res1,
//     res2,
//     res3,
//     res4,
//   }
// })

// Promise.allSettled
const { data, refresh } = useAsyncData("test3", async () => {
  const promises = [
    $fetch(apiUrl),
    $fetch(apiUrl),
    $fetch(apiUrl),
    $fetch(apiUrl),
    $fetch(apiUrl),
    $fetch(apiUrl)
  ]

  // const res = await Promise.all(promises)
  const res = await Promise.allSettled(promises)

  console.log(res)

  return {
    res
  }
})

//　整合　axios
// const { data } = await useAsyncData("test4", async () => {
//   const res = await axios.get(apiUrl)
//   return res.data
// })

// 一般 get + Promise.allSettled
// const url = 'https://randomuser.me/api/'
// async function getData() {
//   const promises = [
//     await fetch(url),
//     await fetch(url),
//     await fetch(url),
//     await fetch(url),
//     await fetch(url),
//   ]
//   const res = await Promise.allSettled(promises)
//   const result = res.map(async item => await item.value.json())
//   console.log('result: ', result)
//   return result
// }
// await getData()


function refreshData() {
  refreshNuxtData("test3")
}

</script>

<template>
  後臺首頁，使用主要 layout <br />

  <button type="button" @click="refresh">refresh</button>
  <button type="button" @click="refreshData">refreshData</button>

  {{ data }}
</template>

<style lang='scss' scope></style>
