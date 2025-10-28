import { Card } from "@/components/ui/card";

interface CountryCardProps {
  country: string;
  damageUSD: number;
  louvreHeists: number;
  flag: string;
}

export const CountryCard = ({ country, damageUSD, louvreHeists, flag }: CountryCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <span className="text-4xl">{flag}</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">{country}</h3>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-muted-foreground">Financial Damage</p>
              <p className="text-2xl font-bold text-accent">
                ${(damageUSD / 1e9).toFixed(2)}B
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Equivalent to</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                {louvreHeists.toFixed(1)} Louvre heists
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
