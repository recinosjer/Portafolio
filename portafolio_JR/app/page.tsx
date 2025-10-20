"use client"

import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { About } from "@/components/pageComplete/About"
import { Experience } from "@/components/pageComplete/Experience"
import { Skills } from "@/components/pageComplete/Skills"
import { Projects } from "@/components/pageComplete/Projects"
import { Contact } from "@/components/pageComplete/Contact"
import { ScrollTopButton } from "@/components/ScrollTopButton"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <footer className="w-full py-8 px-[clamp(16px,4vw,72px)] bg-[#0e1117] border-t border-white/10">
        <p className="text-center text-sm text-[#9ca3af]">
          © {new Date().getFullYear()} José Recinos. Todos los derechos reservados.
        </p>
      </footer>
      <ScrollTopButton />
    </>
  )
}
