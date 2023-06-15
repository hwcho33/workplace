import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

import { TEMPLATE_BR_ID } from '~/constants/store-atypical/index'
import type { T_BR_0001 } from '~/constants/store-atypical/index'
import { useCookies } from '@vueuse/integrations/useCookies'

export const useTemplateTopBannerStore = defineStore('TemplateTopBanner', () => {
  // --------------------------------------------------------------------- [STATE]
  // T_BR_0001
  const templateTopBanner = ref<T_BR_0001>({
    areaId: 'AREA_ID_T_BR_0001',
    areaName: '고정배너',
    templateId: TEMPLATE_BR_ID.T_BR_0001,
    templateName: '고정_S_배너',
    content: []
  })
  const templateTopBannerCookies = useCookies([TEMPLATE_BR_ID.T_BR_0001])

  // --------------------------------------------------------------------- [GETTER]
  // 배너 데이터 존재 유무
  const isTemplateTopBanner = computed(() => {
    return templateTopBanner.value.content.length > 0
  })

  // 쿠키: 오늘 보지 않기 셋팅 유무
  const isHideForDay = computed(() => {
    return Boolean(templateTopBannerCookies.get(TEMPLATE_BR_ID.T_BR_0001))
  })

  // 배너 활성화 유무
  const isActiveTemplateTopBanner = computed(() => {
    if (isTemplateTopBanner.value && isHideForDay.value === false) {
      return true
    } else {
      return false
    }
  })

  // --------------------------------------------------------------------- [ACTION]
  // 오늘 보지 않기
  function setHideForDayAction() {
    // 오늘의 마지막 시간 > UTC type
    const endOfDay = dayjs().endOf('day').toDate()
    // const endOfDay = dayjs('2023-06-12 14:08:00').toDate()

    // 배너에서 오늘 보지 않기 클릭시 쿠키 셋팅
    templateTopBannerCookies.set(TEMPLATE_BR_ID.T_BR_0001, 'HIDE_FOR_DAY', {
      expires: endOfDay
    })
  }

  function initAction(topBannerInfo) {
    console.log('[topBannerInfo]', topBannerInfo)
    // topBannerInfo 통해 API 호출해서 상세 정보를 가져온다.

    // -------------------------------------[고정_S_배너]
    templateTopBanner.value.content = []
    const templateTopBannerItem = {
      title: '앱 전용혜택 10%할인쿠폰 + 10%적립',
      imageURL: '/images/data/main/@main-top-event-01.png',
      goURL: '/publishing/goods/detail'
    }
    templateTopBanner.value.content.push(templateTopBannerItem)
  }

  return {
    templateTopBanner: readonly(templateTopBanner),
    isTemplateTopBanner,
    isHideForDay,
    isActiveTemplateTopBanner,
    initAction,
    setHideForDayAction
  }
})
