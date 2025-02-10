import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Clock-App/',  // Add this line - should match your repository name
  plugins: [react()]
})