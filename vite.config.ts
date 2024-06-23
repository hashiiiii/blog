import { defineConfig } from 'vite'
import ssg from '@hono/vite-ssg'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const entry = './pages/index.tsx'

export default defineConfig({
    plugins: [
        ssg({ entry }),
        viteStaticCopy({
            targets: [
                {
                    src: 'public/**/*',
                    dest: 'dict',
                    overwrite: false
                }
            ]
        })
    ],
})