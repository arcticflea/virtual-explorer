import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VirtualMansi',
  description: 'A bunch of 360 images and such',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="bg-white-300 max-w-3xl mx-auto px-10 py-10">
        <header className="flex items-center justify-between">
          <Link href="/" className="bg-gradient-to-r from-red-400 via-yellow-500 to-blue-600 bg-clip-text text-transparent text-lg font-bold">Home</Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">{page.title}</Link>
            ))}

          </div>

        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  )
}
