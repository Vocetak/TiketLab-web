export default function ImportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-black text-center mb-12 gradient-text">
          Import tiketu
        </h1>
        
        <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-12 border border-blue-900/50 shadow-2xl">
          <form className="space-y-8">
            <div>
              <label className="block text-xl font-bold mb-4 text-blue-300">
                📋 Vlož URL tiketu z Tipsportu/Chance
              </label>
              <input
                type="url"
                placeholder="https://www.tipsport.cz/tiket/abc123..."
                className="w-full px-8 py-6 bg-slate-800/50 border-2 border-blue-600/50 rounded-3xl text-xl font-semibold placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black py-8 px-12 rounded-3xl text-2xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300"
            >
              🚀 Importovat tiket
            </button>
            
            <div className="text-center text-slate-400 text-lg pt-8 border-t border-slate-700">
              FREE: 5 tiketů/den | <Link href="/pricing" className="text-emerald-400 hover:text-emerald-300 underline">PRO: neomezeno</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
