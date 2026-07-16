import { Link, useParams } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { GithubIcon } from '../components/icons'
import NotFound from './NotFound'

const linkStyles =
  'inline-flex items-center gap-1.5 rounded-sm font-mono text-sm text-paper-100 transition-colors hover:text-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950'

function CaseStudy() {
  const { id } = useParams<{ id: string }>()
  const project = PROJECTS.find((candidate) => candidate.id === id)

  if (!project || !project.caseStudy) {
    return <NotFound />
  }

  const { caseStudy } = project

  return (
    <main className="min-h-screen bg-ink-950 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link to="/#projects" className={linkStyles}>
          ← Back to projects
        </Link>

        <p className="mt-8 font-mono text-section-label text-accent-500 uppercase">
          Case study
        </p>
        <h1 className="mt-2 font-display text-4xl text-paper-100 sm:text-5xl">
          {project.title}
        </h1>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-paper-100/15 px-2.5 py-0.5 font-mono text-xs text-paper-100"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={linkStyles}
            >
              Live site
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className={linkStyles}
          >
            <GithubIcon className="h-4 w-4" />
            Source on GitHub
          </a>
        </div>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="font-display text-xl text-paper-100">
              Problem statement
            </h2>
            <p className="mt-3 text-paper-400">{caseStudy.problem}</p>
          </section>
          <section>
            <h2 className="font-display text-xl text-paper-100">
              Architecture overview
            </h2>
            <p className="mt-3 text-paper-400">{caseStudy.architecture}</p>
          </section>
          <section>
            <h2 className="font-display text-xl text-paper-100">
              Key technical decisions
            </h2>
            <p className="mt-3 text-paper-400">{caseStudy.decisions}</p>
          </section>
          <section>
            <h2 className="font-display text-xl text-paper-100">
              Challenge &amp; solution
            </h2>
            <p className="mt-3 text-paper-400">{caseStudy.challenge}</p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default CaseStudy
