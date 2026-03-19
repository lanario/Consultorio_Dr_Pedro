import Image from 'next/image'

/**
 * Item da seção Nosso Trabalho: layout alternado com área opcional de imagens
 * (antes/depois) e texto descritivo.
 */
interface TrabalhoItemProps {
    badge: string
    title: string
    description: string
    imageBefore?: string
    imageAfter?: string
    imageBeforeAlt?: string
    imageAfterAlt?: string
    /** Inverte layout: imagem à esquerda, texto à direita */
    reverse?: boolean
}

export function TrabalhoItem({
    badge,
    title,
    description,
    imageBefore,
    imageAfter,
    imageBeforeAlt,
    imageAfterAlt,
    reverse = false,
}: TrabalhoItemProps) {
    const hasImages = Boolean(imageBefore && imageAfter)

    const textBlock = (
        <div className="flex flex-col justify-center min-w-0 p-4 md:p-5 overflow-hidden">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 flex-shrink-0">
                {badge}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 flex-shrink-0">{title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed line-clamp-5">{description}</p>
        </div>
    )

    const imagesBlock = hasImages ? (
        <div className="flex-shrink-0 grid grid-cols-2 gap-2 md:gap-3 p-3 md:p-4 overflow-hidden w-full lg:w-auto max-w-full">
            <div className="relative w-full h-[200px] lg:w-[220px] lg:h-[200px] rounded-xl overflow-hidden bg-slate-700 border border-slate-600 shadow-lg flex-shrink-0">
                <Image
                    src={imageBefore as string}
                    alt={imageBeforeAlt ?? 'Antes do tratamento'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 50vw, 220px"
                />
            </div>
            <div className="relative w-full h-[200px] lg:w-[220px] lg:h-[200px] rounded-xl overflow-hidden bg-slate-700 border border-slate-600 shadow-lg flex-shrink-0">
                <Image
                    src={imageAfter as string}
                    alt={imageAfterAlt ?? 'Depois do tratamento'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 50vw, 220px"
                />
            </div>
        </div>
    ) : null

    return (
        <div
            className={`grid grid-cols-1 ${
                hasImages ? 'lg:grid-cols-[1fr_auto]' : 'lg:grid-cols-1'
            } gap-4 lg:gap-5 items-start w-full max-w-[560px] mx-auto bg-[#0F172A] rounded-2xl border border-slate-600 overflow-hidden`}
        >
            <div
                className={`min-w-0 overflow-hidden ${hasImages ? (reverse ? 'lg:order-2' : 'lg:order-1') : ''}`}
            >
                {textBlock}
            </div>
            {hasImages && (
                <div
                    className={`flex justify-center lg:justify-start overflow-hidden ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
                >
                    {imagesBlock}
                </div>
            )}
        </div>
    )
}
