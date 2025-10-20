"use client"

import { motion } from "framer-motion"
import { copy } from "@/data/copy"
import { skills } from "@/data/skills"

export function Skills() {
  const categories = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    tools: skills.filter((s) => s.category === "tools"),
  }

  return (
    <section id="habilidades" className="py-20 px-6 lg:px-12 bg-[#0e1117]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#e0e6f0] mb-4">{copy.skills.title}</h2>
          <div className="w-20 h-1 gradient-diagonal mb-12"></div>
        </motion.div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-[#00c3ff] mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {categories.frontend.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-[#1a1d29] border border-[#00c3ff] rounded-lg text-[#e0e6f0] font-medium hover:bg-[#00c3ff] hover:text-[#0e1117] transition-all cursor-default glow-cyan"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#7b61ff] mb-4">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {categories.backend.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-[#1a1d29] border border-[#7b61ff] rounded-lg text-[#e0e6f0] font-medium hover:bg-[#7b61ff] hover:text-white transition-all cursor-default glow-purple"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#e0e6f0] mb-4">Herramientas</h3>
            <div className="flex flex-wrap gap-3">
              {categories.tools.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-[#1a1d29] border border-[#2a2d3a] rounded-lg text-[#e0e6f0] font-medium hover:border-[#e0e6f0] transition-all cursor-default"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
