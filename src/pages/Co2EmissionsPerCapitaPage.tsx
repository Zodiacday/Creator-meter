import { Navigation } from "@/components/Navigation";
import { Cloud, TrendingUp, Globe, Factory } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const Co2EmissionsPerCapitaPage = () => {
  const highestEmitters = [
    { country: "Qatar", emissions: 37.6 },
    { country: "Kuwait", emissions: 25.6 },
    { country: "UAE", emissions: 25.3 },
    { country: "Bahrain", emissions: 23.4 },
    { country: "Saudi Arabia", emissions: 19.3 },
    { country: "Australia", emissions: 16.8 },
  ];

  const lowestEmitters = [
    { country: "Burundi", emissions: 0.06 },
    { country: "Chad", emissions: 0.08 },
    { country: "Somalia", emissions: 0.09 },
    { country: "Niger", emissions: 0.11 },
    { country: "Mali", emissions: 0.31 },
    { country: "Afghanistan", emissions: 0.33 },
  ];

  const faqData = [
    {
      question: "What is CO2 emissions per capita?",
      answer: "CO2 emissions per capita measures the average amount of carbon dioxide produced per person in a country per year, measured in metric tons. It accounts for a country's total emissions divided by its population."
    },
    {
      question: "Which country has the highest CO2 emissions per capita?",
      answer: "Qatar has the highest CO2 emissions per capita at 37.6 metric tons per person annually, largely due to its oil and gas industry, high energy consumption for cooling, and small population."
    },
    {
      question: "Why do some countries have very low per capita emissions?",
      answer: "Countries with the lowest emissions per capita, like Burundi (0.06 tons), typically have limited industrialization, low electricity access, and rely heavily on renewable biomass for energy."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="CO2 Emissions Per Capita by Country 2025 - Carbon Footprint Data"
        description="Qatar leads with 37.6 tons CO2 per person annually. Compare carbon emissions per capita by country. Current data on carbon footprints and climate impact."
        keywords="co2 emissions per capita, carbon footprint by country, greenhouse gas emissions, climate change data, carbon emissions"
        canonical={`${window.location.origin}/co2-emissions-per-capita`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "CO2 Emissions Per Capita by Country",
          description: "Carbon dioxide emissions per person by country",
          url: `${window.location.origin}/co2-emissions-per-capita`,
          keywords: ["co2 emissions", "carbon footprint", "climate change", "greenhouse gases"]
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <Navigation />
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold gradient-text mb-8">CO2 Emissions Per Capita 2025</h1>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <StatCard label="World Average" value={4.7} icon={Globe} color="hsl(var(--environment))" subtitle="tons CO2/person/year" />
            <StatCard label="Highest - Qatar" value={37.6} icon={Factory} color="hsl(var(--chart-1))" subtitle="tons CO2/person/year" />
            <StatCard label="Lowest - Burundi" value={0.06} icon={Cloud} color="hsl(var(--chart-2))" subtitle="tons CO2/person/year" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Highest CO2 Emitters Per Capita" icon={Factory} color="hsl(var(--chart-1))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={highestEmitters}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="emissions" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
            <ChartCard title="Lowest CO2 Emitters Per Capita" icon={Cloud} color="hsl(var(--chart-2))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={lowestEmitters}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="emissions" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
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

export default Co2EmissionsPerCapitaPage;
