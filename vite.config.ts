import { defineConfig } from 'vite'
import ssg from '@hono/vite-ssg'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const entry = './pages/index.tsx'
const src = 'public/**/*'
const dest = 'dist'

export default defineConfig({
    plugins: [
        ssg({ entry }),
        viteStaticCopy({
            targets: [
                {
                    src: src,
                    dest: dest,
                    overwrite: false
                }
            ]
        })
    ],
})