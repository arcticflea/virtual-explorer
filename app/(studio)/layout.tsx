import { Metadata } from 'next'
import '../globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VirtualMansi - Studio',
  description: 'A bunch of 360 images and such',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>{ children }</body>
    </html>
  )
}
