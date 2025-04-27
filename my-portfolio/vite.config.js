// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// load .env into process.env
dotenv.config()

export default defineConfig({
  plugins: [react()],
  server: {
    // use the PORT from .env or fall back
    port: Number(process.env.PORT) || 5173
  }
})
