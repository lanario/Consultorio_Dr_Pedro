'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'
                }`}>
                <div className="flex items-center justify-between h-16 px-4 md:px-6">
                    {/* Logo - menor em mobile */}
                    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo_pedro.png"
                            alt="Consultório odontológico Dr. Pedro Lucas"
                            width={150}
                            height={60}
                            className="w-auto md:h-32 h-20"
                            priority
                        />
                    </Link>

                    {/* Texto centralizado - oculto em mobile */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-sm tracking-[0.1em] text-white font-medium whitespace-nowrap">
                        Consultório odontológico · Dr Pedro lucas
                    </div>

                    {/* Menu Desktop - oculto em mobile */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-6">
                        <Link
                            href="#quem-sou-eu"
                            className="text-sm font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap"
                        >
                            QUEM SOU EU
                        </Link>
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
                            QUEM SOMOS
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

                    {/* Botão Hambúrguer - visível apenas em mobile */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col gap-1.5 p-2 text-white focus:outline-none"
                        aria-label="Menu"
                    >
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* Menu Mobile - aparece quando aberto */}
            <div
                className={`fixed top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md z-40 transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
            >
                <div className="flex flex-col py-4 px-6 space-y-4">
                    <Link
                        href="#quem-sou-eu"
                        onClick={closeMenu}
                        className="text-white font-medium text-base py-2 hover:text-blue-400 transition-colors"
                    >
                        QUEM SOU EU
                    </Link>
                    <Link
                        href="#o-que-fazemos"
                        onClick={closeMenu}
                        className="text-white font-medium text-base py-2 hover:text-blue-400 transition-colors"
                    >
                        O QUE FAZEMOS
                    </Link>
                    <Link
                        href="#quem-somos"
                        onClick={closeMenu}
                        className="text-white font-medium text-base py-2 hover:text-blue-400 transition-colors"
                    >
                        QUEM SOMOS
                    </Link>
                    <Link
                        href="#nosso-trabalho"
                        onClick={closeMenu}
                        className="text-white font-medium text-base py-2 hover:text-blue-400 transition-colors"
                    >
                        NOSSO TRABALHO
                    </Link>
                    <Link
                        href="#colaboradores"
                        onClick={closeMenu}
                        className="text-white font-medium text-base py-2 hover:text-blue-400 transition-colors"
                    >
                        COLABORADORES
                    </Link>
                </div>
            </div>
        </>
    )
}

