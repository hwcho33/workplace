```html
<div class="mb-24">
  <div class="text-amber-200 bg-neutral pa-3 text-3xl">
    검색 필러링 애니메이션
  </div>
  <p class="text-2xl">검색 시 목록 Computed 활용 애니메이션 적용</p>
  <div>
    <input v-model="keyword" />

    <div class="border-dashed mt-3">
      <TransitionGroup name="list" tag="ul">
        <li v-for="(item, idx) in computedKeyword" :key="idx">
          {{ item }}
        </li>
      </TransitionGroup>
    </div>
  </div>
</div>


<script lang="ts" setup>

const keyword = ref<string>('')

const computedList = ['Hyunwoo', 'Byungsu', 'SungYong', 'SangChul']
const computedKeyword = computed(() => {
  return computedList.filter(item => item.toLowerCase().includes(keyword.value))
})
</script>

<style lang="scss" scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
```