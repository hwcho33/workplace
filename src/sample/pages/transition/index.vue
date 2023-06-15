<template>
  <div class="text-nm">
    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">서론</div>
      <p>Transition 은 Vue 내에 빌트인 되어 있는 애니매이션 기능이다.</p>
      <p>
        기본적인 예제에 대한 컴포넌트 예제를 작성할 예정이며 또한, 하위 예제의 경우 공식문서에 모두 작성되어 있습니다.
      </p>
      <p>자세한 정보는 공식문서를 참조하시기 바랍니다.</p>

      <a href="https://v3-docs.vuejs-korea.org/guide/built-ins/transition.html#css-based-transitions" target="_blank"
        >공식문서 링크</a
      >
    </div>
    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">Toggle-Slide 애니매이션</div>
      <div>
        <button class="text-xl mt-5 mb-5" @click="toggle = !toggle">클릭하세요</button>
        <div class="border-dashed mt-3">
          <Transition name="toggle-slide">
            <p v-if="toggle">애니매이션 등장</p>
            <p v-else>애니매이션 퇴장</p>
          </Transition>
        </div>
      </div>
    </div>
    <ToggleSlide />

    <div class="mb-24">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">Bounce 애니메이션</div>
      <div>
        <button class="text-xl mt-5 mb-5" @click="bounce = !bounce">클릭하세요</button>
        <div class="mt-3">
          <Transition name="bounce">
            <p class="text-center" v-if="bounce">애니매이션 등장</p>
          </Transition>
        </div>
      </div>
    </div>
  </div>
  <Bounce />
  <div class="mb-24">
    <div class="text-amber-200 bg-neutral pa-3 text-3xl">Nested Fade 애니매이션</div>
    <p class="text-2xl">
      Nested 된 div 각각에 Style Animation 을 주었고, duration attr 을 통해서 진입, 진출에 대한 딜레이를 정할 수 있다.
    </p>
    <div class="mb-24">
      <button class="text-xl mt-5 mb-5" @click="show = !show">클릭하세요</button>
      <Transition :duration="{ enter: 500, leave: 1000 }" name="nested">
        <div v-if="show" class="outer">
          <div class="inner">안녕</div>
        </div>
      </Transition>
    </div>
  </div>
  <Nested />
  <div class="mb-24">
    <div class="text-amber-200 bg-neutral pa-3 text-3xl">Transition Hook</div>
    <p class="text-2xl">
      Built in 되어있는 Transition 컴포넌트가 동작하는 각각의 Hook 에 커스텀한 동작을 할 수 있게 가능하다.
    </p>
    <div class="mb-24">
      <button class="text-xl mt-5 mb-5" @click="hook = !hook">클릭하세요</button>
      <Transition @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
        <div class="gsap-box" v-if="hook"></div>
      </Transition>
    </div>
  </div>
  <Hook />

  <div class="mb-24">
    <div class="text-amber-200 bg-neutral pa-3 text-3xl">Reuse Transition</div>
    <p class="text-2xl">특정 Transition(Toggle-slide) 을 Slot 을 활용하여 재사용 가능하다.</p>
    <button class="text-xl mt-5 mb-5" @click="myTransition = !myTransition">클릭하세요</button>
    <div class="mb-24">
      <MyTransition>
        <p v-if="myTransition">재사용되었습니다.</p>
      </MyTransition>
    </div>
  </div>
  <Reuse />
</template>

<script lang="ts" setup>
import ToggleSlide from './md/toggle-slide.md'
import Bounce from './md/bounce.md'
import Nested from './md/nested.md'
import Hook from './md/hook.md'
import Reuse from './md/reuse.md'
import MyTransition from './my-transition.vue'

const toggle = ref(false)
const bounce = ref(false)
const show = ref(false)
const hook = ref(false)
const myTransition = ref(false)
function onBeforeEnter() {
  alert('onBeforeEnter')
}
function onEnter() {
  alert('Enter')
}
function onLeave() {
  alert('onLeave')
}
</script>

<style lang="scss" scoped>
/*
진입/진출 애니메이션은 다른 지속 시간과
타이밍 함수를 사용할 수 있습니다.
*/
.toggle-slide-enter-active {
  transition: all 0.3s ease-out;
}

.toggle-slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.toggle-slide-enter-from,
.toggle-slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.outer,
.inner {
  background: #eee;
  padding: 30px;
  min-height: 100px;
}

.inner {
  background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* 부모 엘리먼트의 지연된 진출 */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* 중첩 셀렉터를 사용하여 중첩(자식) 엘리먼트를 트랜지션할 수도 있습니다. */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* 중첩된(자식) 엘리먼트의 지연된 진입 */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
    중첩된 불투명도 트랜지션을 처리할 때 Chrome 96 버그 해결 핵.
    버그가 수정된 다른 브라우저나 Chrome 99+에서는 필요하지 않습니다.
  */
  opacity: 0.001;
}

.gsap-box {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
}
</style>
