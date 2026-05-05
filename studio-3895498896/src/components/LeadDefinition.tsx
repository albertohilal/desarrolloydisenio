import { CheckCircle2, XCircle } from "lucide-react";

export function LeadDefinition() {
  const countsAsLead = [
    "Encaja con el perfil buscado",
    "Fue contactado por canal válido",
    "Generó interacción real",
    "Manifestó interés en la oferta",
    "Llega documentado con contexto"
  ];

  const doesNotCount = [
    "Contacto encontrado sin respuesta",
    "Búsqueda realizada",
    "Mensaje sin respuesta",
    "Rechazo explícito",
    "Respuesta automática",
    "Interacción ambigua"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#110402] mb-6 font-headline tracking-tight">
            Un lead entregado <span className="text-[#4B8A44]">no es un contacto encontrado</span>
          </h2>
          <p className="text-lg text-gray-600">
            Nuestra unidad de valor es el <strong>lead validado con interés real</strong>. Si no hay respuesta o interés, el costo operativo lo absorbe LeadMaster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* SI CUENTA */}
          <div className="glass-card p-6 sm:p-10 border-t-8 border-[#4B8A44] flex flex-col h-full bg-gradient-to-b from-[#4B8A44]/5 to-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-[#4B8A44]/10 flex items-center justify-center text-[#4B8A44]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#110402]">Cuenta como Lead</h3>
            </div>
            <ul className="space-y-5 mb-8 flex-grow">
              {countsAsLead.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#4B8A44] flex items-center justify-center text-white mt-0.5 shrink-0 font-bold text-xs">✓</div>
                  <span className="text-gray-700 font-bold text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-[#4B8A44]/10 p-5 rounded-2xl text-sm text-[#4B8A44] font-black text-center uppercase tracking-widest">
              Consume saldo prepago
            </div>
          </div>

          {/* NO CUENTA */}
          <div className="glass-card p-6 sm:p-10 border-t-8 border-gray-300 flex flex-col h-full opacity-70 grayscale-[0.2]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                <XCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-500">No cuenta como Lead</h3>
            </div>
            <ul className="space-y-5 mb-8 flex-grow">
              {doesNotCount.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 mt-0.5 shrink-0 font-bold text-xs">✕</div>
                  <span className="text-gray-400 font-bold text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 p-5 rounded-2xl text-sm text-gray-400 font-black text-center uppercase tracking-widest">
              Sin costo para el cliente
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}