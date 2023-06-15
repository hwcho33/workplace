import { computed, reactive } from 'vue'
export const useTimer = () => {
  type TimerState = {
    min: number
    sec: number
    timer?: any
    callback: unknown
    timerName?: string
    minView: string
    secView: string
  }
  const state: TimerState = reactive({
    min: 0,
    sec: 0,
    timer: undefined,
    callback: undefined,
    timerName: undefined,
    minView: computed(() => state.min.toString().padStart(2, '0')),
    secView: computed(() => state.sec.toString().padStart(2, '0'))
  })

  function startTimer(min: number, sec: number, callback?: unknown, timerName?: string) {
    state.min = min
    state.sec = sec
    if (typeof callback === 'function') state.callback = callback
    if (typeof timerName === 'string') state.timerName = timerName
    state.timer = setInterval(countTimer, 1000)
  }

  function countTimer() {
    if (state.sec !== 0) {
      state.sec--
    } else {
      if (state.min !== 0) {
        state.min--
        state.sec = 59
      } else {
        clearTimer(state.timer as number, `${state.timerName} 타이머 종료`)
        return
      }
    }
    console.log(`${state.minView}:${state.secView} ${state.timerName}`)
  }

  function clearTimer(t: number, msg: string) {
    clearInterval(t)
    console.log(msg)
    if (state.callback && typeof state.callback === 'function') {
      state.callback()
    }
    state.min = 0
    state.sec = 0
    state.timer = undefined
    state.timerName = undefined
    state.callback = undefined
  }

  function resetTimer() {
    // 리셋 버튼 연결
    if (state.timer) {
      console.log(`${state.timerName} 타이머 리셋`)
      clearInterval(state.timer)
      state.min = 0
      state.sec = 0
      state.timer = undefined
      state.timerName = undefined
      state.callback = undefined
    }
  }

  return {
    state,
    startTimer,
    countTimer,
    clearTimer,
    resetTimer
  }
}
