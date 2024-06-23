import { defineConfig } from 'vite'
import ssg from '@hono/vite-ssg'
import honox from 'honox/vite'

const entry = './app/server.ts'

export default defineConfig({
    plugins: [
        honox(),
        ssg({ entry })
    ]
})