import { Navigation } from "@/components/Navigation";
import { Users, Baby, Skull, TrendingUp, Globe } from "lucide-react";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { ExportButton } from "@/components/ExportButton";

const PopulationPage = () => {
  const births = useRealtimeCounter({ initialValue: 140000000, incrementPerSecond: 4.17 });
  const deaths = useRealtimeCounter({ initialValue: 60000000, incrementPerSecond: 1.80 });
  const netGrowth = useRealtimeCounter({ initialValue: 80000000, incrementPerSecond: 2.37 });

  // Historical world population data
  const historicalData = [
    { year: 1950, population: 2.5 },
    { year: 1960, population: 3.0 },
    { year: 1970, population: 3.7 },
    { year: 1980, population: 4.4 },
    { year: 1990, population: 5.3 },
    { year: 2000, population: 6.1 },
    { year: 2010, population: 6.9 },
    { year: 2020, population: 7.8 },
    { year: 2024, population: 8.2 },
  ];

  // Population by age group
  const ageData = [
    { name: "0-14 years", value: 25.4, color: "hsl(var(--chart-1))" },
    { name: "15-64 years", value: 65.3, color: "hsl(var(--chart-2))" },
    { name: "65+ years", value: 9.3, color: "hsl(var(--chart-3))" },
  ];

  // Regional population
  const regionalData = [
    { name: "Asia", population: 4678 },
    { name: "Africa", population: 1460 },
    { name: "Europe", population: 745 },
    { name: "Latin America", population: 662 },
    { name: "North America", population: 375 },
    { name: "Oceania", population: 45 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MetaTags
        title="World Population Live Counter"
        description="Real-time world population counter showing live births, deaths, and population growth. Track global population statistics, demographics, and trends with accurate data."
        keywords="world population, live counter, population growth, birth rate, death rate, demographics, global population statistics"
        canonical={`${window.location.origin}/population`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "World Population Statistics",
          description: "Real-time world population data including births, deaths, and growth rates",
          url: `${window.location.origin}/population`,
          keywords: ["population", "demographics", "birth rate", "death rate", "world statistics"],
          temporalCoverage: "1950/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: window.location.origin },
          { name: "Population Statistics", url: `${window.location.origin}/population` }
        ]}
      />
      <Navigation />

      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-8 animate-fade-in flex-wrap">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-[hsl(var(--population))]/20">
                <Users className="w-8 h-8 text-[hsl(var(--population))]" />
              </div>
              <div>
                <h1 className="text-4xl font-bold gradient-text">Population Statistics</h1>
                <p className="text-muted-foreground mt-2">Real-time global population data and demographic trends</p>
              </div>
            </div>
            <ExportButton 
              data={regionalData} 
              filename="population-statistics"
              variant="default"
              size="lg"
            />
          </div>

          {/* Main Counters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative text-center py-8 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl border border-border animate-fade-in">
              <Baby className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <p className="text-sm text-muted-foreground mb-2">Births This Year</p>
              <Counter value={births} className="text-3xl md:text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">{(births / 365).toFixed(0)} today</p>
            </div>

            <div className="relative text-center py-8 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl border border-border animate-fade-in">
              <Skull className="w-8 h-8 mx-auto mb-2 text-red-500" />
              <p className="text-sm text-muted-foreground mb-2">Deaths This Year</p>
              <Counter value={deaths} className="text-3xl md:text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">{(deaths / 365).toFixed(0)} today</p>
            </div>

            <div className="relative text-center py-8 bg-gradient-to-br from-[hsl(var(--population))]/10 to-transparent rounded-3xl border border-border animate-fade-in">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--population))]" />
              <p className="text-sm text-muted-foreground mb-2">Net Growth</p>
              <Counter value={netGrowth} className="text-3xl md:text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">{(netGrowth / 365).toFixed(0)} today</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard 
              label="Birth Rate" 
              value={18.1} 
              icon={Baby} 
              color="hsl(var(--population))"
              subtitle="per 1,000 people"
            />
            <StatCard 
              label="Death Rate" 
              value={7.8} 
              icon={Skull} 
              color="hsl(var(--population))"
              subtitle="per 1,000 people"
            />
            <StatCard 
              label="Life Expectancy" 
              value={73} 
              icon={Users} 
              color="hsl(var(--population))"
              subtitle="years"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="World Population Growth (Billions)" icon={TrendingUp} color="hsl(var(--population))">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalData}>
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
                  <Line 
                    type="monotone" 
                    dataKey="population" 
                    stroke="hsl(var(--population))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--population))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Population by Age Group (%)" icon={Users} color="hsl(var(--chart-2))">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={ageData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {ageData.map((entry, index) => (
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

          <ChartCard title="Population by Region (Millions)" icon={Globe} color="hsl(var(--population))">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={regionalData}>
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
                <Bar dataKey="population" fill="hsl(var(--population))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Data Sources */}
          <div className="mt-12 p-6 bg-card border border-border rounded-xl">
            <p className="text-sm text-muted-foreground">
              <strong>Data Sources:</strong> United Nations Department of Economic and Social Affairs (UN DESA), World Bank, Population Reference Bureau, CIA World Factbook
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PopulationPage;
