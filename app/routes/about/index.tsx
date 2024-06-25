import { createRoute } from 'honox/factory'

export default createRoute((c) => {
    return c.render(
        <div>
            <h1>About Page</h1>
            <p>This is the about page.</p>
        </div>
    )
})