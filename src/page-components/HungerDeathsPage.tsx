"use client";

import { Navigation } from "@/components/Navigation";
import { Skull, TrendingDown, Users, MapPin } from "lucide-react";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const HungerDeathsPage = () => {
  const hungerDeathsToday = useRealtimeCounter({ initialValue: 24000, incrementPerSecond: 0.277 });
  const hungerDeathsThisYear = useRealtimeCounter({ initialValue: 9000000, incrementPerSecond: 0.285 });
  const undernourishedPeople = 828000000;

  const deathsByRegion = [
    { region: "Sub-Saharan Africa", deaths: 3200 },
    { region: "South Asia", deaths: 2800 },
    { region: "Southeast Asia", deaths: 1100 },
    { region: "Latin America", deaths: 450 },
    { region: "Middle East", deaths: 380 },
    { region: "Other", deaths: 270 },
  ];

  const historicalTrend = [
    { year: 2000, deaths: 15000000 },
    { year: 2005, deaths: 12500000 },
    { year: 2010, deaths: 10200000 },
    { year: 2015, deaths: 9800000 },
    { year: 2020, deaths: 9500000 },
    { year: 2024, deaths: 9000000 },
  ];

  const faqData = [
    {
      question: "How many people die from hunger per day?",
      answer: "Approximately 24,000 people die from hunger-related causes every day worldwide, which equals about 9 million deaths per year. This includes deaths from starvation and malnutrition-related diseases."
    },
    {
      question: "Which regions are most affected by hunger deaths?",
      answer: "Sub-Saharan Africa and South Asia account for the majority of hunger-related deaths, with over 75% of global hunger deaths occurring in these regions due to poverty, conflict, and climate change."
    },
    {
      question: "How many people are undernourished globally?",
      answer: "According to the UN, approximately 828 million people worldwide are undernourished, meaning they lack regular access to enough nutritious food to maintain a healthy life."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MetaTags
        title="How Many People Die from Hunger Per Day? Global Hunger Statistics"
        description="24,000 people die from hunger every day. Track real-time hunger deaths worldwide, regional breakdowns, and historical trends. Data from UN FAO and World Food Programme."
        keywords="hunger deaths per day, people die from hunger, world hunger statistics, malnutrition deaths, food insecurity, global hunger crisis"
        canonical={`${typeof window !== 'undefined' ? window.location.origin : ''}/how-many-people-die-from-hunger-per-day`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Global Hunger Deaths Statistics",
          description: "Real-time data on hunger-related deaths worldwide",
          url: `${typeof window !== 'undefined' ? window.location.origin : ''}/how-many-people-die-from-hunger-per-day`,
          keywords: ["hunger", "malnutrition", "food security", "starvation deaths"],
          temporalCoverage: "2000/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: window.location.origin },
          { name: "Hunger Deaths Statistics", url: `${typeof window !== 'undefined' ? window.location.origin : ''}/how-many-people-die-from-hunger-per-day` }
        ]}
      />
      <Navigation />

      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="p-4 rounded-xl bg-red-500/20">
              <Skull className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-text">How Many People Die from Hunger Per Day?</h1>
              <p className="text-muted-foreground mt-2">Real-time global hunger death statistics and trends</p>
            </div>
          </div>

          {/* Main Counters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="text-center py-8 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl border border-border">
              <Skull className="w-8 h-8 mx-auto mb-2 text-red-500" />
              <p className="text-sm text-muted-foreground mb-2">Hunger Deaths Today</p>
              <Counter value={hungerDeathsToday} className="text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">~1 person every 3.6 seconds</p>
            </div>

            <div className="text-center py-8 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl border border-border">
              <TrendingDown className="w-8 h-8 mx-auto mb-2 text-red-500" />
              <p className="text-sm text-muted-foreground mb-2">Hunger Deaths This Year</p>
              <Counter value={hungerDeathsThisYear} className="text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">Approximately 9 million annually</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard 
              label="Undernourished People" 
              value={undernourishedPeople} 
              icon={Users} 
              color="hsl(var(--destructive))"
              subtitle="globally"
            />
            <StatCard 
              label="Children Under 5 Deaths" 
              value={3100000} 
              icon={Skull} 
              color="hsl(var(--destructive))"
              subtitle="per year from malnutrition"
            />
            <StatCard 
              label="Food Insecure" 
              value={2400000000} 
              icon={TrendingDown} 
              color="hsl(var(--destructive))"
              subtitle="moderate or severe"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Hunger Deaths by Region (Daily Average)" icon={MapPin} color="hsl(var(--destructive))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={deathsByRegion}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-45} textAnchor="end" height={100} />
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

            <ChartCard title="Historical Trend: Annual Hunger Deaths" icon={TrendingDown} color="hsl(var(--destructive))">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalTrend}>
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
                    dataKey="deaths" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--destructive))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* FAQ Section */}
          <div className="mb-12 p-6 bg-card border border-border rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Sources */}
          <div className="p-6 bg-card border border-border rounded-xl">
            <p className="text-sm text-muted-foreground">
              <strong>Data Sources:</strong> United Nations Food and Agriculture Organization (FAO), World Food Programme (WFP), World Health Organization (WHO), UNICEF State of the World's Children Report
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HungerDeathsPage;