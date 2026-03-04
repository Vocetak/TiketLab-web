'use client';  
import Link from 'next/link';  

export default function Home() {  
  return (  
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex flex-col items-center justify-center px-6 py-10">  
       
      {/* Header sekce – logo + název */}  
      <div className="flex flex-col items-center space-y-8 mb-12">  
         
        {/* Nadpis TiketLab – větší */}  
        <h1 className="text-5xl md:text-7xl font-extrabold mb-0 text-center">  
          <span className="text-cyan-300">Tiket</span>  
          <span className="text-white">Lab</span>  
        </h1>  
         
        {/* Logo – široké stejně jako text TiketLab */}  
        <img   
          src="/logo.png"   
          alt="TiketLab"   
          className="w-[320px] h-auto max-w-full mx-auto drop-shadow-2xl"  
        />  
         
      </div>  

      {/* Tři kroky – teď s Link pro navigaci */}  
      <div className="w-full max-w-3xl grid md:grid-cols-3 gap-6 mb-10">  
        {/* Krok 1 */}  
        <Link href="/nahraj-tiket" className="block">  
          <div className="group flex flex-col items-center space-y-3">  
            <div className="text-4xl md:text-5xl font-extrabold text-blue-300 transition-all duration-300 ease-out group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(59,130,246,0.9)]">  
              1  
            </div>  
            <div  
              className="flex items-center justify-center px-6 py-5 w-full rounded-2xl  
                         bg-blue-900/60 border border-blue-300/20 shadow-lg  
                         transition-colors duration-300 ease-out  
                         group-hover:bg-blue-700/80 group-hover:border-blue-200/70 cursor-pointer"  
            >  
              <span className="text-base md:text-lg font-semibold tracking-wide">  
                Nahraj tiket  
              </span>  
            </div>  
          </div>  
        </Link>  

        {/* Krok 2 */}  
        <Link href="/sleduj-progress" className="block">  
          <div className="group flex flex-col items-center space-y-3">  
            <div className="text-4xl md:text-5xl font-extrabold text-blue-300 transition-all duration-300 ease-out group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(59,130,246,0.9)]">  
              2  
            </div>  
            <div  
              className="flex items-center justify-center px-6 py-5 w_full rounded-2xl  
                         bg-blue-900/60 border border-blue-300/20 shadow-lg  
                         transition-colors duration-300 ease-out  
                         group-hover:bg-blue-700/80 group-hover:border-blue-200/70 cursor-pointer"  
            >  
              <span className="text-base md:text-lg font-semibold tracking-wide">  
                Sleduj progress  
              </span>  
            </div>  
          </div>  
        </Link>  

        {/* Krok 3 */}  
        <Link href="/statistiky" className="block">  
          <div className="group flex flex-col items-center space-y-3">  
            <div className="text-4xl md:text-5xl font-extrabold text-blue-300 transition-all duration-300 ease-out group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(59,130,246,0.9)]">  
              3  
            </div>  
            <div  
              className="flex items-center justify-center px-6 py-5 w-full rounded-2xl  
                         bg-blue-900/60 border border-blue-300/20 shadow-lg  
                         transition-colors duration-300 ease-out  
                         group-hover:bg-blue-700/80 group-hover:border-blue-200/70 cursor-pointer"  
            >  
              <span className="text-base md:text-lg font-semibold tracking-wide">  
                Studuj statistiky  
              </span>  
            </div>  
          </div>  
        </Link>  
      </div>  

      {/* CTA tlačítko – link na první stránku */}  
      <Link href="/nahraj-tiket">  
        <button  
          className="bg-gradient-to-r from-blue-500 to-indigo-600   
                     hover:from-blue-600 hover:to-indigo-700   
                     text-white font-semibold py-3 px-12 rounded-full text-lg   
                     shadow-xl transition-transform duration-200 hover:scale-105"  
        >  
          Vyzkoušej zdarma  
        </button>  
      </Link>  
    </main>  
  );  
}  
