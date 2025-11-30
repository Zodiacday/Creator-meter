"use client";

import { Navigation } from "@/components/Navigation";
import { Activity, Users, AlertCircle, CheckCircle, TrendingUp } from "lucide-react";
import { useBackendData } from "@/hooks/useBackendData";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { Counter } from "@/components/Counter";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { QuickFacts } from "@/components/QuickFacts";
import { SourceCitation } from "@/components/SourceCitation";
import { ExpandableInfo } from "@/components/ExpandableInfo";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { ExportButton } from "@/components/ExportButton";

interface CoronavirusData {
  totalCases: number;
  totalDeaths: number;
  totalRecoveries: number;
  activeCases: number;
  casesToday: number;
  deathsToday: number;
  casesPerSecond: number;
  deathsPerSecond: number;
  topCountries: Array<{
    country: string;
    cases: number;
    deaths: number;
    recovered: number;
  }>;
  ageDistribution: Record<string, number>;
  historical: Array<{ date: string; cases: number; deaths: number }>;
}

const CoronavirusPage = () => {
  const { data, isLoading } = useBackendData<CoronavirusData>("coronavirus");
  const liveCases = useRealtimeCounter({
    initialValue: data?.casesToday || 0,
    incrementPerSecond: data?.casesPerSecond || 0
  });
  const liveDeaths = useRealtimeCounter({
    initialValue: data?.deathsToday || 0,
    incrementPerSecond: data?.deathsPerSecond || 0
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const topCountriesData = data?.topCountries.slice(0, 10).map((c) => ({
    name: c.country,
    cases: c.cases,
    deaths: c.deaths,
  })) || [];

  const ageData = Object.entries(data?.ageDistribution || {}).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="COVID-19 Live Statistics & Tracker"
        description="Real-time coronavirus statistics including total cases, deaths, recoveries, and active cases. Track COVID-19 pandemic data by country with live updates."
        keywords="coronavirus, covid-19, pandemic statistics, covid tracker, coronavirus cases, covid deaths, coronavirus live data"
        canonical={`${typeof window !== 'undefined' ? window.location.origin : ''}/coronavirus`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "COVID-19 Global Statistics",
          description: "Real-time coronavirus pandemic statistics including cases, deaths, and recoveries worldwide",
          url: `${typeof window !== 'undefined' ? window.location.origin : ''}/coronavirus`,
          keywords: ["covid-19", "coronavirus", "pandemic", "health statistics"],
          temporalCoverage: "2020/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: window.location.origin },
          { name: "COVID-19 Statistics", url: `${typeof window !== 'undefined' ? window.location.origin : ''}/coronavirus` }
        ]}
      />
      <Navigation />
      <noscript>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Coronavirus Statistics - COVID-19 Data</h1>
          <p className="text-muted-foreground">
            Comprehensive COVID-19 pandemic data including total cases, deaths, recoveries, and vaccination rates worldwide. 
            Data sourced from World Health Organization (WHO) and Johns Hopkins University. 
            Enable JavaScript for real-time updates and interactive visualizations.
          </p>
        </div>
      </noscript>
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-[hsl(var(--health))]/20">
              <Activity className="w-8 h-8 text-[hsl(var(--health))]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-text">Coronavirus (COVID-19)</h1>
              <p className="text-muted-foreground mt-2">Live tracking of COVID-19 pandemic statistics worldwide</p>
            </div>
          </div>
          {data?.topCountries && (
            <ExportButton 
              data={data.topCountries} 
              filename="coronavirus-statistics-by-country"
              variant="default"
              size="lg"
            />
          )}
        </div>

        <div className="mb-8">
          <QuickFacts facts={[
            "COVID-19 caused by SARS-CoV-2 was first identified in December 2019",
            "The pandemic resulted in 676 million confirmed cases and 6.8 million deaths globally",
            "Vaccines were developed in record time, with first approvals in December 2020",
            "Over 13 billion vaccine doses have been administered worldwide",
            "The virus has evolved through multiple variants including Alpha, Delta, and Omicron"
          ]} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            icon={Users}
            label="Total Cases"
            value={data?.totalCases || 0}
            color="hsl(var(--health))"
          />
          <StatCard
            icon={AlertCircle}
            label="Total Deaths"
            value={data?.totalDeaths || 0}
            color="hsl(var(--destructive))"
          />
          <StatCard
            icon={CheckCircle}
            label="Total Recoveries"
            value={data?.totalRecoveries || 0}
            color="hsl(var(--chart-3))"
          />
          <StatCard
            icon={TrendingUp}
            label="Active Cases"
            value={data?.activeCases || 0}
            color="hsl(var(--chart-4))"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <StatCard
            icon={Activity}
            label="Cases Today"
            value={liveCases}
            color="hsl(var(--health))"
          />
          <StatCard
            icon={AlertCircle}
            label="Deaths Today"
            value={liveDeaths}
            color="hsl(var(--destructive))"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ChartCard title="Top 10 Countries by Cases" icon={Activity} color="hsl(var(--health))">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={topCountriesData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--foreground))" />
                <YAxis dataKey="name" type="category" width={100} stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="cases" fill="hsl(var(--health))" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Age Distribution of Cases" icon={Users} color="hsl(var(--chart-2))">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={ageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {ageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <ChartCard title="Historical Trends" icon={TrendingUp} color="hsl(var(--health))">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data?.historical || []}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="date" stroke="hsl(var(--foreground))" />
              <YAxis stroke="hsl(var(--foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line type="monotone" dataKey="cases" stroke="hsl(var(--health))" strokeWidth={2} />
              <Line type="monotone" dataKey="deaths" stroke="hsl(var(--destructive))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <div className="space-y-4 mt-8">
          <ExpandableInfo title="Pandemic Timeline">
            <div className="space-y-2">
              <p><strong>December 2019:</strong> First cases identified in Wuhan, China</p>
              <p><strong>March 2020:</strong> WHO declares global pandemic</p>
              <p><strong>December 2020:</strong> First vaccines approved for emergency use</p>
              <p><strong>2021:</strong> Delta variant spreads globally</p>
              <p><strong>Late 2021:</strong> Omicron variant identified</p>
              <p><strong>2022-2024:</strong> Transition to endemic phase in many countries</p>
            </div>
          </ExpandableInfo>

          <ExpandableInfo title="Preventive Measures">
            <div className="space-y-2">
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Vaccination remains the most effective prevention method</li>
                <li>Wearing masks in crowded indoor spaces</li>
                <li>Maintaining physical distance when possible</li>
                <li>Regular handwashing and sanitization</li>
                <li>Staying home when symptomatic</li>
                <li>Adequate ventilation in indoor spaces</li>
              </ul>
            </div>
          </ExpandableInfo>
        </div>

        <div className="mt-8">
          <SourceCitation sources={[
            {
              name: "COVID-19 Dashboard",
              url: "https://covid19.who.int/",
              organization: "World Health Organization (WHO)"
            },
            {
              name: "Coronavirus Resource Center",
              url: "https://coronavirus.jhu.edu/",
              organization: "Johns Hopkins University"
            },
            {
              name: "COVID-19 Data Repository",
              url: "https://github.com/CSSEGISandData/COVID-19",
              organization: "CSSE at Johns Hopkins University"
            }
          ]} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoronavirusPage;
