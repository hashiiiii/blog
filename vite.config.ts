import { defineConfig } from 'vite'
import ssg from '@hono/vite-ssg'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    plugins: [
        ssg({ entry: './pages/index.tsx' }),
        viteStaticCopy({
            targets: [
                {
                    src: 'public/**/*',
                    dest: 'public/static',
                    overwrite: false
                }
            ]
        })
    ],
    build: {
        outDir: 'public',
    }
})