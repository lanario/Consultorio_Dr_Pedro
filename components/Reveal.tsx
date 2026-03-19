'use client'

import { useRef, useEffect, useState, type ReactNode } from 'react'

interface RevealProps {
    children: ReactNode
    /** Usar stagger: cada filho direto aparece com pequeno atraso */
    stagger?: boolean
    className?: string
}

/**
 * Envolve o conteúdo e adiciona animação de aparição gradual (fade + translateY)
 * quando o elemento entra na viewport.
 */
export function Reveal({ children, stagger = false, className = '' }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(function observe() {
        const el = ref.current
        if (!el) return

        // Fallback: se já estiver no viewport (primeira renderização), mostra imediatamente.
        // Isso evita "conteúdo invisível" caso o IntersectionObserver não dispare como esperado.
        const rect = el.getBoundingClientRect()
        const isInViewport = rect.bottom > 0 && rect.top < window.innerHeight
        if (isInViewport) setVisible(true)

        // Suporte defensivo caso IntersectionObserver não exista.
        if (!('IntersectionObserver' in window)) {
            setVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setVisible(true)
                })
            },
            { rootMargin: '-8% 0px -5% 0px', threshold: 0.05 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`${stagger ? 'reveal-stagger' : 'reveal'} ${visible ? 'visible' : ''} ${className}`.trim()}
        >
            {children}
        </div>
    )
}
