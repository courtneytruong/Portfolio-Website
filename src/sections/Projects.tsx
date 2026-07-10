import SectionShell from '../components/SectionShell'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/projects'

function Projects() {
  const featuredProject = PROJECTS.find((project) => project.featured)
  const otherProjects = PROJECTS.filter(
    (project) => project !== featuredProject,
  )

  return (
    <SectionShell id="projects" index={2} label="Projects">
      <div className="mx-auto mt-8 w-full space-y-12 text-left">
        {featuredProject && <ProjectCard project={featuredProject} featured />}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

export default Projects
