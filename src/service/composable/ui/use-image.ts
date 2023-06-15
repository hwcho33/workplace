export const useCheckLoad = (target: string) => {
  const promiseArr: Promise<any>[] = []
  const listenerArr: { onLoad: () => void; onError: () => void }[] = []

  const _onLoad = (resolve: (value: any) => void) => () => {
    resolve(true)
  }
  const _onError = (reject: (reason?: any) => void) => () => {
    reject('img load error!')
  }
  const setCheckLoad = () => {
    const imgs = document.querySelectorAll(target)
    imgs.forEach(img => {
      promiseArr.push(
        new Promise((resolve, reject) => {
          const onLoad = _onLoad(resolve)
          const onError = _onError(reject)
          listenerArr.push({ onLoad, onError })
          img.addEventListener('load', onLoad)
          img.addEventListener('error', onError)
        })
      )
    })
    return Promise.all(promiseArr)
  }
  const removeCheckLoad = () => {
    const imgs = document.querySelectorAll(target)
    imgs.forEach((img, idx) => {
      img.removeEventListener('load', listenerArr[idx].onLoad)
      img.removeEventListener('error', listenerArr[idx].onError)
    })
  }

  return {
    setCheckLoad,
    removeCheckLoad
  }
}

export const usePinchZoom = () => {
  interface Dom {
    screenEl: HTMLElement | null
    targetEl: HTMLElement | null
    preventAreaEl: HTMLElement | null
    evHistory: Touch[]
  }
  interface ZoomState {
    weight: number
    minZoom: 1
    maxZoom: 3
    prevDiff: number
  }
  interface MoveState {
    weight: 70
    prevClientX: number
    prevClientY: number
    prevDiff: -1 | 1
  }
  interface PinchZoomState {
    x: number
    y: number
    scale: number
  }

  // dom객체 및 터치이벤트 객체
  const dom: Dom = {
    screenEl: null,
    targetEl: null,
    preventAreaEl: null,
    evHistory: []
  }
  // 줌 상태 값
  const zoomState: ZoomState = {
    weight: 0.09,
    minZoom: 1,
    maxZoom: 3,
    prevDiff: -1
  }
  // 무브 상태 값
  const moveState: MoveState = {
    weight: 70,
    prevClientX: 0,
    prevClientY: 0,
    prevDiff: -1
  }
  // PinchZoom 상태 값
  const state: PinchZoomState = {
    x: 0,
    y: 0,
    scale: 1
  }

  // 상태 값을 가져오는 getter
  const getState = () => {
    return state
  }
  // 타겟의 상태 값 수정 및 랜더링 setter
  const setState = ({ x, y, scale }: PinchZoomState) => {
    const target = dom.targetEl!
    state.x = x
    state.y = y
    state.scale = scale
    target.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`
  }
  // 핀치 로직
  const onPinch = ({ zoom, x: centerX, y: centerY }: { zoom: number; x: number; y: number }) => {
    if (zoom === 0) {
      return
    }

    const { x, y, scale } = getState()

    const calcScale = scale + (zoom > 0 ? zoomState.weight : -zoomState.weight)
    const nextScale = calcScale > zoomState.maxZoom ? zoomState.maxZoom : calcScale

    const biasX = ((centerX - x) * nextScale) / scale - (centerX - x)
    const biasY = ((centerY - y) * nextScale) / scale - (centerY - y)
    const nextX = x - biasX
    const nextY = y - biasY

    const nextState = {
      x: nextScale < zoomState.minZoom ? 0 : nextX,
      y: nextScale < zoomState.minZoom ? 0 : nextY,
      scale: nextScale < zoomState.minZoom ? zoomState.minZoom : nextScale
    }

    setState(nextState)
  }
  // 무브 로직
  const onMove = ({ x: clientX, y: clientY }: { x: number; y: number }) => {
    const target = dom.targetEl!
    const { x, y, scale } = getState()
    const xDiff = clientX - moveState.prevClientX
    const yDiff = clientY - moveState.prevClientY

    if (moveState.prevDiff > 0) {
      const calcX = x + xDiff
      const calcY = y + yDiff
      const weight = moveState.weight * scale
      const width = target.clientWidth * scale - weight
      const height = target.clientHeight * scale - weight
      const resultX = calcX > weight ? weight : calcX < -width ? -width : calcX
      const resultY = calcY > weight ? weight : calcY < -height ? -height : calcY
      setState({ x: resultX, y: resultY, scale })
    }
    moveState.prevClientX = clientX
    moveState.prevClientY = clientY
    moveState.prevDiff = 1
  }
  // 터치 시작 Handler
  const touchStartHandler = (ev: TouchEvent) => {
    const touches = ev.changedTouches
    if (dom.evHistory.length + touches.length <= 2) {
      for (let i = 0; i < touches.length; i++) {
        const touch = touches[i]
        dom.evHistory.push(touch)
      }
    }
  }
  // 터치 끝 Handler
  const touchEndHandler = (ev: TouchEvent) => {
    const touches = ev.changedTouches
    for (let i = 0; i < touches.length; i++) {
      const touch = touches[i]
      const index = dom.evHistory.findIndex(cachedEv => cachedEv.identifier === touch.identifier)
      if (index > -1) {
        dom.evHistory.splice(index, 1)
      }
    }
    moveState.prevDiff = -1
  }
  // 터치 이동시 핀치 발생 체크 Handler
  const touchMoveHandler = (ev: TouchEvent) => {
    const touches = ev.changedTouches
    for (let i = 0; i < touches.length; i++) {
      const touch = touches[i]
      const index = dom.evHistory.findIndex(cachedEv => cachedEv.identifier === touch.identifier)
      if (index !== -1) {
        dom.evHistory[index] = touch

        // 두 개의 터치가 진행중인 경우 핀치 줌으로 판단한다
        if (dom.evHistory.length === 2) {
          const xDiff = dom.evHistory[0].clientX - dom.evHistory[1].clientX
          const yDiff = dom.evHistory[0].clientY - dom.evHistory[1].clientY
          const curDiff = Math.sqrt(xDiff * xDiff + yDiff * yDiff)

          // 첫 핀치의 경우 비교군이 없으므로 prevDiff가 -1인 경우 생략한다.
          if (zoomState.prevDiff > 0) {
            const zoom = curDiff - zoomState.prevDiff

            const x = (dom.evHistory[0].clientX + dom.evHistory[1].clientX) / 2
            const y = (dom.evHistory[0].clientY + dom.evHistory[1].clientY) / 2
            const { top, left } = (ev.currentTarget as HTMLElement).getBoundingClientRect()
            onPinch({ zoom, x: x - left, y: y - top })
          }

          zoomState.prevDiff = curDiff
        }

        // 한개의 터치가 진행중이고 스케일이 2이상일시 드래그 이동으로 판단한다
        if (dom.evHistory.length === 1 && getState().scale > 2) {
          onMove({ x: dom.evHistory[0].clientX, y: dom.evHistory[0].clientY })
        }
      }
    }
  }
  // 핀치 줌일시 기본 이벤트 막기 Handler
  const touchPreventHandler = (ev: TouchEvent) => {
    // 핀치 줌의 경우 두 개 이상의 이벤트가 발생한다.
    const { scale } = getState()
    if (scale > 2) {
      if (ev.touches.length >= 1) {
        ev.preventDefault()
      }
    } else {
      if (ev.touches.length > 1) {
        ev.preventDefault()
      }
    }
  }
  // preventArea 이벤트 막기
  const preventZoom = () => {
    dom.preventAreaEl?.addEventListener('touchmove', touchPreventHandler, { passive: false })
  }
  // preventArea 이벤트 막기 제거
  const removePreventZoom = () => {
    dom.preventAreaEl?.removeEventListener('touchmove', touchPreventHandler)
  }
  // 핀치 줌 초기화
  const setPinchZoom = (screen: HTMLElement, target: HTMLElement, preventArea: HTMLElement) => {
    dom.screenEl = screen
    dom.targetEl = target
    dom.preventAreaEl = preventArea
    target.style.transformOrigin = 'top left'
    preventZoom()
    dom.screenEl?.addEventListener('touchstart', touchStartHandler, { passive: true })
    dom.screenEl?.addEventListener('touchmove', touchMoveHandler, { passive: true })
    dom.screenEl?.addEventListener('touchend', touchEndHandler, { passive: true })
    dom.screenEl?.addEventListener('touchcancel', touchEndHandler, { passive: true })
  }
  // 핀치 줌 제거
  const removePinchZoom = () => {
    dom.screenEl?.removeEventListener('touchstart', touchStartHandler)
    dom.screenEl?.removeEventListener('touchmove', touchMoveHandler!)
    dom.screenEl?.removeEventListener('touchend', touchEndHandler)
    dom.screenEl?.removeEventListener('touchcancel', touchEndHandler)
    removePreventZoom()
  }

  return {
    setPinchZoom,
    removePinchZoom
  }
}
