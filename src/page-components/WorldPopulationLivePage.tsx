"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { QuickFacts } from "@/components/QuickFacts";
import { SourceCitation } from "@/components/SourceCitation";
import { ExpandableInfo } from "@/components/ExpandableInfo";
import { ShareButtons } from "@/components/ShareButtons";
import { ExploreMoreStats } from "@/components/ExploreMoreStats";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Users, TrendingUp, Globe, Baby } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ExportButton } from "@/components/ExportButton";

const WorldPopulationLivePage = () => {
  // Worldometer.info data Jan 2025: 8.256 billion, growing at 0.85% annually
  // Birth rate: 18.1 per 1000 = 4.73 births/second
  // Death rate: 7.8 per 1000 = 2.04 deaths/second
  const currentPopulation = useRealtimeCounter({
    initialValue: 8256179905,
    incrementPerSecond: 2.69, // Net growth: 4.73 births - 2.04 deaths
    enabled: true
  });

  // Calculate births and deaths since midnight
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
  const secondsSinceMidnight = (now.getTime() - midnight.getTime()) / 1000;
  const birthsSinceMidnight = Math.floor(secondsSinceMidnight * 4.73);
  const deathsSinceMidnight = Math.floor(secondsSinceMidnight * 2.04);

  const birthsToday = useRealtimeCounter({
    initialValue: birthsSinceMidnight,
    incrementPerSecond: 4.73, // 409,152 per day
    enabled: true
  });

  const deathsToday = useRealtimeCounter({
    initialValue: deathsSinceMidnight,
    incrementPerSecond: 2.04, // 176,256 per day
    enabled: true
  });

  const historicalData = [
    { year: "1950", population: 2.5 },
    { year: "1960", population: 3.0 },
    { year: "1970", population: 3.7 },
    { year: "1980", population: 4.4 },
    { year: "1990", population: 5.3 },
    { year: "2000", population: 6.1 },
    { year: "2010", population: 6.9 },
    { year: "2020", population: 7.8 },
    { year: "2024", population: 8.1 }
  ];

  const continentData = [
    { continent: "Asia", population: 4700, color: "#3b82f6" },
    { continent: "Africa", population: 1400, color: "#10b981" },
    { continent: "Europe", population: 750, color: "#f59e0b" },
    { continent: "N. America", population: 580, color: "#8b5cf6" },
    { continent: "S. America", population: 430, color: "#ec4899" },
    { continent: "Oceania", population: 45, color: "#14b8a6" }
  ];

  const growthData = [
    { year: "1960", rate: 2.0 },
    { year: "1970", rate: 2.1 },
    { year: "1980", rate: 1.8 },
    { year: "1990", rate: 1.6 },
    { year: "2000", rate: 1.4 },
    { year: "2010", rate: 1.2 },
    { year: "2020", rate: 1.0 },
    { year: "2024", rate: 0.9 }
  ];

  const faqData = [
    {
      question: "What is the current world population?",
      answer: "The current world population is over 8.1 billion people and growing at approximately 2.5 people per second. This represents a significant increase from 1 billion in 1800."
    },
    {
      question: "Which continent has the highest population?",
      answer: "Asia has the highest population with over 4.7 billion people, accounting for approximately 60% of the world's total population. China and India alone account for over 2.8 billion people."
    },
    {
      question: "How fast is the world population growing?",
      answer: "The world population is currently growing at about 0.9% per year, which translates to approximately 80 million people added annually. However, the growth rate has been declining from its peak of 2.1% in the 1960s."
    },
    {
      question: "When will the world population reach 9 billion?",
      answer: "Based on current projections from the United Nations, the world population is expected to reach 9 billion around 2037. The population is projected to peak at around 10.4 billion by the 2080s."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "World Population Live", url: "/world-population-live" }
  ];

  return (
    <>
      <MetaTags
        title="World Population Live Counter - Real-Time Global Population 2025"
        description="Live world population counter showing 8.18 billion people growing in real-time. Watch births and deaths per second with accurate UN data, interactive charts, and continent breakdowns updated 2025."
        keywords="world population live, world population counter, current world population, world population today, global population, population counter, real-time population, births per day, deaths per day, world population 2025"
        canonical="https://creatormeter.com/world-population-live"
      />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "World Population Live Statistics",
          description: "Real-time world population counter with births, deaths, and demographic breakdowns",
          url: "https://creatormeter.com/world-population-live",
          keywords: ["world population", "live counter", "demographics", "births", "deaths"],
          temporalCoverage: "1950/2024",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <noscript>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">World Population Live Counter</h1>
            <p className="text-muted-foreground">
              The current world population is over 8.2 billion people and growing. This live counter tracks real-time population changes 
              based on birth and death rates from the United Nations and World Bank data. Enable JavaScript to see the live counter.
            </p>
          </div>
        </noscript>
        
        <main className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              World Population Live Counter
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-time global population statistics tracking births, deaths, and demographic trends across continents
            </p>
            <div className="mt-6 flex justify-center">
              <ExportButton
                data={[
                  ...historicalData.map(item => ({
                    year: item.year,
                    population: item.population,
                    unit: "Billions"
                  })),
                  ...continentData.map(item => ({
                    continent: item.continent,
                    population: item.population,
                    unit: "Millions"
                  }))
                ]}
                filename="world-population-live-data"
              />
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard
              label="Current World Population"
              value={currentPopulation}
              icon={Users}
              color="#3b82f6"
              increment={2.69}
            />
            <StatCard
              label="Births Today"
              value={birthsToday}
              icon={Baby}
              color="#10b981"
              increment={4.73}
            />
            <StatCard
              label="Deaths Today"
              value={deathsToday}
              icon={Users}
              color="#ef4444"
              increment={2.04}
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard
              title="Historical World Population (Billions)"
              icon={TrendingUp}
              color="#3b82f6"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="population" stroke="#3b82f6" strokeWidth={2} name="Population (Billions)" />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Population by Continent (Millions)"
              icon={Globe}
              color="#10b981"
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={continentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="continent" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="population" fill="#3b82f6" name="Population (Millions)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Population Growth Rate (%)"
              icon={TrendingUp}
              color="#f59e0b"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="rate" stroke="#f59e0b" strokeWidth={2} name="Growth Rate (%)" />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <QuickFacts
              facts={[
                "The world population reached 1 billion around 1800",
                "It took 123 years to reach 2 billion (1927)",
                "But only 12 years to grow from 7 to 8 billion (2010-2022)",
                "Asia accounts for about 60% of the world's population",
                "The population growth rate has been declining since the 1960s",
                "UN projects population to peak at 10.4 billion by 2080s"
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

          <div className="my-8">
            <ShareButtons 
              title="World Population Live Counter"
              description="Real-time global population statistics"
              url="https://creatormeter.com/world-population-live"
            />
          </div>

          <SourceCitation
            sources={[
              { name: "World Population Prospects 2024", url: "https://population.un.org/wpp/", organization: "United Nations Population Division" },
              { name: "International Database", url: "https://www.census.gov/data-tools/demo/idb/", organization: "U.S. Census Bureau" },
              { name: "Population Data", url: "https://data.worldbank.org/indicator/SP.POP.TOTL", organization: "World Bank" },
              { name: "World Population Dashboard", url: "https://www.un.org/en/desa", organization: "UN DESA" }
            ]}
          />

          <ExploreMoreStats currentPath="/world-population-live" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WorldPopulationLivePage;
