import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { CategoryGrid } from "@/components/CategoryGrid";
import { InsightsSection } from "@/components/InsightsSection";
import { NewsletterCTA } from "@/components/NewsletterCTA";

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

  return (
    <>
      <MetaTags 
        title="CreatorMeter - Live Global Data for a Changing World"
        description="Real-time global statistics across population, economics, society, environment, food, water, energy, and health. Verified data, transparent methodology."
        keywords="world statistics, global data, population counter, live data, world metrics"
      />
      <SchemaMarkup type="Organization" data={{}} />
      
      <Navigation />

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

        <div className="container mx-auto px-4 py-8">
          <CategoryGrid 
            populationData={{
              worldPopulation,
              birthsToday,
              deathsToday,
              netGrowthToday
            }}
            governmentData={{
              healthSpending,
              educationSpending,
              militarySpending
            }}
            societyData={{
              internetUsers,
              booksPublished,
              newspapersSold
            }}
            environmentData={{
              co2Emissions,
              forestLoss
            }}
            foodData={{
              undernourished,
              overweight,
              obese
            }}
            waterData={{
              peopleWithoutSafeWater,
              waterUsed
            }}
            energyData={{
              energyUsed,
              renewable
            }}
            healthData={{
              infectiousDeaths,
              cancerDeaths
            }}
          />

          <InsightsSection />
          <NewsletterCTA />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
