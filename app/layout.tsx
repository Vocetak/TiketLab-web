import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TiketLab - Sportovní sázení & statistiky',
  description: 'Import tiketů, sleduj progress, analyzuj statistiky. FREE & PRO plány.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        {/* Header */}
        <header className="bg-slate-900/95 backdrop-blur-md border-b border-blue-900/50 sticky top-0 z-50 supports-[backdrop-filter:blur(20px)]:bg-slate-900/95">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <img src="/logo.png" alt="TiketLab" className="h-12 w-auto drop-shadow-xl group-hover:scale-105 transition-transform" />
              <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                TiketLab
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/import" className="text-lg font-semibold text-blue-300 hover:text-white hover:underline underline-offset-4 transition-all">
                Import tiketu
              </Link>
              <Link href="/stats" className="text-lg font-semibold text-blue-300 hover:text-white hover:underline underline-offset-4 transition-all">
                Statistiky
              </Link>
              <Link href="/pricing" className="text-lg font-semibold text-emerald-400 hover:text-emerald-300 hover:underline underline-offset-4 transition-all">
                Ceny
              </Link>
              <Link href="/dashboard" className="text-lg font-semibold text-purple-400 hover:text-purple-300 hover:underline underline-offset-4 transition-all">
                Dashboard
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-slate-950 border-t border-blue-900/50 mt-24">
          <div className="max-w-6xl mx-auto px-6 py-12 text-center text-slate-400">
            <p>&copy; 2026 TiketLab. Všechna práva vyhrazena.</p>
            <p className="mt-2 text-sm">FREE: 5 tiketů/den | PRO: neomezeno</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
