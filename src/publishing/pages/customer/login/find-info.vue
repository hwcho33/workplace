<template>
  <div class="info-find-wrap phone-method">
    <h2 class="page-title" v-if="getOSByUserAgent() === 'desktop'">{{ $route.meta.title }}</h2>

    <div class="inner-wrap">
      <div class="form-wrap">
        <div class="find-tab-wrap">
          <ul>
            <li
              v-for="item in state.tabItems"
              :key="item.id"
              :class="{
                active: item.id === state.activeTab
              }"
            >
              <div class="tab-btn">
                <a href="javascript:void(0)" @click.prevent="_onChangeTab(item.id)">{{ item.title }}</a>
              </div>
            </li>
          </ul>
        </div>

        <FindInfoMobile v-if="state.activeTab === TAB_TYPE.TAB1" />
        <FindInfoEmail v-if="state.activeTab === TAB_TYPE.TAB2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getOSByUserAgent } from '@/utils/device'
import FindInfoMobile from '&/pages/customer/login/components/find-info-mobile.vue'
import FindInfoEmail from '&/pages/customer/login/components/find-info-email.vue'

const TAB_TYPE = { TAB1: 'Mobile', TAB2: 'Email' } as const
type Key = (typeof TAB_TYPE)[keyof typeof TAB_TYPE]
interface Reactive {
  tabItems: { id: Key; title: string }[]
  activeTab: Key
}

const state = reactive<Reactive>({
  tabItems: [
    { id: TAB_TYPE.TAB1, title: '휴대폰 인증' },
    { id: TAB_TYPE.TAB2, title: '이메일 인증' }
  ],
  activeTab: TAB_TYPE.TAB1
})

const _onChangeTab = (id: Key) => {
  state.activeTab = id
}
</script>

<style lang="scss">
@use '~/pages/customer/login/scss/login.scss';
</style>
