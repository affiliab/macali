import { Check } from "lucide-react";

interface RankedCasino {
  name: string;
  bonus: string;
  license: string;
  minDeposit: string;
}

const ranked: RankedCasino[] = [
  {
    name: "Bassbet",
    bonus: "100% HASTA 500€ +200 GIROS GRATIS",
    license: "Curazao",
    minDeposit: "20€",
  },
  {
    name: "Alfcasino",
    bonus: "150% HASTA 750€ +200 FREE SPINS",
    license: "Curazao",
    minDeposit: "10€",
  },
  {
    name: "ludios.io",
    bonus: "200% PRIMER DEPÓSITO + CASHBACK 10%",
    license: "Anjouan",
    minDeposit: "15€",
  },
];

export default function HeroCasinos() {
  return (
    <section className="mb-16">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
        Ranking de Casinos Sin DNI{" "}
        <span className="text-primary">(KYC)</span> en España
      </h2>

      <div className="flex flex-col gap-4">
        {ranked.map((casino, i) => (
          <div
            key={casino.name}
            className="relative bg-card border border-border rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 md:gap-6 transition-all hover:border-primary/40"
          >
            {/* Number badge */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden md:flex w-8 h-8 rounded-full bg-primary text-primary-foreground items-center justify-center font-heading font-bold text-sm shadow-lg">
              {i + 1}
            </div>
            <span className="md:hidden self-start badge-casino mb-1">#{i + 1}</span>

            {/* Logo placeholder */}
            <div className="flex-shrink-0 w-20 h-16 md:w-24 md:h-[4.5rem] rounded-lg bg-secondary border border-border flex items-center justify-center md:ml-4">
              <span className="font-heading font-black text-sm md:text-base text-foreground tracking-tight text-center leading-tight px-1">
                {casino.name}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 text-center md:text-left">
              <h3 className="font-heading font-bold text-foreground text-base md:text-lg mb-1">
                {casino.name}
              </h3>
              <p className="font-heading font-bold text-sm md:text-base">
                <span className="text-foreground">
                  {casino.bonus.split(/(\d+[€%])/)[0]}
                </span>
                <span className="text-primary">
                  {casino.bonus.match(/\d+[€%]/)?.[0] || ""}
                </span>
                <span className="text-foreground">
                  {casino.bonus.substring(
                    casino.bonus.indexOf(casino.bonus.match(/\d+[€%]/)?.[0] || "") +
                      (casino.bonus.match(/\d+[€%]/)?.[0]?.length || 0)
                  )}
                </span>
              </p>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-1.5 text-sm text-muted-foreground flex-shrink-0">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-primary flex-shrink-0" />
                <span>Licencia: {casino.license}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-primary flex-shrink-0" />
                <span>Mín. depósito: {casino.minDeposit}</span>
              </div>
            </div>

            {/* CTA */}
            <button className="flex-shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-sm md:text-base px-8 py-3 rounded-lg transition-colors whitespace-nowrap min-w-[140px]">
              JUEGA YA
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
