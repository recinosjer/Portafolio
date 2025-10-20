
"use client"
import { Projects } from "@/components/pageComplete/Projects"
import { Header } from "@/components/Header"
import { Footer } from "@/components/footer-new"

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Projects />
      </main>
      <Footer />
    </>
  )
}
