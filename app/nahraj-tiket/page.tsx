export default function NahrajTiket() {  
  return (  
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white p-8">  
      <div className="max-w-4xl mx-auto">  
        <h1 className="text-4xl font-bold mb-8 text-center">Načti tiket</h1>  
        <form className="bg-blue-900/30 backdrop-blur-md p-8 rounded-2xl border border-blue-500/30 shadow-2xl">  
          <div className="space-y-6">  
            <input  
              type="url"  
              placeholder="Vlož URL tiketu z Chance.cz nebo Tipsport.cz"  
              className="w-full p-4 bg-slate-800/50 border border-blue-400 rounded-xl text-lg placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"  
            />  
            <button  
              type="submit"  
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300"  
            >  
              🔍 Parsuj tiket a ulož  
            </button>  
          </div>  
        </form>  
      </div>  
    </div>  
  );  
}  
