import { useState } from "react";
import { Input } from "@/components/ui/input";
import { GlobalCounter } from "@/components/GlobalCounter";
import { CountryCard } from "@/components/CountryCard";
import { ExplanationCard } from "@/components/ExplanationCard";
import { Search, Crown, Eye } from "lucide-react";
import { pollutionData, calculateLouvreHeists, getTotalDamage, getTotalHeists } from "@/data/pollutionData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = pollutionData.filter((country) =>
    country.country.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/80">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Floating crown jewels - decorative elements */}
        <div className="absolute top-10 left-10 opacity-20 animate-pulse">
          <Crown className="w-16 h-16 text-primary-foreground" />
        </div>
        <div className="absolute top-20 right-20 opacity-15 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Crown className="w-20 h-20 text-primary-foreground rotate-45" />
        </div>
        <div className="absolute bottom-10 left-1/4 opacity-10">
          <Eye className="w-12 h-12 text-primary-foreground" />
        </div>
        <div className="absolute bottom-20 right-1/3 opacity-10" style={{ animationDelay: '1s' }}>
          <Crown className="w-14 h-14 text-primary-foreground -rotate-12 animate-pulse" />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-6 text-center flex items-center justify-center gap-4 flex-wrap">
              <Crown className="w-10 h-10 md:w-12 md:h-12" />
              The Cost of Outdoor Air Pollution
              <Crown className="w-10 h-10 md:w-12 md:h-12" />
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-center mb-8 max-w-3xl mx-auto">
              Conceptualizing outdoor air pollution damages in 2025 to date, measured in the most unlikely unit:
              <span className="font-bold flex items-center justify-center gap-2 mt-2">
                <Eye className="w-5 h-5" />
                the October 2025 Louvre Museum heist
                <Crown className="w-5 h-5" />
              </span>
            </p>
            <GlobalCounter totalDamage={getTotalDamage()} totalHeists={getTotalHeists()} />
          </div>
        </div>
      </header>

      {/* Explanation Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <ExplanationCard />
        </div>
      </section>

      {/* Country Data Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Country Breakdown</h2>
            <p className="text-lg text-muted-foreground text-center mb-6">
              Search and explore air pollution damage by country
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredData.map((country) => (
              <CountryCard
                key={country.country}
                country={country.country}
                damageUSD={country.damageUSD}
                damagePerDayUSD={country.damagePerDayUSD}
                louvreHeists={calculateLouvreHeists(country.damageUSD)}
                flag={country.flag}
              />
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No countries found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            Data visualization of air pollution economic impact • 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
