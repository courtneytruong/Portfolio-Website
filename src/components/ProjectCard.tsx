import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ExternalLinkIcon, GithubIcon } from './icons'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

const linkStyles =
  'inline-flex items-center gap-1.5 rounded-sm font-mono text-sm text-paper-100 transition-colors hover:text-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950'

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false)

  const screenshot = !imgError ? (
    <img
      src={project.screenshot}
      alt={`Screenshot of ${project.title}`}
      onError={() => setImgError(true)}
      className="h-full w-full object-cover"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-ink-800">
      <span className="font-mono text-section-label uppercase tracking-wide text-paper-400">
        {project.title}
      </span>
    </div>
  )

  const techChips = (
    <ul className="flex flex-wrap gap-2">
      {project.techStack.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-paper-100/15 px-2.5 py-0.5 font-mono text-xs text-paper-100"
        >
          {tech}
        </li>
      ))}
    </ul>
  )

  const links = (
    <div className="flex flex-wrap items-center gap-5">
      {!featured && project.caseStudy && (
        <Link to={`/projects/${project.id}`} className={linkStyles}>
          Case study →
        </Link>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className={linkStyles}
        >
          Live
          <ExternalLinkIcon className="h-3.5 w-3.5" />
        </a>
      )}
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} source on GitHub`}
        className={linkStyles}
      >
        <GithubIcon className="h-4 w-4" />
        Code
      </a>
    </div>
  )

  if (featured) {
    return (
      <article className="grid gap-8 rounded-2xl border border-paper-100/10 p-6 transition duration-200 ease-out hover:-translate-y-1 hover:border-accent-500/40 md:grid-cols-2 md:p-8">
        <div className="aspect-video overflow-hidden rounded-lg bg-ink-800 md:order-2">
          {screenshot}
        </div>
        <div className="flex flex-col justify-center md:order-1">
          <p className="font-mono text-section-label uppercase tracking-wide text-accent-500">
            Featured project
          </p>
          <h3 className="mt-2 font-display text-2xl text-paper-100 sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 text-paper-400">{project.description}</p>
          <div className="mt-4">{techChips}</div>
          <div className="mt-6">{links}</div>
          {project.caseStudy && (
            <div className="mt-6 border-l-2 border-accent-500/40 pl-4">
              <p className="font-mono text-section-label uppercase tracking-wide text-paper-400">
                Case study
              </p>
              <p className="mt-2 text-sm text-paper-400">
                {project.caseStudy.problem}
              </p>
              <Link
                to={`/projects/${project.id}`}
                className={`${linkStyles} mt-3`}
              >
                Read the full case study →
              </Link>
            </div>
          )}
        </div>
      </article>
    )
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-paper-100/10 transition duration-200 ease-out hover:-translate-y-1 hover:border-accent-500/40">
      <div className="aspect-video bg-ink-800">{screenshot}</div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg text-paper-100">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-paper-400">
          {project.description}
        </p>
        <div className="mt-4">{techChips}</div>
        <div className="mt-4">{links}</div>
      </div>
    </article>
  )
}

export default ProjectCard
