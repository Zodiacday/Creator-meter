import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { CategorySection } from "@/components/CategorySection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  Users, Heart, Droplet, Zap, Leaf, Apple, Building2, Users2, 
  Baby, Skull, TrendingUp, DollarSign, GraduationCap, Shield,
  Car, Bike, Monitor, BookOpen, Newspaper, Tv, Smartphone,
  Gamepad2, Wifi, Mail, FileText, Trees, Cloud, FlaskConical,
  UtensilsCrossed, Scale, Activity, Cigarette, Wine, Ambulance, Stethoscope
} from "lucide-react";

const Index = () => {
  // World Population
  const worldPopulation = useRealtimeCounter({ initialValue: 8252321533, incrementPerSecond: 2.5 });
  
  // Population Stats
  const births = useRealtimeCounter({ initialValue: 385000, incrementPerSecond: 4.3 });
  const deaths = useRealtimeCounter({ initialValue: 163000, incrementPerSecond: 1.8 });
  const populationGrowth = useRealtimeCounter({ initialValue: 222000, incrementPerSecond: 2.5 });
  
  // Government & Economics
  const healthcareSpending = useRealtimeCounter({ initialValue: 9200000000000, incrementPerSecond: 291666 });
  const educationSpending = useRealtimeCounter({ initialValue: 5500000000000, incrementPerSecond: 174166 });
  const militarySpending = useRealtimeCounter({ initialValue: 2200000000000, incrementPerSecond: 69722 });
  const carsProduced = useRealtimeCounter({ initialValue: 78000000, incrementPerSecond: 2.47 });
  const bicyclesProduced = useRealtimeCounter({ initialValue: 130000000, incrementPerSecond: 4.12 });
  const computersProduced = useRealtimeCounter({ initialValue: 350000000, incrementPerSecond: 11.1 });
  
  // Society & Media
  const booksPublished = useRealtimeCounter({ initialValue: 2200000, incrementPerSecond: 0.07 });
  const newspapersSold = useRealtimeCounter({ initialValue: 155000000000, incrementPerSecond: 4912 });
  const tvsSold = useRealtimeCounter({ initialValue: 210000000, incrementPerSecond: 6.66 });
  const mobilePhonesSold = useRealtimeCounter({ initialValue: 1400000000, incrementPerSecond: 44.4 });
  const videogamesSold = useRealtimeCounter({ initialValue: 3200000000, incrementPerSecond: 101.4 });
  const internetUsers = useRealtimeCounter({ initialValue: 5300000000, incrementPerSecond: 10 });
  const emailsSent = useRealtimeCounter({ initialValue: 333600000000000, incrementPerSecond: 10574603 });
  const blogPosts = useRealtimeCounter({ initialValue: 7000000, incrementPerSecond: 0.22 });
  
  // Environment
  const forestLoss = useRealtimeCounter({ initialValue: 10000000, incrementPerSecond: 0.317 });
  const co2Emissions = useRealtimeCounter({ initialValue: 37000000000, incrementPerSecond: 1172 });
  const toxicChemicals = useRealtimeCounter({ initialValue: 300000000, incrementPerSecond: 9.51 });
  
  // Food
  const undernourished = useRealtimeCounter({ initialValue: 828000000, incrementPerSecond: 0 });
  const overweight = useRealtimeCounter({ initialValue: 2000000000, incrementPerSecond: 0 });
  const obese = useRealtimeCounter({ initialValue: 890000000, incrementPerSecond: 0 });
  
  // Water
  const waterUsed = useRealtimeCounter({ initialValue: 4000000000000, incrementPerSecond: 126839 });
  const waterDeaths = useRealtimeCounter({ initialValue: 1200000, incrementPerSecond: 0.038 });
  const noSafeWater = useRealtimeCounter({ initialValue: 2000000000, incrementPerSecond: 0 });
  
  // Energy
  const energyUsed = useRealtimeCounter({ initialValue: 580000000000000, incrementPerSecond: 18380952 });
  const nonRenewable = useRealtimeCounter({ initialValue: 483000000000000, incrementPerSecond: 15309524 });
  const renewable = useRealtimeCounter({ initialValue: 97000000000000, incrementPerSecond: 3071429 });
  
  // Health
  const infectiousDeaths = useRealtimeCounter({ initialValue: 13000000, incrementPerSecond: 0.41 });
  const cancerDeaths = useRealtimeCounter({ initialValue: 10000000, incrementPerSecond: 0.317 });
  const smokingDeaths = useRealtimeCounter({ initialValue: 8000000, incrementPerSecond: 0.253 });
  const alcoholDeaths = useRealtimeCounter({ initialValue: 3000000, incrementPerSecond: 0.095 });
  const roadDeaths = useRealtimeCounter({ initialValue: 1350000, incrementPerSecond: 0.043 });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

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
              <Counter value={worldPopulation} className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground counter-glow" />
              <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 animate-pulse-glow rounded-full" />
            </div>
            
            <p className="text-muted-foreground mt-4 md:mt-6 text-sm md:text-lg">
              Updated with the 2024 United Nations Revision
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Sections */}
      <div className="container mx-auto px-4 pb-12 md:pb-20">
        {/* Population */}
        <CategorySection title="Population" icon={<Users className="w-8 h-8" />} color="hsl(var(--population))">
          <StatCard label="Births Today" value={births} icon={Baby} color="hsl(var(--population))" increment={4.3} />
          <StatCard label="Deaths Today" value={deaths} icon={Skull} color="hsl(var(--population))" increment={1.8} />
          <StatCard label="Net Population Growth" value={populationGrowth} icon={TrendingUp} color="hsl(var(--population))" increment={2.5} />
        </CategorySection>

        {/* Government */}
        <CategorySection title="Government & Economics" icon={<Building2 className="w-8 h-8" />} color="hsl(var(--government))">
          <StatCard label="Healthcare Spending Today" value={healthcareSpending} icon={DollarSign} color="hsl(var(--government))" subtitle="USD" />
          <StatCard label="Education Spending Today" value={educationSpending} icon={GraduationCap} color="hsl(var(--government))" subtitle="USD" />
          <StatCard label="Military Spending Today" value={militarySpending} icon={Shield} color="hsl(var(--government))" subtitle="USD" />
          <StatCard label="Cars Produced This Year" value={carsProduced} icon={Car} color="hsl(var(--government))" />
          <StatCard label="Bicycles Produced This Year" value={bicyclesProduced} icon={Bike} color="hsl(var(--government))" />
          <StatCard label="Computers Produced This Year" value={computersProduced} icon={Monitor} color="hsl(var(--government))" />
        </CategorySection>

        {/* Society */}
        <CategorySection title="Society & Media" icon={<Users2 className="w-8 h-8" />} color="hsl(var(--society))">
          <StatCard label="Books Published This Year" value={booksPublished} icon={BookOpen} color="hsl(var(--society))" />
          <StatCard label="Newspapers Sold Today" value={newspapersSold} icon={Newspaper} color="hsl(var(--society))" />
          <StatCard label="TVs Sold This Year" value={tvsSold} icon={Tv} color="hsl(var(--society))" />
          <StatCard label="Mobile Phones Sold" value={mobilePhonesSold} icon={Smartphone} color="hsl(var(--society))" />
          <StatCard label="Video Games Sold" value={videogamesSold} icon={Gamepad2} color="hsl(var(--society))" />
          <StatCard label="Internet Users" value={internetUsers} icon={Wifi} color="hsl(var(--society))" />
          <StatCard label="Emails Sent Today" value={emailsSent} icon={Mail} color="hsl(var(--society))" />
          <StatCard label="Blog Posts Written Today" value={blogPosts} icon={FileText} color="hsl(var(--society))" />
        </CategorySection>

        {/* Environment */}
        <CategorySection title="Environment" icon={<Leaf className="w-8 h-8" />} color="hsl(var(--environment))">
          <StatCard label="Forest Loss This Year" value={forestLoss} icon={Trees} color="hsl(var(--environment))" subtitle="hectares" />
          <StatCard label="CO₂ Emissions This Year" value={co2Emissions} icon={Cloud} color="hsl(var(--environment))" subtitle="tons" />
          <StatCard label="Toxic Chemicals Released" value={toxicChemicals} icon={FlaskConical} color="hsl(var(--environment))" subtitle="tons" />
        </CategorySection>

        {/* Food */}
        <CategorySection title="Food" icon={<Apple className="w-8 h-8" />} color="hsl(var(--food))">
          <StatCard label="Undernourished People" value={undernourished} icon={UtensilsCrossed} color="hsl(var(--food))" />
          <StatCard label="Overweight People" value={overweight} icon={Scale} color="hsl(var(--food))" />
          <StatCard label="Obese People" value={obese} icon={Activity} color="hsl(var(--food))" />
        </CategorySection>

        {/* Water */}
        <CategorySection title="Water" icon={<Droplet className="w-8 h-8" />} color="hsl(var(--water))">
          <StatCard label="Water Used Today" value={waterUsed} icon={Droplet} color="hsl(var(--water))" subtitle="liters" />
          <StatCard label="Deaths from Water Diseases" value={waterDeaths} icon={Ambulance} color="hsl(var(--water))" />
          <StatCard label="People Without Safe Water" value={noSafeWater} icon={Droplet} color="hsl(var(--water))" />
        </CategorySection>

        {/* Energy */}
        <CategorySection title="Energy" icon={<Zap className="w-8 h-8" />} color="hsl(var(--energy))">
          <StatCard label="Energy Used Today" value={energyUsed} icon={Zap} color="hsl(var(--energy))" subtitle="MWh" />
          <StatCard label="From Non-Renewable" value={nonRenewable} icon={Zap} color="hsl(var(--energy))" subtitle="MWh" />
          <StatCard label="From Renewable" value={renewable} icon={Leaf} color="hsl(var(--energy))" subtitle="MWh" />
        </CategorySection>

        {/* Health */}
        <CategorySection title="Health" icon={<Heart className="w-8 h-8" />} color="hsl(var(--health))">
          <StatCard label="Deaths from Infectious Diseases" value={infectiousDeaths} icon={Stethoscope} color="hsl(var(--health))" />
          <StatCard label="Deaths from Cancer" value={cancerDeaths} icon={Activity} color="hsl(var(--health))" />
          <StatCard label="Deaths from Smoking" value={smokingDeaths} icon={Cigarette} color="hsl(var(--health))" />
          <StatCard label="Deaths from Alcohol" value={alcoholDeaths} icon={Wine} color="hsl(var(--health))" />
          <StatCard label="Deaths from Road Traffic" value={roadDeaths} icon={Car} color="hsl(var(--health))" />
        </CategorySection>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
