import { useState } from 'react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

const linkStyles =
  'inline-flex items-center gap-1.5 rounded-sm font-mono text-sm text-paper-100 transition-colors hover:text-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 19 19"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844"
      />
    </svg>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

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
    <div className="flex items-center gap-5">
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
              <p className="mt-2 text-sm text-paper-400">{project.caseStudy}</p>
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
