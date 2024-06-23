import { defineConfig } from 'vite'
import ssg from '@hono/vite-ssg'

export default defineConfig({
    plugins: [ssg({
        entry: './pages/index.tsx',
    })],
})