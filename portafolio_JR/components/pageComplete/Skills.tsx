"use client"

import { motion } from "framer-motion"
import { skills } from "@/data/skills"

const labels = { frontend: "Frontend", backend: "Backend", tools: "Herramientas" } as const

export function Skills() {
  const grouped = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    tools: skills.filter((s) => s.category === "tools"),
  }

  return (
    <section
      id="habilidades"
      className="w-full relative py-20 sm:py-28 px-[clamp(16px,4vw,72px)] bg-[#0a0e19] text-center"
    >
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-[#e0e6f0] text-center">Habilidades Técnicas</h2>
        <div className="w-24 h-[3px] gradient-diagonal rounded mt-3 mb-12 mx-auto" />
      </motion.div>

      <div className="space-y-14">
        {/* Frontend */}
        <section>
          <h3 className="text-2xl font-semibold text-[#00c3ff] mb-6 text-center">{labels.frontend}</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {grouped.frontend.map((skill, i) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="chip chip-cyan glow-cyan"
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Backend */}
        <section>
          <h3 className="text-2xl font-semibold text-[#7b61ff] mb-6 text-center">{labels.backend}</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {grouped.backend.map((skill, i) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="chip chip-purple glow-purple"
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Herramientas */}
        <section>
          <h3 className="text-2xl font-semibold text-[#e0e6f0] mb-6 text-center">{labels.tools}</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {grouped.tools.map((skill, i) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="chip hover:border-[#e0e6f0]"
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
