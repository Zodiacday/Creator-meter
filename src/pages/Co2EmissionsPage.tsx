import { Navigation } from "@/components/Navigation";
import { Cloud, TrendingUp, Globe2, Factory } from "lucide-react";
import { useBackendData } from "@/hooks/useBackendData";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { ExportButton } from "@/components/ExportButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";

interface Co2Data {
  year: number;
  globalCO2: number;
  annualProjection: number;
  emissionsPerSecond: number;
  topCountries: Array<{
    country: string;
    emissions: number;
    percentage: number;
    perCapita: number;
  }>;
  historical: Array<{
    year: number;
    emissions: number;
  }>;
  sources: string[];
}

const Co2EmissionsPage = () => {
  const { data, isLoading } = useBackendData<Co2Data>("co2-emissions");
  
  const currentEmissions = useRealtimeCounter({
    initialValue: data?.globalCO2 || 0,
    incrementPerSecond: data?.emissionsPerSecond || 1172
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <Cloud className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
            <p className="text-muted-foreground">Loading emissions data...</p>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "CO₂ Emissions", href: "/co2-emissions" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="CO2 Emissions Live Tracker - Carbon Emissions by Country"
        description="Real-time CO2 emissions tracker showing global carbon dioxide output. Track emissions by country, historical trends, and per capita data with live updates."
        keywords="co2 emissions, carbon emissions, greenhouse gases, climate change, emissions by country, carbon footprint"
        canonical="https://www.creatormeter.com/co2-emissions"
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Global CO2 Emissions Statistics",
          description: "Real-time carbon dioxide emissions data by country with historical trends and projections",
          url: "https://www.creatormeter.com/co2-emissions",
          keywords: ["co2", "emissions", "carbon", "greenhouse gases", "climate"],
          temporalCoverage: "1950/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={breadcrumbs.map((crumb) => ({
          name: crumb.label,
          url: `https://www.creatormeter.com${crumb.href}`
        }))}
      />
      <Navigation />
      <noscript>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Global CO2 Emissions Live Counter</h1>
          <p className="text-muted-foreground">
            Track real-time global carbon dioxide emissions from fossil fuels, industry, and transportation. 
            Over 37 billion metric tons of CO2 are emitted annually worldwide. Data from International Energy Agency 
            and Global Carbon Project. Enable JavaScript to see the live counter.
          </p>
        </div>
      </noscript>
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between gap-4 mb-8 animate-fade-in flex-wrap">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-[hsl(var(--environment))]/20">
              <Cloud className="w-8 h-8 text-[hsl(var(--environment))]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-text">CO₂ Emissions</h1>
              <p className="text-muted-foreground mt-2">Real-time global carbon dioxide emissions tracking</p>
            </div>
          </div>
          {data?.topCountries && (
            <ExportButton 
              data={data.topCountries} 
              filename="co2-emissions-data"
              variant="default"
              size="lg"
            />
          )}
        </div>

        {/* Main Counter */}
        <div className="relative mb-12 text-center py-12 bg-gradient-to-br from-[hsl(var(--environment))]/10 to-transparent rounded-3xl border border-border animate-fade-in">
          <p className="text-sm text-muted-foreground mb-2">CO₂ Emissions This Year</p>
          <Counter value={currentEmissions} className="text-5xl md:text-7xl font-bold text-foreground counter-glow" />
          <p className="text-sm text-muted-foreground mt-2">metric tons</p>
          <div className="absolute -inset-4 bg-[hsl(var(--environment))]/20 blur-3xl -z-10 animate-pulse-glow rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard 
            label="Emissions Per Second" 
            value={data?.emissionsPerSecond || 0} 
            icon={TrendingUp} 
            color="hsl(var(--environment))"
            subtitle="tons/second"
          />
          <StatCard 
            label="Annual Projection" 
            value={data?.annualProjection || 0} 
            icon={Globe2} 
            color="hsl(var(--environment))"
            subtitle="tons"
          />
          <StatCard 
            label="Countries Tracked" 
            value={data?.topCountries.length || 0} 
            icon={Factory} 
            color="hsl(var(--environment))"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <ChartCard title="Top Emitters" icon={Factory} color="hsl(var(--environment))">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data?.topCountries.slice(0, 10)}>
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
                <Bar dataKey="emissions" fill="hsl(var(--environment))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Historical Emissions" icon={TrendingUp} color="hsl(var(--environment))">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data?.historical}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="emissions" 
                  stroke="hsl(var(--environment))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--environment))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Country Rankings */}
        <ChartCard title="Per Capita Emissions" icon={Globe2} color="hsl(var(--environment))">
          <div className="space-y-4">
            {data?.topCountries.slice(0, 10).map((country, index) => (
              <div key={country.country} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[hsl(var(--environment))]/20 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{country.country}</span>
                    <span className="text-sm text-muted-foreground">{country.perCapita} tons/capita</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[hsl(var(--environment))] transition-all duration-1000"
                      style={{ width: `${(country.perCapita / 20) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        {/* Data Sources */}
        <div className="mt-12 p-6 bg-card border border-border rounded-xl">
          <p className="text-sm text-muted-foreground">
            <strong>Data Sources:</strong> {data?.sources.join(", ")}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Co2EmissionsPage;
