import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cashifi - #1 SBA Lending Marketplace | Connect with Top SBA Lenders',
  description: 'Access every SBA loan product in one place. Cashifi connects businesses with top-tier SBA lenders nationwide. Fast approvals, competitive rates, expert guidance.',
  keywords: 'SBA loans, SBA 7(a), CDC 504, business loans, small business financing, SBA lending marketplace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased bg-[#0A0A0F] text-white`}>
        {children}
      </body>
    </html>
  )
}