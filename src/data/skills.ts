export interface SkillCategory {
  category: string
  skills: string[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['C#', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    skills: [
      'ASP.NET Core',
      '.NET',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'REST APIs',
    ],
  },
  {
    category: 'AI / LLM Engineering',
    skills: [
      'LangGraph',
      'LangChain.js',
      'GPT-4o-mini',
      'GitHub Models',
      'text-embedding-3-small',
      'Model Context Protocol (MCP)',
      'HNSWLib',
    ],
  },
  {
    category: 'Tools/DevOps',
    skills: ['Docker', 'Git', 'GitHub Actions', 'AWS', 'CI/CD', 'Jest'],
  },
]
