export interface Project {
  id: string
  title: string
  description: string // 2-3 sentence "why I built this"
  techStack: string[]
  liveUrl?: string
  repoUrl: string
  screenshot: string // path to image/gif
  featured: boolean // controls lead placement — set on whichever project you want to lead with at build time
  caseStudy?: string // optional longer writeup for the featured project
}

// Exactly one project should have `featured: true` at a time — that's the
// one-line change that swaps the lead project. Everything else (layout,
// ordering, styling) reads off this flag rather than a hardcoded slug.
export const PROJECTS: Project[] = [
  {
    id: 'project-one',
    title: 'Project One',
    description:
      'TODO: replace with 2-3 sentences on why this project exists — the problem it solves and what motivated building it.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/courtneytruong/project-one',
    screenshot: '/projects/project-one.png',
    featured: true,
    caseStudy:
      'TODO: optional longer writeup for the featured project — architecture decisions, tradeoffs, what you learned.',
  },
  {
    id: 'project-two',
    title: 'Project Two',
    description:
      'TODO: replace with 2-3 sentences on why this project exists — the problem it solves and what motivated building it.',
    techStack: ['C#', 'ASP.NET Core', 'PostgreSQL'],
    repoUrl: 'https://github.com/courtneytruong/project-two',
    screenshot: '/projects/project-two.png',
    featured: false,
  },
  {
    id: 'project-three',
    title: 'Project Three',
    description:
      'TODO: replace with 2-3 sentences on why this project exists — the problem it solves and what motivated building it.',
    techStack: ['Node.js', 'Express.js', 'LangGraph'],
    repoUrl: 'https://github.com/courtneytruong/project-three',
    screenshot: '/projects/project-three.png',
    featured: false,
  },
]
