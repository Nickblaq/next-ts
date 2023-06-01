import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from "@/lib/utils"
import MobileNav from "@/components/mobileNav"
import Navbar from "@/components/navbar"
export const metadata = {
  title: 'Vercel Postgres Demo with Kysely',
  description:
    'A simple Next.js app with Vercel Postgres as the database and Kysely as the ORM',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'bg-background font-sans antialiased',
        inter.variable
      )}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
       <Navbar/>
        {children}
      </ThemeProvider>
        </body>
    </html>
  )
}
