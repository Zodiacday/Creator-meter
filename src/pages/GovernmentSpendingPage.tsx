import { Navigation } from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import { DollarSign, TrendingUp, Globe, Building } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const GovernmentSpendingPage = () => {
  const highestSpending = [
    { country: "Kiribati", percentage: 88.7 },
    { country: "Lesotho", percentage: 62.1 },
    { country: "France", percentage: 61.8 },
    { country: "Finland", percentage: 57.1 },
    { country: "Belgium", percentage: 56.7 },
    { country: "Denmark", percentage: 54.5 },
  ];

  const largestBudgets = [
    { country: "United States", spending: 6270 },
    { country: "China", spending: 3800 },
    { country: "Germany", spending: 1840 },
    { country: "France", spending: 1620 },
    { country: "Japan", spending: 1580 },
    { country: "United Kingdom", spending: 1320 },
  ];

  const faqData = [
    {
      question: "What is government spending as percentage of GDP?",
      answer: "Government spending as percentage of GDP measures total government expenditure (including healthcare, education, defense, social programs) relative to a country's total economic output. Higher percentages indicate larger government involvement in the economy."
    },
    {
      question: "Which country has the highest government spending?",
      answer: "Kiribati has the highest government spending at 88.7% of GDP, though this is unusual due to its small economy. Among major economies, France leads at 61.8% of GDP with extensive social programs."
    },
    {
      question: "What do governments spend money on?",
      answer: "Major spending categories include social protection (pensions, welfare), healthcare, education, defense, infrastructure, public administration, and debt interest. The mix varies significantly by country based on political systems and priorities."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Government Spending by Country 2025 - Public Expenditure Data"
        description="Compare government spending as % of GDP by country. US spends $6.3 trillion annually. Data on public expenditure, fiscal policy, and government budgets."
        keywords="government spending by country, public expenditure, government budget, fiscal policy, spending as percentage of GDP"
        canonical={`${window.location.origin}/government-spending-by-country`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Government Spending by Country",
          description: "Government expenditure data by country",
          url: `${window.location.origin}/government-spending-by-country`,
          keywords: ["government spending", "public expenditure", "fiscal policy", "GDP"]
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <Navigation />
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <BackButton />
            <h1 className="text-4xl font-bold gradient-text mb-8">Government Spending by Country 2025</h1>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <StatCard label="Global Average" value={38.7} icon={Globe} color="hsl(var(--government))" subtitle="% of GDP" />
            <StatCard label="US Total Spending" value={6270000000000} icon={DollarSign} color="hsl(var(--chart-1))" subtitle="USD annually" />
            <StatCard label="Highest % - Kiribati" value={88.7} icon={Building} color="hsl(var(--chart-2))" subtitle="% of GDP" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Highest Government Spending (% of GDP)" icon={TrendingUp} color="hsl(var(--government))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={highestSpending}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="percentage" fill="hsl(var(--government))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
            <ChartCard title="Largest Government Budgets (Billions USD)" icon={DollarSign} color="hsl(var(--chart-1))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={largestBudgets}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="spending" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
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

export default GovernmentSpendingPage;
