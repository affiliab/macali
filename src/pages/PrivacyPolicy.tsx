import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-10">
      <SEOHead
        title="Politica de Privacidad - CasinoSinDNI 2026"
        description="Politica de privacidad de CasinoSinDNI. Informacion sobre el tratamiento de datos personales y cookies en nuestro portal."
        canonical="/politica-de-privacidad/"
      />
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Política de Privacidad" }]} />
        
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Política de Privacidad</h1>
        <p className="text-muted-foreground text-sm mb-8">Última actualización: marzo 2026</p>

        <div className="space-y-6 text-foreground leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">1. Información que recopilamos</h2>
            <p>En CasinoSinDNI recopilamos únicamente la información necesaria para el funcionamiento del sitio web. Esto puede incluir datos de navegación anónimos, como la dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia. No solicitamos ni almacenamos datos personales identificativos como nombre, DNI o dirección postal.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">2. Uso de cookies</h2>
            <p>Nuestro sitio utiliza cookies técnicas necesarias para el correcto funcionamiento de la web y cookies analíticas para comprender cómo los usuarios interactúan con nuestro contenido. No utilizamos cookies de publicidad personalizada ni compartimos datos con redes publicitarias de terceros.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">3. Finalidad del tratamiento</h2>
            <p>Los datos recopilados se utilizan exclusivamente para mejorar la experiencia del usuario, analizar el rendimiento del sitio web y garantizar la seguridad de la plataforma. No vendemos, alquilamos ni compartimos información personal con terceros con fines comerciales.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">4. Base legal</h2>
            <p>El tratamiento de datos se realiza bajo el consentimiento del usuario al navegar por nuestro sitio y aceptar nuestra política de cookies, así como por el interés legítimo de ofrecer un servicio web funcional y seguro, conforme al Reglamento General de Protección de Datos (RGPD) de la Unión Europea.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">5. Retención de datos</h2>
            <p>Los datos analíticos se conservan durante un periodo máximo de 26 meses. Las cookies técnicas se eliminan al cerrar el navegador o tras un periodo de inactividad definido por cada tipo de cookie.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">6. Derechos del usuario</h2>
            <p>Todo usuario tiene derecho a acceder, rectificar, suprimir y limitar el tratamiento de sus datos personales. Para ejercer estos derechos, puede contactarnos a través de nuestra página de contacto. Nos comprometemos a responder en un plazo máximo de 30 días hábiles.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">7. Seguridad</h2>
            <p>Implementamos medidas técnicas y organizativas apropiadas para proteger los datos contra acceso no autorizado, pérdida o destrucción. Nuestro sitio utiliza conexión cifrada HTTPS en todas las páginas.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">8. Cambios en esta política</h2>
            <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier cambio significativo será comunicado a través de un aviso visible en nuestro sitio web. La fecha de última actualización siempre estará indicada al inicio del documento.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
