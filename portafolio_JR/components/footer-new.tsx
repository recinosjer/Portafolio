"use client"

import { copy } from "@/data/copy"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 lg:px-12 bg-[#0e1117] border-t border-[#2a2d3a]">
      <div className="container mx-auto text-center">
        <p className="text-[#9ca3af] text-sm">{copy.footer.rights.replace("{year}", currentYear.toString())}</p>
      </div>
    </footer>
  )
}
