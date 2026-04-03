import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-10">
      <SEOHead
        title="Sobre Nosotros - CasinoSinDNI 2026"
        description="Conoce al equipo detras de CasinoSinDNI. Expertos en casinos online sin verificacion con analisis independiente desde 2026."
        canonical="/sobre-nosotros/"
      />
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Sobre Nosotros" }]} />
        
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Sobre Nosotros</h1>

        <div className="space-y-6 text-foreground leading-relaxed">
          <p>
            CasinoSinDNI nació en 2026 con un objetivo claro: proporcionar información fiable, honesta y actualizada sobre casinos online que permiten jugar sin verificación de identidad. 
            Nos dimos cuenta de que existía una enorme demanda de este tipo de plataformas, pero la información disponible era fragmentada, desactualizada o directamente sesgada por intereses comerciales.
          </p>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">Nuestra misión</h2>
            <p>
              Ayudar a los jugadores hispanohablantes a tomar decisiones informadas sobre dónde jugar online, priorizando su seguridad, privacidad y experiencia de juego. 
              Creemos que cada jugador tiene derecho a información transparente y a recomendaciones basadas en pruebas reales, no en acuerdos comerciales.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">Nuestro método</h2>
            <p className="mb-3">Cada casino que aparece en nuestro sitio ha pasado por un proceso de evaluación riguroso que incluye:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> Registro real con depósito de fondos propios</li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> Prueba de al menos 10 juegos diferentes (slots, mesa, en vivo)</li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> Solicitud de retiro real y medición de tiempos de pago</li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> Evaluación del soporte al cliente (chat, email)</li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> Verificación de licencia con el regulador correspondiente</li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> Revisión de términos de bonificación y equidad de condiciones</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">Nuestro equipo</h2>
            <p>
              El equipo editorial de CasinoSinDNI está compuesto por profesionales con experiencia combinada de más de 20 años en la industria del iGaming. 
              Nuestros analistas han trabajado tanto en el lado del operador como en el del jugador, lo que nos permite ofrecer una perspectiva completa y equilibrada. 
              Nos comprometemos con la independencia editorial — nuestras valoraciones y rankings nunca están a la venta.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">Transparencia</h2>
            <p>
              Somos transparentes sobre nuestro modelo de negocio. CasinoSinDNI se financia a través de acuerdos de afiliación con algunos de los casinos que listamos. 
              Esto significa que podemos recibir una comisión si te registras a través de nuestro sitio. Sin embargo, esto nunca influye en nuestras valoraciones — 
              hemos rechazado múltiples propuestas de casinos que no cumplían nuestros estándares de calidad, independientemente de la comisión ofrecida.
            </p>
          </section>

          <div className="card-casino p-5 mt-4">
            <p className="text-sm text-muted-foreground">
              ¿Tienes preguntas sobre nuestro método de evaluación o quieres sugerir un casino para revisión? Visita nuestra página de contacto. Leemos y respondemos todos los mensajes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
