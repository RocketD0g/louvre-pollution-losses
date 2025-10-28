import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { calculateLouvreHeists } from "@/data/pollutionData";

interface CountryCardProps {
  country: string;
  damageUSD: number;
  damagePerDayUSD: number;
  louvreHeists: number;
  flag: string;
}

export const CountryCard = ({ country, damageUSD, damagePerDayUSD, louvreHeists, flag }: CountryCardProps) => {
  const [displayDamage, setDisplayDamage] = useState(damageUSD);
  const [displayHeists, setDisplayHeists] = useState(louvreHeists);
  const [startTime] = useState(Date.now());

  // Real-time increment
  useEffect(() => {
    const incrementPerSecond = damagePerDayUSD / (24 * 60 * 60);

    const timer = setInterval(() => {
      const elapsedSeconds = (Date.now() - startTime) / 1000;
      const additionalDamage = incrementPerSecond * elapsedSeconds;
      const newDamage = damageUSD + additionalDamage;
      setDisplayDamage(newDamage);
      setDisplayHeists(calculateLouvreHeists(newDamage));
    }, 100);

    return () => clearInterval(timer);
  }, [damageUSD, damagePerDayUSD, startTime]);
  // Calculate how often a Louvre heist occurs for this country
  const louvreValue = 100e6; // $100M
  const heistsPerDay = damagePerDayUSD / louvreValue;
  const minutesPerHeist = (24 * 60) / heistsPerDay;
  
  const getHeistFrequency = () => {
    if (minutesPerHeist < 60) {
      return `${minutesPerHeist.toFixed(2)} minutes`;
    } else if (minutesPerHeist < 24 * 60) {
      return `${(minutesPerHeist / 60).toFixed(2)} hours`;
    } else {
      return `${(minutesPerHeist / (24 * 60)).toFixed(2)} days`;
    }
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <span className="text-4xl">{flag}</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">{country}</h3>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-muted-foreground">Financial Damage of Air Pollution</p>
              <p className="text-2xl font-bold text-accent">
                ${(displayDamage / 1e6).toFixed(4)}M
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                A $100M Louvre heist every
              </p>
              <p className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                {getHeistFrequency()}
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-4 italic">
            Calculations are derived from annual outdoor air pollution damages detailed in this{' '}
            <a 
              href="https://openknowledge.worldbank.org/server/api/core/bitstreams/550b7a9b-4d1f-5d2f-a439-40692d4eedf3/content"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/80 hover:text-muted-foreground underline"
            >
              2022 World Bank report
            </a>
          </p>
        </div>
      </div>
    </Card>
  );
};
