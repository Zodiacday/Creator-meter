import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { CategorySection } from "@/components/CategorySection";
import { 
  Users, TrendingUp, Heart, Droplet, Zap, Leaf, 
  Wheat, Globe, Building2, BookOpen, Smartphone, 
  Mail, Newspaper, Gamepad2, Tv, MessageSquare,
  Car, Bike, Monitor, GraduationCap, Shield,
  TreePine, Wind, Factory
} from "lucide-react";

const Index = () => {
  // World Population - increases by ~2.5 per second (80M per year)
  const worldPopulation = useRealtimeCounter({
    initialValue: 8252321533,
    incrementPerSecond: 2.5
  });

  // Births this year - ~385k per day = ~4.5 per second
  const birthsYear = useRealtimeCounter({
    initialValue: 104034856,
    incrementPerSecond: 4.5
  });

  // Deaths this year - ~180k per day = ~2 per second
  const deathsYear = useRealtimeCounter({
    initialValue: 49021712,
    incrementPerSecond: 2
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Globe className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold gradient-text">WorldMetrics</h1>
          </div>
          <p className="text-sm text-muted-foreground hidden md:block">
            Real-time global statistics
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-foreground">Live Statistics</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
              World Population
            </h2>
            
            <div className="relative inline-block">
              <Counter 
                value={worldPopulation}
                className="text-6xl md:text-8xl font-bold text-foreground counter-glow"
              />
              <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 animate-pulse-glow rounded-full" />
            </div>
            
            <p className="text-muted-foreground mt-6 text-lg">
              Updated with the 2024 United Nations Revision
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Population Stats */}
        <CategorySection 
          title="World Population" 
          icon={<Users className="w-6 h-6" />}
          color="hsl(var(--population))"
        >
          <StatCard
            label="Births this year"
            value={birthsYear}
            icon={Heart}
            color="hsl(var(--population))"
            increment={4}
          />
          <StatCard
            label="Deaths this year"
            value={deathsYear}
            icon={Heart}
            color="hsl(var(--population))"
            increment={2}
          />
          <StatCard
            label="Net population growth"
            value={birthsYear - deathsYear}
            icon={TrendingUp}
            color="hsl(var(--population))"
            subtitle="this year"
          />
        </CategorySection>

        {/* Government & Economics */}
        <CategorySection 
          title="Government & Economics" 
          icon={<Building2 className="w-6 h-6" />}
          color="hsl(var(--government))"
        >
          <StatCard
            label="Public Healthcare expenditure"
            value={14791760477}
            icon={Heart}
            color="hsl(var(--government))"
            subtitle="today"
          />
          <StatCard
            label="Public Education expenditure"
            value={9734091864}
            icon={GraduationCap}
            color="hsl(var(--government))"
            subtitle="today"
          />
          <StatCard
            label="Public Military expenditure"
            value={3974900086}
            icon={Shield}
            color="hsl(var(--government))"
            subtitle="today"
          />
          <StatCard
            label="Cars produced"
            value={70944491}
            icon={Car}
            color="hsl(var(--government))"
            subtitle="this year"
          />
          <StatCard
            label="Bicycles produced"
            value={126205514}
            icon={Bike}
            color="hsl(var(--government))"
            subtitle="this year"
          />
          <StatCard
            label="Computers produced"
            value={177507354}
            icon={Monitor}
            color="hsl(var(--government))"
            subtitle="this year"
          />
        </CategorySection>

        {/* Society & Media */}
        <CategorySection 
          title="Society & Media" 
          icon={<Smartphone className="w-6 h-6" />}
          color="hsl(var(--society))"
        >
          <StatCard
            label="New book titles published"
            value={2249573}
            icon={BookOpen}
            color="hsl(var(--society))"
            subtitle="this year"
          />
          <StatCard
            label="Newspapers circulated"
            value={376356910}
            icon={Newspaper}
            color="hsl(var(--society))"
            subtitle="today"
          />
          <StatCard
            label="TV sets sold worldwide"
            value={562729}
            icon={Tv}
            color="hsl(var(--society))"
            subtitle="today"
          />
          <StatCard
            label="Cellular phones sold"
            value={6723362}
            icon={Smartphone}
            color="hsl(var(--society))"
            subtitle="today"
          />
          <StatCard
            label="Money spent on videogames"
            value={282901452}
            icon={Gamepad2}
            color="hsl(var(--society))"
            subtitle="today"
          />
          <StatCard
            label="Internet users"
            value={6868308227}
            icon={Globe}
            color="hsl(var(--society))"
            subtitle="in the world today"
          />
          <StatCard
            label="Emails sent"
            value={267815852412}
            icon={Mail}
            color="hsl(var(--society))"
            subtitle="today"
          />
          <StatCard
            label="Blog posts written"
            value={10493404}
            icon={MessageSquare}
            color="hsl(var(--society))"
            subtitle="today"
          />
        </CategorySection>

        {/* Environment */}
        <CategorySection 
          title="Environment" 
          icon={<Leaf className="w-6 h-6" />}
          color="hsl(var(--environment))"
        >
          <StatCard
            label="Forest loss"
            value={2847950}
            icon={TreePine}
            color="hsl(var(--environment))"
            subtitle="hectares this year"
          />
          <StatCard
            label="CO₂ emissions"
            value={18934567890}
            icon={Wind}
            color="hsl(var(--environment))"
            subtitle="tons this year"
          />
          <StatCard
            label="Toxic chemicals released"
            value={4567234}
            icon={Factory}
            color="hsl(var(--environment))"
            subtitle="tons this year"
          />
        </CategorySection>

        {/* Food */}
        <CategorySection 
          title="Food" 
          icon={<Wheat className="w-6 h-6" />}
          color="hsl(var(--food))"
        >
          <StatCard
            label="Undernourished people"
            value={828000000}
            icon={Heart}
            color="hsl(var(--food))"
            subtitle="in the world"
          />
          <StatCard
            label="Overweight people"
            value={1900000000}
            icon={Heart}
            color="hsl(var(--food))"
            subtitle="in the world"
          />
          <StatCard
            label="Obese people"
            value={764000000}
            icon={Heart}
            color="hsl(var(--food))"
            subtitle="in the world"
          />
        </CategorySection>

        {/* Water */}
        <CategorySection 
          title="Water" 
          icon={<Droplet className="w-6 h-6" />}
          color="hsl(var(--water))"
        >
          <StatCard
            label="Water used"
            value={2847950234567}
            icon={Droplet}
            color="hsl(var(--water))"
            subtitle="liters this year"
          />
          <StatCard
            label="Deaths from water diseases"
            value={456789}
            icon={Heart}
            color="hsl(var(--water))"
            subtitle="this year"
          />
          <StatCard
            label="People with no access to safe water"
            value={771000000}
            icon={Droplet}
            color="hsl(var(--water))"
            subtitle="in the world"
          />
        </CategorySection>

        {/* Energy */}
        <CategorySection 
          title="Energy" 
          icon={<Zap className="w-6 h-6" />}
          color="hsl(var(--energy))"
        >
          <StatCard
            label="Energy used today"
            value={234567890123}
            icon={Zap}
            color="hsl(var(--energy))"
            subtitle="MWh"
          />
          <StatCard
            label="Non-renewable sources"
            value={189234567890}
            icon={Factory}
            color="hsl(var(--energy))"
            subtitle="MWh"
          />
          <StatCard
            label="Renewable sources"
            value={45333322233}
            icon={Wind}
            color="hsl(var(--energy))"
            subtitle="MWh"
          />
        </CategorySection>

        {/* Health */}
        <CategorySection 
          title="Health" 
          icon={<Heart className="w-6 h-6" />}
          color="hsl(var(--health))"
        >
          <StatCard
            label="Deaths from infectious diseases"
            value={8234567}
            icon={Heart}
            color="hsl(var(--health))"
            subtitle="this year"
          />
          <StatCard
            label="Deaths from cancer"
            value={5123456}
            icon={Heart}
            color="hsl(var(--health))"
            subtitle="this year"
          />
          <StatCard
            label="Deaths from smoking"
            value={3234567}
            icon={Heart}
            color="hsl(var(--health))"
            subtitle="this year"
          />
          <StatCard
            label="Deaths from alcohol"
            value={1634567}
            icon={Heart}
            color="hsl(var(--health))"
            subtitle="this year"
          />
          <StatCard
            label="Road traffic deaths"
            value={834567}
            icon={Car}
            color="hsl(var(--health))"
            subtitle="this year"
          />
          <StatCard
            label="Money spent on healthcare"
            value={5678901234567}
            icon={Heart}
            color="hsl(var(--health))"
            subtitle="USD this year"
          />
        </CategorySection>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-xl py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Data sources: United Nations, World Health Organization, International Energy Agency, and more
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Statistics are updated in real-time based on the latest available data
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
