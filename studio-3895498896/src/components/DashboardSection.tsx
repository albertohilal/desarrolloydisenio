import { LayoutDashboard, PieChart, Activity, RefreshCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function DashboardSection() {
  const metrics = [
    { label: "Saldo Disponible", value: "$450.00", icon: LayoutDashboard },
    { label: "Precio por Lead", value: "$12.50", icon: PieChart },
    { label: "Búsquedas realizadas", value: "1,240", icon: Activity },
    { label: "Conversaciones", value: "856", icon: RefreshCcw }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="glass-card p-6 sm:p-8 shadow-2xl bg-white space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
                <h4 className="text-xl font-black text-[#110402]">Dashboard de Visibilidad</h4>
                <Badge variant="outline" className="border-[#75AADB] text-[#75AADB]">En tiempo real</Badge>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {metrics.map((m, i) => (
                  <div key={i} className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                    <m.icon className="w-5 h-5 text-[#75AADB] mb-3" />
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{m.label}</p>
                    <p className="text-xl sm:text-2xl font-black text-[#110402]">{m.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 rounded-2xl bg-[#4B8A44]/5 border border-[#4B8A44]/10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 mb-4">
                  <span className="text-sm font-bold text-[#110402]">Leads Entregados esta semana</span>
                  <span className="text-lg font-black text-[#4B8A44]">+12</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[65%] h-full bg-[#4B8A44]"></div>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="hidden lg:block absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-[#75AADB]/10 rounded-full blur-3xl"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <Badge className="bg-[#75AADB]/10 text-[#75AADB] px-4 py-1.5 border-none rounded-full text-sm font-bold">
              Visibilidad del Servicio
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-[#110402] font-headline tracking-tight leading-tight">
              Visibilidad clara sobre el <span className="text-[#75AADB]">servicio contratado</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              El dashboard no es una consola técnica para operar campañas. Es una superficie de seguimiento para visualizar saldo disponible, precio por lead, búsquedas realizadas, conversaciones iniciadas y leads entregados.
            </p>
            <ul className="space-y-4">
              {[
                "Seguimiento de saldo en tiempo real",
                "Registro de conversaciones iniciadas",
                "Acceso al respaldo de interacción por lead",
                "Historial de entregas validadas"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-bold">
                  <div className="w-2 h-2 rounded-full bg-[#75AADB]"></div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}