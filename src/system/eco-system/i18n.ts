// dependencies
import { createI18n } from 'vue-i18n'

// types
import type { App } from 'vue'
import ko from '@/locales/ko'

const i18n = createI18n({
  locale: 'ko',
  legacy: false,
  messages: {
    ko: { ...ko }
  }
})

export const { t } = i18n.global

export function setupI18n(app: App<Element>) {
  app.use(i18n)
}
