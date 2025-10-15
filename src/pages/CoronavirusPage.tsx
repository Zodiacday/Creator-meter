import { Navigation } from "@/components/Navigation";
import { Activity, Users, AlertCircle, CheckCircle, TrendingUp } from "lucide-react";
import { useBackendData } from "@/hooks/useBackendData";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { Counter } from "@/components/Counter";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

interface CoronavirusData {
  totalCases: number;
  totalDeaths: number;
  totalRecoveries: number;
  activeCases: number;
  casesToday: number;
  deathsToday: number;
  casesPerSecond: number;
  deathsPerSecond: number;
  topCountries: Array<{
    country: string;
    cases: number;
    deaths: number;
    recovered: number;
  }>;
  ageDistribution: Record<string, number>;
  historical: Array<{ date: string; cases: number; deaths: number }>;
}

const CoronavirusPage = () => {
  const { data, isLoading } = useBackendData<CoronavirusData>("coronavirus");
  const liveCases = useRealtimeCounter({
    initialValue: data?.casesToday || 0,
    incrementPerSecond: data?.casesPerSecond || 0
  });
  const liveDeaths = useRealtimeCounter({
    initialValue: data?.deathsToday || 0,
    incrementPerSecond: data?.deathsPerSecond || 0
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

  const topCountriesData = data?.topCountries.slice(0, 10).map((c) => ({
    name: c.country,
    cases: c.cases,
    deaths: c.deaths,
  })) || [];

  const ageData = Object.entries(data?.ageDistribution || {}).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--health))]/20">
            <Activity className="w-8 h-8 text-[hsl(var(--health))]" />
          </div>
          <h1 className="text-4xl font-bold gradient-text">Coronavirus (COVID-19)</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            icon={Users}
            label="Total Cases"
            value={data?.totalCases || 0}
            color="hsl(var(--health))"
          />
          <StatCard
            icon={AlertCircle}
            label="Total Deaths"
            value={data?.totalDeaths || 0}
            color="hsl(var(--destructive))"
          />
          <StatCard
            icon={CheckCircle}
            label="Total Recoveries"
            value={data?.totalRecoveries || 0}
            color="hsl(var(--chart-3))"
          />
          <StatCard
            icon={TrendingUp}
            label="Active Cases"
            value={data?.activeCases || 0}
            color="hsl(var(--chart-4))"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <StatCard
            icon={Activity}
            label="Cases Today"
            value={liveCases}
            color="hsl(var(--health))"
          />
          <StatCard
            icon={AlertCircle}
            label="Deaths Today"
            value={liveDeaths}
            color="hsl(var(--destructive))"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ChartCard title="Top 10 Countries by Cases" icon={Activity} color="hsl(var(--health))">
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
                <Bar dataKey="cases" fill="hsl(var(--health))" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Age Distribution of Cases" icon={Users} color="hsl(var(--chart-2))">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={ageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {ageData.map((entry, index) => (
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

        <ChartCard title="Historical Trends" icon={TrendingUp} color="hsl(var(--health))">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data?.historical || []}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="date" stroke="hsl(var(--foreground))" />
              <YAxis stroke="hsl(var(--foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line type="monotone" dataKey="cases" stroke="hsl(var(--health))" strokeWidth={2} />
              <Line type="monotone" dataKey="deaths" stroke="hsl(var(--destructive))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

export default CoronavirusPage;
