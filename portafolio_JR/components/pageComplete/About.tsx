"use client"

import { motion } from "framer-motion"
import { User, Target, Briefcase } from "lucide-react"

const cards = [
  {
    icon: User,
    title: "¿Quién soy?",
    description:
      "Estudiante de cuarto año de Ingeniería Informática con experiencia práctica en desarrollo web y personalización de plataformas tecnológicas.",
  },
  {
    icon: Briefcase,
    title: "Qué hago",
    description:
      "Desarrollo Frontend en Vue.js, React, TypeScript y PHP. Participo en proyectos reales para instituciones internacionales como FUNIBER y la Universidad Europea del Atlántico.",
  },
  {
    icon: Target,
    title: "Mi objetivo",
    description:
      "Seguir adquiriendo conocimientos y experiencia como profesional en el área del desarrollo de software, combinando la parte técnica con la gestión y coordinación de equipos.",
  },
]

const milestones = [
  { year: "2021", event: "Product Owner en CORPOLEGAL" },
  { year: "2022", event: "Inicio en FUNIBER como Desarrollador" },
  { year: "2023", event: "Migración Vue 2 a Vue 3 - DietingLab" },
  { year: "2024", event: "Migración OJS 3.1 a 3.4 - MLS Journals" },
]

export function About() {
  return (
    <section id="sobre-mi" className="w-full relative py-20 sm:py-28 px-[clamp(16px,4vw,72px)] bg-[#0c101c]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-[#e0e6f0] mb-12 text-center">Sobre mí</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1a1d29] border border-white/10 rounded-lg p-6 hover:border-[#00c3ff]/50 transition-colors"
            >
              <card.icon className="w-10 h-10 text-[#00c3ff] mb-4" />
              <h3 className="text-xl font-semibold text-[#e0e6f0] mb-3">{card.title}</h3>
              <p className="text-[#9ca3af]">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#e0e6f0] mb-8 text-center">Hitos clave</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00c3ff] to-[#7b61ff] flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">
                  {milestone.year}
                </div>
                <p className="text-sm text-[#9ca3af] max-w-[20ch]">{milestone.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
