"use client"

import { About } from "@/components/pageComplete/About"
import { Header } from "@/components/Header"
import { Footer } from "@/components/footer-new"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </>
  )
}