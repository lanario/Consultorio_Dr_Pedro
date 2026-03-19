/* eslint-disable react/no-unknown-property */
'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import type { TeamCardProps } from '@/components/TeamCard'
import { TeamCard } from '@/components/TeamCard'

type StackItemStyle = CSSProperties & {
    ['--index']: number
    ['--z']: number
    ['--scale']: number
}

/**
 * Stack de colaboradores usando `position: sticky` para criar o efeito
 * de "um card aparecendo sobre o outro" ao rolar a página.
 */
export function CollaboratorsStack({ cards }: { cards: TeamCardProps[] }) {
    const stackRef = useRef<HTMLDivElement | null>(null)
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])
    const [activeIndex, setActiveIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const cardsCount = cards.length

    const safeCardsCount = useMemo(() => (cardsCount > 0 ? cardsCount : 1), [cardsCount])

    useEffect(function detectMobile() {
        const mq = window.matchMedia('(max-width: 900px)')
        function handle() {
            setIsMobile(mq.matches)
        }

        handle()
        // `addListener` é legado; usamos `addEventListener` com fallback via cast.
        if (typeof mq.addEventListener === 'function') mq.addEventListener('change', handle)
        else (mq as unknown as { addListener: (cb: () => void) => void }).addListener(handle)

        return () => {
            if (typeof mq.removeEventListener === 'function') mq.removeEventListener('change', handle)
            else (mq as unknown as { removeListener: (cb: () => void) => void }).removeListener(handle)
        }
    }, [])

    useEffect(function syncActiveCardOnScroll() {
        if (isMobile) return

        let rafId: number | null = null

        function computeActive() {
            const stackEl = stackRef.current
            if (!stackEl) return

            const focusY = window.innerHeight * 0.42
            const focusCoordAbs = window.scrollY + focusY
            const stackTopAbs = stackEl.getBoundingClientRect().top + window.scrollY

            let nextIndex = 0

            for (let i = 0; i < safeCardsCount; i += 1) {
                const el = itemRefs.current[i]
                if (!el) continue

                const absTop = stackTopAbs + el.offsetTop
                const threshold = el.offsetHeight * 0.18

                // Card em foco é aquele cujo "start" já ultrapassou a linha de foco.
                if (focusCoordAbs >= absTop + threshold) nextIndex = i
            }

            setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex))
        }

        function onScrollOrResize() {
            if (rafId !== null) return
            rafId = window.requestAnimationFrame(() => {
                rafId = null
                computeActive()
            })
        }

        // Dois rAF para garantir que as refs já foram atribuídas.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => computeActive())
        })

        window.addEventListener('scroll', onScrollOrResize, { passive: true })
        window.addEventListener('resize', onScrollOrResize)
        return () => {
            window.removeEventListener('scroll', onScrollOrResize)
            window.removeEventListener('resize', onScrollOrResize)
            if (rafId !== null) window.cancelAnimationFrame(rafId)
        }
    }, [safeCardsCount, isMobile])

    return (
        <div className="relative">
            <style>{`
                .cards-stack {
                    position: relative;
                    padding-bottom: 26vh;
                }
                .stack-item {
                    position: sticky;
                    top: 104px;
                    z-index: var(--z);
                    margin-bottom: 22vh;
                    transform: translate3d(0, calc(var(--index) * 6px), 0) scale(var(--scale));
                    will-change: transform;
                    transition:
                        opacity 300ms ease,
                        transform 300ms ease,
                        filter 300ms ease;
                }
                .stack-item + .stack-item {
                    margin-top: -14vh;
                }
                @media (max-width: 900px) {
                    .cards-stack { padding-bottom: 0; }
                    .stack-item {
                        position: relative;
                        top: auto;
                        margin-bottom: 24px;
                        transform: none !important;
                    }
                    .stack-item + .stack-item { margin-top: 0; }
                }
            `}</style>

            <div className="cards-stack" ref={stackRef}>
                {cards.map((card, idx) => {
                    const isActive = isMobile || idx === activeIndex
                    const style: StackItemStyle = {
                        ['--index']: idx,
                        ['--z']: isActive ? 50 : idx + 1,
                        ['--scale']: isActive ? 1.01 : 0.985,
                    }

                    return (
                        <div
                            key={card.name}
                            className="stack-item"
                            style={style}
                            ref={(el) => {
                                itemRefs.current[idx] = el
                            }}
                            aria-hidden={!isActive}
                        >
                            <div
                                className="w-full max-w-[720px] mx-auto transition-opacity duration-300 md:max-w-[820px]"
                                style={{
                                    opacity: isMobile ? 1 : isActive ? 1 : 0.14,
                                    pointerEvents: isMobile || isActive ? 'auto' : 'none',
                                    filter: isMobile || isActive ? 'none' : 'saturate(0.95)',
                                }}
                            >
                                <TeamCard {...card} />
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}
