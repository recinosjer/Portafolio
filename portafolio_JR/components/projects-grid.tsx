import { projects } from "@/data/projects"
import { ProjectCard } from "./project-card"

export function ProjectsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}
