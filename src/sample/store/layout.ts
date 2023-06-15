import { generateStorage } from '@/utils/storage'
import sampleMenuList from './data/menu'

export const navigationStore = defineStore('sample-navigation', {
  state: (): MenuGroup => {
    return {
      items: sampleMenuList,
      favorite: [],
      localItems: []
    }
  },
  getters: {},
  actions: {}
})

const storage = generateStorage()

export const layoutStore = defineStore('sample-layout', {
  state() {
    return {
      sideFold: storage.get('sideFold') === 'fold'
    }
  },
  actions: {
    toggleSideFold() {
      this.sideFold = !this.sideFold
      storage.set('sideFold', this.sideFold ? 'fold' : 'default')
    }
  }
})

interface MenuItem {
  key?: string
  label: string
  id: string | number
  alt?: string
  to?: string
  icon?: string
  active?: string
  favorite?: boolean
  children?: MenuItem[]
}

interface MenuGroup {
  items: MenuItem[]
  favorite: MenuItem[]
  localItems: MenuItem[]
}
