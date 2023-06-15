import { TEMPLATE_NV_ID } from '~/constants/store-atypical/index'
import type { T_NV_0001 } from '~/constants/store-atypical/index'

export const useTemplateTopNeviStore = defineStore('TemplateTopNevi', () => {
  // --------------------------------------------------------------------- [STATE]
  // T_NV_0001
  const templateTopNevi = ref<T_NV_0001>({
    areaId: 'AREA_ID_T_NV_0001',
    areaName: '네비게이션',
    templateId: TEMPLATE_NV_ID.T_NV_0001,
    templateName: '탑메뉴_내비',
    content: []
  })
  // --------------------------------------------------------------------- [GETTER]

  // --------------------------------------------------------------------- [ACTION]

  function initAction(topNeviInfo) {
    console.log('[topNeviInfo]', topNeviInfo)
    // topNeviInfo 통해 API 호출해서 상세 정보를 가져온다.

    // -------------------------------------[고정_S_배너]
    templateTopNevi.value.content = []
    const templateTopNeviList = [
      {
        routeName: 'AtypicalHome',
        title: '홈',
        subTitle: '',
        isDot: false,
        goURL: '/store/atypical'
      },
      {
        routeName: '',
        title: 'TV쇼핑',
        subTitle: '',
        isDot: false,
        goURL: '/publishing/customer/member/join-complete'
      },
      {
        routeName: '',
        title: '비밀특가',
        subTitle: '쿠폰 15%',
        isDot: true,
        goURL: '/publishing/customer/member/simple-join'
      },
      {
        routeName: '',
        title: '더블세일',
        subTitle: '2월 혜택x2',
        isDot: false,
        goURL: '/publishing'
      },
      {
        routeName: '',
        title: '혜택&쿠폰',
        subTitle: '',
        isDot: false,
        goURL: '/publishing'
      },
      {
        routeName: '',
        title: '라스트오더',
        subTitle: '~10%적립',
        isDot: false,
        goURL: ''
      },
      {
        routeName: '',
        title: '빠른배송',
        subTitle: '',
        isDot: false,
        goURL: '/publishing'
      },
      {
        routeName: '',
        title: '베스트',
        subTitle: '실시간',
        isDot: false,
        goURL: '/publishing'
      },
      {
        routeName: '',
        title: '추천',
        subTitle: '인기',
        isDot: true,
        goURL: '/publishing'
      },
      {
        routeName: '',
        title: '투데이딜',
        subTitle: '',
        isDot: false,
        goURL: ''
      },
      {
        routeName: '',
        title: '추천상품',
        subTitle: '인기',
        isDot: true,
        goURL: '/publishing'
      },
      {
        routeName: '',
        title: '백화점',
        subTitle: '',
        isDot: false,
        goURL: ''
      },
      {
        routeName: '',
        title: '전문관',
        subTitle: '',
        isDot: false,
        goURL: '/publishing'
      },
      {
        routeName: '',
        title: '메뉴명다섯',
        subTitle: '마켓팅문구칠곱',
        isDot: false,
        goURL: ''
      },
      {
        routeName: '',
        title: '메뉴15',
        subTitle: '마켓팅문구칠곱',
        isDot: false,
        goURL: '/publishing'
      },
      {
        routeName: '',
        title: '편성표',
        subTitle: '',
        isDot: false,
        goURL: '/publishing'
      },
      {
        routeName: '',
        title: '전문관',
        subTitle: '',
        isDot: false,
        goURL: '/publishing'
      },
      {
        routeName: '',
        title: '메뉴명다섯',
        subTitle: '',
        isDot: false,
        goURL: '/publishing'
      },
      {
        routeName: '',
        title: '메뉴15',
        subTitle: '',
        isDot: false,
        goURL: '/publishing'
      },
      {
        routeName: '',
        title: '편성표',
        subTitle: '',
        isDot: false,
        goURL: '/publishing'
      }
    ]
    templateTopNeviList.forEach(item => templateTopNevi.value.content.push(item))
  }

  return {
    templateTopNevi: readonly(templateTopNevi),
    initAction
  }
})
