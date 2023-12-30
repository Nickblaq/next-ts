import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from "@/lib/utils"
import MobileNav from "@/components/mobileNav"
import Navbar from "@/components/navbar"
export const metadata = {
  title: 'Revenue Reconcilliation for CPAs',
  description:
    'Revenue Reconcilliation app. Built-in algorithmic mathematical finance strategies for revenue reconsillation',
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
        {children}
      </ThemeProvider>
        </body>
    </html>
  )
}
