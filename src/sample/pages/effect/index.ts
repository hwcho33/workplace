export function generateDynamicGradient(width: number, height: number): string {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (!context) {
    return ''
  }

  const colors = [...new Array(3)].map(() => {
    return `#${((Math.random() * 0xffffff) << 0).toString(16)}`
  })

  const randomNumber = (max: number = 1, min: number = 0) => {
    return Math.floor(Math.random() * (max - min)) + min
  }

  const circleCount = (width * height) / 2000
  const maxRadius = width / 6
  const minRadius = randomNumber(maxRadius * 0.9, 20)

  const drawCircle = (n: number) => {
    context.beginPath()
    context.arc(randomNumber(width), randomNumber(height), randomNumber(maxRadius, minRadius), 0, Math.PI * 2, false)
    context.fillStyle = colors[n % 3]
    context.fill()
  }

  // Initialize canvas
  canvas.width = width
  canvas.height = height
  context.fillStyle = colors[0]
  context.fillRect(0, 0, width, height)

  // Filter
  context.filter = 'blur(50px) saturate(1.5)'

  // Add circles
  for (let i = 0; i < circleCount; i++) {
    drawCircle(i)
  }

  return canvas.toDataURL()
}
