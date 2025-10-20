import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { CategorySectionEnhanced } from "@/components/CategorySectionEnhanced";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
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
      <MetaTags
        title="World Statistics Live - Real-Time Global Data"
        description="Track real-time world statistics including population, economy, health, environment, and more. Live counters and visualizations updated every second with accurate global data."
        keywords="world statistics, live counter, world population live, global data, real-time statistics, population counter, covid-19 statistics, gdp by country, world economy"
        canonical={window.location.origin}
      />
      <SchemaMarkup
        type="Organization"
        data={{}}
      />
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
        <CategorySectionEnhanced 
          title="Population" 
          icon={<Users className="w-8 h-8" />} 
          color="hsl(var(--population))"
          description="Live world population statistics updated with the 2024 United Nations Revision"
          quickFacts={[
            "World population reached 8 billion in 2022 according to United Nations estimates",
            "Projected to reach 9 billion in 2037 and 10 billion in 2060",
            "Population has doubled in 40 years from 1959 (3 billion) to 1999 (6 billion)",
            "Currently growing at around 0.85% per year, adding around 70 million people annually",
            "Growth rate peaked in late 1960s at 2.09% and is projected to decline to 0% by 2084"
          ]}
          expandableContent={[
            {
              title: "Historical Milestones",
              content: (
                <div className="space-y-2">
                  <p>A tremendous change occurred with the industrial revolution:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>1st billion: All of human history up to 1800</li>
                    <li>2nd billion: 130 years later (1930)</li>
                    <li>3rd billion: 30 years later (1960)</li>
                    <li>4th billion: 15 years later (1974)</li>
                    <li>5th billion: 13 years later (1987)</li>
                    <li>6th billion: 11 years later (1998)</li>
                    <li>7th billion: 12 years later (2010)</li>
                    <li>8th billion: 12 years later (2022)</li>
                  </ul>
                  <p className="mt-2">During the 20th century alone, world population grew from 1.65 billion to 6 billion.</p>
                </div>
              )
            },
            {
              title: "Future Projections",
              content: (
                <div className="space-y-2">
                  <p>Population growth rate is declining and projected to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Fall below 0.50% by 2047</li>
                    <li>Reach 0% growth in 2084</li>
                    <li>Decline by -0.12% in 2100</li>
                  </ul>
                </div>
              )
            }
          ]}
          sources={[
            {
              name: "World Population Prospects: the 2024 Revision",
              url: "https://population.un.org/wpp/",
              organization: "United Nations, Department of Economic and Social Affairs"
            },
            {
              name: "International Programs Center",
              url: "https://www.census.gov/programs-surveys/international-programs.html",
              organization: "U.S. Census Bureau, Population Division"
            }
          ]}
        >
          <StatCard label="Births Today" value={births} icon={Baby} color="hsl(var(--population))" increment={4.3} />
          <StatCard label="Deaths Today" value={deaths} icon={Skull} color="hsl(var(--population))" increment={1.8} />
          <StatCard label="Net Population Growth" value={populationGrowth} icon={TrendingUp} color="hsl(var(--population))" increment={2.5} />
        </CategorySectionEnhanced>

        {/* Government */}
        <CategorySectionEnhanced 
          title="Government & Economics" 
          icon={<Building2 className="w-8 h-8" />} 
          color="hsl(var(--government))"
          description="Global government spending and production statistics"
          quickFacts={[
            "Total global healthcare expenditure represents around 9% of world GDP",
            "Government portion of healthcare expenditure is around 60%",
            "Public spending on education worldwide is around 5% of global GDP",
            "Global military expenditure exceeds $2 trillion annually",
            "As of 2003, bike production (100M) doubled car production (50M) per year"
          ]}
          expandableContent={[
            {
              title: "Healthcare Spending",
              content: (
                <div className="space-y-2">
                  <p>Global healthcare spending continues to rise, driven by:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Aging populations in developed countries</li>
                    <li>Rising costs of medical technology and pharmaceuticals</li>
                    <li>Increased access to healthcare in developing nations</li>
                    <li>Growing prevalence of chronic diseases</li>
                  </ul>
                </div>
              )
            },
            {
              title: "Production Trends",
              content: (
                <div className="space-y-2">
                  <p>Manufacturing has shifted dramatically:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Bicycle and car production volumes were equal (~20M each) in 1965</li>
                    <li>By 2003, bicycle production reached 100M vs 50M cars</li>
                    <li>Computer production has grown exponentially since the 1990s</li>
                  </ul>
                </div>
              )
            }
          ]}
          sources={[
            {
              name: "World Health Statistics",
              url: "http://www.who.int/gho/publications/world_health_statistics/",
              organization: "World Health Organization (WHO)"
            },
            {
              name: "World Economic Outlook",
              url: "https://www.imf.org/external/ns/cs.aspx?id=28",
              organization: "International Monetary Fund (IMF)"
            },
            {
              name: "Global Education Digest",
              url: "http://www.uis.unesco.org/Education/Pages/global-education-digest.aspx",
              organization: "UNESCO Institute for Statistics"
            }
          ]}
        >
          <StatCard label="Healthcare Spending Today" value={healthcareSpending} icon={DollarSign} color="hsl(var(--government))" subtitle="USD" />
          <StatCard label="Education Spending Today" value={educationSpending} icon={GraduationCap} color="hsl(var(--government))" subtitle="USD" />
          <StatCard label="Military Spending Today" value={militarySpending} icon={Shield} color="hsl(var(--government))" subtitle="USD" />
          <StatCard label="Cars Produced This Year" value={carsProduced} icon={Car} color="hsl(var(--government))" />
          <StatCard label="Bicycles Produced This Year" value={bicyclesProduced} icon={Bike} color="hsl(var(--government))" />
          <StatCard label="Computers Produced This Year" value={computersProduced} icon={Monitor} color="hsl(var(--government))" />
        </CategorySectionEnhanced>

        {/* Society */}
        <CategorySectionEnhanced 
          title="Society & Media" 
          icon={<Users2 className="w-8 h-8" />} 
          color="hsl(var(--society))"
          description="Global media consumption and digital connectivity statistics"
          quickFacts={[
            "Over 5.3 billion people use the internet - more than 65% of the global population",
            "Over 333 trillion emails are sent annually worldwide",
            "Mobile phone sales exceed 1.4 billion units per year",
            "Video game industry generates over $200 billion in annual revenue",
            "Digital media consumption has surpassed traditional print media"
          ]}
          expandableContent={[
            {
              title: "Digital Revolution",
              content: (
                <div className="space-y-2">
                  <p>The shift to digital media has transformed society:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Internet users have grown from 400M (2000) to 5.3B (2024)</li>
                    <li>Smartphone penetration exceeds 80% in developed countries</li>
                    <li>Social media connects billions across borders instantly</li>
                    <li>Traditional newspaper circulation continues to decline</li>
                  </ul>
                </div>
              )
            }
          ]}
          sources={[
            {
              name: "World Press Trends",
              url: "http://www.wan-ifra.org/microsites/world-press-trends",
              organization: "World Association of Newspapers (WAN-IFRA)"
            },
            {
              name: "Internet World Stats",
              url: "https://www.internetworldstats.com/",
              organization: "Miniwatts Marketing Group"
            }
          ]}
        >
          <StatCard label="Books Published This Year" value={booksPublished} icon={BookOpen} color="hsl(var(--society))" />
          <StatCard label="Newspapers Sold Today" value={newspapersSold} icon={Newspaper} color="hsl(var(--society))" />
          <StatCard label="TVs Sold This Year" value={tvsSold} icon={Tv} color="hsl(var(--society))" />
          <StatCard label="Mobile Phones Sold" value={mobilePhonesSold} icon={Smartphone} color="hsl(var(--society))" />
          <StatCard label="Video Games Sold" value={videogamesSold} icon={Gamepad2} color="hsl(var(--society))" />
          <StatCard label="Internet Users" value={internetUsers} icon={Wifi} color="hsl(var(--society))" />
          <StatCard label="Emails Sent Today" value={emailsSent} icon={Mail} color="hsl(var(--society))" />
          <StatCard label="Blog Posts Written Today" value={blogPosts} icon={FileText} color="hsl(var(--society))" />
        </CategorySectionEnhanced>

        {/* Environment */}
        <CategorySectionEnhanced 
          title="Environment" 
          icon={<Leaf className="w-8 h-8" />} 
          color="hsl(var(--environment))"
          description="Critical environmental statistics and climate change indicators"
          quickFacts={[
            "Global CO₂ emissions reach 37 billion tons annually",
            "We lose approximately 10 million hectares of forest each year",
            "Deforestation accounts for 10-15% of global carbon emissions",
            "Tropical forests absorb 2.4 billion tons of CO₂ annually",
            "At current rates, most tropical forests could disappear within 100 years"
          ]}
          expandableContent={[
            {
              title: "Climate Crisis",
              content: (
                <div className="space-y-2">
                  <p>Environmental challenges are accelerating:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Global temperatures have risen 1.1°C since pre-industrial times</li>
                    <li>Arctic ice is declining at 13% per decade</li>
                    <li>Ocean acidification threatens marine ecosystems</li>
                    <li>Extreme weather events are becoming more frequent</li>
                  </ul>
                </div>
              )
            },
            {
              title: "Deforestation Impact",
              content: (
                <div className="space-y-2">
                  <p>Forest loss has far-reaching consequences:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Loss of biodiversity and species extinction</li>
                    <li>Disruption of water cycles and rainfall patterns</li>
                    <li>Increased carbon in atmosphere</li>
                    <li>Displacement of indigenous communities</li>
                  </ul>
                </div>
              )
            }
          ]}
          sources={[
            {
              name: "Global Forest Resources Assessment",
              url: "http://www.fao.org/forest-resources-assessment/",
              organization: "Food and Agriculture Organization (FAO)"
            },
            {
              name: "Climate Change Reports",
              url: "https://www.ipcc.ch/",
              organization: "Intergovernmental Panel on Climate Change (IPCC)"
            }
          ]}
        >
          <StatCard label="Forest Loss This Year" value={forestLoss} icon={Trees} color="hsl(var(--environment))" subtitle="hectares" />
          <StatCard label="CO₂ Emissions This Year" value={co2Emissions} icon={Cloud} color="hsl(var(--environment))" subtitle="tons" />
          <StatCard label="Toxic Chemicals Released" value={toxicChemicals} icon={FlaskConical} color="hsl(var(--environment))" subtitle="tons" />
        </CategorySectionEnhanced>

        {/* Food */}
        <CategorySectionEnhanced 
          title="Food" 
          icon={<Apple className="w-8 h-8" />} 
          color="hsl(var(--food))"
          description="Global nutrition crisis: hunger and obesity statistics"
          quickFacts={[
            "828 million people suffer from chronic undernourishment",
            "2 billion people are overweight, with 890 million classified as obese",
            "One-third of all food produced globally is wasted",
            "Hunger and malnutrition cost the global economy $3.5 trillion per year",
            "Climate change threatens to push 130 million more into extreme poverty by 2030"
          ]}
          expandableContent={[
            {
              title: "The Paradox of Hunger and Obesity",
              content: (
                <div className="space-y-2">
                  <p>The world faces a dual nutrition crisis:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Hunger persists in developing regions while obesity rises globally</li>
                    <li>Food insecurity affects both undernourished and overweight populations</li>
                    <li>Poor nutrition contributes to chronic diseases in all income groups</li>
                    <li>Malnutrition in all forms affects nearly 3 billion people</li>
                  </ul>
                </div>
              )
            }
          ]}
          sources={[
            {
              name: "State of Food Security and Nutrition in the World",
              url: "http://www.fao.org/publications/sofi/",
              organization: "Food and Agriculture Organization (FAO)"
            },
            {
              name: "Global Nutrition Report",
              url: "https://globalnutritionreport.org/",
              organization: "Development Initiatives"
            }
          ]}
        >
          <StatCard label="Undernourished People" value={undernourished} icon={UtensilsCrossed} color="hsl(var(--food))" />
          <StatCard label="Overweight People" value={overweight} icon={Scale} color="hsl(var(--food))" />
          <StatCard label="Obese People" value={obese} icon={Activity} color="hsl(var(--food))" />
        </CategorySectionEnhanced>

        {/* Water */}
        <CategorySectionEnhanced 
          title="Water" 
          icon={<Droplet className="w-8 h-8" />} 
          color="hsl(var(--water))"
          description="Global water crisis and access to safe drinking water"
          quickFacts={[
            "2 billion people lack access to safely managed drinking water",
            "1.2 million deaths annually are linked to unsafe water and poor sanitation",
            "Agriculture accounts for 70% of global freshwater withdrawals",
            "By 2025, half of the world's population will live in water-stressed areas",
            "Water scarcity affects more than 40% of the global population"
          ]}
          expandableContent={[
            {
              title: "Water Access Crisis",
              content: (
                <div className="space-y-2">
                  <p>Lack of safe water has devastating consequences:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>3.5 million people die annually from water-related diseases</li>
                    <li>Children are especially vulnerable to diarrheal diseases</li>
                    <li>Water collection often falls to women and children, limiting education</li>
                    <li>Poor sanitation spreads diseases rapidly in dense populations</li>
                  </ul>
                </div>
              )
            }
          ]}
          sources={[
            {
              name: "Progress on Drinking Water and Sanitation",
              url: "https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health",
              organization: "World Health Organization & UNICEF"
            },
            {
              name: "World Water Development Report",
              url: "https://www.unesco.org/reports/wwdr/",
              organization: "UNESCO"
            }
          ]}
        >
          <StatCard label="Water Used Today" value={waterUsed} icon={Droplet} color="hsl(var(--water))" subtitle="liters" />
          <StatCard label="Deaths from Water Diseases" value={waterDeaths} icon={Ambulance} color="hsl(var(--water))" />
          <StatCard label="People Without Safe Water" value={noSafeWater} icon={Droplet} color="hsl(var(--water))" />
        </CategorySectionEnhanced>

        {/* Energy */}
        <CategorySectionEnhanced 
          title="Energy" 
          icon={<Zap className="w-8 h-8" />} 
          color="hsl(var(--energy))"
          description="Global energy consumption and the transition to renewables"
          quickFacts={[
            "Global energy consumption exceeds 580 trillion kWh annually",
            "Renewable energy accounts for approximately 17% of total consumption",
            "Solar and wind are the fastest-growing energy sources",
            "Energy demand is projected to increase 50% by 2050",
            "Fossil fuels still dominate at 83% of total energy use"
          ]}
          expandableContent={[
            {
              title: "Energy Transition",
              content: (
                <div className="space-y-2">
                  <p>The shift to renewable energy is accelerating:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Solar panel costs have dropped 90% since 2010</li>
                    <li>Wind power capacity has tripled in the past decade</li>
                    <li>Electric vehicle adoption is growing exponentially</li>
                    <li>Battery storage technology is improving rapidly</li>
                  </ul>
                </div>
              )
            }
          ]}
          sources={[
            {
              name: "World Energy Outlook",
              url: "https://www.iea.org/reports/world-energy-outlook",
              organization: "International Energy Agency (IEA)"
            },
            {
              name: "Renewable Energy Statistics",
              url: "https://www.irena.org/publications",
              organization: "International Renewable Energy Agency (IRENA)"
            }
          ]}
        >
          <StatCard label="Energy Used Today" value={energyUsed} icon={Zap} color="hsl(var(--energy))" subtitle="MWh" />
          <StatCard label="From Non-Renewable" value={nonRenewable} icon={Zap} color="hsl(var(--energy))" subtitle="MWh" />
          <StatCard label="From Renewable" value={renewable} icon={Leaf} color="hsl(var(--energy))" subtitle="MWh" />
        </CategorySectionEnhanced>

        {/* Health */}
        <CategorySectionEnhanced 
          title="Health" 
          icon={<Heart className="w-8 h-8" />} 
          color="hsl(var(--health))"
          description="Global health statistics and leading causes of death"
          quickFacts={[
            "13 million deaths annually from infectious diseases",
            "10 million cancer deaths per year, expected to rise to 16 million by 2040",
            "8 million deaths from tobacco use - one person every 4 seconds",
            "3 million deaths from harmful alcohol use annually",
            "1.35 million road traffic deaths per year - a leading cause for young people"
          ]}
          expandableContent={[
            {
              title: "Leading Causes of Death",
              content: (
                <div className="space-y-2">
                  <p>Global mortality patterns are shifting:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Cardiovascular diseases: 17.9 million deaths/year (32% of total)</li>
                    <li>Cancers: 10 million deaths/year (18% of total)</li>
                    <li>Respiratory diseases: 4 million deaths/year</li>
                    <li>Infectious diseases remain major killers in developing countries</li>
                  </ul>
                </div>
              )
            },
            {
              title: "Preventable Deaths",
              content: (
                <div className="space-y-2">
                  <p>Many deaths could be prevented through:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Better access to healthcare and medicines</li>
                    <li>Tobacco control and alcohol regulations</li>
                    <li>Improved road safety measures</li>
                    <li>Disease prevention and early detection programs</li>
                  </ul>
                </div>
              )
            }
          ]}
          sources={[
            {
              name: "Global Health Observatory",
              url: "https://www.who.int/data/gho",
              organization: "World Health Organization (WHO)"
            },
            {
              name: "Global Burden of Disease Study",
              url: "https://www.healthdata.org/gbd",
              organization: "Institute for Health Metrics and Evaluation"
            }
          ]}
        >
          <StatCard label="Deaths from Infectious Diseases" value={infectiousDeaths} icon={Stethoscope} color="hsl(var(--health))" />
          <StatCard label="Deaths from Cancer" value={cancerDeaths} icon={Activity} color="hsl(var(--health))" />
          <StatCard label="Deaths from Smoking" value={smokingDeaths} icon={Cigarette} color="hsl(var(--health))" />
          <StatCard label="Deaths from Alcohol" value={alcoholDeaths} icon={Wine} color="hsl(var(--health))" />
          <StatCard label="Deaths from Road Traffic" value={roadDeaths} icon={Car} color="hsl(var(--health))" />
        </CategorySectionEnhanced>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
