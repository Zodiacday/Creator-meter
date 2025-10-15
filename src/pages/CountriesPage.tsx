import { Navigation } from "@/components/Navigation";
import { Globe, Users, TrendingUp } from "lucide-react";
import { useBackendData } from "@/hooks/useBackendData";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { Counter } from "@/components/Counter";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

interface CountriesData {
  worldPopulation: number;
  populationGrowthPerSecond: number;
  topCountries: Array<{
    rank: number;
    country: string;
    population: number;
    percentage: number;
    growthRate: number;
  }>;
  regionalPopulation: Record<string, number>;
  historical: Array<{ year: number; population: number }>;
}

const CountriesPage = () => {
  const { data, isLoading } = useBackendData<CountriesData>("countries");
  const livePopulation = useRealtimeCounter({
    initialValue: data?.worldPopulation || 0,
    incrementPerSecond: data?.populationGrowthPerSecond || 0
  });

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

  const topCountriesData = data?.topCountries.slice(0, 15).map((c) => ({
    name: c.country,
    population: c.population / 1000000,
    percentage: c.percentage,
  })) || [];

  const regionalData = Object.entries(data?.regionalPopulation || {}).map(([name, value]) => ({
    name,
    population: value / 1000000,
  }));

  const historicalData = data?.historical.map((h) => ({
    year: h.year,
    population: h.population / 1000000000,
  })) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--population))]/20">
            <Globe className="w-8 h-8 text-[hsl(var(--population))]" />
          </div>
          <h1 className="text-4xl font-bold gradient-text">Countries & Population</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <StatCard
            icon={Globe}
            label="World Population"
            value={livePopulation}
            color="hsl(var(--population))"
          />
          <StatCard
            icon={Users}
            label="Most Populous"
            value={data?.topCountries[0]?.population || 0}
            color="hsl(var(--population))"
            subtitle={data?.topCountries[0]?.country || "N/A"}
          />
          <StatCard
            icon={TrendingUp}
            label="Growth Per Second"
            value={data?.populationGrowthPerSecond || 0}
            color="hsl(var(--chart-3))"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ChartCard title="Top 15 Countries by Population" icon={Globe} color="hsl(var(--population))">
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={topCountriesData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--foreground))" />
                <YAxis dataKey="name" type="category" width={100} stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="population" fill="hsl(var(--population))" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Population by Region" icon={Users} color="hsl(var(--chart-2))">
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={regionalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--foreground))" angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="population" fill="hsl(var(--chart-2))" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <ChartCard title="World Population Growth" icon={TrendingUp} color="hsl(var(--population))">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="year" stroke="hsl(var(--foreground))" />
              <YAxis stroke="hsl(var(--foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line type="monotone" dataKey="population" stroke="hsl(var(--population))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

export default CountriesPage;
