import type { ReactNode } from "react"

interface SectionProps {
  id?: string
  title?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="container mx-auto">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            {title}
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4" />
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
