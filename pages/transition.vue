<script setup>
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

const isShow = ref(true);
const nums = ref([]);
const gsapNums = ref([]);
let gsapState = [];

getNumber(50);

function getNumber(count = 50) {
  for (let i = 0; i < count; i++) {
    nums.value[i] = i + 1;
    gsapNums.value[i] = i + 1;
  }
}
function getNumReset() {
  nums.value = [];
  getNumber(50);
}
function sortRandomNumber() {
  nums.value.sort(() => (Math.floor(Math.random() * 2) ? 1 : -1));
}
async function sortGsapFlip() {
  // 先記入改變前的狀態
  gsapState = Flip.getState(".item");

  // 改變元素的狀態 (修改順序就是改變元素的狀態)
  gsapNums.value.sort(() => (Math.floor(Math.random() * 2) ? 1 : -1));

  // 等到 DOM 元素重新 render 後，才能執行 GSAP 動畫
  await nextTick();

  // GSAP 動畫、配置
  Flip.from(gsapState, {
    duration: 0.5,
    absolute: true,
    duration: 0.8,
    ease: "expo.inOut",
    spin: true,
    scale: true,
  });
}
async function resetGsapFlip() {
  const state = Flip.getState(".item");
  gsapNums.value = [];
  getNumber(50);
  if (gsapState?.targets?.length) {
    await nextTick();
    Flip.from(state, {
      duration: 0.5,
      absolute: true,
    });
  }
  gsapState = []; // 初始化
}
async function rotate() {
  const items = [...document.querySelectorAll(".item")];
  const options = {
    absolute: true,
    duration: 0.8,
    ease: "expo.inOut",
    spin: true,
  }
  
  // 執行排序、動畫
  await gsapAnimateFn(items, '20px', options)
  setTimeout(async () => await gsapAnimateFn(items, '100px', options), 1000);
  setTimeout(async () => await gsapAnimateFn(items, '59.8px', options), 2000);
}
async function gsapAnimateFn(els, widthSize, options) {
  // 先記入改變前的狀態
  const state = Flip.getState(".item");

  // 改變元素的狀態 (修改順序就是改變元素的狀態)
  changeWidth(els, widthSize)

  // 等到 DOM 元素重新 render 後，才能執行 GSAP 動畫
  await nextTick();

  // GSAP 動畫、配置
  Flip.from(state, options);
}
function changeWidth (els, widthSize) {
  els.forEach((item) => (item.style.width = widthSize));
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
      <h2>使用 transitionGrop 製作動畫</h2>
      <ul class="random-num-list">
        <transition-group name="random-num">
          <template v-for="num in nums" :key="`transitiongrop1-${num}`">
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

    <section class="random-num-wrap mt-0">
      <h2>使用 auto-animate 製作動畫</h2>
      <ul class="random-num-list" v-auto-animate>
        <template v-for="num in nums" :key="`transitiongrop2-${num}`">
          <li>
            {{ num }}
          </li>
        </template>
      </ul>
      <button type="button" @click="sortRandomNumber" class="me-2">
        亂數排序
      </button>
      <button type="button" @click="getNumReset">重置</button>
    </section>

    <section class="random-num-wrap mt-0">
      <h2>使用 GSAP 製作動畫</h2>
      <ul class="random-num-list gsap-flip-test" style="min-height: 132px">
        <template v-for="num in gsapNums" :key="`transitiongropGsap-${num}`">
          <li class="item">
            {{ num }}
          </li>
        </template>
      </ul>
      <button type="button" @click="sortGsapFlip" class="me-2">亂數排序</button>
      <button type="button" @click="resetGsapFlip">重置</button>
      <button type="button" @click="rotate">旋轉</button>
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
  margin: 100px 0 30px 100px;
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
