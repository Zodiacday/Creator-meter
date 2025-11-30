"use client";

import { Navigation } from "@/components/Navigation";
import { Leaf, Trees, Cloud, FlaskConical, TrendingUp, AlertTriangle, ThermometerSun } from "lucide-react";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";

const EnvironmentPage = () => {
  // Worldometer.info CO2 data: 33.4B tons year-to-date (15 days)
  const forestLoss = useRealtimeCounter({ initialValue: 4370000, incrementPerSecond: 0.34 });
  const co2Emissions = useRealtimeCounter({ initialValue: 33440000000, incrementPerSecond: 1060 });
  const toxicChemicals = useRealtimeCounter({ initialValue: 8230000, incrementPerSecond: 0.26 });

  // Deforestation by region (million hectares)
  const deforestationData = [
    { region: "Latin America", loss: 4.2 },
    { region: "Africa", loss: 3.9 },
    { region: "Southeast Asia", loss: 1.4 },
    { region: "Oceania", loss: 0.5 },
  ];

  // Greenhouse gases distribution
  const ghgData = [
    { name: "CO₂", value: 76, color: "#ef4444" },
    { name: "Methane", value: 16, color: "#f97316" },
    { name: "Nitrous Oxide", value: 6, color: "#eab308" },
    { name: "Fluorinated", value: 2, color: "#06b6d4" },
  ];

  // Global temperature increase
  const tempData = [
    { year: 1880, temp: -0.16 },
    { year: 1900, temp: -0.08 },
    { year: 1920, temp: -0.27 },
    { year: 1940, temp: 0.13 },
    { year: 1960, temp: -0.03 },
    { year: 1980, temp: 0.26 },
    { year: 2000, temp: 0.61 },
    { year: 2020, temp: 1.02 },
    { year: 2024, temp: 1.18 },
  ];

  // Plastic pollution by type
  const plasticData = [
    { type: "Single-use", amount: 160 },
    { type: "Microplastics", amount: 52 },
    { type: "Fishing Gear", amount: 18 },
    { type: "Industrial", amount: 42 },
    { type: "Other", amount: 28 },
  ];

  // Biodiversity loss
  const speciesData = [
    { name: "Critically Endangered", value: 9126, color: "#dc2626" },
    { name: "Endangered", value: 16306, color: "#f97316" },
    { name: "Vulnerable", value: 12823, color: "#eab308" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MetaTags
        title="Environment Statistics - Climate Change & Sustainability"
        description="Real-time environmental statistics including CO2 emissions, deforestation, climate change data, and biodiversity indicators. Track global environmental impact live."
        keywords="environment statistics, climate change, co2 emissions, deforestation, global warming, sustainability, environmental data"
        canonical={`${typeof window !== 'undefined' ? window.location.origin : ''}/environment`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Global Environmental Statistics",
          description: "Real-time data on climate change, deforestation, emissions, and environmental indicators worldwide",
          url: `${typeof window !== 'undefined' ? window.location.origin : ''}/environment`,
          keywords: ["environment", "climate change", "emissions", "deforestation", "sustainability"],
          temporalCoverage: "1880/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: window.location.origin },
          { name: "Environment Statistics", url: `${typeof window !== 'undefined' ? window.location.origin : ''}/environment` }
        ]}
      />
      <Navigation />

      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="p-4 rounded-xl bg-[hsl(var(--environment))]/20">
              <Leaf className="w-8 h-8 text-[hsl(var(--environment))]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-text">Environment</h1>
              <p className="text-muted-foreground mt-2">Environmental impact, climate change, and biodiversity indicators</p>
            </div>
          </div>

          {/* Main Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative text-center py-10 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl border border-border animate-fade-in">
              <Trees className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <p className="text-sm text-muted-foreground mb-2">Forest Loss This Year</p>
              <Counter value={forestLoss} className="text-4xl md:text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">hectares</p>
            </div>

            <div className="relative text-center py-10 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl border border-border animate-fade-in">
              <Cloud className="w-8 h-8 mx-auto mb-2 text-red-500" />
              <p className="text-sm text-muted-foreground mb-2">CO₂ Emissions This Year</p>
              <Counter value={co2Emissions} className="text-4xl md:text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">metric tons</p>
            </div>

            <div className="relative text-center py-10 bg-card rounded-3xl border border-border animate-fade-in">
              <FlaskConical className="w-8 h-8 mx-auto mb-2 text-foreground" />
              <p className="text-sm text-muted-foreground mb-2">Toxic Chemicals Released</p>
              <Counter value={toxicChemicals} className="text-4xl md:text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">tons this year</p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <StatCard 
              label="Global Temperature Rise" 
              value={1.18} 
              icon={ThermometerSun} 
              color="hsl(var(--destructive))"
              subtitle="°C since 1880"
            />
            <StatCard 
              label="Species Threatened" 
              value={38255} 
              icon={AlertTriangle} 
              color="hsl(var(--chart-4))"
              subtitle="IUCN Red List"
            />
            <StatCard 
              label="Plastic in Oceans" 
              value={300} 
              icon={FlaskConical} 
              color="hsl(var(--chart-5))"
              subtitle="million tons"
            />
            <StatCard 
              label="Renewable Energy" 
              value={29} 
              icon={Leaf} 
              color="hsl(var(--chart-3))"
              subtitle="% of total energy"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Deforestation by Region (Million Hectares/Year)" icon={Trees} color="hsl(var(--environment))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={deforestationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="loss" fill="hsl(var(--environment))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Greenhouse Gas Emissions (%)" icon={Cloud} color="hsl(var(--destructive))">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={ghgData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {ghgData.map((entry, index) => (
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Global Temperature Anomaly (°C)" icon={ThermometerSun} color="hsl(var(--destructive))">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={tempData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="temp" 
                    stroke="hsl(var(--destructive))" 
                    fill="hsl(var(--destructive))"
                    fillOpacity={0.3}
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Ocean Plastic Pollution (Million Tons)" icon={FlaskConical} color="hsl(var(--chart-5))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={plasticData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="type" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="amount" fill="hsl(var(--chart-5))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Biodiversity Loss */}
          <ChartCard title="Threatened Species (IUCN Red List)" icon={AlertTriangle} color="hsl(var(--chart-4))">
            <div className="space-y-6">
              {speciesData.map((category, index) => (
                <div key={category.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm text-muted-foreground">{category.value.toLocaleString()} species</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full transition-all duration-1000"
                      style={{ 
                        width: `${(category.value / 38255) * 100}%`,
                        backgroundColor: category.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>

          {/* Data Sources */}
          <div className="mt-12 p-6 bg-card border border-border rounded-xl">
            <p className="text-sm text-muted-foreground">
              <strong>Data Sources:</strong> IPCC, NASA, NOAA, FAO Global Forest Resources Assessment, IUCN Red List, Global Carbon Project, UN Environment Programme
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EnvironmentPage;
