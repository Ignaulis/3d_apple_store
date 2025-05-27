import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/3d_apple_store/',
  plugins: [
    react(),
    tailwindcss(),
    svgr()
  ],
})
