import { Navigation } from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import { Skull, TrendingDown, Globe, Heart } from "lucide-react";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { ExportButton } from "@/components/ExportButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";

const DeathsPerDayPage = () => {
  const deathsToday = useRealtimeCounter({ initialValue: 154000, incrementPerSecond: 2.04 });
  const deathsThisYear = useRealtimeCounter({ initialValue: 52500000, incrementPerSecond: 2.04 });

  const deathsByCause = [
    { cause: "Cardiovascular", deaths: 52000, color: "hsl(var(--chart-1))" },
    { cause: "Cancer", deaths: 27000, color: "hsl(var(--chart-2))" },
    { cause: "Respiratory", deaths: 19000, color: "hsl(var(--chart-3))" },
    { cause: "Infectious Diseases", deaths: 14000, color: "hsl(var(--chart-4))" },
    { cause: "Accidents", deaths: 11000, color: "hsl(var(--chart-5))" },
    { cause: "Other", deaths: 40000, color: "hsl(var(--muted))" },
  ];

  const deathsByRegion = [
    { region: "Asia", deaths: 89000 },
    { region: "Europe", deaths: 28000 },
    { region: "Africa", deaths: 24000 },
    { region: "North America", deaths: 13000 },
    { region: "Latin America", deaths: 7000 },
    { region: "Oceania", deaths: 2000 },
  ];

  const faqData = [
    {
      question: "How many people die per day worldwide?",
      answer: "Approximately 163,000 people die every day around the world. This equals about 60 million deaths per year, or roughly 1.9 deaths per second."
    },
    {
      question: "What is the leading cause of death globally?",
      answer: "Cardiovascular diseases are the leading cause of death worldwide, accounting for approximately 32% of all deaths. This includes heart attacks, strokes, and other circulatory system diseases."
    },
    {
      question: "How does the death rate compare to the birth rate?",
      answer: "The global birth rate exceeds the death rate. With approximately 385,000 births and 163,000 deaths per day, the world population grows by about 222,000 people daily."
    }
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Deaths Per Day Worldwide", href: "/deaths-per-day-worldwide" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MetaTags
        title="Deaths Per Day Worldwide - Live Global Mortality Statistics"
        description="163,000 people die every day worldwide. Track real-time global deaths, causes of death, and mortality rates by region. Updated live with WHO data."
        keywords="deaths per day, daily deaths worldwide, global mortality rate, death statistics, causes of death, world death rate"
        canonical="https://www.creatormeter.com/deaths-per-day-worldwide"
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Global Daily Death Statistics",
          description: "Real-time data on deaths per day worldwide",
          url: "https://www.creatormeter.com/deaths-per-day-worldwide",
          keywords: ["deaths", "mortality", "death rate", "global health"],
          temporalCoverage: "2024/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <SchemaMarkup
        type="BreadcrumbList"
        data={breadcrumbs.map((crumb) => ({
          name: crumb.label,
          url: `https://www.creatormeter.com${crumb.href}`
        }))}
      />
      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-8 animate-fade-in flex-wrap">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-red-500/20">
                <Skull className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <BackButton />
                  <h1 className="text-4xl font-bold gradient-text">Deaths Per Day Worldwide</h1>
                </div>
                <p className="text-muted-foreground mt-2">Real-time global mortality statistics and causes</p>
              </div>
            </div>
            <ExportButton 
              data={deathsByCause} 
              filename="deaths-per-day-by-cause"
              variant="default"
              size="lg"
            />
          </div>

          {/* Main Counters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="text-center py-8 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl border border-border">
              <Skull className="w-8 h-8 mx-auto mb-2 text-red-500" />
              <p className="text-sm text-muted-foreground mb-2">Deaths Today</p>
              <Counter value={deathsToday} className="text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">~1.9 deaths per second</p>
            </div>

            <div className="text-center py-8 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl border border-border">
              <TrendingDown className="w-8 h-8 mx-auto mb-2 text-red-500" />
              <p className="text-sm text-muted-foreground mb-2">Deaths This Year</p>
              <Counter value={deathsThisYear} className="text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">Approximately 60 million annually</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard 
              label="Global Death Rate" 
              value={7.8} 
              icon={Skull} 
              color="hsl(var(--destructive))"
              subtitle="per 1,000 people"
            />
            <StatCard 
              label="Life Expectancy" 
              value={73} 
              icon={Heart} 
              color="hsl(var(--health))"
              subtitle="years (global average)"
            />
            <StatCard 
              label="Deaths Per Minute" 
              value={113} 
              icon={TrendingDown} 
              color="hsl(var(--destructive))"
              subtitle="worldwide"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Daily Deaths by Cause" icon={Heart} color="hsl(var(--destructive))">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={deathsByCause}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ cause, deaths }) => `${cause}: ${deaths.toLocaleString()}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="deaths"
                  >
                    {deathsByCause.map((entry, index) => (
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

            <ChartCard title="Deaths by Region (Daily)" icon={Globe} color="hsl(var(--destructive))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={deathsByRegion}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" fontSize={12} />
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
              <strong>Data Sources:</strong> World Health Organization (WHO), United Nations Department of Economic and Social Affairs, World Bank, Institute for Health Metrics and Evaluation (IHME)
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeathsPerDayPage;