<script setup>
const isShow = ref(true);
const nums = ref([]);

getNumber(50);

function getNumber(count = 50) {
  for (let i = 0; i < count; i++) {
    nums.value[i] = i + 1;
  }
}
function getNumReset() {
  nums.value = [];
  getNumber(50);
}
function sortRandomNumber() {
  nums.value.sort(() => (Math.floor(Math.random() * 2) ? 1 : -1));
}
</script>

<template>
  <div>
    <section>
      <button type="button" @click="isShow = !isShow">切換 {{ isShow }}</button>
      <transition name="boxdemo">
        <template v-if="isShow">
          <div class="box">123</div>
        </template>
      </transition>
    </section>

    <section class="random-num-wrap">
      <ul class="random-num-list">
        <transition-group name="random-num">
          <template v-for="num in nums" :key="`transitiongrop-${num}`">
            <li>
              {{ num }}
            </li>
          </template>
        </transition-group>
      </ul>
      <button type="button" @click="sortRandomNumber" class="me-2">
        亂數排序
      </button>
      <button type="button" @click="getNumReset">重置</button>
    </section>
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
  transition: opacity 0.5s ease, transform 0.5s linear;
}

.boxdemo-enter-from,
.boxdemo-leave-to {
  opacity: 0;
  transform: translateX(100px);
  animation: rotate-from 0.5s linear;
}

.random-num-wrap {
  margin: 100px 0 100px 100px;
}
.random-num-list {
  list-style: none;
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(10, auto);
  border: 1px solid black;
  padding: 0;
  box-sizing: border-box;

  & li {
    text-align: center;
    border: 1px solid black;
  }
}

.random-num-move, /* 对移动中的元素应用的过渡 */
.random-num-enter-active,
.random-num-leave-active {
  transition: all 1s ease;
}

.random-num-enter-from,
.random-num-leave-to {
  opacity: 0;
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.random-num-leave-active {
}
</style>
