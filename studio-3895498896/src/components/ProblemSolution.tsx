import { ArrowRight, Search, Target, MessageSquareCode } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#110402] mb-6 font-headline tracking-tight">
            Muchas empresas B2B saben vender, pero no tienen un motor sostenido de prospección
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            LeadMaster resuelve la generación inicial de conversaciones comerciales para empresas que necesitan oportunidades, pero no cuentan con una máquina interna robusta de prospección saliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-10">
            <div className="bg-[#F1F5F9] p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] border-l-[10px] border-[#75AADB] shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-[#110402] mb-6">La realidad del mercado B2B</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1 shrink-0 font-bold">✕</div>
                  <p className="text-gray-600 font-medium leading-snug">Prospectar manualmente consume el tiempo de tus mejores cerradores.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1 shrink-0 font-bold">✕</div>
                  <p className="text-gray-600 font-medium leading-snug">Las herramientas de "auto-servicio" requieren tiempo y pericia técnica que no siempre tenés.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1 shrink-0 font-bold">✕</div>
                  <p className="text-gray-600 font-medium leading-snug">El costo de contratar un equipo interno de prospección es alto y difícil de escalar.</p>
                </li>
              </ul>
            </div>

            <div className="px-4">
              <p className="text-xl sm:text-2xl italic font-black text-[#75AADB] leading-tight mb-4">
                "No comprás una herramienta. Comprás oportunidades comerciales validadas."
              </p>
              <p className="text-gray-500 font-medium">
                LeadMaster no es software ni plataforma autoservicio. Es un servicio gestionado donde nosotros operamos y vos recibís los resultados.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="glass-card p-6 sm:p-8 hover:border-[#75AADB] transition-all border-2 border-transparent group">
              <div className="w-12 h-12 rounded-2xl bg-[#75AADB]/10 flex items-center justify-center text-[#75AADB] mb-6 group-hover:bg-[#75AADB] group-hover:text-white transition-all">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#110402] mb-3">Identificamos tu Target</h4>
              <p className="text-gray-600 leading-relaxed">No buscamos a granel. Filtramos por industria, cargo, zona y criterios específicos de tu encargo comercial.</p>
            </div>
            
            <div className="glass-card p-6 sm:p-8 hover:border-[#FE6800] transition-all border-2 border-transparent group">
              <div className="w-12 h-12 rounded-2xl bg-[#FE6800]/10 flex items-center justify-center text-[#FE6800] mb-6 group-hover:bg-[#FE6800] group-hover:text-white transition-all">
                <MessageSquareCode className="w-6 h-6" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#110402] mb-3">Iniciamos la Conversación</h4>
              <p className="text-gray-600 leading-relaxed">Contactamos vía WhatsApp y Email con mensajes personalizados, abriendo puertas que tu equipo no tiene tiempo de tocar.</p>
            </div>

            <div className="glass-card p-6 sm:p-8 hover:border-[#4B8A44] transition-all border-2 border-transparent group">
              <div className="w-12 h-12 rounded-2xl bg-[#4B8A44]/10 flex items-center justify-center text-[#4B8A44] mb-6 group-hover:bg-[#4B8A44] group-hover:text-white transition-all">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#110402] mb-3">Validamos el Interés</h4>
              <p className="text-gray-600 leading-relaxed">Filtramos respuestas automáticas y rechazos. Solo te entregamos prospectos que han manifestado interés real en tu oferta.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}