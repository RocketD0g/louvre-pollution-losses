import { useEffect, useState } from "react";

interface GlobalCounterProps {
  totalDamage: number;
  totalHeists: number;
}

export const GlobalCounter = ({ totalDamage, totalHeists }: GlobalCounterProps) => {
  const [displayDamage, setDisplayDamage] = useState(0);
  const [displayHeists, setDisplayHeists] = useState(0);

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

  return (
    <div className="text-center space-y-6 py-12">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
          Total Global Air Pollution Damage (2024)
        </h2>
        <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-2">
          ${(displayDamage / 1e12).toFixed(2)}T
        </div>
        <p className="text-xl text-muted-foreground">in USD</p>
      </div>

      <div className="pt-8">
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
          That's equivalent to
        </p>
        <div className="text-7xl md:text-9xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {displayHeists.toFixed(0)}
        </div>
        <p className="text-3xl md:text-4xl font-bold text-foreground mt-4">
          Louvre Museum heists
        </p>
      </div>
    </div>
  );
};
