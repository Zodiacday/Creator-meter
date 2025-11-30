"use client";

import { Navigation } from "@/components/Navigation";
import { Cloud, TrendingUp, Globe, Factory, AlertTriangle } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { QuickFacts } from "@/components/QuickFacts";
import { SourceCitation } from "@/components/SourceCitation";
import { ExpandableInfo } from "@/components/ExpandableInfo";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExportButton } from "@/components/ExportButton";

const Co2EmissionsPerCapitaPage = () => {
  const [viewMode, setViewMode] = useState<"highest" | "lowest" | "all">("highest");
  
  // Global Carbon Project 2025 Data
  const allCountries = [
    // Highest emitters
    { country: "Qatar", emissions: 37.6, population: 2.9, region: "Middle East", flag: "🇶🇦" },
    { country: "Kuwait", emissions: 25.6, population: 4.3, region: "Middle East", flag: "🇰🇼" },
    { country: "UAE", emissions: 25.3, population: 9.9, region: "Middle East", flag: "🇦🇪" },
    { country: "Bahrain", emissions: 23.4, population: 1.5, region: "Middle East", flag: "🇧🇭" },
    { country: "Saudi Arabia", emissions: 19.3, population: 36.4, region: "Middle East", flag: "🇸🇦" },
    { country: "Australia", emissions: 16.8, population: 26.4, region: "Oceania", flag: "🇦🇺" },
    { country: "USA", emissions: 14.9, population: 341.8, region: "North America", flag: "🇺🇸" },
    { country: "Canada", emissions: 14.2, population: 39.7, region: "North America", flag: "🇨🇦" },
    { country: "Russia", emissions: 11.4, population: 144.4, region: "Europe", flag: "🇷🇺" },
    { country: "S. Korea", emissions: 11.3, population: 51.7, region: "Asia", flag: "🇰🇷" },
    
    // Medium emitters
    { country: "Germany", emissions: 7.9, population: 83.3, region: "Europe", flag: "🇩🇪" },
    { country: "Japan", emissions: 8.5, population: 123.3, region: "Asia", flag: "🇯🇵" },
    { country: "China", emissions: 8.0, population: 1425.9, region: "Asia", flag: "🇨🇳" },
    { country: "UK", emissions: 5.2, population: 67.7, region: "Europe", flag: "🇬🇧" },
    { country: "France", emissions: 4.6, population: 64.8, region: "Europe", flag: "🇫🇷" },
    
    // Lowest emitters
    { country: "Burundi", emissions: 0.06, population: 13.2, region: "Africa", flag: "🇧🇮" },
    { country: "Chad", emissions: 0.08, population: 18.3, region: "Africa", flag: "🇹🇩" },
    { country: "Somalia", emissions: 0.09, population: 18.1, region: "Africa", flag: "🇸🇴" },
    { country: "Niger", emissions: 0.11, population: 27.2, region: "Africa", flag: "🇳🇪" },
    { country: "Mali", emissions: 0.31, population: 23.3, region: "Africa", flag: "🇲🇱" },
    { country: "Afghanistan", emissions: 0.33, population: 42.2, region: "Asia", flag: "🇦🇫" },
    { country: "Ethiopia", emissions: 0.22, population: 126.5, region: "Africa", flag: "🇪🇹" },
    { country: "DR Congo", emissions: 0.04, population: 102.3, region: "Africa", flag: "🇨🇩" }
  ];

  const highestEmitters = allCountries.slice(0, 10);
  const lowestEmitters = allCountries.slice(-8).reverse();

  const historicalTrend = [
    { year: "1960", world: 2.5, usa: 15.9, china: 0.6 },
    { year: "1980", world: 4.3, usa: 20.8, china: 1.5 },
    { year: "2000", world: 4.0, usa: 20.2, china: 2.7 },
    { year: "2010", world: 4.8, usa: 17.6, china: 6.2 },
    { year: "2020", world: 4.5, usa: 13.7, china: 7.7 },
    { year: "2025", world: 4.7, usa: 14.9, china: 8.0 }
  ];

  const faqData = [
    {
      question: "What is CO2 emissions per capita and why does it matter?",
      answer: "CO2 emissions per capita measures the average carbon dioxide produced per person in a country per year (metric tons). It's crucial for understanding individual carbon footprints and climate responsibility, accounting for population size differences between countries."
    },
    {
      question: "Which country has the highest CO2 emissions per capita in 2025?",
      answer: "Qatar leads with 37.6 metric tons per person annually, largely due to its oil and gas industry, high energy consumption for cooling in extreme heat, wealth-driven consumption, and relatively small population of 2.9 million."
    },
    {
      question: "Why do some countries have very low per capita emissions?",
      answer: "Countries with the lowest emissions per capita (like DR Congo at 0.04 tons, Burundi at 0.06 tons) typically have limited industrialization, low electricity access (often below 20%), reliance on renewable biomass for energy, and primarily rural populations."
    },
    {
      question: "How do USA and China compare in per capita emissions?",
      answer: "Despite China's higher total emissions, USA has nearly double the per capita rate: USA at 14.9 tons vs China at 8.0 tons per person. This reflects different consumption patterns, industrialization levels, and energy infrastructure."
    },
    {
      question: "What is the world average CO2 emissions per capita?",
      answer: "The global average is 4.7 metric tons of CO2 per person per year in 2025. However, this varies dramatically: developed nations average 10-15 tons, while many developing countries are below 2 tons per person."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "CO2 Emissions Per Capita", url: "/co2-emissions-per-capita" }
  ];

  const displayData = viewMode === "highest" ? highestEmitters : 
                     viewMode === "lowest" ? lowestEmitters : 
                     allCountries.sort((a, b) => b.emissions - a.emissions);

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="CO2 Emissions Per Capita by Country 2025 - Carbon Footprint Rankings"
        description="Qatar leads with 37.6 tons CO2 per person, USA 14.9 tons, China 8.0 tons. Compare carbon emissions per capita by country. Interactive charts, historical trends, climate data. Updated 2025."
        keywords="co2 emissions per capita, carbon footprint by country, greenhouse gas emissions per capita, climate change data, carbon emissions ranking, co2 per person, emissions by country 2025"
        canonical="https://creatormeter.com/co2-emissions-per-capita"
      />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "CO2 Emissions Per Capita by Country 2025",
          description: "Carbon dioxide emissions per person by country with historical trends and regional analysis",
          url: "https://creatormeter.com/co2-emissions-per-capita",
          keywords: ["co2 emissions", "carbon footprint", "climate change", "greenhouse gases", "per capita emissions"],
          temporalCoverage: "1960/2025",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      
      <Navigation />
      
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              CO2 Emissions Per Capita by Country 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Compare carbon footprints worldwide - from Qatar's 37.6 tons to DR Congo's 0.04 tons per person
            </p>
          </header>

          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <StatCard 
              label="World Average" 
              value={4.7} 
              icon={Globe} 
              color="#10b981" 
              subtitle="tons CO2/person/year" 
            />
            <StatCard 
              label="Highest - Qatar" 
              value={37.6} 
              icon={AlertTriangle} 
              color="#ef4444" 
              subtitle="tons CO2/person/year" 
            />
            <StatCard 
              label="Lowest - DR Congo" 
              value={0.04} 
              icon={Cloud} 
              color="#3b82f6" 
              subtitle="tons CO2/person/year" 
            />
          </section>

          {/* View Mode Selector & Export */}
          <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
            <Select value={viewMode} onValueChange={(value: any) => setViewMode(value)}>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="highest">Highest Emitters (Top 10)</SelectItem>
                <SelectItem value="lowest">Lowest Emitters (Bottom 8)</SelectItem>
                <SelectItem value="all">All Countries</SelectItem>
              </SelectContent>
            </Select>
            <ExportButton
              data={displayData.map((country, index) => ({
                rank: index + 1,
                country: country.country,
                region: country.region,
                emissionsPerCapita: country.emissions,
                population: country.population
              }))}
              filename="co2-emissions-per-capita"
              columns={[
                { key: "rank", label: "Rank" },
                { key: "country", label: "Country" },
                { key: "region", label: "Region" },
                { key: "emissionsPerCapita", label: "Emissions Per Capita (tons CO2)" },
                { key: "population", label: "Population (Millions)" }
              ]}
            />
          </div>

          {/* Enhanced Country Table */}
          <section className="mb-12">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 md:px-6 py-4 text-left text-sm font-semibold">Rank</th>
                      <th className="px-4 md:px-6 py-4 text-left text-sm font-semibold">Country</th>
                      <th className="px-4 md:px-6 py-4 text-left text-sm font-semibold">Region</th>
                      <th className="px-4 md:px-6 py-4 text-right text-sm font-semibold">Emissions/Person</th>
                      <th className="px-4 md:px-6 py-4 text-right text-sm font-semibold">Population (M)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {displayData.map((country, index) => (
                      <tr key={country.country} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 md:px-6 py-4 text-sm font-medium">{index + 1}</td>
                        <td className="px-4 md:px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xl md:text-2xl">{country.flag}</span>
                            <span className="font-medium text-sm md:text-base">{country.country}</span>
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-4 text-xs md:text-sm text-muted-foreground">{country.region}</td>
                        <td className="px-4 md:px-6 py-4 text-right">
                          <span className={`font-semibold ${
                            country.emissions > 15 ? 'text-red-500' : 
                            country.emissions > 7 ? 'text-yellow-500' : 
                            'text-green-500'
                          }`}>
                            {country.emissions} tons
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-4 text-right text-sm">{country.population}M</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Highest CO2 Emitters Per Capita" icon={Factory} color="#ef4444">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={highestEmitters.slice(0, 8)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={10} angle={-45} textAnchor="end" height={80} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="emissions" fill="#ef4444" radius={[8, 8, 0, 0]} name="Tons CO2/person" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Historical Trend: Per Capita Emissions" icon={TrendingUp} color="#10b981">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Legend />
                  <Line type="monotone" dataKey="world" stroke="#10b981" strokeWidth={2} name="World Avg" />
                  <Line type="monotone" dataKey="usa" stroke="#ef4444" strokeWidth={2} name="USA" />
                  <Line type="monotone" dataKey="china" stroke="#f59e0b" strokeWidth={2} name="China" />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </section>

          <QuickFacts
            facts={[
              "Qatar's per capita emissions are 627x higher than DR Congo's",
              "If everyone lived like Americans, we'd need 5 Earths",
              "Top 10% of global emitters produce 50% of all CO2",
              "USA emissions peaked in 2005 at 20.8 tons, now 14.9 tons",
              "China's per capita emissions surpassed EU average in 2019",
              "Global average has stayed near 4.7 tons since 2010 despite population growth"
            ]}
          />

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <ExpandableInfo key={index} title={faq.question}>
                  {faq.answer}
                </ExpandableInfo>
              ))}
            </div>
          </section>

          <SourceCitation
            sources={[
              { name: "Global Carbon Atlas", url: "http://www.globalcarbonatlas.org/", organization: "Global Carbon Project" },
              { name: "CO2 Emissions Database", url: "https://data.worldbank.org/indicator/EN.ATM.CO2E.PC", organization: "World Bank" },
              { name: "Emissions Data", url: "https://ourworldindata.org/co2-emissions", organization: "Our World in Data" },
              { name: "Climate Watch", url: "https://www.climatewatchdata.org/", organization: "World Resources Institute" }
            ]}
          />
        </div>
      </main>
    </div>
  );
};

export default Co2EmissionsPerCapitaPage;
