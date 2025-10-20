"use client"

import { Experience } from "@/components/pageComplete/Experience"
import { Header } from "@/components/Header"
import { Footer } from "@/components/footer-new"

export default function ExperiencePage() {
      return (
        <>
          <Header />
          <main className="pt-16">
            <Experience />
          </main>
          <Footer />
        </>
      )
}