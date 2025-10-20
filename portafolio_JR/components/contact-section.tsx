"use client"

import { motion } from "framer-motion"
import { copy } from "@/data/copy"
import { siteData } from "@/data/site"
import { ContactForm } from "@/components/contact-form"
import { Linkedin, Github, MessageCircle, Music, Mail, Phone } from "lucide-react"

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  whatsapp: MessageCircle
}

export function Contact() {
  return (
    <section id="contacto" className="py-20 px-6 lg:px-12 bg-[#0e1117] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7b61ff]/5 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#e0e6f0] mb-4">{copy.contact.title}</h2>
          <div className="w-20 h-1 gradient-diagonal mx-auto mb-6"></div>
          <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">{copy.contact.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#e0e6f0] mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1a1d29] border border-[#00c3ff] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#00c3ff]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#9ca3af]">Email</p>
                    <a
                      href={`mailto:${siteData.email}`}
                      className="text-[#e0e6f0] hover:text-[#00c3ff] transition-colors"
                    >
                      {siteData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1a1d29] border border-[#7b61ff] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#7b61ff]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#9ca3af]">Teléfono</p>
                    <a href={`tel:${siteData.phone}`} className="text-[#e0e6f0] hover:text-[#7b61ff] transition-colors">
                      {siteData.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#e0e6f0] mb-4">Redes Sociales</h3>
              <div className="flex gap-4">
                {Object.entries(siteData.social).map(([key, url]) => {
                  const Icon = socialIcons[key as keyof typeof socialIcons]
                  return (
                    <motion.a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-12 h-12 rounded-lg bg-[#1a1d29] border border-[#2a2d3a] flex items-center justify-center text-[#00c3ff] hover:border-[#00c3ff] hover:bg-[#00c3ff] hover:text-[#0e1117] transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
