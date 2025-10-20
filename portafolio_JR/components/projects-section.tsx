"use client"

import { motion } from "framer-motion"
import { copy } from "@/data/copy"
import { projects } from "@/data/projects"
import { ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  return (
    <section id="proyectos" className="py-20 px-6 lg:px-12 bg-[#1a1d29]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#e0e6f0] mb-4">{copy.projects.title}</h2>
          <div className="w-20 h-1 gradient-diagonal mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#0e1117] border border-[#2a2d3a] rounded-lg overflow-hidden hover:border-[#00c3ff] transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1117] to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#e0e6f0] mb-2">{project.title}</h3>

                {project.period && (
                  <div className="flex items-center gap-2 text-sm text-[#9ca3af] mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                )}

                <p className="text-[#9ca3af] mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1a1d29] border border-[#2a2d3a] rounded text-sm text-[#00c3ff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.demoUrl && (
                  <Button asChild className="bg-gradient-to-r from-[#00c3ff] to-[#7b61ff] hover:opacity-90 text-white">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {copy.projects.demoButton}
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
