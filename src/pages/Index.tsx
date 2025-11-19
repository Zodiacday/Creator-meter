import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { MetricCard } from "@/components/MetricCard";
import { InsightsSection } from "@/components/InsightsSection";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { 
  Users, DollarSign, Cloud, Wifi, Heart, TrendingDown, 
  Zap, Building, Baby, Skull, TrendingUp, UserPlus,
  PieChart, Calendar, Globe2, MapPin, Flag, BarChart3,
  Wheat, Package, Map, Search, LayoutGrid, Droplet,
  Apple, FileText, Database, Activity, ShieldAlert
} from "lucide-react";

const Index = () => {
  // Population
  const worldPopulation = useRealtimeCounter({
    initialValue: 8256179905,
    incrementPerSecond: 2.69
  });

  const birthsToday = useRealtimeCounter({
    initialValue: 327000,
    incrementPerSecond: 4.73
  });

  const deathsToday = useRealtimeCounter({
    initialValue: 154000,
    incrementPerSecond: 2.04
  });

  const netGrowthToday = useRealtimeCounter({
    initialValue: 173000,
    incrementPerSecond: 2.69
  });

  // Government & Economics
  const healthSpending = useRealtimeCounter({
    initialValue: 9200000000000,
    incrementPerSecond: 292000
  });

  const educationSpending = useRealtimeCounter({
    initialValue: 5500000000000,
    incrementPerSecond: 174000
  });

  const militarySpending = useRealtimeCounter({
    initialValue: 2200000000000,
    incrementPerSecond: 70000
  });

  // Society & Media
  const internetUsers = useRealtimeCounter({
    initialValue: 5300000000,
    incrementPerSecond: 12
  });

  const booksPublished = useRealtimeCounter({
    initialValue: 2200000,
    incrementPerSecond: 0.07
  });

  const newspapersSold = useRealtimeCounter({
    initialValue: 155000000,
    incrementPerSecond: 1.8
  });

  // Environment
  const co2Emissions = useRealtimeCounter({
    initialValue: 37000000000,
    incrementPerSecond: 1173
  });

  const forestLoss = useRealtimeCounter({
    initialValue: 10000000,
    incrementPerSecond: 0.32
  });

  // Food
  const undernourished = useRealtimeCounter({
    initialValue: 828,
    incrementPerSecond: 0
  });

  const overweight = useRealtimeCounter({
    initialValue: 2000000000,
    incrementPerSecond: 0
  });

  const obese = useRealtimeCounter({
    initialValue: 890,
    incrementPerSecond: 0
  });

  // Water
  const peopleWithoutSafeWater = useRealtimeCounter({
    initialValue: 2000000000,
    incrementPerSecond: 0
  });

  const waterUsed = useRealtimeCounter({
    initialValue: 4000,
    incrementPerSecond: 0.127
  });

  // Energy
  const energyUsed = useRealtimeCounter({
    initialValue: 580000,
    incrementPerSecond: 18.38
  });

  const renewable = useRealtimeCounter({
    initialValue: 29,
    incrementPerSecond: 0.0000001
  });

  // Health
  const infectiousDeaths = useRealtimeCounter({
    initialValue: 13000000,
    incrementPerSecond: 0.41
  });

  const cancerDeaths = useRealtimeCounter({
    initialValue: 10000000,
    incrementPerSecond: 0.32
  });

  // GDP
  const worldGdp = useRealtimeCounter({
    initialValue: 100000000000000,
    incrementPerSecond: 3170000
  });

  // US National Debt
  const usNationalDebt = useRealtimeCounter({
    initialValue: 36000000000000,
    incrementPerSecond: 1140000
  });

  return (
    <>
      <MetaTags 
        title="Live World Statistics 2025 - Real-Time Global Data Counter"
        description="Watch the world change in real-time. Live counters for population (8.25B+), CO₂ emissions, GDP, births/deaths, and 50+ global metrics. Verified data from UN, WHO, World Bank."
        keywords="world statistics, global data, population counter, live data, world population clock, real-time statistics, global metrics, world data"
        canonical={`${window.location.origin}/`}
      />
      <SchemaMarkup 
        type="Organization" 
        data={{}} 
      />
      <SchemaMarkup 
        type="WebSite" 
        data={{
          name: "CreatorMeter",
          url: window.location.origin,
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${window.location.origin}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        }} 
      />
      
      <Navigation />

      <noscript>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Real-Time Global Statistics - CreatorMeter</h1>
          <p className="text-muted-foreground">
            Track live world population, births, deaths, CO2 emissions, coronavirus cases, GDP, and more. 
            Real-time data visualization platform presenting continuously updating statistics about the world.
            Enable JavaScript to see live counters.
          </p>
        </div>
      </noscript>

      <main className="min-h-screen bg-background">
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-8">
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">
                CreatorMeter — Live Global Data for a Changing World
              </h1>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                We turn verified global data into live, interactive insights.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Four-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Row 1 */}
            <MetricCard
              title="World Population Live"
              value={worldPopulation}
              subtitle="Current global population"
              icon={Users}
              link="/world-population-live"
              gradientFrom="from-blue-500"
              gradientTo="to-blue-400"
            />
            <MetricCard
              title="World GDP Live"
              value={worldGdp}
              subtitle="Global economic output"
              icon={DollarSign}
              link="/world-gdp-live"
              gradientFrom="from-green-500"
              gradientTo="to-green-400"
            />
            <MetricCard
              title="CO₂ Emissions"
              value={co2Emissions}
              subtitle="Annual carbon emissions"
              icon={Cloud}
              link="/co2-emissions"
              gradientFrom="from-orange-500"
              gradientTo="to-orange-400"
            />
            <MetricCard
              title="Internet Users"
              value={internetUsers}
              subtitle="Global online population"
              icon={Wifi}
              link="/internet-users"
              gradientFrom="from-blue-500"
              gradientTo="to-blue-400"
            />

            {/* Row 2 */}
            <MetricCard
              title="Life Expectancy"
              staticValue="73.2 years"
              subtitle="Global average lifespan"
              icon={Heart}
              link="/life-expectancy-calculator"
              gradientFrom="from-pink-500"
              gradientTo="to-pink-400"
            />
            <MetricCard
              title="Poverty Rate"
              staticValue="9.3%"
              subtitle="Living under $2.15/day"
              icon={TrendingDown}
              link="/poverty-rate"
              gradientFrom="from-red-500"
              gradientTo="to-red-400"
            />
            <MetricCard
              title="Renewable Energy"
              value={renewable}
              subtitle="% of total energy use"
              icon={Zap}
              link="/renewable-energy"
              gradientFrom="from-green-500"
              gradientTo="to-green-400"
            />
            <MetricCard
              title="US National Debt"
              value={usNationalDebt}
              subtitle="Total outstanding debt"
              icon={Building}
              link="/us-national-debt-clock"
              gradientFrom="from-yellow-500"
              gradientTo="to-yellow-400"
            />

            {/* Row 3 */}
            <MetricCard
              title="Births Per Day"
              value={birthsToday}
              subtitle="Daily births worldwide"
              icon={Baby}
              link="/births-per-day"
              gradientFrom="from-cyan-500"
              gradientTo="to-cyan-400"
            />
            <MetricCard
              title="Deaths Per Day"
              value={deathsToday}
              subtitle="Daily deaths worldwide"
              icon={Skull}
              link="/deaths-per-day"
              gradientFrom="from-gray-500"
              gradientTo="to-gray-400"
            />
            <MetricCard
              title="Population Growth Rate"
              value={netGrowthToday}
              subtitle="Net daily population change"
              icon={TrendingUp}
              link="/population-growth-rate"
              gradientFrom="from-blue-500"
              gradientTo="to-blue-400"
            />
            <MetricCard
              title="Fertility Rate"
              staticValue="2.3"
              subtitle="Births per woman"
              icon={UserPlus}
              link="/fertility-rate-by-country"
              gradientFrom="from-blue-500"
              gradientTo="to-blue-400"
            />

            {/* Row 4 */}
            <MetricCard
              title="Population by Age"
              staticValue="View Breakdown"
              subtitle="Age group distribution"
              icon={PieChart}
              link="/population-by-age"
              gradientFrom="from-blue-500"
              gradientTo="to-blue-400"
            />
            <MetricCard
              title="Median Age"
              staticValue="30.4 years"
              subtitle="Global median age"
              icon={Calendar}
              link="/median-age-by-country"
              gradientFrom="from-pink-500"
              gradientTo="to-pink-400"
            />
            <MetricCard
              title="Population by Continent"
              staticValue="View Distribution"
              subtitle="Continental breakdown"
              icon={Globe2}
              link="/world-population-by-continent-counter"
              gradientFrom="from-teal-500"
              gradientTo="to-teal-400"
            />
            <MetricCard
              title="Most Populated Countries"
              staticValue="Top Rankings"
              subtitle="Largest populations"
              icon={MapPin}
              link="/most-populated-countries"
              gradientFrom="from-blue-500"
              gradientTo="to-blue-400"
            />

            {/* Row 5 */}
            <MetricCard
              title="Least Populated Countries"
              staticValue="Bottom Rankings"
              subtitle="Smallest populations"
              icon={MapPin}
              link="/least-populated-countries"
              gradientFrom="from-gray-500"
              gradientTo="to-gray-400"
            />
            <MetricCard
              title="CO₂ Per Capita"
              staticValue="4.7 tons"
              subtitle="Emissions per person"
              icon={Cloud}
              link="/co2-emissions-per-capita"
              gradientFrom="from-orange-500"
              gradientTo="to-orange-400"
            />
            <MetricCard
              title="Government Spending"
              value={healthSpending}
              subtitle="Global health expenditure"
              icon={Building}
              link="/government-spending"
              gradientFrom="from-blue-500"
              gradientTo="to-blue-400"
            />
            <MetricCard
              title="Food & Agriculture"
              staticValue="View Data"
              subtitle="Global food statistics"
              icon={Wheat}
              link="/food-agriculture"
              gradientFrom="from-green-500"
              gradientTo="to-green-400"
            />

            {/* Row 6 */}
            <MetricCard
              title="Commodities"
              staticValue="View Prices"
              subtitle="Global commodity data"
              icon={Package}
              link="/commodities"
              gradientFrom="from-yellow-500"
              gradientTo="to-yellow-400"
            />
            <MetricCard
              title="World Map"
              staticValue="Explore Map"
              subtitle="Interactive visualization"
              icon={Map}
              link="/world-map"
              gradientFrom="from-teal-500"
              gradientTo="to-teal-400"
            />
            <MetricCard
              title="Countries"
              staticValue="View All"
              subtitle="Country statistics"
              icon={Globe2}
              link="/countries"
              gradientFrom="from-blue-500"
              gradientTo="to-blue-400"
            />
            <MetricCard
              title="Flags"
              staticValue="Browse Flags"
              subtitle="National flags gallery"
              icon={Flag}
              link="/flags"
              gradientFrom="from-red-500"
              gradientTo="to-red-400"
            />

            {/* Row 7 */}
            <MetricCard
              title="Population"
              staticValue="Explore Data"
              subtitle="Demographic insights"
              icon={Users}
              link="/population"
              gradientFrom="from-blue-500"
              gradientTo="to-blue-400"
            />
            <MetricCard
              title="Government"
              value={militarySpending}
              subtitle="Military expenditure"
              icon={Building}
              link="/government"
              gradientFrom="from-red-500"
              gradientTo="to-red-400"
            />
            <MetricCard
              title="Society"
              value={booksPublished}
              subtitle="Books published this year"
              icon={BarChart3}
              link="/society"
              gradientFrom="from-blue-500"
              gradientTo="to-blue-400"
            />
            <MetricCard
              title="Environment"
              value={forestLoss}
              subtitle="Forest loss (hectares)"
              icon={Cloud}
              link="/environment"
              gradientFrom="from-green-500"
              gradientTo="to-green-400"
            />

            {/* Row 8 */}
            <MetricCard
              title="Compare"
              staticValue="Compare Metrics"
              subtitle="Side-by-side analysis"
              icon={Search}
              link="/compare"
              gradientFrom="from-cyan-500"
              gradientTo="to-cyan-400"
            />
            <MetricCard
              title="Widgets"
              staticValue="Embed Data"
              subtitle="Embeddable widgets"
              icon={LayoutGrid}
              link="/widgets"
              gradientFrom="from-blue-500"
              gradientTo="to-blue-400"
            />
            <MetricCard
              title="Water"
              value={waterUsed}
              subtitle="Water consumption (km³)"
              icon={Droplet}
              link="/water"
              gradientFrom="from-blue-500"
              gradientTo="to-blue-400"
            />
            <MetricCard
              title="Food & Health"
              value={undernourished}
              subtitle="Undernourished (millions)"
              icon={Apple}
              link="/food"
              gradientFrom="from-orange-500"
              gradientTo="to-orange-400"
            />

            {/* Row 9 */}
            <MetricCard
              title="Data Methodology"
              staticValue="Learn More"
              subtitle="How we calculate data"
              icon={FileText}
              link="/data-methodology"
              gradientFrom="from-gray-500"
              gradientTo="to-gray-400"
            />
            <MetricCard
              title="Data Sources"
              staticValue="View Sources"
              subtitle="Our trusted references"
              icon={Database}
              link="/data-sources"
              gradientFrom="from-indigo-500"
              gradientTo="to-indigo-400"
            />
            <MetricCard
              title="Coronavirus Live"
              staticValue="Live Counter"
              subtitle="Real-time COVID-19 data"
              icon={ShieldAlert}
              link="/coronavirus-live-counter"
              gradientFrom="from-red-500"
              gradientTo="to-red-400"
            />
            <MetricCard
              title="Coronavirus (Historic)"
              staticValue="View History"
              subtitle="Historical pandemic data"
              icon={Activity}
              link="/coronavirus"
              gradientFrom="from-pink-500"
              gradientTo="to-pink-400"
            />
          </div>

          <InsightsSection />
          <NewsletterCTA />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
