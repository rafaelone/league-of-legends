import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import path from 'path'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: {
    template: '%s | League of Legends',
    default: 'League of Legends',
  },
  description: 'League of Legends',
}

const league = localFont({
  src: [
    {
      path: '../assets/fonts/FrizQuadrata.ttf',
      weight: '400',
      style: 'normal',
    },
  ],

  variable: '--font-league',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${league.variable} scroll-smooth antialiased`}>
        <Toaster />
        {children}
      </body>
    </html>
  )
}
