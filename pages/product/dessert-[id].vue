<script setup>
const route = useRoute();

const name = decodeURIComponent(route.fullPath.split("-")[1]);

// useHead
// useHead({
//   // useHead 的所有屬性,可參考：https://nuxt.com/docs/api/composables/use-head#usehead

//   title: `甜點名稱：${name}`,
//   meta: [
//     { name: "description", content: `useHead SEO description 甜點: ${name}` },
//     { property: "og:title", content: `useHead SEO og:title 甜點: ${name}` },
//     { property: "og:url", content: `useHead SEO og:url 甜點: ${name}` },
//     { property: "og:description", content: `useHead SEO og:description 甜點: ${name}` },
//   ],
// });

// useSeoMeta server, client 都會動態更新 seo meta tag
useSeoMeta({
  title: `useSeoMeta-title-甜點名稱: ${name}`,
  description: `useSeoMeta-description-甜點名稱: ${name}`,
  ogDescription: `useSeoMeta-ogDescription-甜點名稱: ${name}`,
  ogTitle: `useSeoMeta-ogTitle-甜點名稱: ${name}`,
  //  ogImage: "",
  //  twitterCard: "summary_large_image",
  //  twitterSite: "",
  //  twitterCreator: "",
});
</script>

<template>
  <div>甜點名稱：{{ name }}</div>
</template>

<style lang='scss' scope></style>
