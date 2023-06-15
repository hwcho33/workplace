<template>
  <div class="work-list-wrap">
    <div class="row">
      <div class="col">화면ID</div>
      <div class="col name">화면명</div>
      <div class="col path">파일경로</div>
      <div class="col">작업자</div>
    </div>

    <div class="row" v-for="list in workList" :key="list.service">
      <div class="service">{{ list.service }}</div>
      <ul class="list-wrap">
        <li v-for="item in list.list" :key="item.id">
          <div class="col">{{ item.id }}</div>
          <div class="col name">
            <a :href="`publishing${item.url}`">{{ item.name }}</a>
          </div>
          <div class="col path">
            <a :href="`publishing${item.url}`">pages{{ item.url }}</a>
          </div>
          <div class="col">{{ item.publisher }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { request } from '@/utils/request'
import { Ref } from 'vue'

interface ListInfo {
  service: string
  list: {
    id: string
    name: string
    path: string
    url: string
    publisher: string
  }[]
}

let workList: Ref<ListInfo[]> = ref<any>([])

onMounted(() => {
  request
    .post({
      url: '/test***/publishingList'
    })
    .then(res => {
      workList.value = res.data
    })
})
</script>

<style lang="scss">
.work-list-wrap {
  .col {
    padding: 1rem;
    flex-shrink: 0;

    &:first-child,
    &:last-child {
      width: 10%;
    }

    &.name {
      width: 20%;
    }

    &.path {
      flex-grow: 1;
    }
  }

  .row {
    border-bottom: 0.1rem solid #bbb;
    &:first-child {
      display: flex;
      background-color: #dcdcdc;
    }
  }

  .service {
    background-color: #eee;
    padding: 1rem;
  }

  li {
    display: flex;

    + li {
      border-top: 0.1rem solid #dcdcdc;
    }
  }
}
</style>
