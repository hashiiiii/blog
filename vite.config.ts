import { defineConfig } from 'vite'
import ssg from '@hono/vite-ssg'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const entry = './pages/index.tsx'
const staticSource = 'public/**/*'
const staticDestination = 'dist'

export default defineConfig({
    plugins: [
        ssg({ entry }),
        viteStaticCopy({
            targets: [
                {
                    src: staticSource,
                    dest: staticDestination,
                    overwrite: false
                }
            ]
        })
    ],
})