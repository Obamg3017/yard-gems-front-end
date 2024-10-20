import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", //browsers can handle the latest ES features
  },
  server: {
    historyApiFallback: true, // Ensures the server sends index.html for all routes
  },
});
