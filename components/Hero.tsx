import { Button } from './Button'

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-center text-white px-6 overflow-hidden pt-16">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center -z-[2]"
                style={{
                    backgroundImage: "url('/dr_pedro_front.png')"
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/85 -z-[1]" />

            {/* Hero Content - Deslocado para baixo para não ficar sobre o peito */}
            <div className="max-w-4xl mt-[500px] md:mt-[450px]">
                <h1 className="text-[clamp(2.2rem,4vw+1rem,3.6rem)] mb-4 font-bold">
                    Cuidar do seu sorriso é devolver sua confiança ao mundo!
                </h1>

                <p className="opacity-80 mx-auto mb-8 max-w-[580px]">
                    Sorrir com segurança é possível! Sorrir com confiança é essencial!
                </p>

                <div className="flex justify-center mb-6">
                    <Button variant="primary" href="https://wa.me/5521979370171">
                        Agendar Avaliação
                    </Button>
                </div>

                <p className="text-sm opacity-80 ">
                    Implantes  ·  Estética Dental ·  Clareamento · Ortodontia
                </p>
            </div>
        </section>
    )
}

