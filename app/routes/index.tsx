import { createRoute } from 'honox/factory'

export default createRoute((c) => {
    return c.render(
        <div class="font-sans text-primary">
            <header class="bg-primary text-background p-4">
                <nav class="flex justify-around">
                    <a href="/blog" class="text-background no-underline hover:underline">Blog</a>
                    <a href="/portfolio" class="text-background no-underline hover:underline">Portfolio</a>
                </nav>
            </header>
            <main class="bg-background p-8">
                <h1 class="text-primary">Hello!</h1>
                <p class="text-secondary">Welcome to my self-introduction page.</p>
            </main>
            <footer class="bg-accent text-primary p-4 text-center">
                © 2024 hashiiiii
            </footer>
        </div>
    )
})