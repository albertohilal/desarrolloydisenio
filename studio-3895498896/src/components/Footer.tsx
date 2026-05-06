import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Image src="/leadmaster/logo-pajaro.webp" alt="LeadMaster" width={30} height={30} className="h-[1em] w-auto object-contain" />
              <span className="text-2xl font-black text-[#110402] tracking-tight">LeadMaster</span>
            </div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
              Prospección comercial gestionada B2B
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-[11px] font-black text-gray-400 uppercase tracking-[0.12em] sm:tracking-[0.2em]">
            <a href="#" className="hover:text-[#75AADB] transition-colors">Metodología</a>
            <a href="#" className="hover:text-[#75AADB] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#75AADB] transition-colors">Contacto</a>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="text-[10px] font-black text-[#110402] uppercase tracking-widest">© {new Date().getFullYear()} LeadMaster</p>
            <p className="text-[10px] text-gray-400 font-medium italic lowercase">Una solución de desarrolloydisenio.com.ar</p>
          </div>
        </div>
      </div>
    </footer>
  );
}