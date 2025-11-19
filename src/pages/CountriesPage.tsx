import { Navigation } from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import { Globe, Users, TrendingUp } from "lucide-react";
import { useBackendData } from "@/hooks/useBackendData";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { Counter } from "@/components/Counter";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { QuickFacts } from "@/components/QuickFacts";
import { SourceCitation } from "@/components/SourceCitation";
import { ExpandableInfo } from "@/components/ExpandableInfo";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

interface CountriesData {
  worldPopulation: number;
  populationGrowthPerSecond: number;
  topCountries: Array<{
    rank: number;
    country: string;
    population: number;
    percentage: number;
    growthRate: number;
  }>;
  regionalPopulation: Record<string, number>;
  historical: Array<{ year: number; population: number }>;
}

const CountriesPage = () => {
  const { data, isLoading } = useBackendData<CountriesData>("countries");
  const livePopulation = useRealtimeCounter({
    initialValue: data?.worldPopulation || 0,
    incrementPerSecond: data?.populationGrowthPerSecond || 0
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const topCountriesData = data?.topCountries.slice(0, 15).map((c) => ({
    name: c.country,
    population: c.population / 1000000,
    percentage: c.percentage,
  })) || [];

  const regionalData = Object.entries(data?.regionalPopulation || {}).map(([name, value]) => ({
    name,
    population: value / 1000000,
  }));

  const historicalData = data?.historical.map((h) => ({
    year: h.year,
    population: h.population / 1000000000,
  })) || [];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Countries & Population Statistics"
        description="Live world population statistics by country and region. Explore population data, demographics, growth rates, and historical trends for all countries worldwide."
        keywords="world population, country statistics, population by country, demographics, population data, regional population"
        canonical={`${window.location.origin}/countries`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "World Population by Country",
          description: "Real-time population statistics for all countries and regions worldwide",
          url: `${window.location.origin}/countries`,
          keywords: ["population", "demographics", "countries", "world statistics"],
          temporalCoverage: "2024/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: window.location.origin },
          { name: "Countries & Population", url: `${window.location.origin}/countries` }
        ]}
      />
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--population))]/20">
            <Globe className="w-8 h-8 text-[hsl(var(--population))]" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <BackButton />
              <h1 className="text-4xl font-bold gradient-text">Countries & Population</h1>
            </div>
            <p className="text-muted-foreground mt-2">Population statistics and demographics by country and region</p>
          </div>
        </div>

        <div className="mb-8">
          <QuickFacts facts={[
            "195 sovereign countries exist in the world today",
            "China and India each have over 1.4 billion people - combined 36% of world population",
            "Asia is home to 60% of the global population",
            "Vatican City is the smallest country with ~800 residents",
            "Population density ranges from 2/km² (Mongolia) to 26,000/km² (Monaco)"
          ]} />
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <StatCard
            icon={Globe}
            label="World Population"
            value={livePopulation}
            color="hsl(var(--population))"
          />
          <StatCard
            icon={Users}
            label="Most Populous"
            value={data?.topCountries[0]?.population || 0}
            color="hsl(var(--population))"
            subtitle={data?.topCountries[0]?.country || "N/A"}
          />
          <StatCard
            icon={TrendingUp}
            label="Growth Per Second"
            value={data?.populationGrowthPerSecond || 0}
            color="hsl(var(--chart-3))"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ChartCard title="Top 15 Countries by Population" icon={Globe} color="hsl(var(--population))">
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={topCountriesData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--foreground))" />
                <YAxis dataKey="name" type="category" width={100} stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="population" fill="hsl(var(--population))" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Population by Region" icon={Users} color="hsl(var(--chart-2))">
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={regionalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--foreground))" angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="population" fill="hsl(var(--chart-2))" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <ChartCard title="World Population Growth" icon={TrendingUp} color="hsl(var(--population))">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="year" stroke="hsl(var(--foreground))" />
              <YAxis stroke="hsl(var(--foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line type="monotone" dataKey="population" stroke="hsl(var(--population))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <div className="space-y-4 mt-8">
          <ExpandableInfo title="Population Distribution by Continent">
            <div className="space-y-2">
              <p><strong>Asia:</strong> 4.8 billion (60% of world)</p>
              <p><strong>Africa:</strong> 1.5 billion (18%)</p>
              <p><strong>Europe:</strong> 750 million (9%)</p>
              <p><strong>North America:</strong> 600 million (7%)</p>
              <p><strong>South America:</strong> 440 million (5%)</p>
              <p><strong>Oceania:</strong> 45 million (0.5%)</p>
            </div>
          </ExpandableInfo>

          <ExpandableInfo title="Urbanization Trends">
            <div className="space-y-2">
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>56% of world population lives in urban areas (2024)</li>
                <li>By 2050, 68% expected to be urban dwellers</li>
                <li>Tokyo is world's largest metropolitan area with 37 million</li>
                <li>33 megacities (10M+ population) exist globally</li>
                <li>Urbanization is fastest in Africa and Asia</li>
              </ul>
            </div>
          </ExpandableInfo>
        </div>

        <div className="mt-8">
          <SourceCitation sources={[
            {
              name: "World Population Prospects 2024",
              url: "https://population.un.org/wpp/",
              organization: "United Nations Department of Economic and Social Affairs"
            },
            {
              name: "International Data Base",
              url: "https://www.census.gov/programs-surveys/international-programs/about/idb.html",
              organization: "U.S. Census Bureau"
            },
            {
              name: "World Population Review",
              url: "https://worldpopulationreview.com/",
              organization: "World Population Review"
            }
          ]} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CountriesPage;
