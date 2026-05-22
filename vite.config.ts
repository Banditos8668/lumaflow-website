import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Inline small assets (< 4 KB) as base64 to save requests
    assetsInlineLimit: 4096,
    // Slightly increase chunk size warning threshold (single-page app)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Separate vendor bundle for better long-term caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
