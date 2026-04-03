import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const DOMAIN = "https://www.casinosindni.eu.com";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-nosotros/", label: "Sobre Nosotros" },
  { to: "/juego-responsable/", label: "Juego Responsable" },
  { to: "/contacto/", label: "Contacto" },
];

const footerLinks = [
  { to: "/politica-de-privacidad/", label: "Política de Privacidad" },
  { to: "/terminos-y-condiciones/", label: "Términos y Condiciones" },
  { to: "/juego-responsable/", label: "Juego Responsable" },
  { to: "/sobre-nosotros/", label: "Sobre Nosotros" },
  { to: "/contacto/", label: "Contacto" },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CasinoSinDNI",
  "url": DOMAIN,
  "logo": `${DOMAIN}/favicon.png`,
  "description": "Portal experto en casinos online sin verificación de identidad en 2026.",
  "foundingDate": "2026",
  "sameAs": []
};

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl">
            <img src="/favicon.png" alt="CasinoSinDNI logotipo" width={32} height={32} className="rounded" />
            <span className="casino-gradient-text">Casino</span>
            <span className="text-foreground">SinDNI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menú de navegación"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="flex items-center gap-2 font-heading font-bold text-lg mb-3">
                <img src="/favicon.png" alt="CasinoSinDNI logotipo" width={28} height={28} className="rounded" />
                <span className="casino-gradient-text">Casino</span>
                <span className="text-foreground">SinDNI</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tu guía experta sobre casinos online sin verificación de identidad. Análisis independiente y recomendaciones basadas en experiencia real.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-3">Navegación</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-3">Información</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                El juego puede ser adictivo. Juega con responsabilidad. Solo para mayores de 18 años.
              </p>
              <p className="text-sm text-muted-foreground">18+</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 CasinoSinDNI. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Autor: Equipo editorial de CasinoSinDNI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
