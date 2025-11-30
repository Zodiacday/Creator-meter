"use client";

import { Navigation } from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import { Droplet, TrendingUp, AlertTriangle, Users } from "lucide-react";
import { useBackendData } from "@/hooks/useBackendData";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

interface WaterData {
  year: number;
  consumption: {
    current: number;
    annualProjection: number;
    perSecond: number;
    perCapita: number;
  };
  access: {
    noSafeWater: number;
    noSanitationAccess: number;
    percentage: {
      safeWater: number;
      basicWater: number;
      safelyManaged: number;
    };
  };
  deaths: {
    thisYear: number;
    annual: number;
    perSecond: number;
    causes: {
      diarrhea: number;
      malnutrition: number;
      malaria: number;
    };
  };
  usage: {
    agriculture: { amount: number; percentage: number };
    industry: { amount: number; percentage: number };
    domestic: { amount: number; percentage: number };
  };
}

const WaterPage = () => {
  const { data, isLoading } = useBackendData<WaterData>("water");
  
  const currentConsumption = useRealtimeCounter({
    initialValue: data?.consumption.current || 0,
    incrementPerSecond: data?.consumption.perSecond || 126839
  });

  const currentDeaths = useRealtimeCounter({
    initialValue: data?.deaths.thisYear || 0,
    incrementPerSecond: parseFloat(data?.deaths.perSecond?.toString() || "0.038")
  });

  const usageData = data ? [
    { name: "Agriculture", value: data.usage.agriculture.percentage, amount: data.usage.agriculture.amount, color: "hsl(var(--food))" },
    { name: "Industry", value: data.usage.industry.percentage, amount: data.usage.industry.amount, color: "hsl(var(--government))" },
    { name: "Domestic", value: data.usage.domestic.percentage, amount: data.usage.domestic.amount, color: "hsl(var(--water))" },
  ] : [];

  const deathsData = data ? [
    { name: "Diarrhea", deaths: data.deaths.causes.diarrhea },
    { name: "Malnutrition", deaths: data.deaths.causes.malnutrition },
    { name: "Malaria", deaths: data.deaths.causes.malaria },
  ] : [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <Droplet className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
            <p className="text-muted-foreground">Loading water data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="World Water Statistics - Global Consumption & Access"
        description="Real-time global water consumption and access statistics. Track water usage, scarcity, sanitation access, and water-related health data worldwide."
        keywords="water statistics, global water consumption, water scarcity, water access, sanitation, world water data"
        canonical={`${typeof window !== 'undefined' ? window.location.origin : ''}/water`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Global Water Statistics",
          description: "Real-time world water consumption, access, and health impact data",
          url: `${typeof window !== 'undefined' ? window.location.origin : ''}/water`,
          keywords: ["water", "consumption", "access", "sanitation", "world statistics"],
          temporalCoverage: "2024/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: window.location.origin },
          { name: "Water Statistics", url: `${typeof window !== 'undefined' ? window.location.origin : ''}/water` }
        ]}
      />
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <div className="p-4 rounded-xl bg-[hsl(var(--water))]/20">
            <Droplet className="w-8 h-8 text-[hsl(var(--water))]" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <BackButton />
              <h1 className="text-4xl font-bold gradient-text">Water</h1>
            </div>
            <p className="text-muted-foreground mt-2">Global water consumption and access</p>
          </div>
        </div>

        {/* Main Counters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative text-center py-12 bg-gradient-to-br from-[hsl(var(--water))]/10 to-transparent rounded-3xl border border-border animate-fade-in">
            <p className="text-sm text-muted-foreground mb-2">Water Consumed This Year</p>
            <Counter value={currentConsumption} className="text-4xl md:text-6xl font-bold text-foreground counter-glow" />
            <p className="text-sm text-muted-foreground mt-2">cubic meters</p>
            <div className="absolute -inset-4 bg-[hsl(var(--water))]/20 blur-3xl -z-10 animate-pulse-glow rounded-full pointer-events-none" aria-hidden="true" />
          </div>

          <div className="relative text-center py-12 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl border border-border animate-fade-in">
            <p className="text-sm text-muted-foreground mb-2">Water-Related Deaths This Year</p>
            <Counter value={currentDeaths} className="text-4xl md:text-6xl font-bold text-foreground counter-glow" />
            <p className="text-sm text-muted-foreground mt-2">people</p>
            <div className="absolute -inset-4 bg-red-500/20 blur-3xl -z-10 animate-pulse-glow rounded-full pointer-events-none" aria-hidden="true" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard 
            label="No Safe Water Access" 
            value={data?.access.noSafeWater || 0} 
            icon={AlertTriangle} 
            color="hsl(var(--destructive))"
            subtitle="people"
          />
          <StatCard 
            label="Consumption Per Second" 
            value={data?.consumption.perSecond || 0} 
            icon={TrendingUp} 
            color="hsl(var(--water))"
            subtitle="cubic meters/s"
          />
          <StatCard 
            label="Per Capita Usage" 
            value={data?.consumption.perCapita || 0} 
            icon={Users} 
            color="hsl(var(--water))"
            subtitle="m³/person/year"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <ChartCard title="Water Usage by Sector" icon={Droplet} color="hsl(var(--water))">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={usageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {usageData.map((entry, index) => (
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

          <ChartCard title="Water-Related Deaths by Cause" icon={AlertTriangle} color="hsl(var(--destructive))">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deathsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="deaths" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Access Statistics */}
        <ChartCard title="Water Access Statistics" icon={Users} color="hsl(var(--water))">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Safe Water Access</span>
                <span className="text-sm text-muted-foreground">{data?.access.percentage.safeWater}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[hsl(var(--water))] transition-all duration-1000"
                  style={{ width: `${data?.access.percentage.safeWater}%` }}
                />
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Basic Water Access</span>
                <span className="text-sm text-muted-foreground">{data?.access.percentage.basicWater}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[hsl(var(--water))] transition-all duration-1000"
                  style={{ width: `${data?.access.percentage.basicWater}%` }}
                />
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Safely Managed Services</span>
                <span className="text-sm text-muted-foreground">{data?.access.percentage.safelyManaged}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[hsl(var(--water))] transition-all duration-1000"
                  style={{ width: `${data?.access.percentage.safelyManaged}%` }}
                />
              </div>
            </div>
          </div>
        </ChartCard>

        {/* Data Sources */}
        <div className="mt-12 p-6 bg-card border border-border rounded-xl">
          <p className="text-sm text-muted-foreground">
            <strong>Data Sources:</strong> UNESCO, FAO, WHO, UN Water
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaterPage;
