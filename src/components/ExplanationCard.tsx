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
          <h3 className="text-2xl font-bold text-foreground">The $100M Louvre Heist</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In October 2025,{" "}
            <a
              href="https://en.wikipedia.org/wiki/2025_Louvre_robbery"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground hover:text-primary"
            >
              a major heist at the Louvre Museum
            </a>{" "}
            resulted in approximately <span className="font-bold text-foreground">${louvreValue} million USD</span> in
            stolen art. We're using this real-world heist as a unit of measurement to help visualize the massive scale
            of air pollution damages happening continuously every day around the world.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When you see that air pollution causes "a Louvre heist every few minutes," it means the economic damage from
            air pollution accumulates at such a staggering rate that it's equivalent to this major art theft happening
            over and over again, continuously.
          </p>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              Data represents estimated economic damages from air pollution in 2025 to date, including healthcare costs,
              lost productivity, and environmental impact.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
