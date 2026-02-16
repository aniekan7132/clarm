import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CLARM Initiative',
  description: 'The Coalition for Legislative Arm Revolution Movement is Nigeria\'s premier youth-driven platform for legislative transformation and democratic renewal.',
  keywords: ['Nigeria', 'legislative reform', 'democracy', 'youth movement', 'elections'],
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: true,
  },
  icons: {
    icon: [
      {
        url: '/clarm-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/clarm-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/clarm-logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/clarm-logo.png',
  },
  openGraph: {
    title: 'CLARM Initiative',
    description: 'Reclaim the Legislature, Reclaim Our Future',
    type: 'website',
    locale: 'en_NG',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
