"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Send, Info } from "lucide-react";

const CTA_URL = "https://desarrolloydisenioweb.com.ar/demo-login";

export function ActivationFlow() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="activate" className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#110402] font-headline tracking-tight mb-4">
              Definí qué tipo de lead necesitás recibir
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Completá los requerimientos iniciales para que LeadMaster pueda evaluar rubros, zonas, criterios, exclusiones y condiciones de entrega.
            </p>
          </div>

          <div className="relative">
            {!submitted ? (
              <Card className="glass-card shadow-2xl border-none overflow-hidden">
                <CardHeader className="bg-[#F8FAFC] pb-6 sm:pb-8 pt-8 sm:pt-10 px-6 sm:px-10">
                  <div className="flex items-center gap-2 text-[#75AADB] mb-4">
                    <Info className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-[0.2em]">Configuración de Encargo</span>
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-black text-[#110402]">Requerimientos del Prospecto</CardTitle>
                  <CardDescription className="text-base sm:text-lg font-medium text-gray-500">
                    Describí el perfil de tu cliente ideal: industria, cargos, tamaño de empresa, zona geográfica o cualquier exclusión.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-10 space-y-6 sm:space-y-8">
                  <div className="space-y-4">
                    <Label htmlFor="criteria" className="text-lg font-black text-[#110402]">Perfil buscado</Label>
                    <Textarea
                      id="criteria"
                      placeholder="Ejemplo: Busco Gerentes de Logística en empresas de transporte de Argentina y Uruguay con más de 50 empleados. No me interesan startups tecnológicas."
                      className="min-h-[200px] text-base sm:text-lg rounded-[24px] border-gray-100 bg-gray-50/50 focus:ring-[#75AADB] p-4 sm:p-6"
                    />
                  </div>
                  <Button 
                    asChild
                    className="btn-cta w-full h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-[#FE6800]/20 flex gap-3 sm:gap-4"
                  >
                    <a href={CTA_URL}>
                      Confirmar requerimientos
                      <Send className="w-6 h-6" />
                    </a>
                  </Button>
                  <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest pt-4">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#4B8A44]" /> Validación Humana</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#4B8A44]" /> Privacidad B2B</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#4B8A44]" /> Sin cuota de software</div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="glass-card p-8 sm:p-16 text-center space-y-6 sm:space-y-8 animate-in zoom-in duration-500">
                <div className="w-24 h-24 rounded-full bg-[#4B8A44]/10 flex items-center justify-center text-[#4B8A44] mx-auto mb-4">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#110402]">¡Requerimientos enviados!</h3>
                <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto">
                  Nuestro equipo comercial revisará tu encargo para validar la viabilidad técnica y definir el costo por lead específico para tu industria. Nos contactaremos en breve.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="rounded-full border-2 border-[#75AADB] text-[#75AADB] font-bold"
                >
                  Editar requerimientos
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}