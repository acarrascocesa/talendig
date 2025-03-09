"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const targetElement = document.querySelector(target.hash)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 100,
            behavior: "smooth",
          })
        }
        closeMenu()
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [closeMenu])

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20full%20color%20%281%29-b2t7QqJOblwsIRJRt1QYHkvdgLXCoI.png"
              alt="Talendig Logo"
              width={180}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#programa" className="text-sm font-medium hover:text-secondary transition-colors">
              Programa
            </Link>
            <Link href="#plan-estudios" className="text-sm font-medium hover:text-secondary transition-colors">
              Plan de Estudios
            </Link>
            <Link href="#requisitos" className="text-sm font-medium hover:text-secondary transition-colors">
              Requisitos
            </Link>
            <Link href="#modalidad" className="text-sm font-medium hover:text-secondary transition-colors">
              Modalidad
            </Link>
            <Link href="#inscripcion">
              <Button variant="secondary" size="sm">
                Inscríbete
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Rounded bottom corners */}
      <div className="hidden md:block h-4 bg-white rounded-b-3xl shadow-md"></div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-b-3xl">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="#programa"
              className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              onClick={closeMenu}
            >
              Programa
            </Link>
            <Link
              href="#plan-estudios"
              className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              onClick={closeMenu}
            >
              Plan de Estudios
            </Link>
            <Link
              href="#requisitos"
              className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              onClick={closeMenu}
            >
              Requisitos
            </Link>
            <Link
              href="#modalidad"
              className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              onClick={closeMenu}
            >
              Modalidad
            </Link>
            <Link href="#inscripcion" className="block py-2" onClick={closeMenu}>
              <Button variant="secondary" size="sm" className="w-full">
                Inscríbete
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

