interface TOCItem {
  id: string;
  label: string;
  level?: number;
}

const tocItems: TOCItem[] = [
  { id: "mejores-casinos", label: "Mejores casinos sin DNI 2026" },
  { id: "que-es", label: "¿Qué es un casino sin DNI?" },
  { id: "como-funcionan", label: "¿Cómo funcionan?" },
  { id: "ventajas", label: "Ventajas de jugar sin verificación" },
  { id: "seguridad", label: "Seguridad y licencias" },
  { id: "como-elegir", label: "Cómo elegir el mejor casino sin DNI" },
  { id: "metodos-pago", label: "Métodos de pago disponibles" },
  { id: "bonos", label: "Bonos y promociones" },
  { id: "movil", label: "Casinos sin DNI desde el móvil" },
  { id: "faq", label: "Preguntas frecuentes" },
];

export default function TableOfContents() {
  return (
    <nav className="card-casino p-5 mb-8" aria-label="Tabla de contenido">
      <h2 className="font-heading font-bold text-foreground text-lg mb-3">Contenido</h2>
      <ol className="space-y-1">
        {tocItems.map((item, i) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="toc-link">
              {i + 1}. {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
