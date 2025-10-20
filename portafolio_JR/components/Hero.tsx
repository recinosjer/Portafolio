"use client"

import { motion } from "framer-motion"
import { Download, ArrowDown, ArrowRight } from "lucide-react"
import Image from "next/image"
import { siteData } from "@/data/site"
import { Linkedin, Github, } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export function Hero() {
  return (
    <section
      id="inicio"
      className="w-full relative min-h-[85vh] py-20 sm:py-28 px-[clamp(16px,4vw,72px)] bg-gradient-to-br from-[#0e1117] via-[#0e1117] to-[#0a0f1f] flex items-center"
    >
      <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e0e6f0] mb-4">{siteData.name}</h1>
          <p className="text-2xl sm:text-3xl text-[#00c3ff] mb-6">{siteData.title}</p>
          <p className="text-lg text-[#9ca3af] mb-8 max-w-[78ch]">{siteData.bio}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href={siteData.cvUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00c3ff] to-[#7b61ff] text-white font-medium rounded-lg hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c3ff]"
            >
              <Download size={20} />
              Descargar CV
            </a>
            <a
              href={'/projects'}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#00c3ff] text-[#00c3ff] font-medium rounded-lg hover:bg-[#00c3ff]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c3ff]"
            >
              Ver Proyectos
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

      <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6" // centrado vertical y separación
        >
          {/* Imagen */}
          <div className="relative w-64 h-64 sm:w-60 sm:h-80 rounded-2xl overflow-hidden ring-2 ring-[#00c3ff]/50 shadow-[0_0_40px_rgba(0,195,255,0.3)]">
            <Image
              src="/devJose.jpeg"
              alt={siteData.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Redes sociales */}
          <div className="flex gap-5 mt-2">
            <a
              href={siteData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-[#1a1d29] border border-white/10 
              flex items-center justify-center text-[#e0e6f0] hover:border-[#00c3ff] 
              hover:text-[#00c3ff] transition-colors focus-visible:outline-none 
              focus-visible:ring-2 focus-visible:ring-[#00c3ff]"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={siteData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-[#1a1d29] border border-white/10 
              flex items-center justify-center text-[#e0e6f0] hover:border-[#00c3ff] 
              hover:text-[#00c3ff] transition-colors focus-visible:outline-none 
              focus-visible:ring-2 focus-visible:ring-[#00c3ff]"
            >
              <Github size={20} />
            </a>
            <a
              href={siteData.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-[#1a1d29] border border-white/10 
              flex items-center justify-center text-[#e0e6f0] hover:border-[#25D366] 
              hover:text-[#25D366] transition-colors focus-visible:outline-none 
              focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
