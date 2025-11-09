import { Navigation } from "@/components/Navigation";
import { Flag, Globe, Users, TrendingUp, Award } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";

const FlagsPage = () => {
  // Countries by population (millions)
  const countryData = [
    { country: "🇨🇳 China", population: 1425, area: 9596, capital: "Beijing" },
    { country: "🇮🇳 India", population: 1428, area: 3287, capital: "New Delhi" },
    { country: "🇺🇸 USA", population: 339, area: 9833, capital: "Washington, D.C." },
    { country: "🇮🇩 Indonesia", population: 277, area: 1904, capital: "Jakarta" },
    { country: "🇵🇰 Pakistan", population: 241, area: 881, capital: "Islamabad" },
    { country: "🇧🇷 Brazil", population: 216, area: 8515, capital: "Brasília" },
    { country: "🇳🇬 Nigeria", population: 223, area: 923, capital: "Abuja" },
    { country: "🇧🇩 Bangladesh", population: 173, area: 147, capital: "Dhaka" },
    { country: "🇷🇺 Russia", population: 144, area: 17098, capital: "Moscow" },
    { country: "🇲🇽 Mexico", population: 128, area: 1964, capital: "Mexico City" },
    { country: "🇯🇵 Japan", population: 123, area: 377, capital: "Tokyo" },
    { country: "🇪🇹 Ethiopia", population: 126, area: 1104, capital: "Addis Ababa" },
    { country: "🇵🇭 Philippines", population: 117, area: 300, capital: "Manila" },
    { country: "🇪🇬 Egypt", population: 112, area: 1001, capital: "Cairo" },
    { country: "🇻🇳 Vietnam", population: 98, area: 331, capital: "Hanoi" },
  ];

  // Largest countries by area
  const areaData = [
    { country: "🇷🇺 Russia", area: 17098 },
    { country: "🇨🇦 Canada", area: 9984 },
    { country: "🇺🇸 USA", area: 9833 },
    { country: "🇨🇳 China", area: 9596 },
    { country: "🇧🇷 Brazil", area: 8515 },
    { country: "🇦🇺 Australia", area: 7692 },
  ];

  // Highest GDP countries (trillions USD)
  const gdpData = [
    { country: "🇺🇸 USA", gdp: 27.4 },
    { country: "🇨🇳 China", gdp: 17.9 },
    { country: "🇯🇵 Japan", gdp: 4.2 },
    { country: "🇩🇪 Germany", gdp: 4.1 },
    { country: "🇮🇳 India", gdp: 3.7 },
    { country: "🇬🇧 UK", gdp: 3.3 },
  ];

  // Continental distribution
  const continentData = [
    { continent: "Asia", countries: 48, population: 4678 },
    { continent: "Africa", countries: 54, population: 1460 },
    { continent: "Europe", countries: 44, population: 745 },
    { continent: "N. America", countries: 23, population: 375 },
    { continent: "S. America", countries: 12, population: 437 },
    { continent: "Oceania", countries: 14, population: 45 },
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Countries & Flags", href: "/flags" }
  ];

  return (
    <>
      <MetaTags
        title="Countries & Flags - World Nations Demographics & Statistics"
        description="Explore world nations, flags, demographics, and key statistics. View countries by population, area, GDP, and continental distribution with detailed data."
        keywords="world flags, countries, demographics, population by country, world statistics, nations"
        canonical="https://www.creatormeter.com/flags"
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "World Countries & Flags Statistics",
          description: "Comprehensive data on world nations including demographics, geography, and economic indicators",
          url: "https://www.creatormeter.com/flags",
          keywords: ["countries", "flags", "demographics", "world nations", "population"],
          temporalCoverage: "2024/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={breadcrumbs.map((crumb) => ({
          name: crumb.label,
          url: `https://www.creatormeter.com${crumb.href}`
        }))}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <Breadcrumbs items={breadcrumbs} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <div className="p-4 rounded-xl bg-[hsl(var(--primary))]/20">
            <Flag className="w-8 h-8 text-[hsl(var(--primary))]" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Countries & Flags</h1>
            <p className="text-muted-foreground mt-2">Explore world nations, demographics, and key statistics</p>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard 
            label="Total Countries" 
            value={195} 
            icon={Flag} 
            color="hsl(var(--primary))"
            subtitle="UN recognized"
          />
          <StatCard 
            label="Total Population" 
            value={8200000000} 
            icon={Users} 
            color="hsl(var(--chart-2))"
            subtitle="people"
          />
          <StatCard 
            label="Continents" 
            value={7} 
            icon={Globe} 
            color="hsl(var(--chart-3))"
          />
          <StatCard 
            label="Languages" 
            value={7164} 
            icon={Award} 
            color="hsl(var(--chart-4))"
            subtitle="living languages"
          />
        </div>

        {/* Country List */}
        <ChartCard title="Top 15 Countries by Population" icon={Users} color="hsl(var(--population))">
          <div className="space-y-3">
            {countryData.map((country, index) => (
              <div key={country.country} className="flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border hover:bg-card transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[hsl(var(--population))]/20 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-2xl">{country.country.split(' ')[0]}</span>
                  <div className="flex-1">
                    <p className="font-medium">{country.country.split(' ').slice(1).join(' ')}</p>
                    <p className="text-sm text-muted-foreground">Capital: {country.capital}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">{country.population}M</p>
                  <p className="text-xs text-muted-foreground">{country.area.toLocaleString()} km²</p>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          <ChartCard title="Largest Countries by Area (1000 km²)" icon={Globe} color="hsl(var(--chart-2))">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={areaData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="area" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Highest GDP Countries (Trillions USD)" icon={TrendingUp} color="hsl(var(--chart-3))">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={gdpData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="gdp" fill="hsl(var(--chart-3))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <div className="mt-6">
          <ChartCard title="Population by Continent (Millions)" icon={Globe} color="hsl(var(--primary))">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={continentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="continent" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--popover))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="population" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        </div>

        {/* Data Sources */}
        <div className="mt-12 p-6 bg-card border border-border rounded-xl">
          <p className="text-sm text-muted-foreground">
            <strong>Data Sources:</strong> United Nations, World Bank, CIA World Factbook, UN Statistics Division
          </p>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default FlagsPage;
