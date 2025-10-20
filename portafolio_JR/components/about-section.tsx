"use client"

import { motion } from "framer-motion"
import { copy } from "@/data/copy"
import { User, Code, Target } from "lucide-react"

const iconMap = {
  user: User,
  code: Code,
  target: Target,
}

export function About() {
  return (
    <section id="sobre-mí" className="py-20 px-6 lg:px-12 bg-[#0e1117]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#e0e6f0] mb-4">{copy.about.title}</h2>
          <div className="w-20 h-1 gradient-diagonal mb-8"></div>

          <p className="text-lg text-[#9ca3af] mb-12 max-w-3xl leading-relaxed">{copy.about.intro}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {copy.about.cards.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#1a1d29] border border-[#2a2d3a] rounded-lg p-6 hover:border-[#00c3ff] transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00c3ff] to-[#7b61ff] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#e0e6f0] mb-3">{card.title}</h3>
                <p className="text-[#9ca3af] leading-relaxed">{card.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
