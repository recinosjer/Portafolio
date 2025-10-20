"use client"

import { useEffect, useState } from "react"

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up")
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const threshold = 10

    const updateScrollDirection = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        return
      }

      setScrollDirection(scrollY > lastScrollY ? "down" : "up")
      setLastScrollY(scrollY)
    }

    window.addEventListener("scroll", updateScrollDirection)
    return () => window.removeEventListener("scroll", updateScrollDirection)
  }, [lastScrollY])

  return scrollDirection
}
