import { execSync } from 'node:child_process'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

function lastCommitDate() {
  try {
    return execSync('git log -1 --format=%cI').toString().trim()
  } catch {
    return new Date().toISOString()
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __LAST_UPDATED__: JSON.stringify(lastCommitDate()),
  },
})
