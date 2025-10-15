import { Navigation } from "@/components/Navigation";
import { Apple, Users, TrendingDown, AlertTriangle } from "lucide-react";
import { useBackendData } from "@/hooks/useBackendData";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { Counter } from "@/components/Counter";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface FoodData {
  year: number;
  undernourished: number;
  overweight: number;
  obese: number;
  hungerDeathsThisYear: number;
  hungerDeathsPerSecond: number;
  foodWasted: {
    annual: number;
    percentage: number;
  };
  cropProduction: Record<string, { production: number; unit: string; topProducers: string[] }>;
  malnutrition: {
    stunted: number;
    wasted: number;
    underweight: number;
  };
  regionalHunger: Record<string, number>;
}

const FoodAgriculturePage = () => {
  const { data, isLoading } = useBackendData<FoodData>("food-agriculture");
  const hungerDeaths = useRealtimeCounter({
    initialValue: data?.hungerDeathsThisYear || 0,
    incrementPerSecond: data?.hungerDeathsPerSecond ? parseFloat(String(data.hungerDeathsPerSecond)) : 0
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

  const regionalData = Object.entries(data?.regionalHunger || {}).map(([name, value]) => ({
    name,
    value,
  }));

  const cropData = Object.entries(data?.cropProduction || {}).map(([name, crop]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    production: crop.production / 1000000,
  }));

  const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--food))]/20">
            <Apple className="w-8 h-8 text-[hsl(var(--food))]" />
          </div>
          <h1 className="text-4xl font-bold gradient-text">Food & Agriculture</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            icon={AlertTriangle}
            label="Undernourished People"
            value={data?.undernourished || 0}
            color="hsl(var(--destructive))"
          />
          <StatCard
            icon={TrendingDown}
            label="Hunger Deaths This Year"
            value={hungerDeaths}
            color="hsl(var(--destructive))"
          />
          <StatCard
            icon={Users}
            label="Overweight People"
            value={data?.overweight || 0}
            color="hsl(var(--food))"
          />
          <StatCard
            icon={Users}
            label="Obese People"
            value={data?.obese || 0}
            color="hsl(var(--food))"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ChartCard title="Crop Production (Million Tons)" icon={Apple} color="hsl(var(--food))">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cropData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="production" fill="hsl(var(--food))" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Hunger by Region" icon={AlertTriangle} color="hsl(var(--destructive))">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={regionalData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {regionalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default FoodAgriculturePage;
