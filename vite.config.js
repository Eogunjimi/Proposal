import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Required so the live preview (proxied host) can reach the dev server
    host: true,
    allowedHosts: ['.e2b.app'],
  },
});
