import { Navigation } from "@/components/Navigation";
import { Flag, Globe, MapPin } from "lucide-react";
import { useBackendData } from "@/hooks/useBackendData";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { Card, CardContent } from "@/components/ui/card";

interface FlagCountry {
  name: string;
  code: string;
  flag: string;
  capital: string;
  region: string;
  population: number;
  area: number;
  languages: string[];
  currency: string;
  timezone: string;
}

interface FlagsData {
  countries: FlagCountry[];
  totalCountries: number;
}

const FlagsPage = () => {
  const { data, isLoading } = useBackendData<FlagsData>("flags");

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
            <Flag className="w-8 h-8 text-[hsl(var(--primary))]" />
          </div>
          <h1 className="text-4xl font-bold gradient-text">Country Flags & Details</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <StatCard
            icon={Flag}
            label="Total Countries"
            value={data?.totalCountries || 0}
            color="hsl(var(--primary))"
          />
          <StatCard
            icon={Globe}
            label="Countries Listed"
            value={data?.countries.length || 0}
            color="hsl(var(--chart-2))"
          />
          <StatCard
            icon={MapPin}
            label="Regions Covered"
            value={new Set(data?.countries.map(c => c.region)).size || 0}
            color="hsl(var(--chart-3))"
          />
        </div>

        <ChartCard title="Country Information" icon={Flag} color="hsl(var(--primary))">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data?.countries.map((country) => (
              <Card key={country.code} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl">{country.flag}</span>
                    <div>
                      <h3 className="font-bold text-lg">{country.name}</h3>
                      <p className="text-xs text-muted-foreground">{country.code}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold">Capital:</span> {country.capital}
                    </div>
                    <div>
                      <span className="font-semibold">Region:</span> {country.region}
                    </div>
                    <div>
                      <span className="font-semibold">Population:</span> {(country.population / 1000000).toFixed(1)}M
                    </div>
                    <div>
                      <span className="font-semibold">Area:</span> {(country.area / 1000).toFixed(0)}k km²
                    </div>
                    <div>
                      <span className="font-semibold">Languages:</span> {country.languages.join(", ")}
                    </div>
                    <div>
                      <span className="font-semibold">Currency:</span> {country.currency}
                    </div>
                    <div>
                      <span className="font-semibold">Timezone:</span> {country.timezone}
                    </div>
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

export default FlagsPage;
