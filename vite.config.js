// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use a function that checks the command
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    // Default base path (none)
    base: '/',
  };

  // If the command is 'build' (meaning production deployment)
  if (command === 'build') {
    // Apply the repository name path for GitHub Pages
    config.base = '/FOOD-DELIVERY-APP-GLIDIX-MACHINE-TASK/';
  }

  return config;
});