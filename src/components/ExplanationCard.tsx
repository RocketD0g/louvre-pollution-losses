import { Card } from "@/components/ui/card";
import { Info, Crown } from "lucide-react";

export const ExplanationCard = () => {
  const louvreValue = 100; // millions USD

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 relative overflow-hidden">
      {/* Crown jewel decorative elements */}
      <div className="absolute top-4 right-4 opacity-10">
        <Crown className="w-32 h-32 text-primary" />
      </div>
      <div className="absolute bottom-4 right-20 opacity-5">
        <Crown className="w-24 h-24 text-accent rotate-12" />
      </div>
      
      <div className="flex items-start gap-4 relative z-10">
        <div className="p-3 rounded-full bg-primary/10">
          <Crown className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            The $100M Louvre Heist
            <Crown className="w-6 h-6 text-accent animate-pulse" />
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In October 2025, a brazen daylight heist at the Louvre Museum in Paris resulted in approximately{" "}
            <span className="font-bold text-foreground">${louvreValue} million USD</span> in stolen crown jewels. 
            We're using this real-world theft as a unit of measurement to help visualize the massive scale of air pollution 
            damages happening every day around the world.
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
