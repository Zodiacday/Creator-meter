import { Navigation } from "@/components/Navigation";
import { Map, Globe, MapPin } from "lucide-react";
import { useBackendData } from "@/hooks/useBackendData";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { Card, CardContent } from "@/components/ui/card";

interface Country {
  name: string;
  code: string;
  population: number;
  gdp: number;
  area: number;
  coordinates: { lat: number; lng: number };
}

interface WorldMapData {
  countries: Country[];
  globalStats: {
    totalPopulation: number;
    totalCountries: number;
    totalArea: number;
    averageGDP: number;
  };
}

const WorldMapPage = () => {
  const { data, isLoading } = useBackendData<WorldMapData>("world-map");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--primary))]/20">
            <Map className="w-8 h-8 text-[hsl(var(--primary))]" />
          </div>
          <h1 className="text-4xl font-bold gradient-text">World Map Statistics</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <StatCard
            icon={Globe}
            label="Total Countries"
            value={data?.globalStats.totalCountries || 0}
            color="hsl(var(--primary))"
          />
          <StatCard
            icon={MapPin}
            label="World Population"
            value={data?.globalStats.totalPopulation || 0}
            color="hsl(var(--population))"
          />
          <StatCard
            icon={Map}
            label="Total Land Area (km²)"
            value={data?.globalStats.totalArea || 0}
            color="hsl(var(--chart-3))"
          />
        </div>

        <ChartCard title="Countries by Region" icon={Map} color="hsl(var(--primary))">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data?.countries.slice(0, 20).map((country) => (
              <Card key={country.code} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{country.name}</h3>
                    <span className="text-xs text-muted-foreground">{country.code}</span>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Population: {(country.population / 1000000).toFixed(1)}M</p>
                    <p>Area: {(country.area / 1000).toFixed(0)}k km²</p>
                    <p>GDP: ${(country.gdp / 1000).toFixed(0)}B</p>
                    <p className="text-xs">Lat: {country.coordinates.lat.toFixed(2)}, Lng: {country.coordinates.lng.toFixed(2)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

export default WorldMapPage;
