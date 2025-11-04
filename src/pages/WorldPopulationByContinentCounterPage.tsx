import { Navigation } from "@/components/Navigation";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { QuickFacts } from "@/components/QuickFacts";
import { SourceCitation } from "@/components/SourceCitation";
import { ExpandableInfo } from "@/components/ExpandableInfo";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Users, Globe, TrendingUp, MapPin } from "lucide-react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExportButton } from "@/components/ExportButton";

const WorldPopulationByContinentCounterPage = () => {
  const worldPopulation = useRealtimeCounter({
    initialValue: 8180000000,
    incrementPerSecond: 1.4,
    enabled: true
  });

  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);

  // UN Data 2025 - Population by continent with top countries
  const continentData = [
    { 
      continent: "Asia", 
      population: 4751000000,
      growth: 0.68,
      color: "#3b82f6",
      topCountries: [
        { name: "China", population: 1425893465, flag: "🇨🇳" },
        { name: "India", population: 1428627663, flag: "🇮🇳" },
        { name: "Indonesia", population: 277534122, flag: "🇮🇩" },
        { name: "Pakistan", population: 240485658, flag: "🇵🇰" },
        { name: "Bangladesh", population: 172954319, flag: "🇧🇩" }
      ]
    },
    { 
      continent: "Africa", 
      population: 1489000000,
      growth: 2.31,
      color: "#10b981",
      topCountries: [
        { name: "Nigeria", population: 223804632, flag: "🇳🇬" },
        { name: "Ethiopia", population: 126527060, flag: "🇪🇹" },
        { name: "Egypt", population: 112716598, flag: "🇪🇬" },
        { name: "DR Congo", population: 102262808, flag: "🇨🇩" },
        { name: "Tanzania", population: 67438106, flag: "🇹🇿" }
      ]
    },
    { 
      continent: "Europe", 
      population: 745000000,
      growth: -0.06,
      color: "#f59e0b",
      topCountries: [
        { name: "Russia", population: 144444359, flag: "🇷🇺" },
        { name: "Germany", population: 83294633, flag: "🇩🇪" },
        { name: "UK", population: 67736802, flag: "🇬🇧" },
        { name: "France", population: 64756584, flag: "🇫🇷" },
        { name: "Italy", population: 58870762, flag: "🇮🇹" }
      ]
    },
    { 
      continent: "N. America", 
      population: 602000000,
      growth: 0.55,
      color: "#8b5cf6",
      topCountries: [
        { name: "USA", population: 341814420, flag: "🇺🇸" },
        { name: "Mexico", population: 128455567, flag: "🇲🇽" },
        { name: "Canada", population: 39742430, flag: "🇨🇦" },
        { name: "Guatemala", population: 18092026, flag: "🇬🇹" },
        { name: "Cuba", population: 11194449, flag: "🇨🇺" }
      ]
    },
    { 
      continent: "S. America", 
      population: 439000000,
      growth: 0.72,
      color: "#ec4899",
      topCountries: [
        { name: "Brazil", population: 216422446, flag: "🇧🇷" },
        { name: "Colombia", population: 52085168, flag: "🇨🇴" },
        { name: "Argentina", population: 45773884, flag: "🇦🇷" },
        { name: "Peru", population: 34352719, flag: "🇵🇪" },
        { name: "Venezuela", population: 28838499, flag: "🇻🇪" }
      ]
    },
    { 
      continent: "Oceania", 
      population: 46000000,
      growth: 1.14,
      color: "#14b8a6",
      topCountries: [
        { name: "Australia", population: 26439111, flag: "🇦🇺" },
        { name: "Papua New Guinea", population: 10329931, flag: "🇵🇬" },
        { name: "New Zealand", population: 5228100, flag: "🇳🇿" },
        { name: "Fiji", population: 936375, flag: "🇫🇯" },
        { name: "Solomon Islands", population: 740424, flag: "🇸🇧" }
      ]
    }
  ];

  const faqData = [
    {
      question: "Which continent has the highest population in 2025?",
      answer: "Asia has the highest population with over 4.75 billion people, accounting for approximately 58% of the world's total population. India and China alone account for over 2.85 billion people."
    },
    {
      question: "Which continent is growing the fastest?",
      answer: "Africa has the fastest population growth rate at 2.31% annually, followed by Oceania at 1.14%. Europe is experiencing negative growth at -0.06%."
    },
    {
      question: "How accurate are these population counters?",
      answer: "Our counters use official UN Population Division data (2025 revision) with calculated real-time increments based on birth rates (2.47/sec) and death rates (1.07/sec) for accurate live tracking."
    },
    {
      question: "What is the smallest continent by population?",
      answer: "Oceania has the smallest population with about 46 million people, less than 1% of the world's population. Australia and Papua New Guinea make up over 80% of Oceania's population."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "World Population by Continent", url: "/world-population-by-continent-counter" }
  ];

  const selectedContinentData = selectedContinent 
    ? continentData.find(c => c.continent === selectedContinent)
    : null;

  return (
    <>
      <MetaTags
        title="World Population by Continent Counter - Live Continental Demographics 2025"
        description="Real-time world population counter by continent: Asia 4.75B, Africa 1.49B, Europe 745M. Interactive country drilldown, growth rates, and demographic data. Updated 2025 with UN data."
        keywords="world population by continent, population by continent counter, continental population, Asia population, Africa population, Europe population, population by country, world demographics"
        canonical="https://creatormeter.com/world-population-by-continent-counter"
      />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "World Population by Continent Statistics",
          description: "Real-time population counter with continent breakdowns and country drilldowns",
          url: "https://creatormeter.com/world-population-by-continent-counter",
          keywords: ["world population", "continent demographics", "population by country", "growth rates"],
          temporalCoverage: "2025",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              World Population by Continent Counter
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-time population tracking by continent with interactive country breakdowns and growth rates
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard
              label="World Population"
              value={worldPopulation}
              icon={Globe}
              color="#3b82f6"
              increment={1.4}
            />
            <StatCard
              label="Continents"
              value={6}
              icon={MapPin}
              color="#10b981"
            />
            <StatCard
              label="Countries"
              value={195}
              icon={Users}
              color="#f59e0b"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard
              title="Population by Continent (Billions)"
              icon={Globe}
              color="#3b82f6"
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={continentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="continent" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="population" 
                    fill="#3b82f6" 
                    name="Population" 
                    onClick={(data) => setSelectedContinent(data.continent)}
                    cursor="pointer"
                  >
                    {continentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-muted-foreground mt-2 text-center">Click on a bar to see top countries</p>
            </ChartCard>

            <ChartCard
              title="Population Distribution (%)"
              icon={TrendingUp}
              color="#10b981"
            >
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={continentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ continent, population }) => `${continent}: ${((population / worldPopulation) * 100).toFixed(1)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="population"
                  >
                    {continentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </section>

          {/* Country Drilldown Section */}
          {selectedContinentData && (
            <section className="mb-12 animate-fade-in">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-foreground">
                    {selectedContinentData.continent} - Top 5 Countries
                  </h2>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedContinent(null)}
                  >
                    Clear Selection
                  </Button>
                </div>
                <div className="grid gap-4">
                  {selectedContinentData.topCountries.map((country, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-background rounded-lg border border-border"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{country.flag}</span>
                        <div>
                          <h3 className="font-semibold text-lg">{country.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Population: {country.population.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          {((country.population / selectedContinentData.population) * 100).toFixed(2)}%
                        </p>
                        <p className="text-xs text-muted-foreground">of continent</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Growth Rates */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-foreground">Annual Growth Rates by Continent</h2>
              <ExportButton
                data={continentData.map(continent => ({
                  continent: continent.continent,
                  population: continent.population,
                  growthRate: continent.growth,
                  topCountry: continent.topCountries[0].name,
                  topCountryPopulation: continent.topCountries[0].population
                }))}
                filename="world-population-by-continent"
                columns={[
                  { key: "continent", label: "Continent" },
                  { key: "population", label: "Population" },
                  { key: "growthRate", label: "Growth Rate (%)" },
                  { key: "topCountry", label: "Largest Country" },
                  { key: "topCountryPopulation", label: "Largest Country Population" }
                ]}
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {continentData.map((continent) => (
                <div key={continent.continent} className="p-4 bg-card border border-border rounded-xl text-center">
                  <h3 className="font-semibold mb-2">{continent.continent}</h3>
                  <p className={`text-2xl font-bold ${continent.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {continent.growth >= 0 ? '+' : ''}{continent.growth}%
                  </p>
                </div>
              ))}
            </div>
          </section>

          <QuickFacts
            facts={[
              "Asia's population is equivalent to 58% of the total world population",
              "Africa's population is expected to double by 2050",
              "Europe is the only continent with declining population (-0.06%)",
              "3 countries (China, India, USA) account for 38% of world population",
              "Oceania grows fastest per capita despite smallest total population",
              "By 2100, Africa may have 4 billion people (40% of world)"
            ]}
          />

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
              { name: "World Population Prospects 2025", url: "https://population.un.org/wpp/", organization: "United Nations Population Division" },
              { name: "International Database", url: "https://www.census.gov/data-tools/demo/idb/", organization: "U.S. Census Bureau" },
              { name: "Population Data", url: "https://data.worldbank.org/indicator/SP.POP.TOTL", organization: "World Bank" },
              { name: "World Population Review", url: "https://worldpopulationreview.com/", organization: "WPR" }
            ]}
          />
        </main>
      </div>
    </>
  );
};

export default WorldPopulationByContinentCounterPage;
