import Image from 'next/image'
import { Badge } from './Badge'
import type { CardProps } from '@/types'

export function Card({ badge, title, description, dark = false, imagePath, imageAlt }: CardProps) {
  return (
    <article
      className={
        dark
          ? 'bg-[#0F172A] p-6 rounded-2xl border border-slate-600 shadow-lg overflow-hidden'
          : 'bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.07)] border border-gray-200 overflow-hidden'
      }
    >
      {imagePath && (
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-700">
          <Image
            src={imagePath}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      {badge && (
        <Badge dark={dark}>{badge}</Badge>
      )}
      <h3 className={`text-xl font-semibold mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={dark ? 'text-slate-300' : 'text-gray-600'}>{description}</p>
    </article>
  )
}

