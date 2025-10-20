"use client"

import { motion } from "framer-motion"
import type { Skill } from "@/data/skills"

interface SkillBadgeProps {
  skill: Skill
  index: number
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border 
      border-border hover:border-blue-500 transition-colors group"
    >
      <div className="text-4xl">{skill.icon}</div>
      <span className="text-sm font-medium text-center group-hover:text-blue-500
       transition-colors">{skill.name}</span>
    </motion.div>
  )
}
