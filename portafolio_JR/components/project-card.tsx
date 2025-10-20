"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { copy } from "@/data/copy"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-200"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="cursor-pointer"
      >
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {project.demoUrl && (
            <div className="absolute inset-0 bg-blue-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <div className="text-white text-center">
                <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">Ver demo</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">{project.title}</h3>

          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              size="sm"
              disabled={!project.demoUrl}
              onClick={() => project.demoUrl && window.open(project.demoUrl, "_blank")}
              className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-disabled={!project.demoUrl}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              {copy.projects.demoButton}
            </Button>
            <Button
              size="sm"
              variant="outline"
              disabled={!project.codeUrl}
              onClick={() => project.codeUrl && window.open(project.codeUrl, "_blank")}
              className="flex-1 border-blue-500 text-blue-500 hover:bg-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-disabled={!project.codeUrl}
            >
              <Github className="w-4 h-4 mr-2" />
              {copy.projects.codeButton}
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
