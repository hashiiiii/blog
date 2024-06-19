declare module 'hono' {
    interface ContextRenderer {
        (content: string | Promise<string>, head: { title: string }): Response | Promise<Response>
    }
}