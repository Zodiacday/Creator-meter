import { Navigation } from "@/components/Navigation";
import { Users, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const MostPopulatedCountriesPage = () => {
  const topCountries = [
    { country: "India", population: 1428, flag: "🇮🇳" },
    { country: "China", population: 1425, flag: "🇨🇳" },
    { country: "United States", population: 340, flag: "🇺🇸" },
    { country: "Indonesia", population: 277, flag: "🇮🇩" },
    { country: "Pakistan", population: 241, flag: "🇵🇰" },
    { country: "Nigeria", population: 223, flag: "🇳🇬" },
    { country: "Brazil", population: 216, flag: "🇧🇷" },
    { country: "Bangladesh", population: 173, flag: "🇧🇩" },
    { country: "Russia", population: 144, flag: "🇷🇺" },
    { country: "Mexico", population: 128, flag: "🇲🇽" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Most Populated Countries 2025 - Top 10 by Population"
        description="India leads with 1.43B people. Complete ranking of the most populated countries in 2025. Real-time population data and growth trends."
        keywords="most populated countries, largest countries by population, population ranking, India population, China population"
        canonical={`${window.location.origin}/most-populated-countries-2025`}
      />
      <SchemaMarkup type="Dataset" data={{ name: "Most Populated Countries", description: "Population rankings by country", url: `${window.location.origin}/most-populated-countries-2025`, keywords: ["population", "countries", "demographics"] }} />
      <Navigation />
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold gradient-text mb-8">Most Populated Countries 2025</h1>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <StatCard label="1st - India" value={1428000000} icon={Users} color="hsl(var(--population))" />
            <StatCard label="2nd - China" value={1425000000} icon={Users} color="hsl(var(--population))" />
          </div>
          <ChartCard title="Top 10 Countries by Population (Millions)" icon={TrendingUp} color="hsl(var(--population))">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={topCountries}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                <Bar dataKey="population" fill="hsl(var(--population))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </main>
    </div>
  );
};

export default MostPopulatedCountriesPage;