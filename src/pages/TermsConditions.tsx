import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";

export default function TermsConditions() {
  return (
    <div className="container mx-auto px-4 py-10">
      <SEOHead
        title="Terminos y Condiciones - CasinoSinDNI 2026"
        description="Terminos y condiciones de uso del sitio web CasinoSinDNI. Lee nuestras condiciones legales antes de utilizar nuestros servicios."
        canonical="/terminos-y-condiciones/"
      />
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Términos y Condiciones" }]} />
        
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Términos y Condiciones</h1>
        <p className="text-muted-foreground text-sm mb-8">Última actualización: marzo 2026</p>

        <div className="space-y-6 text-foreground leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">1. Aceptación de los términos</h2>
            <p>Al acceder y utilizar el sitio web CasinoSinDNI (en adelante, "el Sitio"), aceptas cumplir con estos términos y condiciones de uso. Si no estás de acuerdo con alguno de estos términos, te recomendamos no utilizar el Sitio.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">2. Naturaleza del servicio</h2>
            <p>CasinoSinDNI es un portal informativo independiente dedicado al análisis y comparación de casinos online. No operamos como casino ni facilitamos apuestas directamente. Nuestro contenido tiene carácter informativo y educativo, y no constituye asesoramiento financiero ni legal.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">3. Edad mínima</h2>
            <p>El contenido de este sitio está dirigido exclusivamente a personas mayores de 18 años (o la edad mínima legal para el juego en tu jurisdicción). Al acceder al Sitio, declaras que cumples con este requisito de edad.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">4. Propiedad intelectual</h2>
            <p>Todo el contenido del Sitio — incluyendo textos, imágenes, diseño, logotipos y código fuente — está protegido por derechos de autor y es propiedad de CasinoSinDNI o de sus respectivos titulares. Queda prohibida su reproducción total o parcial sin autorización previa por escrito.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">5. Exactitud de la información</h2>
            <p>Nos esforzamos por mantener la información actualizada y precisa. Sin embargo, los términos y condiciones de los casinos listados pueden cambiar sin previo aviso. Recomendamos verificar siempre las condiciones directamente en la web del casino antes de registrarte o depositar fondos.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">6. Limitación de responsabilidad</h2>
            <p>CasinoSinDNI no se hace responsable de las pérdidas derivadas del uso de casinos online, decisiones de inversión o apuestas basadas en la información publicada en este sitio. El juego implica riesgo de pérdida económica y cada usuario es responsable de sus decisiones.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">7. Jurisdicción</h2>
            <p>Es responsabilidad del usuario verificar que el uso de casinos online sin verificación de identidad es legal en su jurisdicción. CasinoSinDNI no promueve el juego en jurisdicciones donde sea ilegal.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">8. Modificaciones</h2>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor desde su publicación en el Sitio. El uso continuado del Sitio tras la publicación de modificaciones implica la aceptación de los nuevos términos.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">9. Contacto</h2>
            <p>Para cualquier consulta relacionada con estos términos, puedes contactarnos a través de nuestra página de contacto.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
