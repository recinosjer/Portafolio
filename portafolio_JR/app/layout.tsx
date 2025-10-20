import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "José Recinos | Ingeniero en Sistemas y Desarrollador Web",
  description:
    "Portfolio profesional de José Manuel Recinos Martínez - Ingeniero en Sistemas y Desarrollador Web especializado en Vue.js, React y personalización de plataformas tecnológicas.",
  keywords: ["desarrollador web", "ingeniero en sistemas", "vue.js", "react", "moodle", "php", "typescript"],
  authors: [{ name: "José Manuel Recinos Martínez" }],
  openGraph: {
    title: "José Recinos | Ingeniero en Sistemas y Desarrollador Web",
    description: "Portfolio profesional de José Manuel Recinos Martínez",
    type: "website",
    locale: "es_ES",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
