import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 🎯 Add the 'base' property here:
  base: "/FOOD-DELIVERY-APP-GLIDIX-MACHINE-TASK/", 
  plugins: [react()],
})