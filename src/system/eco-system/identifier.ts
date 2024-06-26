export class GUID {
  private str: string

  constructor(str?: string) {
    this.str = str || GUID.getNewGUIDString()
  }

  getId() {
    return this.str
  }

  private static getNewGUIDString() {
    let d = new Date().getTime()
    if (window.performance && typeof window.performance.now === 'function') {
      d += performance.now() //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
    })
  }
}
