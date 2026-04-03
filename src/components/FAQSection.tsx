import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Es legal jugar en un casino sin DNI en 2026?",
    answer: "Depende de la jurisdicción. Muchos casinos con licencia de Curazao o Malta permiten el registro sin verificación de identidad inmediata. En España, los casinos regulados por la DGOJ requieren verificación completa. Los casinos sin DNI operan bajo licencias internacionales que permiten este modelo."
  },
  {
    question: "¿Puedo retirar dinero de un casino sin verificación?",
    answer: "Sí, la mayoría de casinos sin DNI permiten retiros mediante criptomonedas sin necesidad de enviar documentos. Para métodos tradicionales como transferencia bancaria, algunos casinos pueden solicitar verificación a partir de ciertos montos. Los retiros con Bitcoin y otras criptos suelen ser instantáneos y sin límites bajos."
  },
  {
    question: "¿Son seguros los casinos online sin DNI?",
    answer: "La seguridad depende del casino específico, no del requisito de DNI. Busca casinos con licencia activa, cifrado SSL, y proveedores de juegos reconocidos como Pragmatic Play, Evolution Gaming o NetEnt. Las plataformas que listamos han sido verificadas por nuestro equipo editorial en cuanto a pagos, seguridad y fiabilidad."
  },
  {
    question: "¿Qué métodos de pago aceptan los casinos sin verificación?",
    answer: "Los métodos más habituales incluyen criptomonedas (Bitcoin, Ethereum, Litecoin, USDT), monederos electrónicos como Skrill y Neteller, y en algunos casos tarjetas prepago. Los casinos sin DNI priorizan métodos que no requieren identificación bancaria directa."
  },
  {
    question: "¿Cuál es la diferencia entre un casino sin DNI y uno tradicional?",
    answer: "La principal diferencia está en el proceso de registro. Un casino sin DNI permite crear cuenta y jugar sin enviar copia de documento de identidad, selfies ni comprobantes de domicilio. Esto reduce el tiempo de registro de varios días a pocos minutos. Los juegos, bonos y mecánicas son esencialmente iguales."
  },
  {
    question: "¿Puedo acceder a bonos de bienvenida sin verificar mi identidad?",
    answer: "Absolutamente. La mayoría de casinos sin DNI ofrecen bonos de bienvenida competitivos sin exigir verificación previa. Algunos incluso ofrecen bonos sin depósito. Lo importante es leer los términos de apuesta (wagering) antes de aceptar cualquier bonificación."
  },
  {
    question: "¿Qué hago si tengo un problema con un casino sin DNI?",
    answer: "Contacta primero con el soporte del casino — la mayoría ofrece chat en vivo 24/7. Si no obtienes respuesta satisfactoria, puedes acudir al regulador que emitió la licencia del casino. También puedes consultar foros especializados y sitios de mediación como AskGamblers o CasinoGuru."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="mt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
        Preguntas frecuentes sobre casinos sin DNI
      </h2>
      <div className="space-y-3">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition-colors"
              aria-expanded={openIndex === index}
            >
              <h3 className="font-heading font-semibold text-foreground text-sm md:text-base pr-4">
                {item.question}
              </h3>
              <ChevronDown
                size={20}
                className={`text-primary flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
