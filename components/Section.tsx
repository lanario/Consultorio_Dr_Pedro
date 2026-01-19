import type { SectionProps } from '@/types'

export function Section({ id, title, subtitle, children, dark = false }: SectionProps) {
    return (
        <section id={id} className={dark ? 'bg-slate-800 w-full' : ''}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="text-center mb-6 md:mb-8">
                    <h2 className={`text-2xl md:text-[1.9rem] mb-2 font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
                    <p className={`text-sm md:text-base ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>
                </div>
                {children}
            </div>
        </section>
    )
}

