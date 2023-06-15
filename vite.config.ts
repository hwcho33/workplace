import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import MarkDown from 'vite-plugin-vue-markdown'
import Shiki from 'markdown-it-shiki'
import AutoImport from 'unplugin-auto-import/vite'
import unocss from 'unocss/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import {
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig(({ mode }): any => {
  // 실행환경 변수
  const env = loadEnv(mode, process.cwd())

  return {
    resolve: {
      // path 관련 alias
      alias: {
        '@': resolve(__dirname, 'src/system'),
        '~': resolve(__dirname, 'src/service'),
        '#': resolve(__dirname, 'src/sample'),
        '&': resolve(__dirname, 'src/publishing')
      }
    },
    plugins: [
      // unocss 설정 - 향후 제거 예정
      unocss({
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            scale: 1.2,
            warn: true
          }),
          presetTypography(),
          // web 폰트 프리셋
          presetWebFonts({
            provider: 'google', // default provider
            fonts: {
              mono: ['Fira Code', 'Fira Mono:400,700']
            }
          })
        ],
        transformers: [transformerDirectives(), transformerVariantGroup()],
        safelist: 'prose prose-sm m-auto text-left'.split(' '),
        variants: [
          function (matcher) {
            return {
              matcher,
              selector: s => `${'#uno-area'} $$ ${s}`
            }
          }
        ]
      }),

      Vue({
        include: [/\.vue$/, /\.md$/]
      }),

      // https://github.com/antfu/unplugin-auto-import
      // 필수 의존성 전역 import 처리
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        // eslint 예외 처리
        eslintrc: {
          enabled: true,
          filepath: './src/system/auto-config/.eslintrc-auto-import.json',
          globalsPropValue: true
        },
        exclude: ['**/dist/**'],
        dts: 'src/system/auto-config/auto-imports.d.ts'
      }),

      // 마크다운
      MarkDown({
        // 기본 지정 클래스
        wrapperClasses: 'prose prose-sm text-left',
        markdownItSetup(md) {
          // Shiki 스킨 설정(code style)
          md.use(Shiki, {})
        }
      }),

      VueI18nPlugin({
        runtimeOnly: false,
        compositionOnly: true,
        fullInstall: true,
        include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**')
      })
    ],
    server: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      open: false,
      proxy: {
        // proxy 설정
        '/auth': {
          target: 'http://localhost:8081',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true
        },

        /**
         * API Proxy 설정
         * 추가되는 경로는 정규식에 `|{경로}` 와 같은 방식으로 추가해주시면 됩니다.
         */
        '^/(or|md)/.*': {
          target: env.VITE_PROXY_TARGET,
          changeOrigin: true

          /**
           * Proxy log를 보시려면 아래 주석을 해제해주세요.
           */
          // configure: (proxy, _options) => {
          //   proxy.on('error', (err, _req, _res) => {
          //     console.log('proxy error', err)
          //   })
          //   proxy.on('proxyReq', (proxyReq, req, _res) => {
          //     console.log(
          //       'Sending Request:',
          //       req.method,
          //       req.url,
          //       ' => TO THE TARGET =>  ',
          //       proxyReq.method,
          //       proxyReq.protocol,
          //       proxyReq.host,
          //       proxyReq.path,
          //       JSON.stringify(proxyReq.getHeaders())
          //     )
          //   })
          //   proxy.on('proxyRes', (proxyRes, req, _res) => {
          //     console.log(
          //       'Received Response from the Target:',
          //       proxyRes.statusCode,
          //       req.url,
          //       JSON.stringify(proxyRes.headers)
          //     )
          //   })
          // }
        }

        // '/ns-mall-api': {
        //   target: env.VITE_PROXY_TARGET,
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/ns-mall-api/, '')
        // }
      }
    },
    preview: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT)
    },
    build: {
      minify: 'terser',
      terserOptions: {
        // 빌드 시 console 및 debugger 제거
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      assetsInlineLimit: 10000000,
      rollupOptions: {
        output: {
          // 정적 리소스 분기 처리
          assetFileNames: (assetInfo: any): string => {
            const info: string[] = assetInfo.name.split('.')
            let ext: string = info[info.length - 1]
            if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
              ext = 'images/'
            } else if (/woff|woff2/.test(ext)) {
              ext = 'fonts/'
            } else {
              ext = ''
            }
            return `assets/${ext}[name]-[hash][extname]`
          }
        }
      }
    }
  }
})
