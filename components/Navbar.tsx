'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'
            }`}>
            {/* Logo no canto superior esquerdo - posicionada fora do container */}
            <Link href="/" className="absolute left-0 top-0 flex items-center mt-2 ml-6 hover:opacity-80 transition-opacity">
                <Image
                    src="/logo_pedro.png"
                    alt="Consultório odontológico Dr. Pedro Lucas"
                    width={150}
                    height={60}
                    className="w-auto"
                    style={{ height: '8rem' }}
                    priority
                />
            </Link>

            {/* Texto centralizado - alinhado com a logo */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 flex items-center mt-2 text-sm tracking-[0.1em] text-white font-medium whitespace-nowrap" style={{ height: '8rem' }}>
                Consultório odontológico · Dr Pedro lucas
            </div>

            {/* Navegação à direita - alinhada com a logo */}
            <div className="hidden md:flex absolute right-4 top-0 items-center gap-8 mr-24 mt-2" style={{ height: '8rem' }}>
                <Link
                    href="#o-que-fazemos"
                    className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                    O QUE FAZEMOS
                </Link>
                <Link
                    href="#quem-somos"
                    className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                    SOBRE O CONSULTÓRIO
                </Link>
                <Link
                    href="#nosso-trabalho"
                    className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                    NOSSO TRABALHO
                </Link>
                <Link
                    href="#colaboradores"
                    className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                    COLABORADORES
                </Link>
            </div>
        </nav>
    )
}

