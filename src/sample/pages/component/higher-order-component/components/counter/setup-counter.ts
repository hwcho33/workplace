// 카운터 컴포넌트 규격 정의
export interface CounterComponent {
  wrappedComponent: Component
  number: number
}

// 카운터 컴포넌트 생성 함수
export default function (counter: CounterComponent): Component {
  return {
    // 컴포넌트 명칭
    name: 'SetupCounter',

    setup() {
      // 카운트 횟수
      const count = ref(0)

      // 증감 함수
      function inc(value: number) {
        count.value += value
      }

      // 증감 진행부
      const increment = () => inc(counter.number)

      // return
      return () => h(counter.wrappedComponent, { counter: count.value, increment })
    }
  }
}
