import { LeadMasterHero } from "@/components/LeadMasterHero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ValueProposition } from "@/components/ValueProposition";
import { LeadDefinition } from "@/components/LeadDefinition";
import { ProcessSteps } from "@/components/ProcessSteps";
import { EconomicModel } from "@/components/EconomicModel";
import { DashboardSection } from "@/components/DashboardSection";
import { ActivationFlow } from "@/components/ActivationFlow";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

const CTA_URL = "https://desarrolloydisenioweb.com.ar/demo-login";
const WHATSAPP_URL = "https://wa.me/5491128809748";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar Simple */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container-custom h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/leadmaster/logo-pajaro.webp" alt="LeadMaster" width={30} height={30} className="h-[1em] w-auto object-contain" />
            <span className="text-xl font-black text-[#110402] tracking-tight">LeadMaster</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-bold text-xs text-gray-500 uppercase tracking-widest">
            <a href="#how" className="hover:text-[#75AADB] transition-colors">Cómo funciona</a>
            <a href="#value" className="hover:text-[#75AADB] transition-colors">Qué recibís</a>
            <a href="#pricing" className="hover:text-[#75AADB] transition-colors">Modelo</a>
            <a href="#dashboard" className="hover:text-[#75AADB] transition-colors">Dashboard</a>
          </div>

          <Button asChild className="hidden lg:inline-flex btn-cta px-6">
            <a href={CTA_URL}>Activar servicio</a>
          </Button>
        </div>
      </nav>

      <LeadMasterHero />
      
      <div id="how">
        <ProblemSolution />
      </div>

      <div id="value">
        <ValueProposition />
      </div>

      <LeadDefinition />

      <ProcessSteps />

      <div id="pricing">
        <EconomicModel />
      </div>

      <div id="dashboard">
        <DashboardSection />
      </div>

      <ActivationFlow />

      <Footer />

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enviar mensaje por WhatsApp"
        className="fixed right-4 bottom-6 z-[60] inline-flex items-center justify-center rounded-full bg-secondary text-secondary-foreground w-12 h-12 shadow-xl hover:bg-secondary/90 transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
      </a>
    </main>
  );
}