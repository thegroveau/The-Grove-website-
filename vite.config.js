import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // relative base so the build works at any URL (GitHub Pages subpath or a custom domain)
  base: './',
  plugins: [react()],
})
