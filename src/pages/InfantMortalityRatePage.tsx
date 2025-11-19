import { Navigation } from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import { Baby, Heart, TrendingDown, Globe } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Counter } from "@/components/Counter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const InfantMortalityRatePage = () => {
  const infantDeathsToday = useRealtimeCounter({ initialValue: 15000, incrementPerSecond: 0.174 });

  const highestIMR = [
    { country: "Afghanistan", rate: 103.1 },
    { country: "Somalia", rate: 88.4 },
    { country: "Central African Republic", rate: 84.3 },
    { country: "Chad", rate: 79.4 },
    { country: "Nigeria", rate: 74.5 },
    { country: "Sierra Leone", rate: 72.3 },
  ];

  const lowestIMR = [
    { country: "Iceland", rate: 1.5 },
    { country: "Japan", rate: 1.8 },
    { country: "Singapore", rate: 1.9 },
    { country: "Norway", rate: 2.0 },
    { country: "Finland", rate: 2.1 },
    { country: "Estonia", rate: 2.3 },
  ];

  const historicalTrend = [
    { year: 1990, rate: 65 },
    { year: 2000, rate: 51 },
    { year: 2010, rate: 38 },
    { year: 2015, rate: 32 },
    { year: 2020, rate: 27 },
    { year: 2024, rate: 26 },
  ];

  const faqData = [
    {
      question: "What is infant mortality rate?",
      answer: "Infant mortality rate (IMR) is the number of deaths of infants under one year old per 1,000 live births. It's a key indicator of healthcare quality, maternal health, and overall societal development."
    },
    {
      question: "Which country has the highest infant mortality rate?",
      answer: "Afghanistan has the highest infant mortality rate at 103.1 deaths per 1,000 live births, meaning over 10% of babies don't survive their first year. This is due to conflict, limited healthcare access, and malnutrition."
    },
    {
      question: "How has global infant mortality changed?",
      answer: "Global infant mortality has dramatically improved, dropping from 65 per 1,000 in 1990 to 26 per 1,000 in 2024. This represents millions of lives saved through better healthcare, vaccines, and nutrition."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Infant Mortality Rate by Country 2025 - Global Child Health Statistics"
        description="15,000 infants die daily worldwide. Track infant mortality rates by country. Afghanistan highest at 103.1 per 1,000 births. Current IMR data and trends."
        keywords="infant mortality rate, child mortality, infant deaths, IMR by country, under-5 mortality, neonatal mortality"
        canonical={`${window.location.origin}/infant-mortality-rate`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Infant Mortality Rate by Country",
          description: "Infant mortality statistics for countries worldwide",
          url: `${window.location.origin}/infant-mortality-rate`,
          keywords: ["infant mortality", "child health", "healthcare", "demographics"]
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <Navigation />
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <BackButton />
            <h1 className="text-4xl font-bold gradient-text mb-8">Infant Mortality Rate by Country</h1>
          </div>
          <div className="text-center py-8 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl border border-border mb-12">
            <Baby className="w-8 h-8 mx-auto mb-2 text-red-500" />
            <p className="text-sm text-muted-foreground mb-2">Infant Deaths Today</p>
            <Counter value={infantDeathsToday} className="text-5xl font-bold text-foreground counter-glow" />
            <p className="text-xs text-muted-foreground mt-2">~5.5 million deaths annually</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <StatCard label="World Average IMR" value={26} icon={Globe} color="hsl(var(--destructive))" subtitle="per 1,000 births" />
            <StatCard label="Highest - Afghanistan" value={103.1} icon={Heart} color="hsl(var(--chart-1))" subtitle="per 1,000 births" />
            <StatCard label="Lowest - Iceland" value={1.5} icon={Baby} color="hsl(var(--chart-2))" subtitle="per 1,000 births" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Countries with Highest IMR" icon={Heart} color="hsl(var(--chart-1))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={highestIMR}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-15} textAnchor="end" height={80} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="rate" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
            <ChartCard title="Countries with Lowest IMR" icon={Baby} color="hsl(var(--chart-2))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={lowestIMR}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="rate" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
          <ChartCard title="Global Infant Mortality Trend (per 1,000 births)" icon={TrendingDown} color="hsl(var(--population))">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={historicalTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                <Line type="monotone" dataKey="rate" stroke="hsl(var(--population))" strokeWidth={3} dot={{ fill: 'hsl(var(--population))' }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
          <div className="mt-12 p-6 bg-card border border-border rounded-xl">
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
        </div>
      </main>
    </div>
  );
};

export default InfantMortalityRatePage;
