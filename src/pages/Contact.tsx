import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <SEOHead
        title="Contacto - CasinoSinDNI 2026"
        description="Contacta con el equipo de CasinoSinDNI. Resolvemos tus dudas sobre casinos online sin verificacion de identidad."
        canonical="/contacto/"
      />
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
        
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Contacto</h1>

        <div className="space-y-6 text-foreground leading-relaxed">
          <p>
            ¿Tienes alguna pregunta sobre casinos sin DNI? ¿Quieres reportar un problema con alguna plataforma o sugerirnos un casino para revisar? 
            Estamos aquí para ayudarte. Nuestro equipo revisa todos los mensajes y responde en un plazo máximo de 48 horas laborables.
          </p>

          {sent ? (
            <div className="good-example">
              <p className="text-foreground font-medium">Mensaje enviado correctamente. Te responderemos lo antes posible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Asunto del mensaje"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Mensaje</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Enviar mensaje
              </button>
            </form>
          )}

          <section className="mt-8">
            <h2 className="font-heading text-xl font-semibold mb-3">Información de contacto</h2>
            <div className="card-casino p-5">
              <p className="text-sm text-muted-foreground mb-2"><strong className="text-foreground">Email:</strong> info@casinosindni.eu.com</p>
              <p className="text-sm text-muted-foreground mb-2"><strong className="text-foreground">Horario de atención:</strong> Lunes a Viernes, 9:00 - 18:00 (CET)</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Tiempo de respuesta:</strong> Máximo 48 horas laborables</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
