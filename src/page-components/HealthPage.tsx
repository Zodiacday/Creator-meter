"use client";

import { Navigation } from "@/components/Navigation";
import { Heart, Activity, Stethoscope, Pill, TrendingDown, DollarSign } from "lucide-react";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { ExportButton } from "@/components/ExportButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";

const HealthPage = () => {
  const infectiousDeaths = useRealtimeCounter({ initialValue: 17000000, incrementPerSecond: 0.54 });
  const cancerDeaths = useRealtimeCounter({ initialValue: 8200000, incrementPerSecond: 0.26 });
  const smokingDeaths = useRealtimeCounter({ initialValue: 5000000, incrementPerSecond: 0.16 });
  const alcoholDeaths = useRealtimeCounter({ initialValue: 2500000, incrementPerSecond: 0.08 });
  const trafficDeaths = useRealtimeCounter({ initialValue: 1350000, incrementPerSecond: 0.043 });
  const healthSpending = useRealtimeCounter({ initialValue: 9000000000000, incrementPerSecond: 285430 });

  // Leading causes of death
  const deathCausesData = [
    { name: "Cardiovascular", deaths: 17900000, color: "#ef4444" },
    { name: "Cancer", deaths: 10000000, color: "#f97316" },
    { name: "Respiratory", deaths: 4100000, color: "#eab308" },
    { name: "Diabetes", deaths: 1500000, color: "#84cc16" },
    { name: "Alzheimer's", deaths: 1500000, color: "#06b6d4" },
    { name: "Road Injuries", deaths: 1350000, color: "#8b5cf6" },
  ];

  // Healthcare spending by region (billions USD)
  const spendingData = [
    { region: "North America", spending: 4200 },
    { region: "Europe", spending: 2300 },
    { region: "Asia", spending: 1800 },
    { region: "Latin America", spending: 450 },
    { region: "Middle East", spending: 380 },
    { region: "Africa", spending: 120 },
  ];

  // Life expectancy trends
  const lifeExpectancyData = [
    { year: 1960, years: 52.5 },
    { year: 1980, years: 63.0 },
    { year: 2000, years: 66.8 },
    { year: 2010, years: 70.0 },
    { year: 2020, years: 72.8 },
    { year: 2024, years: 73.4 },
  ];

  // Access to healthcare
  const accessData = [
    { name: "Universal Health Coverage", value: 68, color: "hsl(var(--chart-1))" },
    { name: "Limited Access", value: 22, color: "hsl(var(--chart-2))" },
    { name: "No Access", value: 10, color: "hsl(var(--destructive))" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MetaTags
        title="World Health Statistics - Global Healthcare Data"
        description="Real-time global health statistics including mortality rates, disease data, healthcare spending, and life expectancy. Track health indicators and medical statistics worldwide."
        keywords="health statistics, global health, mortality data, healthcare spending, life expectancy, disease statistics, world health"
        canonical={`${'https://www.creatormeter.com'}/health`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Global Health Statistics",
          description: "Comprehensive world health data including disease mortality, healthcare spending, and life expectancy",
          url: `${'https://www.creatormeter.com'}/health`,
          keywords: ["health", "mortality", "healthcare", "life expectancy", "disease statistics"],
          temporalCoverage: "2024/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: 'https://www.creatormeter.com' },
          { name: "Health Statistics", url: `${'https://www.creatormeter.com'}/health` }
        ]}
      />
      <Navigation />

      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-8 animate-fade-in flex-wrap">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-[hsl(var(--health))]/20">
                <Heart className="w-8 h-8 text-[hsl(var(--health))]" />
              </div>
              <div>
                <h1 className="text-4xl font-bold gradient-text">Health Statistics</h1>
                <p className="text-muted-foreground mt-2">Global health indicators, mortality data, and healthcare spending</p>
              </div>
            </div>
            <ExportButton 
              data={deathCausesData} 
              filename="health-statistics"
              variant="default"
              size="lg"
            />
          </div>

          {/* Main Counter */}
          <div className="relative mb-12 text-center py-12 bg-gradient-to-br from-[hsl(var(--health))]/10 to-transparent rounded-3xl border border-border animate-fade-in">
            <DollarSign className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--health))]" />
            <p className="text-sm text-muted-foreground mb-2">Global Healthcare Spending This Year</p>
            <Counter value={healthSpending} className="text-5xl md:text-7xl font-bold text-foreground counter-glow" />
            <p className="text-sm text-muted-foreground mt-2">USD</p>
            <div className="absolute -inset-4 bg-[hsl(var(--health))]/20 blur-3xl -z-10 animate-pulse-glow rounded-full pointer-events-none" aria-hidden="true" />
          </div>

          {/* Death Counters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <StatCard 
              label="Infectious Disease Deaths" 
              value={infectiousDeaths} 
              icon={Stethoscope} 
              color="hsl(var(--health))"
              subtitle="this year"
              increment={1}
            />
            <StatCard 
              label="Cancer Deaths" 
              value={cancerDeaths} 
              icon={Activity} 
              color="hsl(var(--destructive))"
              subtitle="this year"
            />
            <StatCard 
              label="Smoking-Related Deaths" 
              value={smokingDeaths} 
              icon={TrendingDown} 
              color="hsl(var(--chart-4))"
              subtitle="this year"
            />
            <StatCard 
              label="Alcohol-Related Deaths" 
              value={alcoholDeaths} 
              icon={Pill} 
              color="hsl(var(--chart-5))"
              subtitle="this year"
            />
            <StatCard 
              label="Road Traffic Deaths" 
              value={trafficDeaths} 
              icon={Activity} 
              color="hsl(var(--muted))"
              subtitle="this year"
            />
            <StatCard 
              label="Global Life Expectancy" 
              value={73} 
              icon={Heart} 
              color="hsl(var(--chart-3))"
              subtitle="years"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Leading Causes of Death Globally" icon={Activity} color="hsl(var(--health))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={deathCausesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="deaths" fill="hsl(var(--health))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Healthcare Spending by Region (Billions)" icon={DollarSign} color="hsl(var(--chart-2))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={spendingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-15} textAnchor="end" height={60} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="spending" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Global Life Expectancy Trend" icon={TrendingDown} color="hsl(var(--chart-3))">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lifeExpectancyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[50, 75]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="years" 
                    stroke="hsl(var(--chart-3))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--chart-3))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Access to Healthcare (%)" icon={Stethoscope} color="hsl(var(--health))">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={accessData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {accessData.map((entry, index) => (
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

          {/* Data Sources */}
          <div className="mt-12 p-6 bg-card border border-border rounded-xl">
            <p className="text-sm text-muted-foreground">
              <strong>Data Sources:</strong> World Health Organization (WHO), Global Burden of Disease Study, World Bank, Institute for Health Metrics and Evaluation (IHME), CDC
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HealthPage;
