import { IterItem, MapIds, MapIdKey } from '&/pages/guide/symbols'
interface ResultsItem {
  category: string
  ids: Set<string>
}

const useMapId = () => {
  const idTable = new Set<string>()
  const mapId = inject(MapIdKey) as MapIds
  const setMapIter = (iter: Set<IterItem>) => {
    const results: ResultsItem[] = []
    iter.forEach(item => {
      if (idTable.has(item.id)) {
        console.error(`중복 id name [${item.id}] 를 등록하였습니다. [${item.id}]를 지우고 유니크하게 설정하세요`)
      }
      const isProp = results.some(prop => {
        return prop.category === item.category
      })
      if (!results.length || !isProp) {
        results.push({
          category: item.category,
          ids: new Set([item.id])
        })
      } else {
        results.forEach(result => {
          if (result.category === item.category) {
            result.ids.add(item.id)
          }
        })
      }
      idTable.add(item.id)
    })
    return results
  }
  const checkMapId = (id: string) => {
    return mapId.current.value === id
  }
  const changeCurrentId = (id: string) => {
    mapId.current.value = id
  }
  const addIter = (id: IterItem) => {
    mapId.iter.value.add(id)
  }
  const mapIter = computed(() => setMapIter(mapId.iter.value))
  return {
    ...mapId,
    mapIter,
    checkMapId,
    changeCurrentId,
    addIter
  }
}

export default useMapId
