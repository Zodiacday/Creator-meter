import { Navigation } from "@/components/Navigation";
import { Baby, TrendingUp, Globe, Users } from "lucide-react";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { ExportButton } from "@/components/ExportButton";

const BirthsPerDayPage = () => {
  const birthsToday = useRealtimeCounter({ initialValue: 327000, incrementPerSecond: 4.73 });
  const birthsThisYear = useRealtimeCounter({ initialValue: 111300000, incrementPerSecond: 4.73 });

  const birthsByRegion = [
    { region: "Asia", births: 233000, color: "hsl(var(--chart-1))" },
    { region: "Africa", births: 108000, color: "hsl(var(--chart-2))" },
    { region: "Europe", births: 17000, color: "hsl(var(--chart-3))" },
    { region: "Latin America", births: 18000, color: "hsl(var(--chart-4))" },
    { region: "North America", births: 11000, color: "hsl(var(--chart-5))" },
  ];

  const topCountries = [
    { country: "India", births: 67000 },
    { country: "China", births: 41000 },
    { country: "Nigeria", births: 21000 },
    { country: "Pakistan", births: 17000 },
    { country: "Indonesia", births: 13000 },
    { country: "United States", births: 10000 },
  ];

  const faqData = [
    {
      question: "How many babies are born per day worldwide?",
      answer: "Approximately 385,000 babies are born every day around the world. This equals about 140 million births per year, or roughly 4.3 births per second."
    },
    {
      question: "Which country has the most births per day?",
      answer: "India has the most births per day with approximately 67,000 births, followed by China with about 41,000 births per day."
    },
    {
      question: "Is the global birth rate increasing or decreasing?",
      answer: "The global birth rate is gradually decreasing. While the absolute number of births remains high due to population size, fertility rates have declined from 5 children per woman in 1960 to 2.3 in 2024."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MetaTags
        title="Births Per Day Worldwide - Live Global Birth Statistics"
        description="385,000 babies born every day. Track real-time worldwide births, regional breakdowns, and birth rates by country. Updated live with UN population data."
        keywords="births per day, babies born today, world birth rate, daily births worldwide, global birth statistics, births per second"
        canonical={`${window.location.origin}/births-per-day-worldwide`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Global Daily Birth Statistics",
          description: "Real-time data on births per day worldwide",
          url: `${window.location.origin}/births-per-day-worldwide`,
          keywords: ["births", "birth rate", "natality", "population growth"],
          temporalCoverage: "2024/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: window.location.origin },
          { name: "Births Per Day", url: `${window.location.origin}/births-per-day-worldwide` }
        ]}
      />
      <Navigation />

      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-8 animate-fade-in flex-wrap">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-green-500/20">
                <Baby className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <h1 className="text-4xl font-bold gradient-text">Births Per Day Worldwide</h1>
                <p className="text-muted-foreground mt-2">Real-time global birth statistics and trends</p>
              </div>
            </div>
            <ExportButton 
              data={topCountries} 
              filename="births-per-day-by-country"
              variant="default"
              size="lg"
            />
          </div>

          {/* Main Counters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="text-center py-8 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl border border-border">
              <Baby className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <p className="text-sm text-muted-foreground mb-2">Births Today</p>
              <Counter value={birthsToday} className="text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">~4.3 births per second</p>
            </div>

            <div className="text-center py-8 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl border border-border">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <p className="text-sm text-muted-foreground mb-2">Births This Year</p>
              <Counter value={birthsThisYear} className="text-5xl font-bold text-foreground counter-glow" />
              <p className="text-xs text-muted-foreground mt-2">Approximately 140 million annually</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard 
              label="Global Birth Rate" 
              value={18.1} 
              icon={Baby} 
              color="hsl(var(--population))"
              subtitle="per 1,000 people"
            />
            <StatCard 
              label="Fertility Rate" 
              value={2.3} 
              icon={Users} 
              color="hsl(var(--population))"
              subtitle="children per woman"
            />
            <StatCard 
              label="Births Per Minute" 
              value={267} 
              icon={TrendingUp} 
              color="hsl(var(--population))"
              subtitle="worldwide"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Daily Births by Region" icon={Globe} color="hsl(var(--population))">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={birthsByRegion}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ region, births }) => `${region}: ${births.toLocaleString()}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="births"
                  >
                    {birthsByRegion.map((entry, index) => (
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

            <ChartCard title="Top Countries by Daily Births" icon={Baby} color="hsl(var(--population))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topCountries}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="births" fill="hsl(var(--population))" radius={[8, 8, 0, 0]} />
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
              <strong>Data Sources:</strong> United Nations Department of Economic and Social Affairs (UN DESA), World Bank, CIA World Factbook, National Vital Statistics Reports
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BirthsPerDayPage;