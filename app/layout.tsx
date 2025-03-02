import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"

// Importar Poppins como fallback para Byom
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Talendig - Técnico en Desarrollo de Software",
  description:
    "Programa técnico en desarrollo de software en 10 meses en alianza con la Universidad Católica Santo Domingo (UCSD)",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-03-02%20a%20la%28s%29%209.44.27%E2%80%AFa.%C2%A0m.-QHK1UKXmi7X6dsOJUP9GlOS7kt0XIe.png",
        type: "image/png",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'