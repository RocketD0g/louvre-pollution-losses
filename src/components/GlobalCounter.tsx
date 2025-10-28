import { useEffect, useState } from "react";
import { pollutionData, calculateLouvreHeists } from "@/data/pollutionData";

interface GlobalCounterProps {
  totalDamage: number;
  totalHeists: number;
}

export const GlobalCounter = ({ totalDamage, totalHeists }: GlobalCounterProps) => {
  const [displayDamage, setDisplayDamage] = useState(0);
  const [displayHeists, setDisplayHeists] = useState(0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const damageIncrement = totalDamage / steps;
    const heistsIncrement = totalHeists / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayDamage(damageIncrement * currentStep);
      setDisplayHeists(heistsIncrement * currentStep);

      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayDamage(totalDamage);
        setDisplayHeists(totalHeists);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [totalDamage, totalHeists]);

  // Real-time increment based on annual rate of $8.1 trillion
  useEffect(() => {
    const annualDamage = 8.1e12; // $8.1 trillion per year
    const dailyRate = annualDamage / 365;
    const incrementPerSecond = dailyRate / (24 * 60 * 60);

    const realtimeTimer = setInterval(() => {
      const elapsedSeconds = (Date.now() - startTime) / 1000;
      const additionalDamage = incrementPerSecond * elapsedSeconds;
      setDisplayDamage(totalDamage + additionalDamage);
      setDisplayHeists(calculateLouvreHeists(totalDamage + additionalDamage));
    }, 100);

    return () => clearInterval(realtimeTimer);
  }, [totalDamage, startTime]);

  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  // Calculate how often a Louvre heist occurs based on $8.1 trillion annual damage
  const louvreValue = 100e6; // $100M
  const annualDamage = 8.1e12; // $8.1 trillion per year
  const heistsPerYear = annualDamage / louvreValue;
  const minutesPerYear = 365 * 24 * 60;
  const minutesPerHeist = minutesPerYear / heistsPerYear;
  
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
    <div className="text-center space-y-6 py-12">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-2">
          Total Global Air Pollution Damage
        </h2>
        <p className="text-xl text-muted-foreground/80 mb-4">
          2025 to date as of <span className="font-semibold">{currentDate}</span>
        </p>
        <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-2">
          ${Math.round(displayDamage).toLocaleString('en-US')}
        </div>
        <p className="text-xl text-muted-foreground">
          in USD <span className="text-xs text-muted-foreground/60">[source]</span>
        </p>
      </div>

      <div className="pt-8">
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
          It's estimated that a $100M Louvre heist will happen every
        </p>
        <div className="text-7xl md:text-9xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {getHeistFrequency()}
        </div>
        <p className="text-3xl md:text-4xl font-bold text-foreground mt-4">
          this year worldwide <span className="text-sm text-muted-foreground/60">[source]</span>
        </p>
      </div>
    </div>
  );
};
