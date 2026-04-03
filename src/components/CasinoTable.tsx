import { Star } from "lucide-react";

interface Casino {
  name: string;
  rating: number;
  bonus: string;
  withdrawal: string;
  methods: string;
  highlight: string;
}

const casinos: Casino[] = [
  { name: "Bassbet", rating: 4.8, bonus: "100% hasta 500€", withdrawal: "Instantáneo", methods: "Crypto, e-wallets", highlight: "Sin KYC hasta 2 BTC" },
  { name: "Alfcasino", rating: 4.7, bonus: "150% + 200 FS", withdrawal: "1-24h", methods: "Crypto, tarjetas", highlight: "Registro en 30 segundos" },
  { name: "ludios.io", rating: 4.6, bonus: "200% primer depósito", withdrawal: "Instantáneo", methods: "Crypto", highlight: "100% anónimo" },
  { name: "Roibets", rating: 4.5, bonus: "100% hasta 300€", withdrawal: "1-12h", methods: "Crypto, e-wallets", highlight: "Más de 5000 juegos" },
  { name: "Instasino", rating: 4.5, bonus: "125% + 100 FS", withdrawal: "Instantáneo", methods: "Crypto, Skrill", highlight: "Casino en vivo sin DNI" },
  { name: "22bet", rating: 4.4, bonus: "100% hasta 300€", withdrawal: "1-24h", methods: "Crypto, banco", highlight: "Apuestas deportivas incluidas" },
  { name: "24slots", rating: 4.3, bonus: "100% + 240 FS", withdrawal: "1-48h", methods: "Crypto, e-wallets", highlight: "Programa VIP exclusivo" },
  { name: "Betobet", rating: 4.3, bonus: "100% hasta 200€", withdrawal: "1-24h", methods: "Crypto, tarjetas", highlight: "App móvil optimizada" },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={star <= Math.round(rating) ? "rating-star fill-current" : "text-muted-foreground"}
        />
      ))}
      <span className="ml-1 text-sm font-semibold text-foreground">{rating}</span>
    </div>
  );
}

export default function CasinoTable() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Mejores Casinos Sin DNI 2026",
    "numberOfItems": casinos.length,
    "itemListElement": casinos.map((casino, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": casino.name,
      "url": "https://www.casinosindni.eu.com/"
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      
      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {casinos.map((casino, i) => (
          <div key={casino.name} className="card-casino p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="badge-casino">#{i + 1}</span>
                <h3 className="font-heading font-bold text-foreground">{casino.name}</h3>
              </div>
              <Stars rating={casino.rating} />
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-muted-foreground">Bono:</span>
                <p className="text-foreground font-medium">{casino.bonus}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Retiro:</span>
                <p className="text-foreground font-medium">{casino.withdrawal}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Métodos:</span>
                <p className="text-foreground font-medium">{casino.methods}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Destacado:</span>
                <p className="text-primary font-medium">{casino.highlight}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto card-casino">
        <table className="table-casino">
          <thead>
            <tr>
              <th>#</th>
              <th>Casino</th>
              <th>Valoración</th>
              <th>Bono</th>
              <th>Retiro</th>
              <th>Métodos</th>
              <th>Destacado</th>
            </tr>
          </thead>
          <tbody>
            {casinos.map((casino, i) => (
              <tr key={casino.name}>
                <td className="font-heading font-bold text-primary">{i + 1}</td>
                <td className="font-heading font-semibold text-foreground">{casino.name}</td>
                <td><Stars rating={casino.rating} /></td>
                <td className="text-foreground">{casino.bonus}</td>
                <td className="text-foreground">{casino.withdrawal}</td>
                <td className="text-muted-foreground text-sm">{casino.methods}</td>
                <td className="text-primary text-sm font-medium">{casino.highlight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
