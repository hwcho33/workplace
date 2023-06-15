interface ObserverOptions {
  callback: Function
  targetElement: HTMLDivElement
}

export const setInfiniteScroll = (options: ObserverOptions) => {
  const observe = new IntersectionObserver(entries => {
    console.info('entry : ', entries)
    // console.log(firstEntry)
  })

  observe.observe(options.targetElement)
}
