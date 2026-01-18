import { Badge } from './Badge'
import type { CardProps } from '@/types'

export function Card({ badge, title, description }: CardProps) {
  return (
    <article className="bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.07)] border border-gray-200">
      {badge && <Badge>{badge}</Badge>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </article>
  )
}

