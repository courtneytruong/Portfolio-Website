import Button from '../components/Button'

function Intro() {
  return (
    <section
      id="top"
      className="flex min-h-screen scroll-mt-20 items-center justify-center px-6 py-24"
    >
      <div className="animate-intro mx-auto max-w-content text-center">
        <p className="font-mono text-section-label text-accent-500 uppercase">
          // 00 — intro
        </p>
        <h1 className="font-display text-4xl text-paper-100 sm:text-5xl lg:text-6xl">
          Courtney Truong <span className="text-paper-400">-</span> Software
          Developer
        </h1>
        <p className="mt-4 text-paper-400">
          Software developer building full-stack apps with C#, .NET, and React.
          I come from a quality control background, which means I care as much
          about what breaks as what ships. Currently looking for fully remote
          opportunities.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button
            href="/resume.pdf"
            download="Courtney-Truong-Resume.pdf"
            variant="secondary"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Intro
