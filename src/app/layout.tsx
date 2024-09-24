import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: {
    template: '%s | League of Legends',
    default: 'League of Legends',
  },
  description: 'League of Legends',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],

  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} scroll-smooth antialiased`}>
        <Toaster />
        {children}
      </body>
    </html>
  )
}
