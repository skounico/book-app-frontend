import type { Metadata } from 'next'
import Link from 'next/link'
import '../../styles/global.css'

export const metadata: Metadata = {
  title: 'MyShelf',
  description: 'Book Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        <div className='bg-red-300'>
          <h1>Teste</h1>
          <Link href="/" className='px-4'>Home</Link>
          <Link href="/dashboard" className='px-4'>Dashboard</Link>
          <Link href="/auth/signin" className='px-4'>Sign In</Link>
          <Link href="/book-shelf" className='px-4'>Book Shelf</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
