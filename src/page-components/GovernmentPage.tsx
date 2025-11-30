"use client";

import { Navigation } from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import { Landmark, DollarSign, Shield, GraduationCap, Car, Monitor, Bike, TrendingUp, Building2 } from "lucide-react";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const GovernmentPage = () => {
  // Updated from Worldometer.info Jan 2025
  const healthcareSpending = useRealtimeCounter({ initialValue: 16100000000, incrementPerSecond: 186500 });
  const educationSpending = useRealtimeCounter({ initialValue: 10600000000, incrementPerSecond: 122700 });
  const militarySpending = useRealtimeCounter({ initialValue: 4320000000, incrementPerSecond: 50000 });
  const carsProduced = useRealtimeCounter({ initialValue: 76000000, incrementPerSecond: 2.41 });
  const bicyclesProduced = useRealtimeCounter({ initialValue: 135000000, incrementPerSecond: 4.28 });
  const computersProduced = useRealtimeCounter({ initialValue: 190000000, incrementPerSecond: 6.02 });

  // Global government spending by sector (%)
  const spendingData = [
    { name: "Social Protection", value: 25, color: "hsl(var(--chart-1))" },
    { name: "Healthcare", value: 18, color: "hsl(var(--chart-2))" },
    { name: "Education", value: 14, color: "hsl(var(--chart-3))" },
    { name: "Defense", value: 10, color: "hsl(var(--chart-4))" },
    { name: "Infrastructure", value: 8, color: "hsl(var(--chart-5))" },
    { name: "Other", value: 25, color: "hsl(var(--muted))" },
  ];

  // Manufacturing by country (millions of units)
  const manufacturingData = [
    { country: "China", cars: 26, computers: 180 },
    { country: "USA", cars: 9.2, computers: 42 },
    { country: "Japan", cars: 7.8, computers: 15 },
    { country: "Germany", cars: 3.5, computers: 8 },
    { country: "South Korea", cars: 3.5, computers: 12 },
    { country: "India", cars: 4.6, computers: 10 },
  ];

  // Military spending by country (billions USD)
  const militaryData = [
    { country: "USA", spending: 877 },
    { country: "China", spending: 292 },
    { country: "Russia", spending: 109 },
    { country: "India", spending: 81 },
    { country: "Saudi Arabia", spending: 75 },
    { country: "UK", spending: 68 },
  ];

  // Education spending trends (% of GDP)
  const educationTrendData = [
    { year: 2000, percentage: 4.2 },
    { year: 2005, percentage: 4.5 },
    { year: 2010, percentage: 4.8 },
    { year: 2015, percentage: 4.7 },
    { year: 2020, percentage: 4.4 },
    { year: 2024, percentage: 4.6 },
  ];

  // Infrastructure investment by region (billions USD)
  const infrastructureData = [
    { region: "Asia", investment: 1700 },
    { region: "Europe", investment: 520 },
    { region: "North America", investment: 480 },
    { region: "Middle East", investment: 280 },
    { region: "Latin America", investment: 190 },
    { region: "Africa", investment: 120 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MetaTags
        title="Government Spending & Economics - Global Public Finance"
        description="Track global government spending on healthcare, education, military, and infrastructure. Real-time economic statistics and public finance data worldwide."
        keywords="government spending, public finance, military spending, education spending, healthcare spending, economic statistics"
        canonical={`${'https://www.creatormeter.com'}/government`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Global Government & Economics Statistics",
          description: "Real-time data on government spending, public finance, and economic indicators worldwide",
          url: `${'https://www.creatormeter.com'}/government`,
          keywords: ["government", "economics", "public spending", "finance", "military budget"],
          temporalCoverage: "2000/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: 'https://www.creatormeter.com' },
          { name: "Government & Economics", url: `${'https://www.creatormeter.com'}/government` }
        ]}
      />
      <Navigation />

      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="p-4 rounded-xl bg-[hsl(var(--government))]/20">
              <Landmark className="w-8 h-8 text-[hsl(var(--government))]" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <BackButton />
                <h1 className="text-4xl font-bold gradient-text">Government & Economics</h1>
              </div>
              <p className="text-muted-foreground mt-2">Global economic indicators, public spending, and production statistics</p>
            </div>
          </div>

          {/* Spending Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative text-center py-10 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl border border-border animate-fade-in">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-blue-500" />
              <p className="text-sm text-muted-foreground mb-2">Healthcare Spending Today</p>
              <Counter value={healthcareSpending} className="text-4xl md:text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">USD</p>
            </div>

            <div className="relative text-center py-10 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl border border-border animate-fade-in">
              <GraduationCap className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <p className="text-sm text-muted-foreground mb-2">Education Spending Today</p>
              <Counter value={educationSpending} className="text-4xl md:text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">USD</p>
            </div>

            <div className="relative text-center py-10 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl border border-border animate-fade-in">
              <Shield className="w-8 h-8 mx-auto mb-2 text-red-500" />
              <p className="text-sm text-muted-foreground mb-2">Military Spending Today</p>
              <Counter value={militarySpending} className="text-4xl md:text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">USD</p>
            </div>
          </div>

          {/* Production Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard 
              label="Cars Produced This Year" 
              value={carsProduced} 
              icon={Car} 
              color="hsl(var(--government))"
            />
            <StatCard 
              label="Bicycles Produced This Year" 
              value={bicyclesProduced} 
              icon={Bike} 
              color="hsl(var(--chart-2))"
            />
            <StatCard 
              label="Computers Produced This Year" 
              value={computersProduced} 
              icon={Monitor} 
              color="hsl(var(--chart-3))"
            />
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <StatCard 
              label="Global Debt" 
              value={305} 
              icon={DollarSign} 
              color="hsl(var(--destructive))"
              subtitle="trillion USD"
            />
            <StatCard 
              label="Tax Revenue (Global)" 
              value={14.2} 
              icon={Landmark} 
              color="hsl(var(--chart-4))"
              subtitle="trillion USD"
            />
            <StatCard 
              label="Public Investment" 
              value={3.3} 
              icon={Building2} 
              color="hsl(var(--chart-5))"
              subtitle="trillion USD"
            />
            <StatCard 
              label="Global Trade" 
              value={28.5} 
              icon={TrendingUp} 
              color="hsl(var(--chart-1))"
              subtitle="trillion USD"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Government Spending by Sector (%)" icon={Landmark} color="hsl(var(--government))">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={spendingData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {spendingData.map((entry, index) => (
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

            <ChartCard title="Top Military Spenders (Billions USD)" icon={Shield} color="hsl(var(--destructive))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={militaryData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="spending" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Education Spending Trend (% of GDP)" icon={GraduationCap} color="hsl(var(--chart-3))">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={educationTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[4, 5]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="percentage" 
                    stroke="hsl(var(--chart-3))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--chart-3))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Infrastructure Investment (Billions USD)" icon={Building2} color="hsl(var(--chart-5))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={infrastructureData}>
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
                  <Bar dataKey="investment" fill="hsl(var(--chart-5))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <ChartCard title="Car Production by Country (Millions)" icon={Car} color="hsl(var(--government))">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={manufacturingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="cars" fill="hsl(var(--government))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Data Sources */}
          <div className="mt-12 p-6 bg-card border border-border rounded-xl">
            <p className="text-sm text-muted-foreground">
              <strong>Data Sources:</strong> OECD, World Bank, IMF, SIPRI Military Expenditure Database, UNESCO, OICA (International Organization of Motor Vehicle Manufacturers)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GovernmentPage;
