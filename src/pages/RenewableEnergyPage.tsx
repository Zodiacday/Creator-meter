import { Navigation } from "@/components/Navigation";
import { Zap, Wind, Sun, Globe } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const RenewableEnergyPage = () => {
  const topRenewable = [
    { country: "Iceland", percentage: 100 },
    { country: "Paraguay", percentage: 100 },
    { country: "Norway", percentage: 98.5 },
    { country: "Costa Rica", percentage: 98.2 },
    { country: "New Zealand", percentage: 84.1 },
    { country: "Brazil", percentage: 83.4 },
  ];

  const largestProducers = [
    { country: "China", capacity: 1161 },
    { country: "United States", capacity: 352 },
    { country: "Brazil", capacity: 175 },
    { country: "India", capacity: 163 },
    { country: "Germany", capacity: 148 },
    { country: "Canada", capacity: 102 },
  ];

  const faqData = [
    {
      question: "Which countries use 100% renewable energy?",
      answer: "Iceland and Paraguay both achieve 100% renewable energy in electricity generation. Iceland relies on geothermal and hydroelectric power, while Paraguay uses mainly hydroelectric dams."
    },
    {
      question: "What is the most common renewable energy source?",
      answer: "Hydroelectric power is the most widely used renewable energy source globally, accounting for about 16% of global electricity generation. Solar and wind power are growing rapidly."
    },
    {
      question: "Which country produces the most renewable energy?",
      answer: "China is the world's largest producer of renewable energy with 1,161 GW capacity, primarily from hydroelectric, wind, and solar power. The US ranks second with 352 GW."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Renewable Energy by Country 2025 - Global Clean Energy Statistics"
        description="Iceland and Paraguay run on 100% renewable energy. Compare renewable energy usage and capacity by country. Current data on solar, wind, hydro, and geothermal power."
        keywords="renewable energy by country, clean energy statistics, solar power, wind energy, hydroelectric, sustainable energy"
        canonical={`${window.location.origin}/renewable-energy-by-country`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Renewable Energy by Country",
          description: "Renewable energy statistics and capacity by country",
          url: `${window.location.origin}/renewable-energy-by-country`,
          keywords: ["renewable energy", "clean energy", "solar power", "wind energy", "sustainability"]
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <Navigation />
      <noscript>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Renewable Energy by Country 2025</h1>
          <p className="text-muted-foreground">
            Iceland and Paraguay run on 100% renewable energy. Compare renewable energy usage and capacity by country. 
            Current data on solar, wind, hydro, and geothermal power from International Energy Agency. 
            Enable JavaScript for interactive visualizations.
          </p>
        </div>
      </noscript>
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold gradient-text mb-8">Renewable Energy by Country 2025</h1>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <StatCard label="Global Renewable Share" value={29.4} icon={Globe} color="hsl(var(--energy))" subtitle="% of electricity" />
            <StatCard label="Solar Capacity Worldwide" value={1419} icon={Sun} color="hsl(var(--chart-3))" subtitle="GW" />
            <StatCard label="Wind Capacity Worldwide" value={1021} icon={Wind} color="hsl(var(--chart-4))" subtitle="GW" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Highest Renewable Energy Share (%)" icon={Zap} color="hsl(var(--energy))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topRenewable}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" domain={[75, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="percentage" fill="hsl(var(--energy))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
            <ChartCard title="Largest Renewable Capacity (GW)" icon={Wind} color="hsl(var(--chart-4))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={largestProducers}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="capacity" fill="hsl(var(--chart-4))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
          <div className="p-6 bg-card border border-border rounded-xl">
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

export default RenewableEnergyPage;
