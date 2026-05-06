"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Users, Wallet, MousePointer2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CTA_URL = "https://desarrolloydisenioweb.com.ar/demo-login";

export function LeadMasterHero() {
  const dashImg = PlaceHolderImages.find(img => img.id === "hero-dashboard");

  return (
    <section className="relative overflow-hidden pt-28 pb-24 md:pt-40 md:pb-48 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="container-custom grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <Badge className="bg-[#75AADB]/10 text-[#75AADB] px-4 py-1.5 border-none rounded-full text-sm font-bold uppercase tracking-wider">
            Servicio Gestionado B2B
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.1] text-[#110402] font-headline">
            Leads B2B interesados, validados y listos para <span className="text-[#75AADB]">continuar la conversación</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
            LeadMaster identifica empresas objetivo, inicia conversaciones por WhatsApp y Email, detecta interés real y entrega oportunidades comerciales con respaldo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-cta h-14 px-8 text-lg w-full sm:w-auto">
              <a href={CTA_URL}>Configurar requerimientos</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-[#75AADB] text-[#75AADB] hover:bg-[#75AADB] hover:text-white px-8 h-14 text-lg font-bold w-full sm:w-auto">
              <a href={CTA_URL}>Ver dashboard demo</a>
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-500 font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#4B8A44]" />
              Interés validado
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#4B8A44]" />
              Respaldo de interacción
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-200">
          <div className="relative glass-card p-4 overflow-hidden shadow-2xl">
            <Image 
              src={dashImg?.imageUrl || "https://picsum.photos/seed/leadmaster-dash/800/600"} 
              alt="LeadMaster Dashboard"
              width={800}
              height={600}
              className="rounded-[16px] w-full"
            />
            
            {/* Floating Metric Cards */}
            <div className="hidden lg:flex absolute top-12 -left-8 glass-card p-4 items-center gap-4 animate-bounce-slow">
              <div className="w-10 h-10 rounded-full bg-[#4B8A44]/10 flex items-center justify-center text-[#4B8A44]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Leads Entregados</p>
                <p className="text-xl font-black text-[#110402]">124</p>
              </div>
            </div>

            <div className="hidden lg:flex absolute bottom-12 -right-6 glass-card p-4 items-center gap-4 animate-bounce-slow-delay">
              <div className="w-10 h-10 rounded-full bg-[#FE6800]/10 flex items-center justify-center text-[#FE6800]">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Saldo Disponible</p>
                <p className="text-xl font-black text-[#110402]">$450.00</p>
              </div>
            </div>

            <div className="hidden xl:flex absolute -bottom-4 left-1/4 glass-card px-6 py-4 items-center gap-3 border-[#4B8A44]/30">
              <span className="w-3 h-3 rounded-full bg-[#4B8A44] animate-pulse"></span>
              <div>
                <p className="text-sm font-black text-[#110402]">Interés detectado</p>
                <p className="text-[10px] text-[#4B8A44] font-bold uppercase tracking-tighter">Respaldo de interacción disponible</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#75AADB]/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}