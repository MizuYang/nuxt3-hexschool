export default defineNuxtRouteMiddleware((to, from) => {
  console.log("具名 middleware to: ", to);
  console.log("具名 middleware from: ", from);
})