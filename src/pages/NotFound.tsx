import Button from '../components/Button'

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink-950 px-6 text-center">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-section-label text-accent-500 uppercase">
          // 404 — not found
        </p>
        <h1 className="mt-2 font-display text-4xl text-paper-100 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-paper-400">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary">
            Back to homepage
          </Button>
        </div>
      </div>
    </main>
  )
}

export default NotFound
