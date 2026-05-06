import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LeadMaster - Servicio Gestionado de Prospección B2B',
  description: 'LeadMaster identifica empresas objetivo, inicia conversaciones por WhatsApp y Email, detecta interés real y entrega oportunidades comerciales con respaldo.',
  icons: {
    icon: '/leadmaster/favico.webp?v=1.2.5',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-white text-[#110402]">{children}</body>
    </html>
  );
}