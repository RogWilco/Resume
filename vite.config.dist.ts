import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    envPrefix: 'RESUME_',
    plugins: [react()],
    build: {
      outDir: 'out/dist',
    },
    server: {
      port: Number(env.RESUME_PORT ?? 3001),
    },
  }
})
