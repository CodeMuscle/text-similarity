import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { Toaster } from '@/components/ui/toast'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { cn } from '../lib/utils'

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn( 'bg-white text-slate-900 antialiased' , inter.className)}>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {children}
          <Toaster position='bottom-right' />
        </Providers>  

        {/* Allow more height for mobile devices */}
        <div className="h-40 md:hidden" />

      </body>
    </html>
  )
}
