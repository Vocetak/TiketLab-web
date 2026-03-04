export default function StatsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-black text-center mb-20 gradient-text">
          Statistiky
        </h1>
        
        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl border border-blue-900/50 text-center group hover:bg-blue-900/30 transition-all">
            <div className="text-5xl font-black text-emerald-400 mb-4 group-hover:scale-110 transition-transform">247</div>
            <div className="text-2xl font-bold text-blue-300 mb-2">Importovaných tiketů</div>
            <div className="text-slate-400">+42% tento měsíc</div>
          </div>
          
          <div className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl border border-blue-900/50 text-center group hover:bg-blue-900/30 transition-all">
            <div className="text-5xl font-black text-cyan-400 mb-4 group-hover:scale-110 transition-transform">€1,247</div>
            <div className="text-2xl font-bold text-blue-300 mb-2">Celkový profit</div>
            <div className="text-slate-400">ROI 18.4%</div>
          </div>
          
          <div className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl border border-blue-900/50 text-center group hover:bg-blue-900/30 transition-all">
            <div className="text-5xl font-black text-purple-400 mb-4 group-hover:scale-110 transition-transform">68%</div>
            <div className="text-2xl font-bold text-blue-300 mb-2">Win rate</div>
            <div className="text-slate-400">Posledních 50 tiketů</div>
          </div>
          
          <div className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl border border-blue-900/50 text-center group hover:bg-blue-900/30 transition-all">
            <div className="text-5xl font-black text-orange-400 mb-4 group-hover:scale-110 transition-transform">3.2</div>
            <div className="text-2xl font-bold text-blue-300 mb-2">Průměrný kurz</div>
            <div className="text-slate-400">Vyšší než trh</div>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/dashboard"
            className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-black py-6 px-16 rounded-3xl text-2xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300"
          >
            👉 Zobrazit detailní dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
