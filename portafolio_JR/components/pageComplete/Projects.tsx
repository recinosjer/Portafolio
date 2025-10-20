"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section id="proyectos" className="w-full relative py-20 sm:py-28 px-[clamp(16px,4vw,72px)] bg-[#090d16]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-[#e0e6f0] mb-12 text-center">Proyectos</h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(360px,100%),1fr))] gap-x-6 gap-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1a1d29] border border-white/10 rounded-lg overflow-hidden hover:border-[#00c3ff]/50 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.demoUrl && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">Ver demo</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#e0e6f0] mb-2">{project.title}</h3>
                {project.period && <p className="text-sm text-[#00c3ff] mb-3">{project.period}</p>}
                <p className="text-[#9ca3af] text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-[#0e1117] text-[#00c3ff] text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                 <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00c3ff] to-[#7b61ff] text-white text-sm font-medium rounded hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c3ff]"
                  >
                    <ExternalLink size={16} />
                    Visitar
                  </a>
                  {project.codeUrl ? (
                    <button
                      disabled
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-[#00c3ff] text-[#00c3ff] text-sm font-medium rounded hover:bg-[#00c3ff]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c3ff]"
                    >
                      <Github size={16} />
                      Código
                    </button>
                  ) : (
                    <button
                      disabled
                      aria-disabled="true"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-400 text-sm font-medium rounded cursor-not-allowed"
                    >
                      <Github size={16} />
                      Código
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
