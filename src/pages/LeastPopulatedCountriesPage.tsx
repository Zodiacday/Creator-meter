import { Navigation } from "@/components/Navigation";
import { Users, TrendingDown } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const LeastPopulatedCountriesPage = () => {
  const leastPopulated = [
    { country: "Vatican City", population: 825, flag: "🇻🇦" },
    { country: "Nauru", population: 12580, flag: "🇳🇷" },
    { country: "Tuvalu", population: 11900, flag: "🇹🇻" },
    { country: "Palau", population: 18000, flag: "🇵🇼" },
    { country: "San Marino", population: 34000, flag: "🇸🇲" },
    { country: "Liechtenstein", population: 39000, flag: "🇱🇮" },
    { country: "Monaco", population: 39000, flag: "🇲🇨" },
    { country: "Saint Kitts and Nevis", population: 47600, flag: "🇰🇳" },
    { country: "Marshall Islands", population: 42000, flag: "🇲🇭" },
    { country: "Dominica", population: 72400, flag: "🇩🇲" },
  ];

  const faqData = [
    {
      question: "What is the least populated country in the world?",
      answer: "Vatican City is the least populated country with approximately 825 residents. As the spiritual center of the Catholic Church, it's also the world's smallest country by both area and population."
    },
    {
      question: "Why do some countries have such small populations?",
      answer: "Small populations often result from limited land area (island nations), geographic isolation, lack of natural resources, or specific governance structures like Vatican City being a religious state."
    },
    {
      question: "Are least populated countries growing in population?",
      answer: "Most have stable or declining populations due to limited space, emigration for economic opportunities, and low birth rates. Some Pacific island nations face additional challenges from climate change."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Least Populated Countries 2025 - Smallest Nations by Population"
        description="Vatican City has only 825 people. Complete ranking of the world's least populated countries. Current data on smallest nations and micro-states."
        keywords="least populated countries, smallest countries, Vatican City population, micro-states, lowest population countries"
        canonical={`${window.location.origin}/least-populated-countries`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Least Populated Countries",
          description: "Population rankings of the world's smallest countries",
          url: `${window.location.origin}/least-populated-countries`,
          keywords: ["population", "countries", "micro-states", "demographics"]
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <Navigation />
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold gradient-text mb-8">Least Populated Countries 2025</h1>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <StatCard label="1st - Vatican City" value={825} icon={Users} color="hsl(var(--population))" />
            <StatCard label="2nd - Nauru" value={12580} icon={Users} color="hsl(var(--population))" />
          </div>
          <ChartCard title="Top 10 Least Populated Countries" icon={TrendingDown} color="hsl(var(--population))">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={leastPopulated}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                <Bar dataKey="population" fill="hsl(var(--population))" radius={[8, 8, 0, 0]} />
              </BarChart>
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

export default LeastPopulatedCountriesPage;
