import { Navigation } from "@/components/Navigation";
import { TrendingDown, Users, Globe, Heart } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const PovertyRatePage = () => {
  const highestPoverty = [
    { country: "South Sudan", rate: 76.4 },
    { country: "Madagascar", rate: 70.7 },
    { country: "Guinea-Bissau", rate: 67.0 },
    { country: "Eritrea", rate: 66.6 },
    { country: "Malawi", rate: 62.2 },
    { country: "Mozambique", rate: 61.7 },
  ];

  const regionalData = [
    { region: "Sub-Saharan Africa", rate: 35.4 },
    { region: "South Asia", rate: 12.4 },
    { region: "East Asia & Pacific", rate: 1.2 },
    { region: "Latin America", rate: 3.9 },
    { region: "Middle East", rate: 4.2 },
    { region: "Europe & Central Asia", rate: 1.5 },
  ];

  const globalTrend = [
    { year: 1990, rate: 35.9, people: 1895 },
    { year: 2000, rate: 27.9, people: 1701 },
    { year: 2010, rate: 16.3, people: 1118 },
    { year: 2015, rate: 10.1, people: 736 },
    { year: 2019, rate: 8.4, people: 648 },
    { year: 2024, rate: 8.8, people: 712 },
  ];

  const faqData = [
    {
      question: "What is the international poverty line?",
      answer: "The international poverty line is set at $2.15 per day (2017 PPP), updated from $1.90. People living below this threshold are considered to be in extreme poverty, lacking resources for basic needs like food, clean water, and shelter."
    },
    {
      question: "How many people live in poverty worldwide?",
      answer: "Approximately 712 million people (8.8% of global population) live in extreme poverty as of 2024. The COVID-19 pandemic reversed years of progress, pushing millions back into poverty."
    },
    {
      question: "Which region has the highest poverty rate?",
      answer: "Sub-Saharan Africa has the highest regional poverty rate at 35.4%, accounting for over 60% of the world's extreme poor despite having only 14% of global population."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Poverty Rate by Country 2025 - Global Poverty Statistics"
        description="712 million people live in extreme poverty ($2.15/day). Track poverty rates by country and region. Current data on global poverty, income inequality, and economic development."
        keywords="poverty rate by country, extreme poverty, global poverty statistics, poverty line, income inequality, economic development"
        canonical={`${window.location.origin}/poverty-rate-by-country`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Poverty Rate by Country",
          description: "Global poverty statistics and rates by country",
          url: `${window.location.origin}/poverty-rate-by-country`,
          keywords: ["poverty", "extreme poverty", "income inequality", "economic development"]
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <Navigation />
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold gradient-text mb-8">Poverty Rate by Country 2025</h1>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <StatCard label="Global Poverty Rate" value={8.8} icon={Globe} color="hsl(var(--destructive))" subtitle="% below $2.15/day" />
            <StatCard label="People in Extreme Poverty" value={712000000} icon={Users} color="hsl(var(--chart-1))" subtitle="worldwide" />
            <StatCard label="Highest Rate - South Sudan" value={76.4} icon={Heart} color="hsl(var(--chart-2))" subtitle="% in poverty" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Countries with Highest Poverty Rates (%)" icon={TrendingDown} color="hsl(var(--destructive))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={highestPoverty}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={10} angle={-15} textAnchor="end" height={80} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="rate" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
            <ChartCard title="Poverty Rate by Region (%)" icon={Globe} color="hsl(var(--chart-1))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={regionalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" fontSize={9} angle={-15} textAnchor="end" height={100} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="rate" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
          <ChartCard title="Global Poverty Rate Trend (%)" icon={TrendingDown} color="hsl(var(--population))">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={globalTrend}>
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

export default PovertyRatePage;
