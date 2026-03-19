'use client'

import { useRef, useEffect, useState, Children, type ReactNode } from 'react'

interface TimelineSectionProps {
    children: ReactNode
    /** Alternar conteúdo à esquerda/direita da linha a cada passo */
    alternate?: boolean
}

/**
 * Seção com animação de timeline: linha vertical que preenche no scroll
 * e pontos que ativam (ficam em destaque) quando o passo entra na tela.
 */
export function TimelineSection({ children, alternate = true }: TimelineSectionProps) {
    const trackRef = useRef<HTMLDivElement>(null)
    const fillRef = useRef<HTMLDivElement>(null)
    const [fillHeight, setFillHeight] = useState(0)
    const stepRefs = useRef<(HTMLDivElement | null)[]>([])
    const [activeIndex, setActiveIndex] = useState(-1)
    const steps = Children.toArray(children)
    const stepCount = steps.length

    useEffect(function updateFillOnScroll() {
        const track = trackRef.current
        const fill = fillRef.current
        if (!track || !fill) return

        const update = () => {
            // `track` pode mudar entre renders; mantemos uma guarda defensiva.
            const currentTrack = trackRef.current
            const currentFill = fillRef.current
            if (!currentTrack || !currentFill) return

            const rect = currentTrack.getBoundingClientRect()
            const viewportMiddle = window.innerHeight * 0.55
            const trackTop = rect.top
            const trackHeight = rect.height
            const trackBottom = trackTop + trackHeight

            if (trackBottom < viewportMiddle) {
                setFillHeight(100)
                return
            }
            if (trackTop > viewportMiddle) {
                setFillHeight(0)
                return
            }
            if (trackHeight <= 0) return
            const progress = (viewportMiddle - trackTop) / trackHeight
            setFillHeight(Math.min(100, Math.max(0, progress * 100)))
        }

        update()
        window.addEventListener('scroll', update, { passive: true })
        window.addEventListener('resize', update)
        return () => {
            window.removeEventListener('scroll', update)
            window.removeEventListener('resize', update)
        }
    }, [])

    useEffect(function observeSteps() {
        const refs = stepRefs.current.filter(Boolean) as HTMLDivElement[]
        if (refs.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                    const idx = refs.indexOf(entry.target as HTMLDivElement)
                    if (idx !== -1) setActiveIndex((i) => Math.max(i, idx))
                })
            },
            { rootMargin: '-15% 0px -20% 0px', threshold: 0.05 }
        )

        refs.forEach((el) => observer.observe(el))
        return () => refs.forEach((el) => observer.unobserve(el))
    }, [stepCount])

    return (
        <div ref={trackRef} className="relative pl-6 md:pl-0">
            {/* Linha de fundo (track) */}
            <div
                className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-600 md:-translate-x-px"
                aria-hidden
            />
            {/* Linha que preenche (fill) + ponto brilhante */}
            <div
                ref={fillRef}
                className="absolute left-6 md:left-1/2 top-0 w-px origin-top z-10 md:-translate-x-px transition-[height] duration-150 ease-out"
                style={{
                    height: `${fillHeight}%`,
                    background: 'linear-gradient(to bottom, var(--accent), var(--accent))',
                    boxShadow: '0 0 14px var(--accent-glow)',
                }}
            >
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rounded-full z-20 shadow-[0_0_16px_2px_rgba(59,130,246,0.85)]"
                    aria-hidden
                />
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 border border-blue-400/40 rounded-full opacity-50 animate-ping"
                    style={{ animationDuration: '1.8s' }}
                    aria-hidden
                />
            </div>

            {/* Passos */}
            <div className="space-y-20 md:space-y-28 py-8">
                {steps.map((child, index) => {
                    const isActive = activeIndex >= index
                    const isLeft = alternate ? index % 2 === 0 : true

                    return (
                        <div
                            key={index}
                            ref={(el) => {
                                stepRefs.current[index] = el
                            }}
                            className={`timeline-step relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${isActive ? 'timeline-step-active' : ''}`}
                        >
                            {/* Ponto central na linha */}
                            <div
                                className="absolute left-6 md:left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full border border-slate-500 bg-slate-800 z-20 timeline-point md:top-6 md:-translate-x-px"
                                aria-hidden
                            />

                            {isLeft ? (
                                <>
                                    <div className="order-2 md:order-1 md:pr-8 flex md:justify-end">
                                        <div className="w-full max-w-[560px] mx-auto timeline-card-visual rounded-2xl overflow-hidden">
                                            {child}
                                        </div>
                                    </div>
                                    <div className="order-1 md:order-2 pl-12 md:pl-0" aria-hidden />
                                </>
                            ) : (
                                <>
                                    <div className="order-1 pl-12 md:pl-0 md:pr-8 flex md:justify-end" aria-hidden />
                                    <div className="order-2 md:pl-0 w-full max-w-[560px] mx-auto timeline-card-visual rounded-2xl overflow-hidden">
                                        {child}
                                    </div>
                                </>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
