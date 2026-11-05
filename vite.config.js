import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relativa sökvägar i bygget, så att sidan fungerar både på en egen domän
  // och i en undermapp (t.ex. jimlayy.github.io/Personal-Website/).
  base: './',
})
