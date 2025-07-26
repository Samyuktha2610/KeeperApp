import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/KeeperApp/', // 👈 IMPORTANT: your GitHub repo name
  plugins: [react()],
});
