import { Hono } from "hono"

declare module 'hono' {
    interface ContextRenderer {
        (content: string | Promise<string>, head: { title: string }): Response | Promise<Response>
    }
}

// index.tsx
const app = new Hono()

app.get('/', (c) => c.html('Hello, World!'))
app.use('/about/*', async (c, next) => {
    c.setRenderer((content, head) => {
        return c.html(
            <html>
                <head>
                    <title>{head.title ?? ''}</title>
                </head>
                <body>
                    <p>{content}</p>
                </body>
            </html>
        )
    });
    await next()
})
app.get('/about', (c) => {
    return c.render('Hello!', { title: 'Hono SSG Page' })
})

export default app