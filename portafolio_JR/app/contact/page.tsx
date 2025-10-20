"use client"

import { Contact } from "@/components/pageComplete/Contact"
import { Header } from "@/components/Header"
import { Footer } from "@/components/footer-new"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  )
}