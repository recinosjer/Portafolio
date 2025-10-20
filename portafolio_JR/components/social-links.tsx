"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, MessageCircle, Music } from "lucide-react"
import { siteData } from "@/data/site"

const socialIcons = {
  linkedin: { Icon: Linkedin, label: "LinkedIn" },
  github: { Icon: Github, label: "GitHub" },
  whatsapp: { Icon: MessageCircle, label: "WhatsApp" }
}

export function SocialLinks() {
  return (
    <div className="flex flex-col gap-4">
      {Object.entries(siteData.social).map(([key, url]) => {
        const { Icon, label } = socialIcons[key as keyof typeof socialIcons]
        return (
          <motion.a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg bg-secondary hover:bg-blue-500/10 border border-border hover:border-blue-500 transition-all group"
            whileHover={{ scale: 1.06, x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Icon className="w-6 h-6 text-muted-foreground group-hover:text-blue-500 transition-colors" />
            <span className="text-sm font-medium group-hover:text-blue-500 transition-colors">{label}</span>
          </motion.a>
        )
      })}
    </div>
  )
}
