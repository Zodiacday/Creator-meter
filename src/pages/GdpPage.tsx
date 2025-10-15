import { Navigation } from "@/components/Navigation";
import { DollarSign, TrendingUp, Globe } from "lucide-react";
import { useBackendData } from "@/hooks/useBackendData";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { Counter } from "@/components/Counter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

interface GdpData {
  year: number;
  globalGDP: number;
  topCountries: Array<{
    rank: number;
    country: string;
    gdp: number;
    perCapita: number;
    growthRate: number;
    percentage: number;
  }>;
  regionalGDP: Record<string, number>;
  historical: Array<{ year: number; gdp: number }>;
}

const GdpPage = () => {
  const { data, isLoading } = useBackendData<GdpData>("gdp");

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

  const topCountriesData = data?.topCountries.slice(0, 10).map((c) => ({
    name: c.country,
    gdp: c.gdp / 1000000000000,
    perCapita: c.perCapita,
  })) || [];

  const regionalData = Object.entries(data?.regionalGDP || {}).map(([name, value]) => ({
    name,
    gdp: value / 1000000000000,
  }));

  const historicalData = data?.historical.map((h) => ({
    year: h.year,
    gdp: h.gdp / 1000000000000,
  })) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--government))]/20">
            <DollarSign className="w-8 h-8 text-[hsl(var(--government))]" />
          </div>
          <h1 className="text-4xl font-bold gradient-text">GDP by Country</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <StatCard
            icon={Globe}
            label="Global GDP (Trillions)"
            value={data?.globalGDP ? data.globalGDP / 1000000000000 : 0}
            color="hsl(var(--government))"
            subtitle="USD"
          />
          <StatCard
            icon={TrendingUp}
            label="Fastest Growth"
            value={data?.topCountries[0]?.growthRate || 0}
            color="hsl(var(--government))"
            subtitle={`${data?.topCountries[0]?.country || "N/A"}`}
          />
          <StatCard
            icon={DollarSign}
            label="Top GDP (Trillions)"
            value={data?.topCountries[0]?.gdp ? data.topCountries[0].gdp / 1000000000000 : 0}
            color="hsl(var(--government))"
            subtitle={`${data?.topCountries[0]?.country || "N/A"}`}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ChartCard title="Top 10 Countries by GDP" icon={DollarSign} color="hsl(var(--government))">
            <ResponsiveContainer width="100%" height={400}>
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
                <Bar dataKey="gdp" fill="hsl(var(--government))" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="GDP by Region" icon={Globe} color="hsl(var(--chart-2))">
            <ResponsiveContainer width="100%" height={400}>
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
                <Bar dataKey="gdp" fill="hsl(var(--chart-2))" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <ChartCard title="Global GDP Growth" icon={TrendingUp} color="hsl(var(--government))">
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
              <Line type="monotone" dataKey="gdp" stroke="hsl(var(--government))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

export default GdpPage;
