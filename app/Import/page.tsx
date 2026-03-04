export default function ImportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-12">
          <span className="text-cyan-300">Import</span>
          <span className="text-white">tiketu</span>
        </h1>
        
        <div className="bg-slate-900/70 backdrop-blur-md rounded-3xl p-12 border border-blue-900/50 shadow-2xl">
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-semibold mb-3 text-blue-300">
                Vlož URL tiketu
              </label>
              <input
                type="url"
                placeholder="https://tipsport.cz/tiket/..."
                className="w-full px-6 py-4 bg-slate-800/50 border border-blue-600/50 rounded-2xl text-xl font-semibold focus:outline-none focus:ring-4 focus:ring-blue-500/30"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-6 px-8 rounded-2xl text-xl shadow-xl transition-all duration-300 hover:scale-105"
            >
              Importovat tiket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
