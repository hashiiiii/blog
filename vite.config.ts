import { defineConfig } from 'vite'
//import { viteStaticCopy } from 'vite-plugin-static-copy'
import ssg from '@hono/vite-ssg'
import honox from 'honox/vite'
import { viteStaticCopy } from "vite-plugin-static-copy";

const entry = './app/server.ts'

export default defineConfig({
    plugins: [
        honox(),
        ssg({ entry }),
        viteStaticCopy({
            targets: [
                {
                    src: './public/**/*',
                    dest: './dist',
                    overwrite: false
                }
            ]
        })
    ]
})