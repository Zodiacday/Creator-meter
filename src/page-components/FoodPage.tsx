"use client";

import { Navigation } from "@/components/Navigation";
import { Apple, UtensilsCrossed, Scale, AlertTriangle, TrendingUp, Globe } from "lucide-react";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const FoodPage = () => {
  const undernourished = useRealtimeCounter({ initialValue: 892000000, incrementPerSecond: 0 });
  const overweight = useRealtimeCounter({ initialValue: 1786000000, incrementPerSecond: 0 });
  const obese = useRealtimeCounter({ initialValue: 900000000, incrementPerSecond: 0 });

  // Malnutrition breakdown
  const malnutritionData = [
    { name: "Undernourished", value: 828, color: "#ef4444" },
    { name: "Micronutrient Deficiency", value: 2000, color: "#f97316" },
    { name: "Overweight", value: 1900, color: "#eab308" },
    { name: "Obese", value: 890, color: "#dc2626" },
  ];

  // Food waste by region (million tons)
  const foodWasteData = [
    { region: "Asia", waste: 421 },
    { region: "Europe", waste: 153 },
    { region: "North America", waste: 136 },
    { region: "Latin America", waste: 127 },
    { region: "Africa", waste: 102 },
    { region: "Oceania", waste: 28 },
  ];

  // Hunger trends
  const hungerTrendData = [
    { year: 2010, people: 690 },
    { year: 2012, people: 650 },
    { year: 2014, people: 625 },
    { year: 2016, people: 605 },
    { year: 2018, people: 680 },
    { year: 2020, people: 768 },
    { year: 2022, people: 828 },
  ];

  // Dietary composition
  const dietData = [
    { name: "Cereals", value: 50, color: "hsl(var(--chart-1))" },
    { name: "Vegetables", value: 18, color: "hsl(var(--chart-2))" },
    { name: "Meat & Fish", value: 16, color: "hsl(var(--chart-3))" },
    { name: "Dairy", value: 10, color: "hsl(var(--chart-4))" },
    { name: "Other", value: 6, color: "hsl(var(--chart-5))" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MetaTags
        title="World Food & Nutrition Statistics"
        description="Real-time global food security and nutrition statistics. Track hunger, malnutrition, obesity, and food waste data worldwide with live counters."
        keywords="food statistics, world hunger, malnutrition, obesity, food security, nutrition data, food waste"
        canonical={`${'https://www.creatormeter.com'}/food`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Global Food & Nutrition Statistics",
          description: "Real-time data on world hunger, malnutrition, food security, and dietary patterns",
          url: `${'https://www.creatormeter.com'}/food`,
          keywords: ["food", "nutrition", "hunger", "malnutrition", "food security"],
          temporalCoverage: "2010/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: 'https://www.creatormeter.com' },
          { name: "Food & Nutrition", url: `${'https://www.creatormeter.com'}/food` }
        ]}
      />
      <Navigation />

      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="p-4 rounded-xl bg-[hsl(var(--food))]/20">
              <Apple className="w-8 h-8 text-[hsl(var(--food))]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-text">Food & Nutrition</h1>
              <p className="text-muted-foreground mt-2">Global nutrition, food security, and dietary patterns</p>
            </div>
          </div>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative text-center py-10 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl border border-border animate-fade-in">
              <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-red-500" />
              <p className="text-sm text-muted-foreground mb-2">Undernourished People</p>
              <Counter value={undernourished} className="text-4xl md:text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">9.8% of world population</p>
            </div>

            <div className="relative text-center py-10 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-3xl border border-border animate-fade-in">
              <Scale className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
              <p className="text-sm text-muted-foreground mb-2">Overweight People</p>
              <Counter value={overweight} className="text-4xl md:text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">39% of world population</p>
            </div>

            <div className="relative text-center py-10 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl border border-border animate-fade-in">
              <Scale className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              <p className="text-sm text-muted-foreground mb-2">Obese People</p>
              <Counter value={obese} className="text-4xl md:text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">13% of world population</p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <StatCard 
              label="Food Waste Annually" 
              value={931} 
              icon={AlertTriangle} 
              color="hsl(var(--destructive))"
              subtitle="million tons"
            />
            <StatCard 
              label="Stunted Children" 
              value={149} 
              icon={UtensilsCrossed} 
              color="hsl(var(--food))"
              subtitle="million"
            />
            <StatCard 
              label="Calories Per Person/Day" 
              value={2870} 
              icon={Apple} 
              color="hsl(var(--chart-2))"
              subtitle="global average"
            />
            <StatCard 
              label="Protein Intake" 
              value={81} 
              icon={Scale} 
              color="hsl(var(--chart-3))"
              subtitle="grams/day"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Global Malnutrition (Millions)" icon={AlertTriangle} color="hsl(var(--food))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={malnutritionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-15} textAnchor="end" height={70} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="value" fill="hsl(var(--food))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Food Waste by Region (Million Tons)" icon={Globe} color="hsl(var(--chart-5))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={foodWasteData}>
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
                  <Bar dataKey="waste" fill="hsl(var(--chart-5))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Hunger Trends (Millions)" icon={TrendingUp} color="hsl(var(--destructive))">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={hungerTrendData}>
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
                    dataKey="people" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--destructive))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Global Dietary Composition (%)" icon={UtensilsCrossed} color="hsl(var(--food))">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={dietData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dietData.map((entry, index) => (
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
              <strong>Data Sources:</strong> FAO (Food and Agriculture Organization), WHO, World Food Programme, Global Nutrition Report, UNICEF
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FoodPage;
