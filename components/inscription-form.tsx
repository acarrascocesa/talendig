"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  apellido: z.string().min(2, { message: "El apellido debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  telefono: z.string().min(10, { message: "Ingrese un número de teléfono válido" }),
  modalidad: z.enum(["presencial", "virtual"]),
  comentarios: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function InscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      // Aquí iría la lógica real de envío del formulario a un backend
      // Por ahora, simularemos un envío
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Enviar datos a info@talendig.com (esto es una simulación)
      console.log("Enviando datos a info@talendig.com:", data)

      toast({
        title: "Formulario enviado con éxito",
        description: "Nos pondremos en contacto contigo pronto.",
      })
    } catch (error) {
      toast({
        title: "Error al enviar el formulario",
        description: "Por favor, intenta nuevamente más tarde.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              id="nombre"
              {...register("nombre")}
              placeholder="Tu nombre"
              className={errors.nombre ? "border-red-500" : ""}
            />
            {errors.nombre && <p className="text-red-500 text-xs">{errors.nombre.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="apellido">Apellido</Label>
            <Input
              id="apellido"
              {...register("apellido")}
              placeholder="Tu apellido"
              className={errors.apellido ? "border-red-500" : ""}
            />
            {errors.apellido && <p className="text-red-500 text-xs">{errors.apellido.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="tucorreo@ejemplo.com"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono</Label>
          <Input
            id="telefono"
            type="tel"
            {...register("telefono")}
            placeholder="(000) 000-0000"
            className={errors.telefono ? "border-red-500" : ""}
          />
          {errors.telefono && <p className="text-red-500 text-xs">{errors.telefono.message}</p>}
        </div>

        <div className="space-y-2">
          <Label>Modalidad preferida</Label>
          <RadioGroup defaultValue="virtual">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="virtual" id="virtual" {...register("modalidad")} />
              <Label htmlFor="virtual">Virtual</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="presencial" id="presencial" {...register("modalidad")} />
              <Label htmlFor="presencial">Presencial</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="comentarios">Comentarios o preguntas</Label>
          <Textarea
            id="comentarios"
            {...register("comentarios")}
            placeholder="Escribe aquí cualquier pregunta o comentario que tengas"
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar solicitud de inscripción"}
        </Button>
      </form>
      <Toaster />
    </div>
  )
}

