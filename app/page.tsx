import { Hero } from '@/components/Hero'
import { QuemSouEuSection } from '@/components/QuemSouEuSection'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { TeamCard } from '@/components/TeamCard'
import { TrabalhoItem } from '@/components/TrabalhoItem'
import { TimelineSection } from '@/components/TimelineSection'
import { ConsultorioDiagram } from '@/components/ConsultorioDiagram'
import { CollaboratorsStack } from '@/components/CollaboratorsStack'
import { Footer } from '@/components/Footer'

export default function Home() {
    const collaborators = [
        {
            name: 'Dr. Marcelle Albuquerque',
            imagePath: '/dr_marcelle.JPG',
            quote:
                'Especialista em endodontia, dedicada a tratamentos precisos e humanizados para preservar a saúde e a vitalidade dos dentes. Com expertise em procedimentos avançados, oferece atendimento cuidadoso e tecnologia de ponta.',
            instagramUrl: 'https://www.instagram.com/amarcellealbuquerque/',
        },
        {
            name: 'Dr. Wllysses Resende',
            imagePath: '/dr_ulysses.JPG',
            quote:
                'Implantodontista com expertise em planejamento digital, cirurgia guiada e protocolos avançados. Atua na reabilitação oral através de implantes de alta performance e procedimentos minimamente invasivos.',
            instagramUrl: 'https://www.instagram.com/drwresende/',
        },
        {
            name: 'Dr. Gabi Batista',
            imagePath: '/dr_gabi.jpeg',
            quote:
                'Ortodontista especializada em tratamentos com alinhadores, aparelhos estéticos e tecnologias digitais. Focada em proporcionar resultados previsíveis e uma experiência mais confortável ao paciente.',
            instagramUrl: 'https://www.instagram.com/dra.gabibatista/',
        },
    ]

    return (
        <main>
            <Hero />

            <QuemSouEuSection
                name="Dr. Pedro Lucas"
                imagePath="/dr_pedro.JPG"
                title="Dr. Pedro Lucas"
                description="Especialista em Implantodontia, ofereço reabilitações orais completas utilizando implantes dentários, prótese dentária e prótese removível. Busco sempre a combinação perfeita entre excelência técnica, estética natural e conforto absoluto para cada paciente."
                instagramUrl="https://www.instagram.com/consultoriodrpedrolucas/"
                whatsappUrl="https://wa.me/5521979370171"
                especialidades={['Implantodontia', 'Prótese dentária', 'Prótese removível', 'Reabilitação oral']}
                areas={['Implantes', 'Estética dental', 'Clareamento', 'Ortodontia']}
            />

            <Section
                id="quem-somos"
                title="Sobre o Consultório"
                subtitle="Excelência, tecnologia e atendimento acolhedor."
                dark={true}
            >
                <ConsultorioDiagram />
            </Section>

            <Section
                id="o-que-fazemos"
                title="O Que Fazemos"
                subtitle="Especializados em Implantodontia e tratamentos odontológicos completos."
                dark={true}
            >
                <TimelineSection>
                    <Card
                        dark
                        imagePath="/implantodontia.png"
                        imageAlt="Reabilitação Oral com Implantes"
                        badge="Implantodontia"
                        title="Reabilitação Oral com Implantes"
                        description="Soluções completas para reposição de dentes perdidos com tecnologia de ponta."
                    />
                    <Card
                        dark
                        imagePath="/clareamento.png"
                        imageAlt="Quando clarear os dentes?"
                        badge="Clareamento"
                        title="Quando clarear os dentes?"
                        description="Entenda quando o procedimento é indicado para um sorriso mais radiante."
                    />
                    <Card
                        dark
                        imagePath="/ortodontia.png"
                        imageAlt="Aparelho fixo ou alinhadores?"
                        badge="Ortodontia"
                        title="Aparelho fixo ou alinhadores?"
                        description="Compare as diferenças e descubra o ideal para você."
                    />
                    <Card
                        dark
                        imagePath="/prevencao.png"
                        imageAlt="Cuidados Básicos"
                        badge="Prevenção"
                        title="Cuidados Básicos"
                        description="Consulta de rotina, limpeza profissional e orientações para manter sua saúde bucal."
                    />
                </TimelineSection>
            </Section>

            <Section
                id="nosso-trabalho"
                title="Nosso Trabalho"
                subtitle="Resultados que transformam sorrisos e vidas."
                dark={true}
            >
                <TimelineSection>
                    <TrabalhoItem
                        badge="Estética Dental"
                        title="Transformação Completa"
                        description="Trabalhamos com técnicas modernas para harmonizar seu sorriso. Cada caso é planejado com foco em estética, função e durabilidade."
                        reverse={false}
                    />
                    <TrabalhoItem
                        badge="Implantes"
                        title="Reabilitação Oral"
                        description="Soluções completas para restauração e funcionalidade. Implantes de alta performance e procedimentos minimamente invasivos."
                        reverse={true}
                    />
                </TimelineSection>
            </Section>

            <Section
                id="colaboradores"
                title="Colaboradores"
                subtitle="Nossa equipe especializada pronta para cuidar do seu sorriso."
                dark={true}
            >
                <CollaboratorsStack cards={collaborators} />
            </Section>

            <Footer />
        </main>
    )
}

