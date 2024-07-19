import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

import tailwindPlugin from './tailwind.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: 'src/assets/imgs/*.svg' })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // 路径别名
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss(tailwindPlugin)]
    }
  }
})
