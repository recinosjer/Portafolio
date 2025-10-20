"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const techIcons = [
  { name: "React", color: "#61DAFB", position: 0 },
  { name: "JS", color: "#F7DF1E", position: 1 },
  { name: "HTML", color: "#E34F26", position: 2 },
  { name: "CSS", color: "#1572B6", position: 3 },
  { name: "Node", color: "#339933", position: 4 },
  { name: "Git", color: "#F05032", position: 5 },
  { name: "SQL", color: "#4479A1", position: 6 },
  { name: "Java", color: "#007396", position: 7 },
]

export function Orbit() {
  return (
    <div className="relative w-full max-w-lg aspect-square">
      {/* Avatar */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/50">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-20%20at%2003.55.16%20%281%29-U7aQtMc4RuA29vb5CAZLa8iGn10QSx.jpeg"
            alt="Dev Esteban"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Orbit rings */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-blue-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-8 rounded-full border-2 border-purple-500/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Tech icons */}
      {techIcons.map((tech, index) => {
        const angle = (index / techIcons.length) * 2 * Math.PI
        const radius = 200
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={tech.name}
            className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold shadow-lg"
            style={{
              backgroundColor: tech.color,
              color: "#000",
            }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x,
              y,
              opacity: 1,
              rotate: 360,
            }}
            transition={{
              x: { duration: 0.5, delay: 0.5 + index * 0.1 },
              y: { duration: 0.5, delay: 0.5 + index * 0.1 },
              opacity: { duration: 0.3, delay: 0.5 + index * 0.1 },
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          >
            {tech.name}
          </motion.div>
        )
      })}
    </div>
  )
}
