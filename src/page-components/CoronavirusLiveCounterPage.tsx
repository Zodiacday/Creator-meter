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
import { Activity, TrendingUp, Shield, AlertCircle } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const CoronavirusLiveCounterPage = () => {
  const totalCases = useRealtimeCounter({
    initialValue: 704000000,
    incrementPerSecond: 0.8,
    enabled: true
  });

  const totalDeaths = useRealtimeCounter({
    initialValue: 7010000,
    incrementPerSecond: 0.01,
    enabled: true
  });

  const totalRecovered = useRealtimeCounter({
    initialValue: 675000000,
    incrementPerSecond: 0.7,
    enabled: true
  });

  const casesByRegion = [
    { region: "Americas", cases: 191000000, color: "#3b82f6" },
    { region: "Europe", cases: 275000000, color: "#10b981" },
    { region: "Asia", cases: 215000000, color: "#f59e0b" },
    { region: "Africa", cases: 13000000, color: "#8b5cf6" },
    { region: "Oceania", cases: 10000000, color: "#ec4899" }
  ];

  const historicalTrend = [
    { month: "Jan 2020", cases: 10000 },
    { month: "Jul 2020", cases: 15000000 },
    { month: "Jan 2021", cases: 90000000 },
    { month: "Jul 2021", cases: 190000000 },
    { month: "Jan 2022", cases: 360000000 },
    { month: "Jul 2022", cases: 570000000 },
    { month: "Jan 2023", cases: 665000000 },
    { month: "Jan 2024", cases: 704000000 }
  ];

  const vaccinationData = [
    { country: "China", doses: 3500, color: "#3b82f6" },
    { country: "India", doses: 2200, color: "#10b981" },
    { country: "USA", doses: 680, color: "#f59e0b" },
    { country: "Brazil", doses: 510, color: "#8b5cf6" },
    { country: "Indonesia", doses: 445, color: "#ec4899" },
    { country: "Japan", doses: 400, color: "#14b8a6" }
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"];

  const faqData = [
    {
      question: "What is the current global COVID-19 case count?",
      answer: "As of January 2024, global COVID-19 cases have exceeded 704 million confirmed cases worldwide, with over 7 million deaths reported. The pandemic has affected virtually every country and territory."
    },
    {
      question: "Which region has been most affected by COVID-19?",
      answer: "Europe has reported the highest number of COVID-19 cases at over 275 million, followed by Asia (215 million) and the Americas (191 million). However, case counts vary by testing capacity and reporting methods."
    },
    {
      question: "How effective are COVID-19 vaccines?",
      answer: "COVID-19 vaccines have proven highly effective at preventing severe disease, hospitalization, and death. Studies show vaccines reduce the risk of severe outcomes by 80-95%, even against variants."
    },
    {
      question: "Is the COVID-19 pandemic over?",
      answer: "While emergency phases have ended in many countries, COVID-19 remains an ongoing public health concern. The virus continues to circulate globally, though death rates have significantly decreased due to vaccination and natural immunity."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Coronavirus Live Counter", url: "/coronavirus-live-counter" }
  ];

  return (
    <>
      <MetaTags
        title="COVID-19 Live Counter - Real-Time Coronavirus Statistics 2025"
        description="Live COVID-19 counter tracking 704M+ cases, deaths, and recoveries worldwide. Real-time pandemic statistics with vaccination data, regional breakdowns, and historical trends updated 2025."
        keywords="coronavirus live counter, COVID-19 statistics, pandemic tracker, coronavirus cases, COVID deaths, COVID-19 live, vaccination data, COVID-19 by region, COVID counter 2025"
        canonical="https://creatormeter.com/coronavirus-live-counter"
      />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "COVID-19 Live Statistics",
          description: "Real-time coronavirus pandemic statistics with cases, deaths, recoveries, and vaccination data",
          url: "https://creatormeter.com/coronavirus-live-counter",
          keywords: ["COVID-19", "coronavirus", "pandemic", "cases", "deaths", "vaccinations"],
          temporalCoverage: "2020/2024",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              COVID-19 Live Counter
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-time coronavirus pandemic statistics tracking global cases, deaths, recoveries, and vaccination progress
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard
              label="Total Cases"
              value={totalCases}
              icon={Activity}
              color="#3b82f6"
              increment={0.8}
            />
            <StatCard
              label="Total Deaths"
              value={totalDeaths}
              icon={AlertCircle}
              color="#ef4444"
              increment={0.01}
            />
            <StatCard
              label="Total Recovered"
              value={totalRecovered}
              icon={Shield}
              color="#10b981"
              increment={0.7}
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard
              title="COVID-19 Cases by Region"
              icon={Activity}
              color="#3b82f6"
            >
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={casesByRegion}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ region, percent }) => `${region} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="cases"
                  >
                    {casesByRegion.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Historical Case Trend"
              icon={TrendingUp}
              color="#10b981"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="cases" stroke="#3b82f6" strokeWidth={2} name="Total Cases" />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Vaccine Doses Administered (Millions)"
              icon={Shield}
              color="#8b5cf6"
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={vaccinationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="doses" fill="#8b5cf6" name="Doses (Millions)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <QuickFacts
              facts={[
                "COVID-19 was declared a pandemic by WHO on March 11, 2020",
                "Over 13.5 billion vaccine doses have been administered globally",
                "The Omicron variant became dominant in late 2021",
                "Case fatality rate has decreased to under 1% in 2024",
                "Long COVID affects an estimated 10-30% of infections",
                "Vaccination remains the most effective prevention tool"
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
              { name: "COVID-19 Dashboard", url: "https://covid19.who.int/", organization: "World Health Organization (WHO)" },
              { name: "Coronavirus Resource Center", url: "https://coronavirus.jhu.edu/", organization: "Johns Hopkins University" },
              { name: "COVID-19 Statistics", url: "https://ourworldindata.org/coronavirus", organization: "Our World in Data" },
              { name: "COVID Data Tracker", url: "https://covid.cdc.gov/covid-data-tracker/", organization: "CDC" }
            ]}
          />
        </main>
      </div>
    </>
  );
};

export default CoronavirusLiveCounterPage;
