import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/app/redux/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chess App',
  description: 'Nextjs chess app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-screen max-w-screen h-screen max-h-screen bg-smokedPurple-custom p-4 md:p-6 flex justify-center items-center">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
