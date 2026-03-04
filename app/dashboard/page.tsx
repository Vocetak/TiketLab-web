export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-black text-center mb-20 gradient-text">
          Dashboard
        </h1>
        
        {/* Overview cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-900/70 p-8 rounded-3xl border border-blue-900/50 backdrop-blur-xl">
            <div className="text-4xl font-black text-emerald-400 mb-4">€1,247</div>
            <div className="text-xl text-blue-300">Celkový profit</div>
            <div className="text-emerald-400 font-bold">+18.4% ROI</div>
          </div>
          
          <div className="bg-slate-900/70 p-8 rounded-3xl border border-blue-900/50 backdrop-blur-xl">
            <div className="text-4xl font-black text-cyan-400 mb-4">247</div>
            <div className="text-xl text-blue-300">Importovaných tiketů</div>
            <div className="text-cyan-400 font-bold">68% win rate</div>
          </div>
          
          <div className="bg-slate-900/70 p-8 rounded-3xl border border-blue-900/50 backdrop-blur-xl">
            <div className="text-4xl font-black text-purple-400 mb-4">3.2</div>
            <div className="text-xl text-blue-300">Průměrný kurz</div>
            <div className="text-purple-400 font-bold">+12% nad trhem</div>
          </div>
          
          <div className="bg-slate-900/70 p-8 rounded-3xl border border-blue-900/50 backdrop-blur-xl">
            <div className="text-4xl font-black text-orange-400 mb-4">42</div>
            <div className="text-xl text-blue-300">Aktivních tiketů</div>
            <div className="text-orange-400 font-bold">Vyhraných dnes</div>
          </div>
        </div>
        
        {/* Recent tikety */}
        <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-blue-900/50 p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Poslední tikety</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-all">
              <div>
                <div className="font-bold text-xl">Barcelona vs Real Madrid</div>
                <div className="text-blue-400">Kurz: 2.15 | Status: Vyhraný ✅</div>
              </div>
              <div className="text-emerald-400 font-bold">+€150</div>
            </div>
            {/* další tikety... */}
          </div>
        </div>
      </div>
    </div>
  );
}
