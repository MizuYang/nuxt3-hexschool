<script setup>
const isShow = ref(true);
</script>

<template>
  <div>
    <button type="button" @click="isShow = !isShow">切換 {{ isShow }}</button>

    <transition name="boxdemo">
      <template v-if="isShow">
        <div class="box">123</div>
      </template>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  font-size: 30px;
  color: #fff;
  background-color: blue;
}

.boxdemo-enter-active,
.boxdemo-leave-active {
  transition: opacity 0.5s ease, transform .5s linear;
}

.boxdemo-enter-from,
.boxdemo-leave-to {
  opacity: 0;
  transform: translateX(100px);
  animation: rotate-from .5s linear;
}
</style>
