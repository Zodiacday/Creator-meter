import { Navigation } from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import { Zap, TrendingUp, Leaf, Factory } from "lucide-react";
import { useBackendData } from "@/hooks/useBackendData";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

interface EnergyData {
  year: number;
  currentConsumption: number;
  annualProjection: number;
  consumptionPerSecond: number;
  sources: {
    oil: { amount: number; percentage: number; trend: string };
    coal: { amount: number; percentage: number; trend: string };
    naturalGas: { amount: number; percentage: number; trend: string };
    nuclear: { amount: number; percentage: number; trend: string };
    renewables: { amount: number; percentage: number; trend: string };
  };
  topConsumers: Array<{
    country: string;
    consumption: number;
    perCapita: number;
  }>;
}

const EnergyPage = () => {
  const { data, isLoading } = useBackendData<EnergyData>("energy");
  
  const currentConsumption = useRealtimeCounter({
    initialValue: data?.currentConsumption || 0,
    incrementPerSecond: data?.consumptionPerSecond || 18380952
  });

  const pieData = data ? [
    { name: "Oil", value: data.sources.oil.percentage, color: "#ef4444" },
    { name: "Coal", value: data.sources.coal.percentage, color: "#71717a" },
    { name: "Natural Gas", value: data.sources.naturalGas.percentage, color: "#3b82f6" },
    { name: "Nuclear", value: data.sources.nuclear.percentage, color: "#a855f7" },
    { name: "Renewables", value: data.sources.renewables.percentage, color: "hsl(var(--environment))" },
  ] : [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <Zap className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
            <p className="text-muted-foreground">Loading energy data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="World Energy Statistics - Global Consumption & Sources"
        description="Real-time global energy consumption statistics. Track energy use by source including oil, coal, natural gas, nuclear, and renewables with live data."
        keywords="energy statistics, global energy consumption, renewable energy, energy sources, oil consumption, world energy data"
        canonical={`${window.location.origin}/energy`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Global Energy Consumption Statistics",
          description: "Real-time world energy consumption data by source and country",
          url: `${window.location.origin}/energy`,
          keywords: ["energy", "consumption", "renewable energy", "fossil fuels", "world statistics"],
          temporalCoverage: "2024/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: window.location.origin },
          { name: "Energy Statistics", url: `${window.location.origin}/energy` }
        ]}
      />
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <div className="p-4 rounded-xl bg-[hsl(var(--energy))]/20">
            <Zap className="w-8 h-8 text-[hsl(var(--energy))]" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <BackButton />
              <h1 className="text-4xl font-bold gradient-text">Energy</h1>
            </div>
            <p className="text-muted-foreground mt-2">Global energy consumption and production</p>
          </div>
        </div>

        {/* Main Counter */}
        <div className="relative mb-12 text-center py-12 bg-gradient-to-br from-[hsl(var(--energy))]/10 to-transparent rounded-3xl border border-border animate-fade-in">
          <p className="text-sm text-muted-foreground mb-2">Energy Consumed This Year</p>
          <Counter value={currentConsumption} className="text-5xl md:text-7xl font-bold text-foreground counter-glow" />
          <p className="text-sm text-muted-foreground mt-2">kWh</p>
          <div className="absolute -inset-4 bg-[hsl(var(--energy))]/20 blur-3xl -z-10 animate-pulse-glow rounded-full pointer-events-none" aria-hidden="true" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard 
            label="Consumption Per Second" 
            value={data?.consumptionPerSecond || 0} 
            icon={TrendingUp} 
            color="hsl(var(--energy))"
            subtitle="kWh/second"
          />
          <StatCard 
            label="Renewable Energy" 
            value={Math.round(data?.sources.renewables.percentage || 0)} 
            icon={Leaf} 
            color="hsl(var(--environment))"
            subtitle="% of total"
          />
          <StatCard 
            label="Annual Projection" 
            value={data?.annualProjection || 0} 
            icon={Factory} 
            color="hsl(var(--energy))"
            subtitle="kWh"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <ChartCard title="Energy Sources" icon={Factory} color="hsl(var(--energy))">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Top Consumers" icon={TrendingUp} color="hsl(var(--energy))">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data?.topConsumers}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="consumption" fill="hsl(var(--energy))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Source Details */}
        <ChartCard title="Energy Source Details" icon={Leaf} color="hsl(var(--energy))">
          <div className="space-y-6">
            {data && Object.entries(data.sources).map(([key, source], index) => (
              <div key={key} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">{source.percentage.toFixed(2)}%</span>
                    <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                      source.trend === 'growing' ? 'bg-green-500/20 text-green-500' :
                      source.trend === 'declining' ? 'bg-red-500/20 text-red-500' :
                      'bg-blue-500/20 text-blue-500'
                    }`}>
                      {source.trend}
                    </span>
                  </div>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[hsl(var(--energy))] transition-all duration-1000"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        {/* Data Sources */}
        <div className="mt-12 p-6 bg-card border border-border rounded-xl">
          <p className="text-sm text-muted-foreground">
            <strong>Data Sources:</strong> IEA, World Bank, BP Statistical Review
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnergyPage;
