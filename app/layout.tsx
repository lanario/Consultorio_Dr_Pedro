import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Consultório Dr. Pedro Lucas',
  description: 'Atendimento moderno, humanizado e focado em devolver sua confiança ao sorrir.',
  icons: {
    icon: [{ url: '/logo_pedro.png', type: 'image/png' }],
    shortcut: '/logo_pedro.png',
    apple: '/logo_pedro.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

