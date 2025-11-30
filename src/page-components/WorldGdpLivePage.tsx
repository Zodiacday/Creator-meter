"use client";

import { Navigation } from "@/components/Navigation";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { QuickFacts } from "@/components/QuickFacts";
import { SourceCitation } from "@/components/SourceCitation";
import { ExpandableInfo } from "@/components/ExpandableInfo";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { DollarSign, TrendingUp, BarChart3, Globe } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const WorldGdpLivePage = () => {
  const worldGdp = useRealtimeCounter({
    initialValue: 105000000000000,
    incrementPerSecond: 3500000,
    enabled: true
  });

  const gdpPerCapita = useRealtimeCounter({
    initialValue: 12900,
    incrementPerSecond: 0.4,
    enabled: true
  });

  const topEconomies = [
    { country: "USA", gdp: 27400, color: "#3b82f6" },
    { country: "China", gdp: 17800, color: "#10b981" },
    { country: "Japan", gdp: 4200, color: "#f59e0b" },
    { country: "Germany", gdp: 4100, color: "#8b5cf6" },
    { country: "India", gdp: 3900, color: "#ec4899" },
    { country: "UK", gdp: 3300, color: "#14b8a6" },
    { country: "France", gdp: 3000, color: "#f97316" },
    { country: "Italy", gdp: 2200, color: "#06b6d4" }
  ];

  const gdpByRegion = [
    { region: "Asia-Pacific", gdp: 38000, growth: 4.5 },
    { region: "North America", gdp: 29000, growth: 2.4 },
    { region: "Europe", gdp: 24000, growth: 1.8 },
    { region: "Latin America", gdp: 6500, growth: 2.1 },
    { region: "Middle East", gdp: 4000, growth: 3.2 },
    { region: "Africa", gdp: 3000, growth: 3.8 }
  ];

  const historicalGdp = [
    { year: "2000", gdp: 34 },
    { year: "2005", gdp: 48 },
    { year: "2010", gdp: 66 },
    { year: "2015", gdp: 75 },
    { year: "2020", gdp: 85 },
    { year: "2021", gdp: 96 },
    { year: "2022", gdp: 101 },
    { year: "2023", gdp: 105 },
    { year: "2024", gdp: 109 }
  ];

  const faqData = [
    {
      question: "What is the current world GDP?",
      answer: "The current world GDP is approximately $105 trillion and growing at about $3.5 million per second. This represents the total value of all goods and services produced globally in a year."
    },
    {
      question: "Which country has the largest economy?",
      answer: "The United States has the world's largest economy with a GDP of approximately $27.4 trillion, followed by China at $17.8 trillion and Japan at $4.2 trillion."
    },
    {
      question: "How is GDP calculated?",
      answer: "GDP is calculated by adding up consumption, investment, government spending, and net exports (exports minus imports). It represents the total monetary value of all finished goods and services produced within a country's borders."
    },
    {
      question: "What is GDP per capita?",
      answer: "GDP per capita is the total GDP divided by the population, representing the average economic output per person. The global GDP per capita is approximately $12,900, though it varies significantly by country."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "World GDP Live", url: "/world-gdp-live" }
  ];

  return (
    <>
      <MetaTags
        title="World GDP Live Counter - Real-Time Global Economy $105 Trillion 2025"
        description="Live world GDP counter showing $105 trillion global economy growing in real-time. Track top economies, GDP by region, per capita data, and economic growth trends updated 2025."
        keywords="world GDP live, world GDP counter, global economy, GDP live counter, world economy statistics, GDP by country, real-time GDP, global GDP 2025"
        canonical="https://creatormeter.com/world-gdp-live"
      />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "World GDP Live Statistics",
          description: "Real-time global GDP counter with economic data by country and region",
          url: "https://creatormeter.com/world-gdp-live",
          keywords: ["world GDP", "global economy", "economic growth", "GDP statistics"],
          temporalCoverage: "2000/2024",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              World GDP Live Counter
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-time global economic statistics tracking world GDP, top economies, and regional economic performance
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <StatCard
              label="World GDP"
              value={worldGdp}
              icon={DollarSign}
              color="#3b82f6"
              subtitle="Trillion USD"
              increment={3500000}
            />
            <StatCard
              label="GDP Per Capita"
              value={gdpPerCapita}
              icon={Globe}
              color="#10b981"
              subtitle="USD per person"
              increment={0.4}
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard
              title="Top Economies by GDP (Billions USD)"
              icon={BarChart3}
              color="#3b82f6"
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topEconomies} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="gdp" fill="#3b82f6" name="GDP (Billions)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="GDP by Region (Billions USD)"
              icon={Globe}
              color="#10b981"
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={gdpByRegion}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="gdp" fill="#10b981" name="GDP (Billions)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Historical World GDP (Trillions USD)"
              icon={TrendingUp}
              color="#f59e0b"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalGdp}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="gdp" stroke="#f59e0b" strokeWidth={2} name="World GDP (Trillions)" />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <QuickFacts
              facts={[
                "The world economy has tripled in size since 2000",
                "USA and China account for 43% of global GDP",
                "Services sector makes up 65% of world GDP",
                "Asia-Pacific is the fastest-growing economic region",
                "Global GDP contracted 3.1% in 2020 due to COVID-19",
                "Emerging markets drive 60% of global growth"
              ]}
            />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <ExpandableInfo
                  key={index}
                  title={faq.question}
                >
                  {faq.answer}
                </ExpandableInfo>
              ))}
            </div>
          </section>

          <SourceCitation
            sources={[
              { name: "World Development Indicators", url: "https://datatopics.worldbank.org/world-development-indicators/", organization: "World Bank" },
              { name: "World Economic Outlook", url: "https://www.imf.org/en/Publications/WEO", organization: "International Monetary Fund (IMF)" },
              { name: "Statistics Division", url: "https://unstats.un.org/", organization: "United Nations" },
              { name: "Economic Database", url: "https://data.oecd.org/", organization: "OECD" }
            ]}
          />
        </main>
      </div>
    </>
  );
};

export default WorldGdpLivePage;
