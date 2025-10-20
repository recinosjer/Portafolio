"use client"

import { Skills } from "@/components/pageComplete/Skills"
import { Header } from "@/components/Header"
import { Footer } from "@/components/footer-new"

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Skills />
      </main>
      <Footer />
    </>
  )
}