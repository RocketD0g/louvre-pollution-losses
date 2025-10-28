// Example data structure - replace with your actual data
// All damage values in USD

export interface CountryPollutionData {
  country: string;
  damageUSD: number;
  flag: string;
}

// The Louvre Museum's collection is estimated at ~$10 billion
export const LOUVRE_VALUE_USD = 10_000_000_000;

export const calculateLouvreHeists = (damageUSD: number): number => {
  return damageUSD / LOUVRE_VALUE_USD;
};

// Sample data - replace with your actual data
export const pollutionData: CountryPollutionData[] = [
  { country: "China", damageUSD: 900_000_000_000, flag: "🇨🇳" },
  { country: "India", damageUSD: 650_000_000_000, flag: "🇮🇳" },
  { country: "United States", damageUSD: 430_000_000_000, flag: "🇺🇸" },
  { country: "European Union", damageUSD: 380_000_000_000, flag: "🇪🇺" },
  { country: "Russia", damageUSD: 210_000_000_000, flag: "🇷🇺" },
  { country: "Japan", damageUSD: 150_000_000_000, flag: "🇯🇵" },
  { country: "Indonesia", damageUSD: 125_000_000_000, flag: "🇮🇩" },
  { country: "Brazil", damageUSD: 98_000_000_000, flag: "🇧🇷" },
  { country: "Pakistan", damageUSD: 87_000_000_000, flag: "🇵🇰" },
  { country: "Bangladesh", damageUSD: 76_000_000_000, flag: "🇧🇩" },
  { country: "Nigeria", damageUSD: 68_000_000_000, flag: "🇳🇬" },
  { country: "Mexico", damageUSD: 62_000_000_000, flag: "🇲🇽" },
];

export const getTotalDamage = (): number => {
  return pollutionData.reduce((sum, country) => sum + country.damageUSD, 0);
};

export const getTotalHeists = (): number => {
  return calculateLouvreHeists(getTotalDamage());
};
