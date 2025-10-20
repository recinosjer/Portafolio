"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { ContactForm } from "../ContactForm"
import { siteData } from "@/data/site"

export function Contact() {
  return (
    <section id="contacto" className="w-full relative py-20 sm:py-28 px-[clamp(16px,4vw,72px)] bg-[#0a0f1c]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-[#e0e6f0] mb-12 text-center">Contacto</h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-[#e0e6f0] mb-6">Trabajemos juntos</h3>
            <p className="text-[#9ca3af] mb-8 max-w-[78ch]">
              Estoy interesado en oportunidades para colaborar en proyectos innovadores y desafiantes. Si tienes alguna
              propuesta, pregunta o simplemente quieres saludar, no dudes en contactarme.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${siteData.email}`}
                className="flex items-center gap-3 text-[#9ca3af] hover:text-[#00c3ff] transition-colors"
              >
                <Mail size={20} />
                {siteData.email}
              </a>
              <a
                href={`tel:${siteData.phone}`}
                className="flex items-center gap-3 text-[#9ca3af] hover:text-[#00c3ff] transition-colors"
              >
                <Phone size={20} />
                {siteData.phone}
              </a>
              <div className="flex items-center gap-3 text-[#9ca3af]">
                <MapPin size={20} />
                {siteData.location}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={siteData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1d29] border border-white/10 flex items-center justify-center text-[#e0e6f0] hover:border-[#00c3ff] hover:text-[#00c3ff] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c3ff]"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={siteData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1d29] border border-white/10 flex items-center justify-center text-[#e0e6f0] hover:border-[#00c3ff] hover:text-[#00c3ff] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c3ff]"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
               <a
                href={siteData.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1d29] border border-white/10 flex items-center justify-center text-[#e0e6f0] hover:border-[#25D366] hover:text-[#25D366] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </motion.div>
    </section>
  )
}
