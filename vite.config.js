import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import legacy from '@vitejs/plugin-legacy'




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    legacy({
      targets: ['defaults', 'IE 11']
    }),
  ],
})
