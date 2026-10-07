import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages sirve el sitio en /mis90maria/ (se define en el workflow con
// VITE_BASE_PATH). Vercel y el entorno local usan la raíz "/".
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
})
