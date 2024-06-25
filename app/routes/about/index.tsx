import { Hono } from 'hono'

const app = new Hono()

app.get('/about', (c) => {
    return c.render('This is the about page.', {title: 'Hono SSG Page'})
})

export default app