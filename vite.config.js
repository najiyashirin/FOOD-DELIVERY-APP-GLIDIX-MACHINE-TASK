import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This configuration uses the relative path './' for the build command, 
// which is typically more reliable for GitHub Pages deployments 
// when the app is hosted in a repository subpath.
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    // Default base path for development (usually just '/')
    base: '/', 
  };

  // If the command is 'build' (meaning production deployment, run via 'npm run deploy')
  if (command === 'build') {
    // FIX: Changing to relative path './' ensures all asset links 
    // (JS, CSS, images) are correctly loaded relative to the index.html file.
    config.base = './';
  }

  return config;
});