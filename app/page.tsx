import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { TeamCard } from '@/components/TeamCard'
import { Footer } from '@/components/Footer'

export default function Home() {
    return (
        <main>
            <Hero />

            <Section
                id="quem-sou"
                title="Quem Sou"
                subtitle="Conheça o profissional por trás do seu sorriso."
                dark={true}
            >
                <div className="flex justify-center">
                    <div className="max-w-md w-full">
                        <TeamCard
                            name="Dr. Pedro Lucas"
                            imagePath="/dr_pedro.JPG"
                            quote="Especialista em Implantodontia, ofereço reabilitações orais completas utilizando implantes dentários, prótese dentária e prótese removível. Busco sempre a combinação perfeita entre excelência técnica, estética natural e conforto absoluto para cada paciente."
                            instagramUrl="https://www.instagram.com/consultoriodrpedrolucas/"
                        />
                    </div>
                </div>
            </Section>

            <Section
                id="quem-somos"
                title="Sobre o Consultório"
                subtitle="Excelência, tecnologia e atendimento acolhedor."
                dark={true}
            >
                <div className="grid gap-6 md:grid-cols-3">
                    <Card
                        badge="Atendimento"
                        title="Humanização"
                        description="Ambiente confortável e acolhedor para todos os pacientes."
                    />
                    <Card
                        badge="Tecnologia"
                        title="Equipamentos Modernos"
                        description="Tratamentos menos invasivos e resultados melhores."
                    />
                    <Card
                        badge="Resultados"
                        title="Estética e Saúde"
                        description="Cuidamos da função mastigatória e da estética do sorriso."
                    />
                </div>
            </Section>

            <Section
                id="o-que-fazemos"
                title="O Que Fazemos"
                subtitle="Especializados em Implantodontia e tratamentos odontológicos completos."
                dark={true}
            >
                <div className="grid gap-6 md:grid-cols-2">
                    <Card
                        badge="Implantodontia"
                        title="Reabilitação Oral com Implantes"
                        description="Soluções completas para reposição de dentes perdidos com tecnologia de ponta."
                    />
                    <Card
                        badge="Clareamento"
                        title="Quando clarear os dentes?"
                        description="Entenda quando o procedimento é indicado para um sorriso mais radiante."
                    />
                    <Card
                        badge="Ortodontia"
                        title="Aparelho fixo ou alinhadores?"
                        description="Compare as diferenças e descubra o ideal para você."
                    />
                    <Card
                        badge="Prevenção"
                        title="Cuidados Básicos"
                        description="Consulta de rotina, limpeza profissional e orientações para manter sua saúde bucal."
                    />
                </div>
            </Section>

            <Section
                id="nosso-trabalho"
                title="Nosso Trabalho"
                subtitle="Resultados que transformam sorrisos e vidas."
                dark={true}
            >
                <div className="grid gap-6 md:grid-cols-2">
                    <Card
                        badge="Estética Dental"
                        title="Transformação Completa"
                        description="Trabalhamos com técnicas modernas para harmonizar seu sorriso."
                    />
                    <Card
                        badge="Implantes"
                        title="Reabilitação Oral"
                        description="Soluções completas para restauração e funcionalidade."
                    />
                </div>
            </Section>

            <Section
                id="colaboradores"
                title="Colaboradores"
                subtitle="Nossa equipe especializada pronta para cuidar do seu sorriso."
                dark={true}
            >
                <div className="grid gap-6 md:grid-cols-3">
                    <TeamCard
                        name="Dr. Marcelle"
                        imagePath="/dr_marcelle.JPG"
                        quote="Especialista em Implantodontia e reabilitação oral com foco em resultados estéticos e funcionais."
                        instagramUrl="https://www.instagram.com/amarcellealbuquerque/"
                    />
                    <TeamCard
                        name="Dr. Wlysses Resende"
                        imagePath="/dr_ulysses.JPG"
                        quote="Dedicado à excelência em tratamentos odontológicos, proporcionando o melhor cuidado para cada paciente."
                        instagramUrl="https://www.instagram.com/drwresende/"
                    />
                    <TeamCard
                        name="Dr. Gabriela"
                        imagePath="/dr_gabriella.JPG"
                        quote="Comprometida com a saúde bucal e estética dental, sempre priorizando o conforto e bem-estar."
                        instagramUrl="https://www.instagram.com/dra.gabibatista/"
                    />
                </div>
            </Section>

            <Footer />
        </main>
    )
}

