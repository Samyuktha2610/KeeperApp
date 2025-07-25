import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/KeeperApp/', // 👈 Your repo name here
  plugins: [react()],
});
