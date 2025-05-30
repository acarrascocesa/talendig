import Image from "next/image";
import Link from "next/link";
import { MesCard } from "@/components/mes-card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  CheckCircle,
  FileText,
  GraduationCap,
  Heart,
  Laptop,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { InscriptionForm } from "@/components/inscription-form";
import { MondayForm } from "@/components/monday-form";

import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";
import { FAQ } from "@/components/faq";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const mesesContenido = [
    {
      numero: 1,
      titulo: "Fundamentos de Programación y Algoritmos",
      contenido: [
        "Introducción a la lógica de programación",
        "Estructuras de datos básicas",
        "Algoritmos fundamentales",
        "Pseudocódigo y diagramas de flujo",
      ],
    },
    {
      numero: 2,
      titulo: "Desarrollo Web con HTML, CSS y JavaScript",
      contenido: [
        "Estructura y semántica HTML5",
        "Estilos y diseño responsivo con CSS",
        "Manipulación del DOM con JavaScript",
        "Frameworks CSS (Bootstrap, Tailwind)",
      ],
    },
    {
      numero: 3,
      titulo: "Programación Orientada a Objetos con Java o Python",
      contenido: [
        "Clases, objetos y herencia",
        "Encapsulamiento y polimorfismo",
        "Interfaces y clases abstractas",
        "Patrones de diseño básicos",
      ],
    },
    {
      numero: 4,
      titulo: "Bases de Datos Relacionales y SQL",
      contenido: [
        "Modelado de datos y normalización",
        "Consultas SQL avanzadas",
        "Transacciones y procedimientos almacenados",
        "Integración de BD con aplicaciones",
      ],
    },
    {
      numero: 5,
      titulo: "Desarrollo Frontend con React",
      contenido: [
        "Componentes y estado en React",
        "Hooks y ciclo de vida",
        "Manejo de rutas con React Router",
        "Gestión de estado global (Redux/Context)",
      ],
    },
    {
      numero: 6,
      titulo: "Desarrollo Backend con Node.js",
      contenido: [
        "APIs RESTful con Express",
        "Autenticación y autorización",
        "Manejo de middleware",
        "Integración con bases de datos",
      ],
    },
    {
      numero: 7,
      titulo: "Bases de Datos NoSQL y MongoDB",
      contenido: [
        "Modelado de datos no relacionales",
        "Operaciones CRUD en MongoDB",
        "Agregaciones y consultas avanzadas",
        "Integración con aplicaciones Node.js",
      ],
    },
    {
      numero: 8,
      titulo: "Desarrollo Full Stack y Arquitectura de Software",
      contenido: [
        "Integración frontend-backend",
        "Patrones arquitectónicos (MVC, MVVM)",
        "Microservicios básicos",
        "Testing y depuración",
      ],
    },
    {
      numero: 9,
      titulo: "Despliegue en la Nube y DevOps Básico",
      contenido: [
        "Contenedores con Docker",
        "Despliegue en plataformas cloud (AWS, Azure)",
        "CI/CD básico",
        "Monitoreo y logging",
      ],
    },
    {
      numero: 10,
      titulo: "Proyecto Final e Introducción a Metodologías Ágiles",
      contenido: [
        "Desarrollo de proyecto integrador",
        "Scrum y Kanban",
        "Gestión de proyectos ágiles",
        "Preparación para el mercado laboral",
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-16 md:py-24 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Técnico en Desarrollo de Software en 10 meses
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-light">
                Formación de vanguardia en alianza estratégica
              </p>
              <Link href="#inscripcion" className="scroll-smooth">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 hover:text-primary/90"
                >
                  ¡Inscríbete ahora!
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6 md:w-1/2">
              <div className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="bg-white p-2 rounded-lg w-32 h-16 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20full%20color%20%281%29-b2t7QqJOblwsIRJRt1QYHkvdgLXCoI.png"
                    alt="Talendig Logo"
                    width={120}
                    height={60}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div className="w-px h-16 bg-white/20"></div>
                <div className="bg-white p-2 rounded-lg w-32 h-16 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-libertad-digital-j8nYPzhCaGgISkDssFtkhiq17VaESp.png"
                    alt="Libertad Digital Logo"
                    width={120}
                    height={60}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div className="w-px h-16 bg-white/20"></div>

                <div className="bg-white p-2 rounded-lg w-32 h-16 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-Logo-UCSD-Redes-fondo-blanco-01-768x768-1-150x150-bIAryI10omxnZW5DNvdMvMh72sxexG.png"
                    alt="Logo UCSD"
                    width={120}
                    height={60}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
              <p className="text-sm text-center md:text-right font-light">
                Una colaboración entre Talendig, Libertad Digital y la
                <br />
                Universidad Católica Santo Domingo (UCSD)
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden z-0">
          <svg
            className="absolute left-0 top-0 h-full w-full text-white/5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0,0 100,0 100,10 0,50" />
            <polygon fill="currentColor" points="0,50 100,10 100,20 0,100" />
            <polygon fill="currentColor" points="0,100 100,20 100,30 30,100" />
          </svg>
        </div>
      </section>

      {/* Description Section */}
      <section id="programa" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            Sobre la carrera técnica
          </h2>
          <p className="text-lg text-center max-w-4xl mx-auto mb-12">
            Esta carrera está diseñada para formar desarrolladores de software
            con habilidades en frontend, backend, bases de datos, arquitectura
            de software y despliegue en la nube, asegurando un aprendizaje
            práctico y progresivo en cada una de estas áreas claves.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold md:col-span-2">
              Características del programa
            </h3>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <p>100% práctico con proyectos reales</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <p>Cada mes aprendes una competencia nueva</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <p>Enfoque en empleabilidad con herramientas demandadas</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <p>Evaluación por proyectos y retos técnicos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="plan-estudios" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Plan de estudio (10 Meses)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mesesContenido.map((mes) => (
              <MesCard
                key={mes.numero}
                numero={mes.numero}
                titulo={mes.titulo}
                contenido={mes.contenido}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos y Requerimientos Técnicos Section */}
      <section id="requisitos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Requisitos y requerimientos técnicos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Requisitos académicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Bachillerato completo</li>
                  <li>No se requieren conocimientos previos específicos</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Edad mínima
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Tener al menos 18 años al momento de la inscripción.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Documentación requerida
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cédula de Identidad o Pasaporte</li>
                  <li>Copia del certificado de bachillerato</li>
                  <li>Formulario de inscripción completado</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-6 w-6 text-primary" />
                  Requisitos técnicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Conexión a internet estable</li>
                  <li>
                    Equipo de computación:
                    <ul className="list-circle pl-5 mt-2 space-y-1">
                      <li>Computadora con procesador adecuado</li>
                      <li>Mínimo 4 GB de RAM</li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  Otros requisitos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Compromiso y dedicación para completar el programa con éxito.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="modalidad" className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">Modalidad</h2>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">
                Carrera Técnica 100% Virtual
              </h3>
              <p className="text-lg mb-4">
                Formación completa en desarrollo de software desde la comodidad
                de tu hogar.
              </p>
            </div>

            <div className="mb-8">
              <div className="border border-gray-200 rounded-lg p-6 max-w-md mx-auto">
                <h4 className="font-bold text-lg mb-2 text-secondary">
                  Duración del Programa
                </h4>
                <p className="text-2xl font-bold mb-2">10 meses</p>
                <p className="text-sm text-gray-600">
                  40-60 horas por asignatura
                </p>
                <p className="mt-4 text-sm">
                  Clases en vivo y contenido a tu ritmo
                </p>
              </div>
            </div>

            <div className="text-left">
              <h4 className="font-bold text-lg mb-4 text-primary">
                Ventajas de nuestra modalidad virtual:
              </h4>
              <ul className="grid md:grid-cols-2 gap-4 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Flexibilidad horaria</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Acceso a clases grabadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Plataforma de aprendizaje interactiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Soporte técnico continuo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Proyectos prácticos en tiempo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Networking con compañeros y profesores</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Link href="#inscripcion" className="scroll-smooth">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Inscríbete Ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Inscription Form Section */}
      <section id="inscripcion" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            ¡Inscríbete ahora!
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-10">
            Completa el siguiente formulario y un asesor académico se pondrá en
            contacto contigo para brindarte toda la información que necesitas.
          </p>

          <div className="max-w-4xl mx-auto">
            <MondayForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Preguntas frecuentes
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Forma parte de Talendig y desarrolla aplicaciones web completas en
            10 meses
          </h2>
          <Link href="#inscripcion" className="scroll-smooth">
            <Button
              size="lg"
              className="bg-secondary hover:bg-primary/80 text-white"
            >
              ¡Inscríbete ahora!
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20full%20color%20%281%29-b2t7QqJOblwsIRJRt1QYHkvdgLXCoI.png"
                alt="Talendig Logo"
                width={180}
                height={40}
                className="h-12 w-auto mb-4"
                priority
              />
              <p className="text-sm text-center md:text-left">
                Comunidad, Talento y Tecnología
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-4 text-primary">Contacto</h3>
              <div className="space-y-2">
                <a
                  href="tel:+18095442812"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-secondary transition-colors"
                >
                  <Phone size={20} />
                  <span>809-544-2812 Ext. 2313</span>
                </a>
                <a
                  href="https://wa.me/18494734934"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-secondary transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>849-473-4934</span>
                </a>
                <a
                  href="mailto:info@talendig.com"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-secondary transition-colors"
                >
                  <Mail size={20} />
                  <span>info@talendig.com</span>
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-4 text-primary">Dirección</h3>
              <p className="text-sm">
                Av Simón Bolívar 902
                <br />
                Ensanche La Julia
                <br />
                Santo Domingo, República Dominicana
              </p>
            </div>

            <div className="text-center md:text-right">
              <h3 className="font-bold text-lg mb-4 text-primary">Síguenos</h3>
              <div className="flex justify-center md:justify-end space-x-4 mb-6">
                <a
                  href="https://www.facebook.com/talendigrd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/talendigrd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/talendig/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
              <div className="flex flex-col items-center md:items-end gap-2">
                <p className="text-sm font-semibold">En alianza con:</p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-Logo-UCSD-Redes-fondo-blanco-01-768x768-1-150x150-bIAryI10omxnZW5DNvdMvMh72sxexG.png"
                  alt="Logo UCSD"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <p className="text-sm">
                  Universidad Católica Santo Domingo (UCSD)
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Talendig. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
