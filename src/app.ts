import {
  router,
  setupStore,
  setupRouter,
  setupRouterGuard,
  setupI18n,
  setupGlobalProperties,
  setupStorageEvent,
  showMode
} from '@/eco-system'
import App from './app.vue'
import '~/scss/index.scss'
import 'swiper/css'

// env
const { VITE_MODE } = import.meta.env

function bootstrap(): void {
  const __app__ = createApp(App)
  setupGlobalProperties(__app__)
  setupStore(__app__)
  setupRouter(__app__)
  setupRouterGuard(router)
  setupI18n(__app__)
  setupStorageEvent()
  showMode(`%c MODE [${VITE_MODE}] `, '#999999', VITE_MODE !== 'production')
  __app__.mount('#app')
}

bootstrap()
