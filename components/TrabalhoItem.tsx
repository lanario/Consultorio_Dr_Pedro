import Image from 'next/image'

/**
 * Item da seção Nosso Trabalho: layout alternado com área de imagens
 * (antes/depois) e texto descritivo. Overflow contido, dimensões fixas nas imagens.
 */
interface TrabalhoItemProps {
    badge: string
    title: string
    description: string
    imageBefore: string
    imageAfter: string
    imageBeforeAlt: string
    imageAfterAlt: string
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
    const textBlock = (
        <div className="flex flex-col justify-center min-w-0 p-4 md:p-5 overflow-hidden">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 flex-shrink-0">
                {badge}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 flex-shrink-0">{title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed line-clamp-5">{description}</p>
        </div>
    )

    const imagesBlock = (
        <div className="flex-shrink-0 grid grid-cols-2 gap-2 md:gap-3 p-3 md:p-4 overflow-hidden w-full lg:w-auto max-w-full">
            <div className="relative w-full h-[200px] lg:w-[220px] lg:h-[200px] rounded-xl overflow-hidden bg-slate-700 border border-slate-600 shadow-lg flex-shrink-0">
                <Image
                    src={imageBefore}
                    alt={imageBeforeAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 50vw, 220px"
                />
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 bg-black/70 text-white text-[10px] md:text-xs font-medium rounded z-10">
                    Antes
                </span>
            </div>
            <div className="relative w-full h-[200px] lg:w-[220px] lg:h-[200px] rounded-xl overflow-hidden bg-slate-700 border border-slate-600 shadow-lg flex-shrink-0">
                <Image
                    src={imageAfter}
                    alt={imageAfterAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 50vw, 220px"
                />
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 bg-black/70 text-white text-[10px] md:text-xs font-medium rounded z-10">
                    Depois
                </span>
            </div>
        </div>
    )

    return (
        <div
            className={`grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-5 items-start w-full max-w-[560px] mx-auto bg-[#0F172A] rounded-2xl border border-slate-600 overflow-hidden ${
                reverse ? 'lg:flex-row-reverse' : ''
            }`}
        >
            <div
                className={`min-w-0 overflow-hidden ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
            >
                {textBlock}
            </div>
            <div
                className={`flex justify-center lg:justify-start overflow-hidden ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
            >
                {imagesBlock}
            </div>
        </div>
    )
}
