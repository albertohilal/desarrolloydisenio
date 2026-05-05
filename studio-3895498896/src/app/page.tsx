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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar Simple */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container-custom h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#75AADB] flex items-center justify-center text-white font-black text-xl">L</div>
            <span className="text-xl font-black text-[#110402] tracking-tight">LeadMaster</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-bold text-xs text-gray-500 uppercase tracking-widest">
            <a href="#how" className="hover:text-[#75AADB] transition-colors">Cómo funciona</a>
            <a href="#value" className="hover:text-[#75AADB] transition-colors">Qué recibís</a>
            <a href="#pricing" className="hover:text-[#75AADB] transition-colors">Modelo</a>
            <a href="#dashboard" className="hover:text-[#75AADB] transition-colors">Dashboard</a>
          </div>

          <Button className="hidden md:inline-flex btn-cta px-6">
            Activar servicio
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
    </main>
  );
}