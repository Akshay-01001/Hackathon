import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/predict": {  // Ensure this matches the API route in FastAPI
        target: "http://127.0.0.1:8000", // FastAPI backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
})