<template>
  <h1>데이터</h1>
  <div ref="publishingUrl" class="publishing-url-tab-scroll" :class="publishingClass">
    <div class="publishing-url-tab-wrap">
      <input type="radio" checked value="m1" name="rul-tab-input" id="url-tab-1" @change="addClassFnc" /><label
        for="url-tab-1"
        class="url-tab-btn btn-1"
        >전체</label
      >
      <input type="radio" value="m2" name="rul-tab-input" id="url-tab-2" @change="addClassFnc" /><label
        for="url-tab-2"
        class="url-tab-btn btn-2"
        >공통</label
      >
      <input type="radio" value="m3" name="rul-tab-input" id="url-tab-3" @change="addClassFnc" /><label
        for="url-tab-3"
        class="url-tab-btn btn-3"
        >고객</label
      >
      <input type="radio" value="m4" name="rul-tab-input" id="url-tab-4" @change="addClassFnc" /><label
        for="url-tab-4"
        class="url-tab-btn btn-4"
        >상품</label
      >
      <input type="radio" value="m5" name="rul-tab-input" id="url-tab-5" @change="addClassFnc" /><label
        for="url-tab-5"
        class="url-tab-btn btn-5"
        >주문/결제</label
      >
      <input type="radio" value="m6" name="rul-tab-input" id="url-tab-6" @change="addClassFnc" /><label
        for="url-tab-6"
        class="url-tab-btn btn-6"
        >전시/매장</label
      >
      <input type="radio" value="m7" name="rul-tab-input" id="url-tab-7" @change="addClassFnc" /><label
        for="url-tab-7"
        class="url-tab-btn btn-7"
        >이메일템플릿</label
      >
      <input type="radio" value="m8" name="rul-tab-input" id="url-tab-8" @change="addClassFnc" /><label
        for="url-tab-8"
        class="url-tab-btn btn-8"
        >검색</label
      >
    </div>
  </div>
  <div class="publishing-url-table-wrap">
    <div class="publishing-url-table">
      <table>
        <caption>
          퍼블리스트 구분, 화면ID, 상태, 화면명
        </caption>
        <colgroup>
          <col style="width: 120px" />
          <col style="width: auto" />
          <col style="width: auto" />
          <col style="width: auto" />
        </colgroup>
        <thead>
          <tr>
            <th>구분</th>
            <th>화면ID</th>
            <th>상태</th>
            <th>화면링크</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :data-tr-name="item['구분']" :key="item['화면ID']">
            <td v-html="item['구분']"></td>
            <td v-html="item['화면ID']"></td>
            <td>{{ item['상태'] == '최종검수완료' ? '검수ㅇ' : '검수X' }}</td>
            <td>
              <router-link :to="item['PATH']" v-html="item['화면명']" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
import rows from './publist.json'
const items = ref(rows)
const publishingClass = ref('m1')
const addClassFnc = (e: Event) => {
  const target = e.target as HTMLInputElement
  publishingClass.value = target.value
}
</script>
<style lang="scss" scoped>
caption {
  display: none;
}
.publishing-url-tab-scroll {
  overflow-x: auto;
  .publishing-url-tab-wrap {
    padding: 0 16px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    input[type='radio'] {
      position: absolute;
      left: -9999rem;
    }
    input:checked {
      + label {
        color: #dc0a0a;
        font-weight: bold;
        border-color: #dc0a0a;
      }
    }
    label {
      color: #111;
      display: inline-block;
      border: 1px solid #aaa;
      min-width: 6rem;
      padding: 0 8px;
      height: 2.4rem;
      line-height: 2.3rem;
      text-align: center;
      border-radius: 1.2rem;
      font-size: 1.4rem;
      ~ label {
        margin-left: 0.8rem;
      }
    }
  }
  &.m2,
  &.m3,
  &.m4,
  &.m5,
  &.m6,
  &.m7,
  &.m8 {
    ~ .publishing-url-table-wrap {
      tbody {
        tr {
          display: none;
        }
      }
    }
  }
  &.m2 {
    ~ .publishing-url-table-wrap {
      tbody {
        tr[data-tr-name='공통'] {
          display: table-row;
        }
      }
    }
  }
  &.m3 {
    ~ .publishing-url-table-wrap {
      tbody {
        tr[data-tr-name='고객'] {
          display: table-row;
        }
      }
    }
  }
  &.m4 {
    ~ .publishing-url-table-wrap {
      tbody {
        tr[data-tr-name='상품'] {
          display: table-row;
        }
      }
    }
  }
  &.m5 {
    ~ .publishing-url-table-wrap {
      tbody {
        tr[data-tr-name='주문/결제'] {
          display: table-row;
        }
      }
    }
  }
  &.m6 {
    ~ .publishing-url-table-wrap {
      tbody {
        tr[data-tr-name='전시/매장'] {
          display: table-row;
        }
      }
    }
  }
  &.m7 {
    ~ .publishing-url-table-wrap {
      tbody {
        tr[data-tr-name='이메일템플릿'] {
          display: table-row;
        }
      }
    }
  }
  &.m8 {
    ~ .publishing-url-table-wrap {
      tbody {
        tr[data-tr-name='검색'] {
          display: table-row;
        }
      }
    }
  }
}
.publishing-url-table-wrap {
  width: 100%;
  overflow-x: auto;
  .publishing-url-table {
    padding: 0 16px;
    display: inline-block;
    min-width: 100%;
    table {
      table-layout: fixed;
      min-width: 100%;
      td,
      th {
        padding: 10px;
        vertical-align: middle;
      }
      th {
        border-bottom: 2px solid #333;
      }
      td {
        text-align: center;
        border-bottom: 1px solid #ccc;
        font-size: 1.5rem;
        white-space: nowrap;
        &:nth-of-type(4) {
          text-align: left;
          white-space: nowrap;
        }
        a {
          color: #5d48f9;
        }
      }
    }
  }
}
</style>
