export default function SledujProgress() {  
  // Demo data – později z Supabase  
  const tikety = [  
    { id: 1, url: "https://www.chance.cz/tiket/12345", stav: "ongoing", kurz: 3.25, vyhra: null },  
    { id: 2, url: "https://www.tipsport.cz/tiket/67890", stav: "live", kurz: 5.80, vyhra: null },  
    { id: 3, url: "https://www.chance.cz/tiket/11111", stav: "won", kurz: 2.10, vyhra: 210 },  
  ];  

  return (  
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white p-8">  
      <div className="max-w-4xl mx-auto">  
        <div className="flex items-center mb-12">  
          <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mr-4">  
            <span className="text-2xl font-bold">2</span>  
          </div>  
          <h1 className="text-4xl font-bold">Sleduj progress tiketů</h1>  
        </div>  

        <div className="grid gap-4">  
          {tikety.map((tiket) => (  
            <div key={tiket.id} className="bg-blue-900/30 backdrop-blur-md p-6 rounded-2xl border border-blue-500/30 shadow-xl hover:shadow-2xl transition-all">  
              <div className="flex justify-between items-start mb-4">  
                <div className="flex-1">  
                  <a href={tiket.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:text-cyan-300 transition">  
                    Tiket #{tiket.id}  
                  </a>  
                  <p className="text-sm text-gray-400 mt-1 truncate">{tiket.url}</p>  
                </div>  
                <div className="text-right">  
                  <div className={`px-4 py-2 rounded-full text-sm font-bold ${  
                    tiket.stav === 'won' ? 'bg-green-500 text-black' :  
                    tiket.stav === 'live' ? 'bg-yellow-500 text-black' :  
                    'bg-orange-500 text-black'  
                  }`}>  
                    {tiket.stav === 'won' ? '✅ Výhra' : tiket.stav === 'live' ? '⚡ LIVE' : '⏳ Ongoing'}  
                  </div>  
                  <div className="text-2xl font-bold mt-2">  
                    {tiket.kurz}x  
                  </div>  
                </div>  
              </div>  
              {tiket.vyhra && (  
                <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">  
                  <span>Výhra: {tiket.vyhra} Kč</span>  
                </div>  
              )}  
            </div>  
          ))}  
        </div>  

        <div className="mt-12 text-center">  
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl transition-all">  
            + Přidat nový tiket  
          </button>  
        </div>  
      </div>  
    </div>  
  );  
}  
