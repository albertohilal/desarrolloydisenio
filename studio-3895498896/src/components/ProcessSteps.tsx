import { ClipboardEdit, Search, SendHorizontal, ThumbsUp, PackageCheck } from "lucide-react";

export function ProcessSteps() {
  const steps = [
    {
      icon: ClipboardEdit,
      title: "Definición del encargo",
      desc: "Configuramos los criterios: rubros, zonas, puestos y exclusiones."
    },
    {
      icon: Search,
      title: "Identificación y filtrado",
      desc: "Buscamos empresas que encajen exactamente con tu perfil comercial."
    },
    {
      icon: SendHorizontal,
      title: "Contacto inicial",
      desc: "Iniciamos la conversación personalizada por WhatsApp y Email."
    },
    {
      icon: ThumbsUp,
      title: "Validación de interés",
      desc: "Detectamos interés real y filtramos respuestas no válidas."
    },
    {
      icon: PackageCheck,
      title: "Entrega con respaldo",
      desc: "Recibís el lead validado con contexto para continuar la venta."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#110402] font-headline tracking-tight">
            ¿Cómo funciona el proceso?
          </h2>
        </div>

        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
                <div className="w-20 h-20 rounded-[28px] bg-white border-2 border-gray-100 flex items-center justify-center text-[#75AADB] shadow-xl relative group-hover:scale-110 group-hover:border-[#75AADB] transition-all duration-300">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#FE6800] text-white text-xs font-black flex items-center justify-center shadow-lg">
                    {idx + 1}
                  </span>
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-black text-[#110402] text-lg sm:text-xl px-2 leading-tight">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}