export interface CaseStudy {
  problem: string // what problem was this solving, and for whom?
  architecture: string // high-level architecture overview — major pieces and how they fit together
  decisions: string // key technical decisions and why you made them
  challenge: string // one specific challenge you hit and how you solved it
}

export interface Project {
  id: string
  title: string
  description: string // 2-3 sentence "why I built this"
  techStack: string[]
  liveUrl?: string
  repoUrl: string
  screenshot: string // path to image/gif
  featured: boolean // controls lead placement — set on whichever project you want to lead with at build time
  caseStudy?: CaseStudy // optional extended writeup, rendered at /projects/[id]
}

// Placeholder case study content, matching the 4-part template (problem,
// architecture, decisions, challenge). Call this for any project — featured
// or not — and fill in the TODOs when you write the real thing.
function createCaseStudyTemplate(): CaseStudy {
  return {
    problem: 'TODO: what problem was this project solving, and who was it for?',
    architecture:
      'TODO: high-level architecture overview — the major pieces and how they fit together.',
    decisions: 'TODO: key technical decisions you made and why you made them.',
    challenge: 'TODO: one specific challenge you hit and how you solved it.',
  }
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
    caseStudy: createCaseStudyTemplate(),
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
    caseStudy: createCaseStudyTemplate(),
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
    caseStudy: createCaseStudyTemplate(),
  },
  {
    id: 'project-four',
    title: 'Project Four',
    description:
      'TODO: replace with 2-3 sentences on why this project exists — the problem it solves and what motivated building it.',
    techStack: ['Node.js', 'Express.js', 'LangGraph'],
    repoUrl: 'https://github.com/courtneytruong/project-four',
    screenshot: '/projects/project-four.png',
    featured: false,
    caseStudy: createCaseStudyTemplate(),
  },
]
