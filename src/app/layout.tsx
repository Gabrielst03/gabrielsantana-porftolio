import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const space = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Gabriel Santana - FullStack Dev Jr.',
  description: 'Portfólio Gabriel Santana, Desenvolvedor FullStack Jr. (MERN Stack)',
  creator: 'Gabriel Santana'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${space.className} bg-zinc-900 text-zinc-100`}>{children}</body>
    </html>
  )
}
