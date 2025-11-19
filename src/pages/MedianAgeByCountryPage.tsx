import { Navigation } from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import { Users, TrendingUp, Globe } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";

const MedianAgeByCountryPage = () => {
  const oldestCountries = [
    { country: "Monaco", medianAge: 55.4 },
    { country: "Japan", medianAge: 49.1 },
    { country: "Germany", medianAge: 47.8 },
    { country: "Italy", medianAge: 47.7 },
    { country: "Hong Kong", medianAge: 45.6 },
    { country: "Portugal", medianAge: 45.5 },
  ];

  const youngestCountries = [
    { country: "Niger", medianAge: 14.8 },
    { country: "Uganda", medianAge: 15.7 },
    { country: "Chad", medianAge: 15.8 },
    { country: "Mali", medianAge: 16.3 },
    { country: "Angola", medianAge: 16.7 },
    { country: "Zambia", medianAge: 16.9 },
  ];

  const faqData = [
    {
      question: "What is median age and why does it matter?",
      answer: "Median age is the age that divides a population into two equal groups - half younger, half older. It's crucial for understanding demographic structure, economic planning, healthcare needs, and social services allocation."
    },
    {
      question: "Which country has the highest median age?",
      answer: "Monaco has the highest median age at 55.4 years, followed by Japan at 49.1 years. These aging populations face challenges with pension systems, healthcare costs, and shrinking workforces."
    },
    {
      question: "Why do African countries have the lowest median ages?",
      answer: "High birth rates, improving child survival rates, and lower life expectancy contribute to younger populations in sub-Saharan Africa. Niger has the world's lowest median age at just 14.8 years."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Median Age by Country 2025 - Global Age Demographics"
        description="Monaco leads with median age of 55.4 years. Compare median ages across countries. Data shows aging populations in developed nations and youth bulges in Africa."
        keywords="median age by country, population age, demographics, aging population, youngest countries, oldest countries"
        canonical={`${window.location.origin}/median-age-by-country`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Median Age by Country",
          description: "Median age statistics for countries worldwide",
          url: `${window.location.origin}/median-age-by-country`,
          keywords: ["median age", "demographics", "population", "aging"]
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <Navigation />
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <BackButton />
            <h1 className="text-4xl font-bold gradient-text mb-8">Median Age by Country 2025</h1>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <StatCard label="World Median Age" value={30.5} icon={Globe} color="hsl(var(--population))" subtitle="years" />
            <StatCard label="Oldest - Monaco" value={55.4} icon={Users} color="hsl(var(--chart-1))" subtitle="years" />
            <StatCard label="Youngest - Niger" value={14.8} icon={Users} color="hsl(var(--chart-2))" subtitle="years" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Countries with Highest Median Age" icon={TrendingUp} color="hsl(var(--chart-1))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={oldestCountries}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="medianAge" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
            <ChartCard title="Countries with Lowest Median Age" icon={Users} color="hsl(var(--chart-2))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={youngestCountries}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="medianAge" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
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
          <RelatedPages
            pages={[
              { title: "Population by Age", path: "/world-population-by-age", description: "Global age distribution and demographics" },
              { title: "Fertility Rate by Country", path: "/fertility-rate-by-country", description: "Birth rates across nations" },
              { title: "Life Expectancy Calculator", path: "/life-expectancy-calculator", description: "Estimate your life expectancy" },
              { title: "Most Populated Countries", path: "/most-populated-countries-2025", description: "Countries with largest populations" },
              { title: "Infant Mortality Rate", path: "/infant-mortality-rate", description: "Child survival statistics by country" },
              { title: "Compare Countries", path: "/compare", description: "Compare statistics between countries" },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MedianAgeByCountryPage;
