import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coins, ShieldCheck, Zap } from "lucide-react";

export function EconomicModel() {
  return (
    <section className="py-24 bg-[#110402] relative overflow-hidden text-white">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#75AADB]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D65100]/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 sm:space-y-10 min-w-0">
            <Badge className="bg-[#FE6800] text-white px-5 py-2 border-none rounded-full text-xs font-black uppercase tracking-widest">
              Modelo Económico
            </Badge>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black font-headline leading-[1.1] tracking-tight break-words">
              Pagás por <span className="text-[#FE6800]">leads entregados</span>, no por actividad operativa
            </h2>
            <p className="text-base sm:text-xl text-gray-400 leading-relaxed max-w-xl break-words">
              El saldo prepago se consume únicamente cuando LeadMaster entrega un lead válido. Las búsquedas, filtros, contactos iniciados y conversaciones previas forman parte de la operación interna.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 sm:gap-6 min-w-0">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#75AADB] shrink-0">
                  <Coins className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xl font-black mb-1 tracking-tight">Saldo Prepago</h4>
                  <p className="text-gray-400 leading-snug break-words">Cargás crédito y visualizás en tiempo real cómo se convierte en oportunidades validadas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-6 min-w-0">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#4B8A44] shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xl font-black mb-1 tracking-tight">Riesgo Cero</h4>
                  <p className="text-gray-400 leading-snug break-words">Si un prospecto no responde o no muestra interés, el costo operativo lo absorbe LeadMaster.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-6 min-w-0">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FE6800] shrink-0">
                  <Zap className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xl font-black mb-1 tracking-tight">Sin cuota mensual de software</h4>
                  <p className="text-gray-400 leading-snug break-words">No hay costos de mantenimiento ni licencias. Solo pagás por lo que recibís.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-5 sm:p-12 space-y-8 sm:space-y-10 shadow-2xl bg-white border-none min-w-0">
            <div className="text-center space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black text-[#110402] tracking-tight break-words">Inversión orientada a resultado</h3>
              <p className="text-gray-500 font-medium break-words">Transparencia absoluta en cada débito de saldo</p>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 sm:p-8 rounded-[32px] bg-[#F8FAFC] flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-start sm:items-center border border-gray-100">
                <span className="block font-bold text-gray-700 text-base sm:text-lg break-words">Precio por Lead Entregado</span>
                <div className="text-left sm:text-right min-w-0">
                  <span className="text-3xl font-black text-[#110402]">$X.XX</span>
                  <p className="text-[10px] text-[#4B8A44] font-black uppercase mt-1">Solo Leads Válidos</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-[32px] border border-gray-100 flex flex-col items-center text-center space-y-2 bg-gray-50/50">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Búsquedas</p>
                  <p className="text-xl font-black text-[#110402]">Sin Costo</p>
                </div>
                <div className="p-6 rounded-[32px] border border-gray-100 flex flex-col items-center text-center space-y-2 bg-gray-50/50">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Contactos</p>
                  <p className="text-xl font-black text-[#110402]">Sin Costo</p>
                </div>
              </div>
            </div>

            <Button className="btn-cta w-full h-16 text-xl shadow-xl shadow-[#FE6800]/20">
              Configurar requerimientos iniciales
            </Button>
            
            <p className="text-center text-[10px] text-gray-400 font-medium uppercase tracking-tighter">
              * El precio por lead se ajusta según la complejidad de los requerimientos y el perfil buscado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}