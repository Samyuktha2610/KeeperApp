// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/KeeperApp/',  // <-- IMPORTANT: include slashes and match repo name
  plugins: [react()],
});
