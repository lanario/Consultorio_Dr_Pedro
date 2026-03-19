import Image from 'next/image'
import { Reveal } from '@/components/Reveal'
import type { LucideIcon } from 'lucide-react'
import { CalendarCheck, Cpu, HandHeart, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react'

interface BenefitNode {
    icon: LucideIcon
    tag: string
    title: string
    description: string
}

interface NodeCardProps extends BenefitNode {}

function NodeCard({ icon: Icon, tag, title, description }: NodeCardProps) {
    const cornerClasses = [
        'top-0 left-0 border-t border-l',
        'top-0 right-0 border-t border-r',
        'bottom-0 left-0 border-b border-l',
        'bottom-0 right-0 border-b border-r',
    ]

    return (
        <div
            className="group relative flex flex-col items-center justify-center gap-3 rounded-4xl border border-slate-600 bg-[#0F172A]/80 p-8 w-full min-h-[185px] md:min-h-[215px] transition-all duration-500 transform-gpu hover:border-[#3b82f6]/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:scale-[1.03]"
            role="group"
        >
            {cornerClasses.map((cls, idx) => (
                <div key={idx} className={`absolute h-2 w-2 ${cls} border-[#2563eb]/30 group-hover:border-[#60a5fa] transition-all`} />
            ))}

            <div className="h-11 w-11 text-[#60a5fa]" aria-hidden>
                <Icon className="h-full w-full" strokeWidth={2.2} />
            </div>

            <span className="text-[11px] uppercase tracking-widest text-[#60a5fa] font-semibold bg-[#1e40af]/20 border border-[#2563eb]/30 px-3 py-1 rounded-full">
                {tag}
            </span>

            <h3 className="text-[15px] md:text-[16px] font-bold text-slate-200 text-center leading-tight mt-1 break-words">
                {title}
            </h3>
            <p className="text-[12.5px] md:text-[13px] text-slate-300/90 text-center leading-relaxed break-words max-w-[320px]">
                {description}
            </p>
        </div>
    )
}

/**
 * Diagrama de "Sobre o Consultório" com 6 cards + hub central.
 * Renderiza apenas o conteúdo do diagrama (a seção já recebe title/subtitle via `Section`).
 */
export function ConsultorioDiagram() {
    const benefitsTop: BenefitNode[] = [
        {
            icon: HandHeart,
            tag: 'Atendimento',
            title: 'Humanização',
            description: 'Ambiente confortável e acolhedor para todos os pacientes.',
        },
        {
            icon: Cpu,
            tag: 'Tecnologia',
            title: 'Equipamentos Modernos',
            description: 'Tratamentos menos invasivos e resultados melhores.',
        },
        {
            icon: Sparkles,
            tag: 'Resultados',
            title: 'Estética e Saúde',
            description: 'Cuidamos da função mastigatória e da estética do sorriso.',
        },
    ]

    const benefitsBottom: BenefitNode[] = [
        {
            icon: ShieldCheck,
            tag: 'Segurança',
            title: 'Biossegurança',
            description: 'Protocolos rigorosos de esterilização e higiene em cada atendimento.',
        },
        {
            icon: Stethoscope,
            tag: 'Especialidade',
            title: 'Odontologia Integrada',
            description: 'Tratamentos completos que unem saúde bucal e bem-estar geral.',
        },
        {
            icon: CalendarCheck,
            tag: 'Comodidade',
            title: 'Agendamento Fácil',
            description: 'Horários flexíveis e atendimento personalizado para sua rotina.',
        },
    ]

    return (
        <div className="relative">
            <style>{`
                @keyframes flow-custom {
                    to { stroke-dashoffset: -1000; }
                }
                .animate-flow { animation: flow-custom 8s linear infinite; }
                @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes spin-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
                .spin-slow { animation: spin-slow 12s linear infinite; }
                .spin-rev { animation: spin-rev 18s linear infinite; }
                @keyframes logo-pulse { 0%,100%{opacity:0.9; transform: scale(1);} 50%{opacity:1; transform: scale(1.02);} }
                .logo-pulse { animation: logo-pulse 4s ease-in-out infinite; }
            `}</style>

            <svg
                className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
                viewBox="0 0 1000 520"
                preserveAspectRatio="none"
                style={{ zIndex: 0 }}
                aria-hidden
            >
                <defs>
                    <linearGradient id="flowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Tracks estáticos */}
                {[125, 500, 875].map((x, i) => (
                    <g key={i}>
                        <path
                            d={`M ${x},96 C ${x},160 490,200 500,240`}
                            fill="none"
                            stroke="rgba(59,130,246,0.05)"
                            strokeWidth="1"
                        />
                        <path
                            d={`M 500,300 C 490,340 ${x},360 ${x},424`}
                            fill="none"
                            stroke="rgba(59,130,246,0.05)"
                            strokeWidth="1"
                        />
                    </g>
                ))}

                {/* Fluxo animado */}
                {[{ x: 125, dur: '8s', off: '0' }, { x: 500, dur: '10s', off: '-200' }, { x: 875, dur: '9s', off: '-100' }].map(
                    (p, i) => (
                        <g key={`t${i}`}>
                            <path
                                className="animate-flow"
                                strokeDasharray="200,400"
                                strokeDashoffset={p.off}
                                d={`M ${p.x},96 C ${p.x},160 490,200 500,240`}
                                fill="none"
                                stroke="url(#flowGrad)"
                                strokeWidth="2"
                                style={{ animationDuration: p.dur }}
                            />
                            <path
                                className="animate-flow"
                                strokeDasharray="20,600"
                                strokeDashoffset={p.off}
                                d={`M ${p.x},96 C ${p.x},160 490,200 500,240`}
                                fill="none"
                                stroke="#60a5fa"
                                strokeWidth="3"
                                filter="url(#glow)"
                                strokeLinecap="round"
                                style={{ animationDuration: `${parseFloat(p.dur) / 2}s` }}
                            />
                        </g>
                    )
                )}

                {[{ x: 125, dur: '8.5s', off: '0' }, { x: 500, dur: '7.5s', off: '-150' }, { x: 875, dur: '9.5s', off: '-250' }].map((p, i) => (
                    <g key={`b${i}`}>
                        <path
                            className="animate-flow"
                            strokeDasharray="200,400"
                            strokeDashoffset={p.off}
                            d={`M 500,300 C 490,340 ${p.x},360 ${p.x},424`}
                            fill="none"
                            stroke="url(#flowGrad)"
                            strokeWidth="2"
                            style={{ animationDuration: p.dur }}
                        />
                        <path
                            className="animate-flow"
                            strokeDasharray="20,600"
                            strokeDashoffset={p.off}
                            d={`M 500,300 C 490,340 ${p.x},360 ${p.x},424`}
                            fill="none"
                            stroke="#60a5fa"
                            strokeWidth="3"
                            filter="url(#glow)"
                            strokeLinecap="round"
                            style={{ animationDuration: `${parseFloat(p.dur) / 2}s` }}
                        />
                    </g>
                ))}
            </svg>

            <div className="flex flex-col gap-8 relative" style={{ zIndex: 1 }}>
                {/* TOP ROW */}
                <Reveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefitsTop.map((b) => (
                        <NodeCard key={`${b.title}-${b.tag}`} {...b} />
                    ))}
                </Reveal>

                {/* CENTER - Hub com foto */}
                <div className="flex justify-center items-center py-4 md:py-8">
                    <div className="relative flex items-center justify-center">
                        <div
                            className="absolute rounded-full border border-[#3b82f6]/20 border-dashed spin-slow"
                            style={{ width: 155, height: 155 }}
                        />
                        <div
                            className="absolute rounded-full border border-[#3b82f6]/30 border-dotted spin-rev"
                            style={{ width: 125, height: 125 }}
                        />
                        <div className="absolute rounded-full bg-[#3b82f6]/10 blur-2xl" style={{ width: 135, height: 135 }} />

                        <div
                            className="relative z-10 rounded-full border border-[#2563eb]/60 overflow-hidden logo-pulse"
                            style={{
                                width: 110,
                                height: 110,
                                boxShadow: '0 0 70px rgba(37,99,235,0.35), 0 0 140px rgba(37,99,235,0.18)',
                                background: '#0d1e3d',
                            }}
                        >
                            <Image src="/logo_pedro.png" alt="Consultório Dr. Pedro Lucas" fill className="object-cover" priority />
                        </div>
                    </div>
                </div>

                <div className="text-center -mt-2 md:-mt-6">
                    <div className="text-lg md:text-xl font-bold text-slate-100 tracking-tight">
                        Consultório Dr. Pedro Lucas
                    </div>
                    <div className="text-[10px] md:text-[11px] text-[#3b82f6] font-bold uppercase tracking-widest mt-1 break-words">
                        Odontologia Integrada
                    </div>
                </div>

                {/* BOTTOM ROW */}
                <Reveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefitsBottom.map((b) => (
                        <NodeCard key={`${b.title}-${b.tag}`} {...b} />
                    ))}
                </Reveal>
            </div>
        </div>
    )
}

