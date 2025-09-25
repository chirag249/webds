import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this 'base' property:
  base: '/webds/', // <-- IMPORTANT: Replace 'your-repo-name' with your repository name
})