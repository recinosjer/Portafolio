"use client"

import { motion } from "framer-motion"
import { experiences } from "@/data/experience"

export function Experience() {
  return (
    <section id="experiencia" className="w-full relative py-20 sm:py-28 px-[clamp(16px,4vw,72px)] bg-[#0b0f1a]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-[#e0e6f0] mb-12 text-center">Experiencia</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-[#00c3ff]/30"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00c3ff]" />
              <div className="bg-[#1a1d29] border border-white/10 rounded-lg p-6 hover:border-[#00c3ff]/50 transition-colors">
                <h3 className="text-xl font-semibold text-[#e0e6f0] mb-1">{exp.title}</h3>
                <p className="text-[#00c3ff] mb-1">{exp.company}</p>
                <p className="text-sm text-[#9ca3af] mb-4">
                  {exp.location} • {exp.period}
                </p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-[#9ca3af] text-sm flex items-start gap-2">
                      <span className="text-[#00c3ff] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
