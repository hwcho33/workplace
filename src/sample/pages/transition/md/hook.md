```html
<div class="mb-24">
  <div class="text-amber-200 bg-neutral pa-3 text-3xl">Transition Hook</div>
  <p class="text-2xl">
    Built in 되어있는 Transition 컴포넌트가 동작하는 각각의 Hook 에 커스텀한
    동작을 할 수 있게 가능하다.
  </p>
  <div class="mb-24">
    <button class="text-xl mt-5 mb-5" @click="hook = !hook">
      클릭하세요
    </button>
    <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <div class="gsap-box" v-if="hook"></div>
    </Transition>
  </div>
</div>

<script lang="ts" setup>
  import { ref } from 'vue'
  const hook = ref(false)
  function onBeforeEnter(el, done) {
    console.log('el : ', el)
  }
  function onEnter(el, done) {
    el.innerText()
  }
  function onLeave(el, done) {
    alert('onLeave')
    done()
  }
</script>

<style lang="scss" scoped>
.gsap-box {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
}
</style>
```