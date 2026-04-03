import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";

export default function ResponsibleGaming() {
  return (
    <div className="container mx-auto px-4 py-10">
      <SEOHead
        title="Juego Responsable - CasinoSinDNI 2026"
        description="Guia de juego responsable de CasinoSinDNI. Recursos y consejos para mantener una relacion saludable con el juego online."
        canonical="/juego-responsable/"
      />
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Juego Responsable" }]} />
        
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Juego Responsable</h1>

        <div className="space-y-6 text-foreground leading-relaxed">
          <p>
            En CasinoSinDNI creemos firmemente que el juego online debe ser una forma de entretenimiento, nunca una fuente de estrés financiero o emocional. 
            Esta página ofrece recursos e información para mantener una relación saludable con el juego en 2026.
          </p>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">Señales de juego problemático</h2>
            <p className="mb-3">El juego puede convertirse en un problema cuando afecta tu vida cotidiana. Algunas señales de alerta incluyen:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent">⚠</span> Gastar más tiempo o dinero del planeado en el juego</li>
              <li className="flex items-start gap-2"><span className="text-accent">⚠</span> Intentar recuperar pérdidas aumentando las apuestas</li>
              <li className="flex items-start gap-2"><span className="text-accent">⚠</span> Pedir prestado dinero para jugar</li>
              <li className="flex items-start gap-2"><span className="text-accent">⚠</span> Descuidar responsabilidades laborales o familiares</li>
              <li className="flex items-start gap-2"><span className="text-accent">⚠</span> Sentir ansiedad o irritabilidad cuando no puedes jugar</li>
              <li className="flex items-start gap-2"><span className="text-accent">⚠</span> Ocultar la actividad de juego a familiares o amigos</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">Consejos para un juego saludable</h2>
            <ol className="space-y-3">
              <li><strong>Establece un presupuesto:</strong> Decide cuánto puedes permitirte gastar antes de empezar a jugar y no superes ese límite bajo ninguna circunstancia.</li>
              <li><strong>Fija límites de tiempo:</strong> Define un tiempo máximo de juego por sesión. Utiliza las herramientas de autoexclusión que ofrecen los casinos.</li>
              <li><strong>No juegues bajo la influencia:</strong> El alcohol y otras sustancias afectan tu capacidad de tomar decisiones informadas.</li>
              <li><strong>No persigas pérdidas:</strong> Si pierdes, acepta la pérdida como parte del entretenimiento. Aumentar apuestas para recuperar es la forma más rápida de perder el control.</li>
              <li><strong>Toma descansos regulares:</strong> Levántate, muévete y desconecta con frecuencia durante las sesiones de juego.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">Herramientas de control</h2>
            <p>La mayoría de los casinos listados en nuestra web ofrecen herramientas de juego responsable que puedes activar en tu perfil, como límites de depósito diarios, semanales y mensuales, periodos de enfriamiento temporal y autoexclusión permanente.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">Organizaciones de ayuda</h2>
            <p className="mb-3">Si sientes que el juego se ha convertido en un problema, no dudes en buscar ayuda profesional. Estas organizaciones ofrecen soporte confidencial y gratuito:</p>
            <ul className="space-y-2">
              <li><strong>Jugadores Anónimos:</strong> Grupos de apoyo presenciales y online</li>
              <li><strong>FEJAR (Federación Española de Jugadores de Azar Rehabilitados)</strong></li>
              <li><strong>GamCare:</strong> Asesoramiento y apoyo internacional</li>
              <li><strong>Línea de atención 24h:</strong> Consulta el servicio de atención de tu comunidad autónoma</li>
            </ul>
          </section>

          <div className="card-casino p-5 mt-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-accent">Recuerda:</strong> El juego online es solo para mayores de 18 años. Juega siempre de forma responsable y dentro de tus posibilidades económicas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
