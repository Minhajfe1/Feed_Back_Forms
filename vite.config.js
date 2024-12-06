import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This will proxy requests from your frontend to the Zapier webhook
      '/zapier-webhook': {
        target: 'https://hooks.zapier.com', // The base URL of Zapier webhook
        changeOrigin: true, // Ensure the origin header is modified for the target server
        rewrite: (path) => path.replace(/^\/zapier-webhook/, ''), // Remove '/zapier-webhook' from the path
      },
    },
  },
})
