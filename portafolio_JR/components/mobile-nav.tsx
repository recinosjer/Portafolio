"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { siteData } from "@/data/site"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Mí", href: "#sobre-mí" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#1a1d29] border-b border-[#2a2d3a]">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold gradient-text">{siteData.name}</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex items-center justify-center text-[#e0e6f0]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-[#0e1117] border-t border-[#2a2d3a]"
          >
            <nav className="px-6 py-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-[#e0e6f0] hover:bg-[#1a1d29] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
