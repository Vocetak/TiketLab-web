export default function Statistiky() {  
  const stats = { tikety: 23, vyhry: 8, prohry: 12, roi: 12.5 };  

  return (  
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white p-8">  
      <div className="max-w-4xl mx-auto">  
        <div className="flex items-center mb-12">  
          <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mr-4">  
            <span className="text-2xl font-bold">3</span>  
          </div>  
          <h1 className="text-4xl font-bold">Tvoje statistiky</h1>  
        </div>  
        {/* Bilance cards + graf později */}  
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">  
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-8 rounded-2xl border border-green-400/30 text-center">  
            <div className="text-3xl font-bold text-green-400">{stats.tikety}</div>  
            <div className="text-gray-300">Celkem tiketů</div>  
          </div>  
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-8 rounded-2xl border border-blue-400/30 text-center">  
            <div className="text-3xl font-bold text-blue-400">{stats.vyhry}</div>  
            <div className="text-gray-300">Výhry</div>  
          </div>  
          {/* Další karty podobně */}  
        </div>  
      </div>  
    </div>  
  );  
}  
