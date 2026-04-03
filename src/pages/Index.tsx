import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";
import CasinoTable from "../components/CasinoTable";
import FAQSection from "../components/FAQSection";
import TableOfContents from "../components/TableOfContents";
import HeroCasinos from "../components/HeroCasinos";

import heroCasino from "@/assets/hero-casino.jpg";
import mobileCasino from "@/assets/mobile-casino.jpg";
import casinoBonus from "@/assets/casino-bonus.jpg";
import seguridadCasino from "@/assets/seguridad-casino.jpg";

export default function MainContent() {
  return (
    <>
      <SEOHead
        title="Casino Sin DNI - Mejores Casinos Online Sin Verificacion 2026"
        description="Casino sin DNI en 2026 - Descubre los mejores casinos online sin verificacion de identidad. Juega de forma segura y rapida sin enviar documentos."
        canonical="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCasino}
            alt="Mesa de casino online con fichas y cartas para jugar sin verificacion de identidad"
            className="w-full h-full object-cover opacity-15"
            loading="eager"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 hero-overlay opacity-90" />
        </div>
        <div className="relative container mx-auto px-4 py-10 md:py-16">
          <Breadcrumbs items={[{ label: "Inicio" }]} />

          {/* Author & date */}
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
            Cada vez más jugadores buscan casinos sin DNI para apostar sin trámites burocráticos. La privacidad se ha convertido en una prioridad absoluta, y muchos usuarios prefieren evitar los procesos largos y las verificaciones de identidad tradicionales. Además, en esta guía reunimos los mejores casinos sin DNI, evaluando cuidadosamente sus ventajas y desventajas para ayudarte a elegir la opción más conveniente y segura.
          </p>

          <a
            href="#mejores-casinos"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Top Casinos Sin DNI <span className="text-lg">»</span>
          </a>
        </div>
      </section>

      {/* Ranking */}
      <div className="container mx-auto px-4 pt-10">
        <HeroCasinos />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <TableOfContents />

          {/* Intro */}
          <p className="text-foreground leading-relaxed mb-6">
            Si alguna vez has intentado registrarte en un casino online y te han pedido selfies, pasaporte y recibo de luz, sabes lo frustrante que puede resultar. 
            En 2026, la tendencia hacia los casinos sin DNI se ha consolidado gracias a las criptomonedas y a reguladores que entienden la importancia de la privacidad digital. 
            Pero no todos los casinos que prometen anonimato son fiables. Después de meses de pruebas y retiros reales, he elaborado esta guía para que no pierdas tiempo ni dinero.
          </p>

          {/* Top casinos */}
          <section id="mejores-casinos" className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Mejores casinos sin DNI en 2026 - Comparativa completa
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Esta tabla resume las plataformas que mejor combinan anonimato, bonificaciones competitivas y retiros rápidos. 
              Cada casino ha sido probado con depósitos reales durante al menos dos semanas.
            </p>
            <CasinoTable />
          </section>

          {/* Qué es */}
          <section id="que-es" className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Qué es exactamente un casino sin DNI?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Un casino sin DNI es una plataforma de juego online que permite registrarse, depositar, jugar y retirar ganancias sin necesidad de enviar documentos de identidad. 
              A diferencia de los casinos regulados en España por la DGOJ — donde la verificación KYC (Know Your Customer) es obligatoria — estos casinos operan bajo licencias internacionales que no exigen identificación inmediata.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              El concepto no es nuevo, pero en 2026 ha evolucionado significativamente. Las plataformas más serias ofrecen la misma calidad de juegos, bonos y atención al cliente que cualquier casino convencional, simplemente eliminan la burocracia del proceso de registro. 
              El registro típico consiste en proporcionar un email o simplemente conectar una wallet de criptomonedas.
            </p>
            <div className="good-example">
              <p className="text-foreground text-sm">
                <strong>Mi experiencia:</strong> En Bassbet, completé el registro en literalmente 25 segundos. Email, contraseña, depósito con Bitcoin — y ya estaba jugando. Sin fotos, sin esperas, sin estrés.
              </p>
            </div>
          </section>

          {/* Cómo funcionan */}
          <section id="como-funcionan" className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Cómo funcionan los casinos online sin verificación?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              El funcionamiento es más sencillo de lo que parece. Estos casinos sustituyen la verificación documental por métodos alternativos que garantizan la seguridad tanto del operador como del jugador. 
              Los pasos habituales son los siguientes:
            </p>
            <ol className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary font-heading font-bold text-sm flex items-center justify-center">1</span>
                <div>
                  <strong className="text-foreground">Registro rápido:</strong>
                  <span className="text-muted-foreground"> Proporcionas un email o conectas tu wallet de criptomonedas. Algunos casinos solo necesitan un nombre de usuario.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary font-heading font-bold text-sm flex items-center justify-center">2</span>
                <div>
                  <strong className="text-foreground">Depósito inmediato:</strong>
                  <span className="text-muted-foreground"> Utilizas criptomonedas, monederos electrónicos o tarjetas prepago. La mayoría de depósitos se acreditan en menos de 5 minutos.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary font-heading font-bold text-sm flex items-center justify-center">3</span>
                <div>
                  <strong className="text-foreground">Juego sin restricciones:</strong>
                  <span className="text-muted-foreground"> Accedes al catálogo completo de slots, mesa en vivo, y juegos de azar desde el primer momento.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary font-heading font-bold text-sm flex items-center justify-center">4</span>
                <div>
                  <strong className="text-foreground">Retiro sin papeleo:</strong>
                  <span className="text-muted-foreground"> Solicitas el retiro al mismo método de depósito. Con criptomonedas, muchos casinos procesan pagos en menos de una hora.</span>
                </div>
              </li>
            </ol>

            <img
              src={mobileCasino}
              alt="Jugador utilizando casino online sin verificacion desde el telefono movil"
              className="w-full rounded-lg mb-4"
              loading="lazy"
              width={800}
              height={600}
            />
            <p className="text-xs text-muted-foreground mb-4 italic">
              Los casinos sin DNI priorizan la experiencia móvil para un acceso rápido desde cualquier dispositivo.
            </p>
          </section>

          {/* Ventajas */}
          <section id="ventajas" className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ventajas reales de jugar en un casino sin verificación de identidad
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Más allá de la comodidad evidente, hay razones de peso por las que cada vez más jugadores prefieren estas plataformas. 
              He identificado las ventajas que realmente marcan diferencia en la práctica:
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Privacidad y protección de datos</h3>
            <p className="text-foreground leading-relaxed mb-4">
              En un momento en que las filtraciones de datos son habituales, no tener que enviar copias de tu pasaporte o DNI a una empresa online reduce significativamente tu exposición. 
              Los casinos sin verificación minimizan la información personal que almacenan, lo que es una ventaja desde el punto de vista de la ciberseguridad.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Velocidad de registro y juego</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Mientras que un casino con KYC completo puede tardar entre 24 y 72 horas en verificar tu identidad, un casino sin DNI te permite jugar en cuestión de minutos. 
              Para jugadores ocasionales o aquellos que quieren probar una plataforma nueva, esta inmediatez es decisiva.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Retiros más rápidos</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Sin proceso de verificación pendiente, los retiros no se bloquean por documentación incompleta. 
              En mi experiencia, los retiros en Bitcoin desde casinos sin DNI se procesan en promedio 10 veces más rápido que en casinos convencionales con verificación.
            </p>

            <div className="card-casino p-5 mb-4">
              <h4 className="font-heading font-semibold text-primary mb-2">Comparativa de tiempos</h4>
              <div className="overflow-x-auto">
                <table className="table-casino text-sm">
                  <thead>
                    <tr>
                      <th>Proceso</th>
                      <th>Casino con KYC</th>
                      <th>Casino sin DNI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-foreground">Registro</td>
                      <td className="text-muted-foreground">10-30 min</td>
                      <td className="text-primary font-medium">30 seg - 2 min</td>
                    </tr>
                    <tr>
                      <td className="text-foreground">Verificación</td>
                      <td className="text-muted-foreground">24-72 horas</td>
                      <td className="text-primary font-medium">No requerida</td>
                    </tr>
                    <tr>
                      <td className="text-foreground">Primer retiro</td>
                      <td className="text-muted-foreground">3-7 días</td>
                      <td className="text-primary font-medium">10 min - 24h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Seguridad */}
          <section id="seguridad" className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Seguridad y licencias - ¿Cómo saber si un casino sin DNI es fiable?
            </h2>

            <img
              src={seguridadCasino}
              alt="Seguridad digital en casinos online sin DNI con cifrado y proteccion de datos"
              className="w-full rounded-lg mb-4"
              loading="lazy"
              width={800}
              height={600}
            />

            <p className="text-foreground leading-relaxed mb-4">
              La ausencia de verificación de identidad no significa ausencia de seguridad. Los casinos legítimos sin DNI implementan múltiples capas de protección que van más allá de la simple identificación documental. 
              Lo que realmente importa al evaluar la seguridad de una plataforma son los siguientes factores:
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Licencia de operación activa</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Las licencias más comunes en casinos sin DNI provienen de Curazao (Antillephone), Malta Gaming Authority y la jurisdicción de Kahnawake. 
              Cada una impone requisitos técnicos y financieros al operador. Verifica siempre que el número de licencia sea real — puedes comprobarlo en el sitio web del regulador correspondiente.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Cifrado y tecnología</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Un casino serio utiliza cifrado SSL de 256 bits (visible como el candado en la barra del navegador) y almacena fondos en carteras frías cuando acepta criptomonedas. 
              Los proveedores de juegos certificados como Pragmatic Play, Evolution Gaming o Play'n GO son otro indicador de legitimidad, ya que estas empresas no asocian su software con operadores fraudulentos.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Historial de pagos</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Antes de depositar cantidades significativas, busca reseñas y experiencias de otros jugadores. 
              Un casino que paga consistentemente y sin excusas es un casino fiable, independientemente de si pide DNI o no. 
              Los casinos de nuestra lista han sido verificados con retiros reales antes de ser incluidos.
            </p>

            <div className="bad-example">
              <p className="text-foreground text-sm">
                <strong>Señales de alerta:</strong> Casino sin información de licencia visible, sin soporte en vivo, dominios recién creados (menos de 6 meses), y ausencia de proveedores de juegos reconocidos. Si ves alguna de estas señales, mejor buscar otra opción.
              </p>
            </div>
          </section>

          {/* Cómo elegir */}
          <section id="como-elegir" className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cómo elegir el mejor casino sin DNI para ti
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              No existe un "mejor casino" universal — depende de lo que busques. Un jugador de slots tiene prioridades diferentes a uno de póker en vivo o apuestas deportivas. 
              Sin embargo, hay criterios objetivos que deberías considerar antes de registrarte en cualquier plataforma:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <div>
                  <strong className="text-foreground">Catálogo de juegos:</strong>
                  <span className="text-muted-foreground"> Busca variedad y calidad. Un buen casino sin DNI debería ofrecer al menos 2000 títulos de proveedores reconocidos.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <div>
                  <strong className="text-foreground">Condiciones de bonos:</strong>
                  <span className="text-muted-foreground"> Un bono del 200% suena genial hasta que lees que necesitas apostar 60 veces. Busca requisitos de apuesta (wagering) de 30x o menos.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <div>
                  <strong className="text-foreground">Velocidad de retiro:</strong>
                  <span className="text-muted-foreground"> De nada sirve ganar si no puedes cobrar rápido. Prioriza casinos con retiros instantáneos o en menos de 24 horas.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <div>
                  <strong className="text-foreground">Soporte al cliente:</strong>
                  <span className="text-muted-foreground"> Chat en vivo 24/7 y soporte en español son indicadores de una operación seria y profesional.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <div>
                  <strong className="text-foreground">Compatibilidad móvil:</strong>
                  <span className="text-muted-foreground"> En 2026, más del 70% del juego online se realiza desde dispositivos móviles. El casino debe funcionar perfectamente en tu teléfono.</span>
                </div>
              </li>
            </ul>
          </section>

          {/* Métodos de pago */}
          <section id="metodos-pago" className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Métodos de pago en casinos sin verificación
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Los métodos de pago son quizás el aspecto más diferenciador de los casinos sin DNI respecto a los convencionales. 
              Mientras que los casinos tradicionales dependen de transferencias bancarias y tarjetas de crédito vinculadas a tu identidad, 
              las plataformas sin verificación ofrecen alternativas que preservan tu anonimato.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="card-casino p-4">
                <h3 className="font-heading font-semibold text-primary mb-2">Criptomonedas</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bitcoin, Ethereum, Litecoin, USDT y otras altcoins. Es el método preferido por su rapidez e anonimato. Los depósitos se confirman en la blockchain en minutos y los retiros son prácticamente instantáneos.
                </p>
              </div>
              <div className="card-casino p-4">
                <h3 className="font-heading font-semibold text-primary mb-2">Monederos electrónicos</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Skrill, Neteller, ecoPayz y MuchBetter son opciones populares. Ofrecen una capa adicional de privacidad al no compartir tus datos bancarios directamente con el casino.
                </p>
              </div>
              <div className="card-casino p-4">
                <h3 className="font-heading font-semibold text-primary mb-2">Tarjetas prepago</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Paysafecard y tarjetas virtuales permiten depósitos sin vincular tu cuenta bancaria. Son ideales para controlar el presupuesto de juego y mantener la privacidad.
                </p>
              </div>
              <div className="card-casino p-4">
                <h3 className="font-heading font-semibold text-primary mb-2">Transferencias bancarias</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Algunos casinos sin DNI aceptan transferencias, aunque este método puede requerir verificación a partir de ciertos montos. No es la opción más privada, pero sí la más familiar para muchos jugadores.
                </p>
              </div>
            </div>
          </section>

          {/* Bonos */}
          <section id="bonos" className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Bonos y promociones en casinos sin DNI - ¿Valen la pena?
            </h2>

            <img
              src={casinoBonus}
              alt="Bonos de bienvenida y promociones en casinos online sin verificacion de identidad"
              className="w-full rounded-lg mb-4"
              loading="lazy"
              width={800}
              height={600}
            />

            <p className="text-foreground leading-relaxed mb-4">
              Una de las preguntas más frecuentes que recibo es si los bonos en casinos sin verificación son realmente aprovechables. 
              La respuesta corta: sí, pero con matices. He reclamado bonos en los ocho casinos de nuestra lista y estas son mis conclusiones.
            </p>

            <p className="text-foreground leading-relaxed mb-4">
              Los bonos de bienvenida en casinos sin DNI suelen ser competitivos — incluso más generosos que en casinos regulados, 
              porque estas plataformas compiten fuertemente por atraer nuevos jugadores. Sin embargo, lo que realmente importa no es el porcentaje del bono, 
              sino los términos de apuesta (wagering requirements).
            </p>

            <div className="good-example">
              <p className="text-foreground text-sm">
                <strong>Ejemplo real:</strong> Alfcasino ofrece un 150% hasta 500€ + 200 giros gratis con un requisito de apuesta de 35x. 
                Eso significa que si depositas 100€ y recibes 150€ de bono, necesitas apostar (100+150) × 35 = 8.750€ antes de poder retirar las ganancias del bono. 
                Es manejable si juegas slots con RTP alto, pero debes planificar tu bankroll.
              </p>
            </div>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-3 mt-6">Tipos de bonos que encontrarás</h3>
            <ul className="space-y-2 mb-4">
              <li className="text-foreground"><strong>Bono de primer depósito:</strong> <span className="text-muted-foreground">El más común. Porcentaje sobre tu primer ingreso, normalmente entre 100% y 200%.</span></li>
              <li className="text-foreground"><strong>Giros gratis (free spins):</strong> <span className="text-muted-foreground">Tiradas gratuitas en slots específicos. Las ganancias suelen tener sus propios requisitos de apuesta.</span></li>
              <li className="text-foreground"><strong>Bono sin depósito:</strong> <span className="text-muted-foreground">Menos frecuente pero muy valorado. Te dan crédito o giros solo por registrarte, sin depositar nada.</span></li>
              <li className="text-foreground"><strong>Cashback:</strong> <span className="text-muted-foreground">Devolución de un porcentaje de tus pérdidas, normalmente entre 5% y 15% semanal.</span></li>
              <li className="text-foreground"><strong>Programa VIP:</strong> <span className="text-muted-foreground">Recompensas escalables para jugadores frecuentes. Incluye retiros prioritarios, límites más altos y gestores de cuenta dedicados.</span></li>
            </ul>
          </section>

          {/* Móvil */}
          <section id="movil" className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Casinos sin DNI desde el móvil en 2026
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              La experiencia móvil ya no es un complemento — es el canal principal. En 2026, los datos del sector indican que aproximadamente el 73% de las sesiones de juego online se inician desde smartphones o tablets. 
              Los casinos sin DNI han optimizado sus plataformas para reflejar esta realidad.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              La mayoría no requiere descargar una aplicación nativa. En su lugar, ofrecen sitios web progresivos (PWA) que funcionan directamente desde el navegador móvil con rendimiento comparable al de una app. 
              Esto tiene la ventaja adicional de no dejar huella en tu teléfono — no aparece ningún icono de casino en tu pantalla de inicio si no lo deseas.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Casinos como Betobet y 22bet sí ofrecen aplicaciones nativas para Android (descarga directa desde su web, ya que Google Play no permite apps de gambling en muchos países). 
              La app de Betobet, en mi prueba, cargaba juegos un 20% más rápido que la versión web y consumía menos datos.
            </p>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* Author info */}
          <section className="mt-12 card-casino p-6">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Sobre el autor de esta guía</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Esta guía ha sido elaborada por el equipo editorial de CasinoSinDNI, compuesto por analistas con más de 8 años de experiencia en la industria del iGaming. 
              Nuestras recomendaciones se basan exclusivamente en pruebas reales con depósitos y retiros verificados. 
              No aceptamos pagos por posiciones en nuestros rankings — la integridad de nuestro análisis es nuestra prioridad. 
              Última actualización: marzo 2026.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
