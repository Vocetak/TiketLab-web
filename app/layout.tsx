import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Header */}
        <header className="bg-slate-900/80 backdrop-blur-md border-b border-blue-900/50 sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="TiketLab" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-cyan-300">TiketLab</span>
            </Link>
            
            <div className="flex space-x-6">
              <Link href="/import" className="text-lg font-semibold text-blue-300 hover:text-white transition-colors">
                Import tiketu
              </Link>
              <Link href="/stats" className="text-lg font-semibold text-blue-300 hover:text-white transition-colors">
                Statistiky
              </Link>
              <Link href="/pricing" className="text-lg font-semibold text-blue-300 hover:text-white transition-colors">
                Ceny
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
