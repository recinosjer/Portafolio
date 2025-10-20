"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteData } from "@/data/site"
import { Linkedin, Github, MessageCircle, Music } from "lucide-react"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "/about" },
  { name: "Experiencia", href: "/experience" },
  { name: "Habilidades", href: "/skills" },
  { name: "Proyectos", href: "/projects" },
  { name: "Contacto", href: "/contact" },

]

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  whatsapp: MessageCircle,
  tiktok: Music,
}

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e1117]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold">
              <span className="text-[#00c3ff]">Dev</span>{" "}
              <span className="text-[#e0e6f0]">José.</span>
            </span>
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-[#00c3ff] ${
                    isActive ? "text-[#00c3ff]" : "text-[#e0e6f0]"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            {Object.entries(siteData.social).map(([key, url]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons]
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="text-[#9ca3af] hover:text-[#00c3ff] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
