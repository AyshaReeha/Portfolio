import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const repoName = 'Portfolio'
 // if your repo is named "Portfolio"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // if your repo is named "Portfolio"

})
