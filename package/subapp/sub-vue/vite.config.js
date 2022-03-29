import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint' // 引入vite-plugin-vue
import path from 'path'
import ElementPlus from 'unplugin-element-plus/vite'
// 自动引入
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import { name } from './package.json'
import qiankun from 'vite-plugin-qiankun'

console.log(name)
// useDevMode 开启时与热更新插件冲突
const useDevMode = true

// 打印所有的resolves 查看适用ui库
// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: mode === 'development' ? '/' : '/subapp/sub-vue',
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/css/element-variable.scss" as *;`,
        },
      },
    },
    plugins: [
      vue(),
      // 设置eslint
      eslintPlugin({
        cache: false,
        include: ['src/**/*.vue', 'src/**/*.js'], // 检查的文件
      }),

      ElementPlus({
        useSource: true,
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            // 自动引入修改主题色添加这一行，使用预处理样式
            importStyle: 'sass',
          }),
        ],
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'vue-router'],
        eslintrc: {
          enabled: false, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
          filepath: './.eslintrc-auto-import.json', // 生成json文件
          globalsPropValue: true,
        },
      }),
      qiankun('sub-app/sub-vue', { useDevMode }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 3030,
    },
  })
}
