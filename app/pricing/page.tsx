export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-black text-center mb-20 gradient-text">
          Ceny
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* FREE */}
          <div className="group relative bg-slate-900/70 backdrop-blur-xl p-10 rounded-3xl border-2 border-gray-700 hover:border-blue-500/50 transition-all overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent -skew-x-12 -translate-x-8 group-hover:translate-x-0 transition-transform duration-700"></div>
            <div className="relative">
              <div className="text-3xl font-black text-emerald-400 mb-6">FREE</div>
              <div className="text-5xl font-black text-white mb-8">0 Kč</div>
              <div className="space-y-4 mb-10">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></div>
                  <span>5 tiketů/den</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></div>
                  <span>Základní statistiky</span>
                </div>
              </div>
              <button disabled className="w-full bg-slate-700/50 text-slate-400 py-4 px-6 rounded-2xl font-bold text-lg cursor-not-allowed">
                Aktivní
              </button>
            </div>
          </div>

          {/* PRO */}
          <div className="group relative bg-gradient-to-br from-blue-900/80 to-purple-900/80 p-10 rounded-3xl border-2 border-transparent shadow-2xl hover:shadow-3xl transition-all overflow-hidden col-span-1 md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent -skew-x-12 -translate-x-8 group-hover:translate-x-0 transition-transform duration-700"></div>
            <div className="relative">
              <div className="text-2xl font-bold text-emerald-400 bg-emerald-500/20 px-4 py-2 rounded-xl mb-6 inline-block">POPULÁRNÍ</div>
              <div className="text-3xl font-black text-emerald-400 mb-6">PRO</div>
              <div className="text-5xl font-black text-white mb-8">199 Kč/měsíc</div>
              <div className="space-y-4 mb-12">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></div>
                  <span>Neomezené tikety</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></div>
                  <span>Detailní analýzy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></div>
                  <span>Export PDF/Excel</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></div>
                  <span>Priorita support</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-black py-6 px-8 rounded-3xl text-xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300">
                Vybrat PRO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
