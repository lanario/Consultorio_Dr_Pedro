import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

/**
 * Seção "Quem Sou Eu" no formato do template: foto à esquerda,
 * conteúdo à direita (título, descrição, especialidades, CTAs).
 */
interface QuemSouEuSectionProps {
    name: string
    imagePath: string
    title: string
    description: string
    instagramUrl: string
    whatsappUrl?: string
    especialidades: string[]
    areas: string[]
}

export function QuemSouEuSection({
    name,
    imagePath,
    title,
    description,
    instagramUrl,
    whatsappUrl = 'https://wa.me/5521979370171',
    especialidades,
    areas,
}: QuemSouEuSectionProps) {
    return (
        <section id="quem-sou-eu" className="bg-slate-800 w-full border-t border-slate-700">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
                <Reveal>
                    <div className="text-center mb-10 md:mb-12">
                        <h2 className="text-2xl md:text-[1.9rem] mb-2 font-semibold text-white">Quem Sou Eu</h2>
                        <p className="text-sm md:text-base text-slate-300">Conheça o profissional por trás do seu sorriso.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Retrato à esquerda */}
                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden bg-slate-700 rounded-2xl aspect-[4/5]">
                            <Image
                                src={imagePath}
                                alt={name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 41vw"
                            />
                        </div>
                    </div>

                    {/* Conteúdo à direita */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-col justify-center h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-slate-500">↘</span>
                                <div className="h-px flex-1 bg-slate-600" />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                                {title}
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-slate-300 mb-8">
                                {description}
                            </p>

                            {/* Especialidades e Áreas */}
                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="space-y-3">
                                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                                        Especialidades
                                    </h3>
                                    <ul className="text-sm text-slate-400 space-y-2">
                                        {especialidades.map((item) => (
                                            <li key={item}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                                        Áreas de atuação
                                    </h3>
                                    <ul className="text-sm text-slate-400 space-y-2">
                                        {areas.map((item) => (
                                            <li key={item}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href={instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-lg bg-[#833AB4] text-white font-medium hover:bg-[#6b2d94] transition-colors text-sm shadow-md"
                                >
                                    Ver Instagram
                                </Link>
                                <Link
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors text-sm shadow-md"
                                >
                                    Falar no WhatsApp
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </Reveal>
            </div>
        </section>
    )
}
