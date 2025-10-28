import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";

export const ExplanationCard = () => {
  const louvreValue = 100; // millions USD

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Info className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            The $100M Louvre Heist
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In October 2024, the Louvre Museum experienced a significant security breach resulting in the theft 
            of masterworks valued at approximately{" "}
            <span className="font-bold text-foreground">${louvreValue} million USD</span>{" "}
            <span className="text-xs text-muted-foreground/60">[source]</span>.
            We're using this heist as a unit of measurement to help visualize the massive 
            scale of air pollution damages happening every day around the world.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When you see that air pollution causes "a Louvre heist every few minutes," it means 
            the economic damage from air pollution accumulates at such a staggering rate that it's 
            equivalent to this major art theft happening over and over again, continuously.
          </p>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              Data represents estimated economic damages from air pollution based on global annual costs of $8.1 trillion{" "}
              <span className="text-xs text-muted-foreground/60">[source]</span>, including
              healthcare costs, lost productivity, and environmental impact. Country-level calculations are derived from 
              proportional damage estimates{" "}
              <span className="text-xs text-muted-foreground/60">[source]</span>.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
