import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";
import CasinoTable from "../components/CasinoTable";
import FAQSection from "../components/FAQSection";
import TableOfContents from "../components/TableOfContents";
import HeroCasinos from "../components/HeroCasinos";

import heroCasino from "@/assets/hero-casino.jpg";

export default function EsEsPage() {
  return (
    <>
      <SEOHead
        title="Casino Sin DNI - Mejores Casinos Online Sin Verificacion 2026"
        description="Casino sin DNI en 2026 - Descubre los mejores casinos online sin verificacion de identidad. Juega de forma segura y rapida sin enviar documentos."
        canonical="/"
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCasino} alt="Mesa de casino online con fichas y cartas para jugar sin verificacion de identidad" className="w-full h-full object-cover opacity-15" loading="eager" width={1920} height={800} />
          <div className="absolute inset-0 hero-overlay opacity-90" />
        </div>
        <div className="relative container mx-auto px-4 py-10 md:py-16">
          <Breadcrumbs items={[{ label: "Inicio" }]} />
          <div className="flex items-center gap-4 mb-5 mt-4">
            <span className="text-primary font-semibold text-sm">Eduardo Martínez López</span>
            <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <span>📅</span> Last updated: 12.03.2026
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight mb-5 max-w-3xl">
            <span className="text-primary">Casinos Sin DNI 2026 en España:</span>{" "}
            Juego Online Sin Registro
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            Cada vez más jugadores buscan casinos sin DNI para apostar sin trámites burocráticos. La privacidad se ha convertido en una prioridad absoluta, y muchos usuarios prefieren evitar los procesos largos y las verificaciones de identidad tradicionales.
          </p>
          <a href="#mejores-casinos" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-lg transition-colors">
            Top Casinos Sin DNI <span className="text-lg">»</span>
          </a>
        </div>
      </section>
      <div className="container mx-auto px-4 pt-10">
        <HeroCasinos />
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <TableOfContents />
          <p className="text-foreground leading-relaxed mb-6">Si alguna vez has intentado registrarte en un casino online y te han pedido selfies, pasaporte y recibo de luz, sabes lo frustrante que puede resultar. En 2026, la tendencia hacia los casinos sin DNI se ha consolidado gracias a las criptomonedas y a reguladores que entienden la importancia de la privacidad digital.</p>
          <section id="mejores-casinos" className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Mejores casinos sin DNI en 2026 - Comparativa completa</h2>
            <CasinoTable />
          </section>
          <FAQSection />
        </div>
      </div>
    </>
  );
}
