import { defineConfig } from 'vite'
import honox from 'honox/vite'

const entry = 'app/server.ts'

export default defineConfig({
    plugins: [
        honox({ entry }),
    ]
})