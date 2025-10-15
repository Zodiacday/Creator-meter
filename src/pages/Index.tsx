import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Counter } from "@/components/Counter";
import { 
  Users, Heart, Droplet, Zap, Leaf, Apple,
  Globe, Building2, Users2, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // World Population - increases by ~2.5 per second (80M per year)
  const worldPopulation = useRealtimeCounter({
    initialValue: 8252321533,
    incrementPerSecond: 2.5
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h1 className="text-lg md:text-2xl font-bold gradient-text">WorldMetrics</h1>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
            Real-time global statistics
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full mb-4 md:mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs md:text-sm text-foreground">Live Statistics</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 gradient-text">
              World Population
            </h2>
            
            <div className="relative inline-block">
              <Counter 
                value={worldPopulation}
                className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground counter-glow"
              />
              <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 animate-pulse-glow rounded-full" />
            </div>
            
            <p className="text-muted-foreground mt-4 md:mt-6 text-sm md:text-lg">
              Updated with the 2024 United Nations Revision
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="container mx-auto px-4 pb-12 md:pb-20">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Explore Statistics</h2>
          <p className="text-muted-foreground text-sm md:text-base">Click on any category to view detailed real-time data</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Link to="/population" className="group">
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:bg-card/80 transition-all hover:border-[hsl(var(--population))] hover:shadow-xl hover:shadow-[hsl(var(--population))]/20 hover:-translate-y-1">
              <Users className="h-10 w-10 md:h-12 md:w-12 mb-4 text-[hsl(var(--population))]" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Population</h3>
              <p className="text-sm text-muted-foreground mb-4">Births, deaths, and growth statistics</p>
              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <span className="text-sm font-medium">View details</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link to="/government" className="group">
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:bg-card/80 transition-all hover:border-[hsl(var(--government))] hover:shadow-xl hover:shadow-[hsl(var(--government))]/20 hover:-translate-y-1">
              <Building2 className="h-10 w-10 md:h-12 md:w-12 mb-4 text-[hsl(var(--government))]" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Government</h3>
              <p className="text-sm text-muted-foreground mb-4">Economics and production data</p>
              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <span className="text-sm font-medium">View details</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link to="/society" className="group">
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:bg-card/80 transition-all hover:border-[hsl(var(--society))] hover:shadow-xl hover:shadow-[hsl(var(--society))]/20 hover:-translate-y-1">
              <Users2 className="h-10 w-10 md:h-12 md:w-12 mb-4 text-[hsl(var(--society))]" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Society</h3>
              <p className="text-sm text-muted-foreground mb-4">Media and technology consumption</p>
              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <span className="text-sm font-medium">View details</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link to="/environment" className="group">
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:bg-card/80 transition-all hover:border-[hsl(var(--environment))] hover:shadow-xl hover:shadow-[hsl(var(--environment))]/20 hover:-translate-y-1">
              <Leaf className="h-10 w-10 md:h-12 md:w-12 mb-4 text-[hsl(var(--environment))]" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Environment</h3>
              <p className="text-sm text-muted-foreground mb-4">Climate and ecological impact</p>
              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <span className="text-sm font-medium">View details</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link to="/food" className="group">
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:bg-card/80 transition-all hover:border-[hsl(var(--food))] hover:shadow-xl hover:shadow-[hsl(var(--food))]/20 hover:-translate-y-1">
              <Apple className="h-10 w-10 md:h-12 md:w-12 mb-4 text-[hsl(var(--food))]" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Food</h3>
              <p className="text-sm text-muted-foreground mb-4">Nutrition and food security</p>
              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <span className="text-sm font-medium">View details</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link to="/water" className="group">
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:bg-card/80 transition-all hover:border-[hsl(var(--water))] hover:shadow-xl hover:shadow-[hsl(var(--water))]/20 hover:-translate-y-1">
              <Droplet className="h-10 w-10 md:h-12 md:w-12 mb-4 text-[hsl(var(--water))]" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Water</h3>
              <p className="text-sm text-muted-foreground mb-4">Usage and access statistics</p>
              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <span className="text-sm font-medium">View details</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link to="/energy" className="group">
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:bg-card/80 transition-all hover:border-[hsl(var(--energy))] hover:shadow-xl hover:shadow-[hsl(var(--energy))]/20 hover:-translate-y-1">
              <Zap className="h-10 w-10 md:h-12 md:w-12 mb-4 text-[hsl(var(--energy))]" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Energy</h3>
              <p className="text-sm text-muted-foreground mb-4">Power consumption worldwide</p>
              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <span className="text-sm font-medium">View details</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link to="/health" className="group">
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:bg-card/80 transition-all hover:border-[hsl(var(--health))] hover:shadow-xl hover:shadow-[hsl(var(--health))]/20 hover:-translate-y-1">
              <Heart className="h-10 w-10 md:h-12 md:w-12 mb-4 text-[hsl(var(--health))]" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Health</h3>
              <p className="text-sm text-muted-foreground mb-4">Healthcare and mortality data</p>
              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <span className="text-sm font-medium">View details</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-xl py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
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
