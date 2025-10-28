import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";

export const ExplanationCard = () => {
  const louvreValue = 10; // billions USD

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Info className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            What's a "Louvre heist"?
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Louvre Museum houses some of the world's most valuable art, with an estimated
            total collection value of <span className="font-bold text-foreground">${louvreValue} billion USD</span>.
            We're using a hypothetical "complete Louvre heist" as a unit of measurement to help
            visualize the massive scale of air pollution damages.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When you see a country has lost the equivalent of "5 Louvre heists," imagine someone
            stealing the entire Louvre Museum collection five times over. It makes these
            abstract billions more tangible.
          </p>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              Data represents estimated economic damages from air pollution in 2025 to date, including
              healthcare costs, lost productivity, and environmental impact.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
