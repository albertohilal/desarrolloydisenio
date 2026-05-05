import { Building2, MessageSquare, Target, ShieldCheck } from "lucide-react";

export function ValueProposition() {
  const items = [
    {
      icon: Building2,
      title: "Empresas objetivo identificadas",
      desc: "Listado de cuentas que encajan perfectamente con tu perfil de cliente ideal."
    },
    {
      icon: MessageSquare,
      title: "Conversaciones iniciadas",
      desc: "Contacto efectivo realizado por canales válidos (WhatsApp / Email)."
    },
    {
      icon: Target,
      title: "Leads con interés manifestado",
      desc: "Prospectos que han respondido de forma positiva a la propuesta inicial."
    },
    {
      icon: ShieldCheck,
      title: "Respaldo de interacción",
      desc: "Evidencia de la conversación para que tu equipo comercial continúe la venta."
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#110402] mb-6 font-headline tracking-tight">
            No comprás una herramienta. <br/><span className="text-[#75AADB]">Recibís oportunidades comerciales.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            LeadMaster gestiona todo el proceso operativo de prospección saliente para que vos solo te ocupes de cerrar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="glass-card p-6 sm:p-8 flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-white shadow-inner flex items-center justify-center text-[#75AADB]">
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-[#110402] leading-tight">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}