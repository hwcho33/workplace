import { useTemplateTopBannerStore, useTemplateTopNeviStore } from '~/store/store-common/index'
import { TEMPLATE_BR_ID, TEMPLATE_NV_ID } from '~/constants/store-atypical/index'

export const usePageHomeStore = defineStore('PageHome', () => {
  // --------------------------------------------------------------------- [STATE]
  // T_BR_0001
  const templateTopBannerStore = useTemplateTopBannerStore()

  // T_NV_0001
  const templateTopNeviStore = useTemplateTopNeviStore()

  const storeInfo = ref({
    total: 16,
    list: [
      {
        dispId: '1000119363',
        tpltGrpId: '100001',
        tpltGrpCmpstOrd: '1',
        subAreaYn: 'N',
        areaId: '200083',
        subAreaId: '200083',
        areaNm: '홈-고정S배너',
        tpltGrpCompntType: 'TPLT',
        tpltGrpCompntId: '202209190001',
        tpltGrpCompntNm: 'T_BR_0001'
      },
      {
        dispId: '1000119363',
        tpltGrpId: '100000',
        tpltGrpCmpstOrd: '1',
        subAreaYn: 'Y',
        areaId: '200085',
        subAreaId: '200001',
        areaNm: 'GNB',
        tpltGrpCompntType: 'TPLT',
        tpltGrpCompntId: '202209071045',
        tpltGrpCompntNm: 'T_NV_0001'
      },
      {
        dispId: '1000119363',
        tpltGrpId: '100000',
        tpltGrpCmpstOrd: '1',
        subAreaYn: 'Y',
        areaId: '200085',
        subAreaId: '200001',
        areaNm: 'GNB',
        tpltGrpCompntType: 'TPLT',
        tpltGrpCompntId: '202209071045',
        tpltGrpCompntNm: 'T_NV_0001'
      },
      {
        dispId: '1000119363',
        tpltGrpId: '100001',
        tpltGrpCmpstOrd: '3',
        subAreaYn: 'N',
        areaId: '200086',
        subAreaId: '200086',
        areaNm: '홈-TOP S배너',
        tpltGrpCompntType: 'TPLT',
        tpltGrpCompntId: '202209190002',
        tpltGrpCompntNm: 'T_BR_0002'
      },
      {
        dispId: '1000119363',
        tpltGrpId: '100001',
        tpltGrpCmpstOrd: '4',
        subAreaYn: 'N',
        areaId: '200005',
        subAreaId: '200005',
        areaNm: '지금방송중',
        tpltGrpCompntType: 'CRNR',
        tpltGrpCompntId: '100000',
        tpltGrpCompntNm: '지금방송중'
      }
    ],
    pageNum: 1,
    pageSize: 5,
    size: 5,
    startRow: 1,
    endRow: 5,
    pages: 4,
    prePage: 0,
    nextPage: 2,
    isFirstPage: true,
    isLastPage: false,
    hasPreviousPage: false,
    hasNextPage: true,
    navigatePages: 3,
    navigatepageNums: [1, 2, 3],
    navigateFirstPage: 1,
    navigateLastPage: 3
  })

  // --------------------------------------------------------------------- [GETTER]

  // --------------------------------------------------------------------- [ACTION]
  /**
   * 페이지 초기화
   * 1. 템플릿 목록 API 호출(코너 포함)
   * 2. 목록에 추출된 ID로 템플릿 내용 호출
   */
  function pageInitAction() {
    getStoreInfoAction()

    const storeList = storeInfo.value.list

    // -------------------------------------[고정_S_배너]
    const ITEM_T_BR_0001 = storeList.filter(itme => itme.tpltGrpCompntNm === TEMPLATE_BR_ID.T_BR_0001)
    if (ITEM_T_BR_0001.length > 0) {
      templateTopBannerStore.initAction(ITEM_T_BR_0001[0])
    }

    // -------------------------------------[탑메뉴_내비]
    const ITEM_T_NV_0001 = storeList.filter(itme => itme.tpltGrpCompntNm === TEMPLATE_NV_ID.T_NV_0001)
    if (ITEM_T_NV_0001.length > 0) {
      templateTopNeviStore.initAction(ITEM_T_NV_0001[0])
    }
  }

  // API통해 페이지 구성 정보 가져온다.
  function getStoreInfoAction() {
    console.log('[getStoreInfoAction]')
  }

  return {
    pageInitAction
  }
})
