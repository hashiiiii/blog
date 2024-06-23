import { defineConfig } from 'vite'
//import { viteStaticCopy } from 'vite-plugin-static-copy'
import ssg from '@hono/vite-ssg'
import honox from 'honox/vite'

const entry = './app/server.ts'

export default defineConfig({
    plugins: [
        honox(),
        ssg({ entry })
        // viteStaticCopy({
        //     targets: [
        //         {
        //             src: 'public/**/*',
        //             dest: 'public/static',
        //             overwrite: false
        //         }
        //     ]
        // })
    ],
    build: {
        outDir: 'public',
    }
})