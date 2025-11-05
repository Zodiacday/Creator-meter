import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { FloatingPopulationCounter } from "@/components/FloatingPopulationCounter";
import { CategoryGrid } from "@/components/CategoryGrid";
import { InsightsSection } from "@/components/InsightsSection";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
    initialValue: 9.2,
    incrementPerSecond: 0.000001
  });

  const educationSpending = useRealtimeCounter({
    initialValue: 5.5,
    incrementPerSecond: 0.0000005
  });

  const militarySpending = useRealtimeCounter({
    initialValue: 2.2,
    incrementPerSecond: 0.0000003
  });

  // Society & Media
  const internetUsers = useRealtimeCounter({
    initialValue: 5.3,
    incrementPerSecond: 0.00001
  });

  const booksPublished = useRealtimeCounter({
    initialValue: 2.2,
    incrementPerSecond: 0.000001
  });

  const newspapersSold = useRealtimeCounter({
    initialValue: 155,
    incrementPerSecond: 0.000005
  });

  // Environment
  const co2Emissions = useRealtimeCounter({
    initialValue: 37,
    incrementPerSecond: 0.000001
  });

  const forestLoss = useRealtimeCounter({
    initialValue: 10,
    incrementPerSecond: 0.0000001
  });

  // Food
  const undernourished = useRealtimeCounter({
    initialValue: 828,
    incrementPerSecond: 0
  });

  const overweight = useRealtimeCounter({
    initialValue: 2.0,
    incrementPerSecond: 0
  });

  const obese = useRealtimeCounter({
    initialValue: 890,
    incrementPerSecond: 0
  });

  // Water
  const peopleWithoutSafeWater = useRealtimeCounter({
    initialValue: 2.0,
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
    initialValue: 13,
    incrementPerSecond: 0.0000001
  });

  const cancerDeaths = useRealtimeCounter({
    initialValue: 10,
    incrementPerSecond: 0.0000001
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
      
      <FloatingPopulationCounter 
        population={worldPopulation}
        birthsPerSecond={4.73}
        deathsPerSecond={2.04}
      />

      <main className="min-h-screen bg-background">
        <section className="relative py-16 md:py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 gradient-text">
                CreatorMeter — Live Global Data for a Changing World
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                We turn verified global data into live, interactive insights.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Link to="/compare">
                  <Button size="lg" className="gap-2">
                    🧭 Compare Data
                  </Button>
                </Link>
                <Link to="/data-methodology">
                  <Button size="lg" variant="outline" className="gap-2">
                    🔍 Data Sources
                  </Button>
                </Link>
              </div>
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
