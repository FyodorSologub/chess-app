import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-screen max-w-screen h-screen max-h-screen bg-smokedPurple-custom p-4 md:p-6 flex justify-center items-center">
        {children}
      </body>
    </html>
  )
}
