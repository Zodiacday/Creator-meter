"use client";

import { Navigation } from "@/components/Navigation";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { QuickFacts } from "@/components/QuickFacts";
import { SourceCitation } from "@/components/SourceCitation";
import { ExpandableInfo } from "@/components/ExpandableInfo";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { DollarSign, TrendingUp, Globe, Search } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExportButton } from "@/components/ExportButton";

const GlobalGdpByCountryPage = () => {
  const worldGdp = useRealtimeCounter({
    initialValue: 105000000000000, // $105 trillion
    incrementPerSecond: 3500000, // ~$3.5M per second
    enabled: true
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"gdp" | "growth" | "perCapita">("gdp");
  const [regionFilter, setRegionFilter] = useState<string>("all");

  // IMF & World Bank Data 2025 - GDP by country (billions USD)
  const countryData = [
    { country: "USA", gdp: 27400, growth: 2.4, perCapita: 80030, region: "North America", flag: "🇺🇸" },
    { country: "China", gdp: 17800, growth: 4.6, perCapita: 12500, region: "Asia", flag: "🇨🇳" },
    { country: "Japan", gdp: 4200, growth: 0.9, perCapita: 33740, region: "Asia", flag: "🇯🇵" },
    { country: "Germany", gdp: 4100, growth: 1.4, perCapita: 49260, region: "Europe", flag: "🇩🇪" },
    { country: "India", gdp: 3900, growth: 6.8, perCapita: 2730, region: "Asia", flag: "🇮🇳" },
    { country: "UK", gdp: 3300, growth: 1.6, perCapita: 48710, region: "Europe", flag: "🇬🇧" },
    { country: "France", gdp: 3000, growth: 1.3, perCapita: 46320, region: "Europe", flag: "🇫🇷" },
    { country: "Brazil", gdp: 2100, growth: 2.3, perCapita: 9920, region: "South America", flag: "🇧🇷" },
    { country: "Italy", gdp: 2200, growth: 0.9, perCapita: 37350, region: "Europe", flag: "🇮🇹" },
    { country: "Canada", gdp: 2100, growth: 2.0, perCapita: 52720, region: "North America", flag: "🇨🇦" },
    { country: "Russia", gdp: 1900, growth: 2.6, perCapita: 13180, region: "Europe", flag: "🇷🇺" },
    { country: "S. Korea", gdp: 1700, growth: 2.5, perCapita: 32860, region: "Asia", flag: "🇰🇷" },
    { country: "Spain", gdp: 1600, growth: 2.1, perCapita: 33880, region: "Europe", flag: "🇪🇸" },
    { country: "Australia", gdp: 1700, growth: 2.3, perCapita: 64490, region: "Oceania", flag: "🇦🇺" },
    { country: "Mexico", gdp: 1500, growth: 3.0, perCapita: 11660, region: "North America", flag: "🇲🇽" },
    { country: "Indonesia", gdp: 1400, growth: 5.1, perCapita: 5050, region: "Asia", flag: "🇮🇩" },
    { country: "Netherlands", gdp: 1100, growth: 1.7, perCapita: 63230, region: "Europe", flag: "🇳🇱" },
    { country: "Saudi Arabia", gdp: 1100, growth: 3.7, perCapita: 30450, region: "Middle East", flag: "🇸🇦" },
    { country: "Turkey", gdp: 1100, growth: 4.0, perCapita: 12760, region: "Middle East", flag: "🇹🇷" },
    { country: "Switzerland", gdp: 900, growth: 1.2, perCapita: 103480, region: "Europe", flag: "🇨🇭" }
  ];

  const historicalGdp = [
    { year: "2000", gdp: 34 },
    { year: "2005", gdp: 48 },
    { year: "2010", gdp: 66 },
    { year: "2015", gdp: 75 },
    { year: "2020", gdp: 85 },
    { year: "2021", gdp: 96 },
    { year: "2022", gdp: 101 },
    { year: "2023", gdp: 103 },
    { year: "2024", gdp: 105 }
  ];

  const faqData = [
    {
      question: "Which country has the largest GDP in 2025?",
      answer: "The United States has the world's largest economy with a GDP of $27.4 trillion, followed by China at $17.8 trillion and Japan at $4.2 trillion."
    },
    {
      question: "Which country has the fastest growing GDP?",
      answer: "India has the fastest GDP growth rate at 6.8% annually, followed by Indonesia at 5.1% and China at 4.6%. Developing economies generally show higher growth rates."
    },
    {
      question: "What is GDP per capita and why does it matter?",
      answer: "GDP per capita is total GDP divided by population, showing average economic output per person. Switzerland leads at $103,480 per capita, indicating high living standards despite a smaller total economy."
    },
    {
      question: "How is GDP calculated and updated?",
      answer: "GDP is calculated by adding consumption, investment, government spending, and net exports. Our counter uses IMF/World Bank data with real-time increments based on annual growth rates."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Global GDP by Country", url: "/global-gdp-by-country" }
  ];

  // Filter and sort logic
  const filteredData = countryData
    .filter(country => 
      country.country.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (regionFilter === "all" || country.region === regionFilter)
    )
    .sort((a, b) => {
      if (sortBy === "gdp") return b.gdp - a.gdp;
      if (sortBy === "growth") return b.growth - a.growth;
      if (sortBy === "perCapita") return b.perCapita - a.perCapita;
      return 0;
    });

  const regions = Array.from(new Set(countryData.map(c => c.region)));

  return (
    <>
      <MetaTags
        title="Global GDP by Country 2025 - World Economy Rankings & Growth Rates"
        description="Interactive GDP rankings: USA $27.4T, China $17.8T, Japan $4.2T. Compare GDP by country, growth rates, per capita income. Filter by region, search countries. Real-time economic data 2025."
        keywords="global GDP by country, GDP ranking, world economy, GDP per capita, economic growth by country, largest economies, GDP comparison, world GDP 2025"
        canonical="https://creatormeter.com/global-gdp-by-country"
      />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Global GDP by Country Statistics",
          description: "Interactive GDP data by country with growth rates and per capita income",
          url: "https://creatormeter.com/global-gdp-by-country",
          keywords: ["GDP", "world economy", "economic growth", "GDP per capita", "country rankings"],
          temporalCoverage: "2000/2025",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Global GDP by Country
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Interactive world economy rankings with real-time GDP data, growth rates, and per capita comparisons
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard
              label="World GDP"
              value={worldGdp}
              icon={DollarSign}
              color="#3b82f6"
              increment={3500000}
              prefix="$"
            />
            <StatCard
              label="Countries Tracked"
              value={countryData.length}
              icon={Globe}
              color="#10b981"
            />
            <StatCard
              label="Average Growth"
              value={2.8}
              icon={TrendingUp}
              color="#f59e0b"
              suffix="%"
            />
          </section>

          {/* Interactive Filters */}
          <section className="mb-8 bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-foreground">Filter & Sort Countries</h2>
              <ExportButton
                data={filteredData.map((country, index) => ({
                  rank: index + 1,
                  country: country.country,
                  region: country.region,
                  gdp: country.gdp,
                  growth: country.growth,
                  perCapita: country.perCapita
                }))}
                filename="global-gdp-by-country"
                columns={[
                  { key: "rank", label: "Rank" },
                  { key: "country", label: "Country" },
                  { key: "region", label: "Region" },
                  { key: "gdp", label: "GDP (Billions USD)" },
                  { key: "growth", label: "Growth Rate (%)" },
                  { key: "perCapita", label: "GDP Per Capita (USD)" }
                ]}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search country..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {regions.map(region => (
                    <SelectItem key={region} value={region}>{region}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gdp">Total GDP</SelectItem>
                  <SelectItem value="growth">Growth Rate</SelectItem>
                  <SelectItem value="perCapita">Per Capita</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* Country Rankings Table */}
          <section className="mb-12">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Rank</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Country</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Region</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">GDP (Billions)</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">Growth %</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">Per Capita</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredData.map((country, index) => (
                      <tr key={country.country} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium">{index + 1}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{country.flag}</span>
                            <span className="font-medium">{country.country}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{country.region}</td>
                        <td className="px-6 py-4 text-right font-semibold">${country.gdp.toLocaleString()}B</td>
                        <td className="px-6 py-4 text-right">
                          <span className={`font-medium ${country.growth >= 3 ? 'text-green-500' : country.growth >= 2 ? 'text-yellow-500' : 'text-muted-foreground'}`}>
                            {country.growth}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-sm">${country.perCapita.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {filteredData.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No countries found matching your criteria.</p>
            )}
          </section>

          {/* Charts */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard
              title="Top 10 Economies by GDP (Trillions)"
              icon={DollarSign}
              color="#3b82f6"
            >
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={countryData.slice(0, 10)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" angle={-45} textAnchor="end" height={80} fontSize={11} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="gdp" fill="#3b82f6" name="GDP (Billions)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="World GDP Growth (Trillions)"
              icon={TrendingUp}
              color="#10b981"
            >
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={historicalGdp}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="gdp" stroke="#10b981" strokeWidth={3} name="GDP (Trillions)" />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </section>

          <QuickFacts
            facts={[
              "Top 10 economies account for 67% of world GDP",
              "USA and China combined represent 43% of global economy",
              "India is projected to become 3rd largest economy by 2027",
              "Switzerland has highest GDP per capita at $103,480",
              "Emerging markets (BRICS) growing 2x faster than developed economies",
              "Global GDP has tripled since 2000 from $34T to $105T"
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
              { name: "World Economic Outlook", url: "https://www.imf.org/en/Publications/WEO", organization: "International Monetary Fund" },
              { name: "World Development Indicators", url: "https://databank.worldbank.org/source/world-development-indicators", organization: "World Bank" },
              { name: "National Accounts", url: "https://data.oecd.org/", organization: "OECD" },
              { name: "Economic Statistics", url: "https://www.worldometers.info/gdp/", organization: "Worldometer" }
            ]}
          />
        </main>
      </div>
    </>
  );
};

export default GlobalGdpByCountryPage;
