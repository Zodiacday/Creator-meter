import { Navigation } from "@/components/Navigation";
import { Baby, TrendingDown, Globe } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const FertilityRateByCountryPage = () => {
  const highestFertility = [
    { country: "Niger", rate: 6.73 },
    { country: "Somalia", rate: 6.12 },
    { country: "Congo (DRC)", rate: 5.96 },
    { country: "Mali", rate: 5.88 },
    { country: "Chad", rate: 5.72 },
    { country: "Angola", rate: 5.52 },
  ];

  const lowestFertility = [
    { country: "South Korea", rate: 0.72 },
    { country: "Singapore", rate: 1.05 },
    { country: "Taiwan", rate: 1.09 },
    { country: "Hong Kong", rate: 1.19 },
    { country: "Spain", rate: 1.19 },
    { country: "Italy", rate: 1.24 },
  ];

  const faqData = [
    {
      question: "What is the total fertility rate?",
      answer: "Total fertility rate (TFR) is the average number of children a woman would have in her lifetime based on current birth rates. A rate of 2.1 is needed for population replacement in developed countries."
    },
    {
      question: "Which country has the highest fertility rate?",
      answer: "Niger has the world's highest fertility rate at 6.73 children per woman, followed by Somalia at 6.12. High fertility rates in sub-Saharan Africa are linked to limited access to contraception and cultural factors."
    },
    {
      question: "Why is South Korea's fertility rate so low?",
      answer: "South Korea's fertility rate of 0.72 is the world's lowest due to high education costs, intense work culture, expensive housing, and changing social values regarding marriage and childbearing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Fertility Rate by Country 2025 - Birth Rates Worldwide"
        description="Niger leads with 6.73 children per woman. Compare fertility rates globally. South Korea has lowest at 0.72. Current TFR data and demographic trends."
        keywords="fertility rate by country, total fertility rate, birth rate, children per woman, population growth, TFR"
        canonical={`${window.location.origin}/fertility-rate-by-country`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Fertility Rate by Country",
          description: "Total fertility rates for countries worldwide",
          url: `${window.location.origin}/fertility-rate-by-country`,
          keywords: ["fertility rate", "birth rate", "demographics", "population"]
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <Navigation />
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold gradient-text mb-8">Fertility Rate by Country 2025</h1>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <StatCard label="World Average" value={2.3} icon={Globe} color="hsl(var(--population))" subtitle="children per woman" />
            <StatCard label="Highest - Niger" value={6.73} icon={Baby} color="hsl(var(--chart-1))" subtitle="children per woman" />
            <StatCard label="Lowest - South Korea" value={0.72} icon={TrendingDown} color="hsl(var(--chart-2))" subtitle="children per woman" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Countries with Highest Fertility Rates" icon={Baby} color="hsl(var(--chart-1))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={highestFertility}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="rate" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
            <ChartCard title="Countries with Lowest Fertility Rates" icon={TrendingDown} color="hsl(var(--chart-2))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={lowestFertility}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="rate" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
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

export default FertilityRateByCountryPage;
