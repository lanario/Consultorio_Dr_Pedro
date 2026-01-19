import Image from 'next/image'
import Link from 'next/link'

interface TeamCardProps {
    name: string;
    imagePath: string;
    quote: string;
    instagramUrl?: string;
}

export function TeamCard({ name, imagePath, quote, instagramUrl = 'https://instagram.com' }: TeamCardProps) {
    return (
        <article className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden">
            {/* Top section - Dark background with text and button */}
            <div className="bg-slate-900 p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">{name}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{quote}</p>
                <Link
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 hover:scale-105 transition-all duration-300 transform"
                >
                    Ver Instagram
                </Link>
            </div>

            {/* Bottom section - Photo */}
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <Image
                    src={imagePath}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </article>
    )
}

