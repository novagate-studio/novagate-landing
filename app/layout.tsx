import Header from '@/components/header'
import type { Metadata } from 'next'
import { Goldman, Lexend } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'

const sans = Lexend({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'NovaGate Studio',
  description: 'Nền tảng phát hành game hiện đại, đặc sắc hàng đầu tại Việt Nam',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${sans.className} antialiased`}>
        <Header />
        <main className='relative'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
