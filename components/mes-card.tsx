import type { FC } from "react"

interface MesCardProps {
  numero: number
  titulo: string
  contenido: string[]
}

export const MesCard: FC<MesCardProps> = ({ numero, titulo, contenido }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
          {numero}
        </div>
        <h3 className="font-bold text-lg">Mes {numero}</h3>
      </div>

      <h4 className="font-bold mb-3 text-primary">{titulo}</h4>

      <ul className="space-y-2">
        {contenido.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-secondary font-bold">•</span>
            <span className="font-light">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

