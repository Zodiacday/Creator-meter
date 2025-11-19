import { Navigation } from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import { TrendingUp, Globe, BarChart3 } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";

const PopulationGrowthRatePage = () => {
  const topGrowthCountries = [
    { country: "Niger", growthRate: 3.66 },
    { country: "Angola", growthRate: 3.34 },
    { country: "Benin", growthRate: 3.32 },
    { country: "Mali", growthRate: 3.00 },
    { country: "Uganda", growthRate: 2.96 },
    { country: "Chad", growthRate: 2.93 },
    { country: "DR Congo", growthRate: 2.91 },
    { country: "Tanzania", growthRate: 2.87 },
    { country: "Somalia", growthRate: 2.83 },
    { country: "Zambia", growthRate: 2.82 },
  ];

  const lowestGrowthCountries = [
    { country: "Bulgaria", growthRate: -1.85 },
    { country: "Lithuania", growthRate: -1.48 },
    { country: "Latvia", growthRate: -1.36 },
    { country: "Ukraine", growthRate: -1.28 },
    { country: "Bosnia", growthRate: -1.02 },
    { country: "Croatia", growthRate: -0.95 },
    { country: "Serbia", growthRate: -0.87 },
    { country: "Moldova", growthRate: -0.73 },
    { country: "Japan", growthRate: -0.53 },
    { country: "Italy", growthRate: -0.42 },
  ];

  const regionalGrowth = [
    { region: "Africa", growthRate: 2.41 },
    { region: "Asia", growthRate: 0.77 },
    { region: "Oceania", growthRate: 1.23 },
    { region: "Latin America", growthRate: 0.79 },
    { region: "North America", growthRate: 0.59 },
    { region: "Europe", growthRate: -0.09 },
  ];

  const historicalGlobal = [
    { year: 1960, rate: 2.09 },
    { year: 1970, rate: 2.07 },
    { year: 1980, rate: 1.78 },
    { year: 1990, rate: 1.55 },
    { year: 2000, rate: 1.25 },
    { year: 2010, rate: 1.22 },
    { year: 2020, rate: 1.05 },
    { year: 2024, rate: 0.88 },
  ];

  const faqData = [
    {
      question: "What is the current global population growth rate?",
      answer: "The current global population growth rate is approximately 0.88% per year (2024). This means the world population is growing by about 70-75 million people annually. The growth rate has been steadily declining from its peak of 2.09% in the late 1960s."
    },
    {
      question: "Which country has the highest population growth rate?",
      answer: "Niger currently has the highest population growth rate at 3.66% per year. This is followed by Angola (3.34%) and Benin (3.32%). Most of the fastest-growing countries are in sub-Saharan Africa."
    },
    {
      question: "Are any countries experiencing negative population growth?",
      answer: "Yes, several countries have negative population growth rates, meaning their populations are shrinking. Bulgaria has the fastest decline at -1.85%, followed by Lithuania and Latvia. Many Eastern European and some developed Asian countries face population decline."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MetaTags
        title="Population Growth Rate by Country - Global Population Trends"
        description="Compare population growth rates worldwide. Global rate: 0.88%. Niger leads at 3.66% while Bulgaria declines at -1.85%. Updated 2024 data with historical trends."
        keywords="population growth rate, population growth by country, fastest growing countries, population decline, demographic trends"
        canonical={`${window.location.origin}/population-growth-rate-by-country`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Population Growth Rate by Country",
          description: "Population growth rates for all countries and regions",
          url: `${window.location.origin}/population-growth-rate-by-country`,
          keywords: ["population growth", "demographics", "fertility", "mortality"],
          temporalCoverage: "1960/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: window.location.origin },
          { name: "Population Growth Rate", url: `${window.location.origin}/population-growth-rate-by-country` }
        ]}
      />
      <Navigation />

      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="p-4 rounded-xl bg-[hsl(var(--population))]/20">
              <TrendingUp className="w-8 h-8 text-[hsl(var(--population))]" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <BackButton />
                <h1 className="text-4xl font-bold gradient-text">Population Growth Rate by Country</h1>
              </div>
              <p className="text-muted-foreground mt-2">Global population growth trends and country comparisons</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard 
              label="Global Growth Rate" 
              value={0.88} 
              icon={Globe} 
              color="hsl(var(--population))"
              subtitle="% per year (2024)"
            />
            <StatCard 
              label="Highest Growth Rate" 
              value={3.66} 
              icon={TrendingUp} 
              color="hsl(var(--population))"
              subtitle="% - Niger"
            />
            <StatCard 
              label="Annual Population Add" 
              value={72000000} 
              icon={BarChart3} 
              color="hsl(var(--population))"
              subtitle="people per year"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Top 10 Fastest Growing Countries" icon={TrendingUp} color="hsl(var(--population))">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={topGrowthCountries} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis type="category" dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} width={80} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="growthRate" fill="hsl(var(--population))" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Countries with Population Decline" icon={TrendingUp} color="hsl(var(--destructive))">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={lowestGrowthCountries} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis type="category" dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} width={80} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="growthRate" fill="hsl(var(--destructive))" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Growth Rate by Region (%)" icon={Globe} color="hsl(var(--population))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={regionalGrowth}>
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
                  <Bar dataKey="growthRate" fill="hsl(var(--population))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Global Growth Rate Trend (1960-2024)" icon={TrendingUp} color="hsl(var(--population))">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalGlobal}>
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
                    dataKey="rate" 
                    stroke="hsl(var(--population))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--population))' }}
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
              <strong>Data Sources:</strong> United Nations World Population Prospects 2024, World Bank Population Estimates, CIA World Factbook
            </p>
          </div>
          <RelatedPages
            pages={[
              { title: "Most Populated Countries", path: "/most-populated-countries-2025", description: "Countries with largest populations" },
              { title: "Fertility Rate by Country", path: "/fertility-rate-by-country", description: "Birth rates across nations" },
              { title: "Births Per Day", path: "/births-per-day-worldwide", description: "Daily birth statistics worldwide" },
              { title: "Deaths Per Day", path: "/deaths-per-day-worldwide", description: "Daily death statistics worldwide" },
              { title: "World Population Live", path: "/world-population-live", description: "Real-time world population counter" },
              { title: "Compare Countries", path: "/compare", description: "Compare statistics between countries" },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PopulationGrowthRatePage;