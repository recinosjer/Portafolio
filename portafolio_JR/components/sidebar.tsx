"use client"

import { siteData } from "@/data/site"
import { Linkedin, Github, MessageCircle, Music } from "lucide-react"
import { motion } from "framer-motion"

export function Sidebar() {
  const socialIcons = {
    linkedin: Linkedin,
    github: Github,
    whatsapp: MessageCircle
  }

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-80 bg-[#1a1d29] border-r border-[#2a2d3a] p-8 flex flex-col justify-between hidden lg:flex z-40"
    >
      <div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden border-2 border-[#00c3ff] glow-cyan">
            <img
              src="/professional-developer-portrait.png"
              alt={siteData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold text-center gradient-text mb-2">{siteData.name}</h1>
          <p className="text-sm text-[#9ca3af] text-center">{siteData.title}</p>
        </motion.div>

        <motion.nav
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-2"
        >
          {[
            { label: "Inicio", href: "#inicio" },
            { label: "Sobre Mí", href: "#sobre-mí" },
            { label: "Experiencia", href: "#experiencia" },
            { label: "Habilidades", href: "#habilidades" },
            { label: "Proyectos", href: "#proyectos" },
            { label: "Contacto", href: "#contacto" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-2 rounded-lg text-[#e0e6f0] hover:bg-[#2a2d3a] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </motion.nav>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex justify-center gap-4">
          {Object.entries(siteData.social).map(([key, url]) => {
            const Icon = socialIcons[key as keyof typeof socialIcons]
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#2a2d3a] flex items-center justify-center text-[#00c3ff] hover:bg-[#00c3ff] hover:text-[#0e1117] transition-all hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          })}
        </div>
        <div className="text-center text-xs text-[#9ca3af]">
          <p>{siteData.location}</p>
          <p className="mt-1">{siteData.email}</p>
        </div>
      </motion.div>
    </motion.aside>
  )
}
