import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  theme: {
    extend: {
      fontFamily: {
        menagrotesk: ['Mena Grotesk', 'sans-serif'], // Custom font
      },
    },
  },
})
