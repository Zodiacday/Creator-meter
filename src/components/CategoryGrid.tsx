"use client";
import { useState } from "react";
import { 
  Users, 
  Building2, 
  Smartphone, 
  Leaf, 
  Utensils, 
  Droplet, 
  Zap, 
  Heart,
  Wrench
} from "lucide-react";
import { CategoryGridTile } from "./CategoryGridTile";
import Link from "next/link";
import { Button } from "./ui/button";

interface CategoryGridProps {
  populationData: {
    worldPopulation: number;
    birthsToday: number;
    deathsToday: number;
    netGrowthToday: number;
  };
  governmentData: {
    healthSpending: number;
    educationSpending: number;
    militarySpending: number;
  };
  societyData: {
    internetUsers: number;
    booksPublished: number;
    newspapersSold: number;
  };
  environmentData: {
    co2Emissions: number;
    forestLoss: number;
  };
  foodData: {
    undernourished: number;
    overweight: number;
    obese: number;
  };
  waterData: {
    peopleWithoutSafeWater: number;
    waterUsed: number;
  };
  energyData: {
    energyUsed: number;
    renewable: number;
  };
  healthData: {
    infectiousDeaths: number;
    cancerDeaths: number;
  };
}

export const CategoryGrid = ({
  populationData,
  governmentData,
  societyData,
  environmentData,
  foodData,
  waterData,
  energyData,
  healthData
}: CategoryGridProps) => {
  const [openTile, setOpenTile] = useState<string | null>(null);

  const handleToggle = (tileId: string) => {
    setOpenTile(openTile === tileId ? null : tileId);
  };

  const tiles = [
    {
      id: "population",
      icon: Users,
      title: "Population",
      color: "#3B82F6",
      representativeCounter: {
        label: "World Population",
        value: populationData.worldPopulation
      },
      expandedContent: {
        additionalStats: [
          { label: "Births Today", value: populationData.birthsToday, suffix: " (+4.3/s)" },
          { label: "Deaths Today", value: populationData.deathsToday, suffix: " (+1.8/s)" },
          { label: "Net Growth Today", value: populationData.netGrowthToday, suffix: " (+2.5/s)" }
        ],
        quickFacts: [
          "Reached 8 billion in November 2022",
          "Growing at ~80 million people per year",
          "Expected to reach 9.7B by 2050"
        ],
        sources: [
          { name: "World Population Prospects", url: "https://population.un.org/wpp/", organization: "United Nations" },
          { name: "U.S. Census Bureau", url: "https://www.census.gov/popclock/", organization: "U.S. Government" }
        ]
      },
      detailPageLink: "/population"
    },
    {
      id: "government",
      icon: Building2,
      title: "Government & Economics",
      color: "#8B5CF6",
      representativeCounter: {
        label: "Healthcare Spending",
        value: governmentData.healthSpending,
        prefix: "$",
        suffix: "T"
      },
      expandedContent: {
        additionalStats: [
          { label: "Education Spending", value: governmentData.educationSpending, prefix: "$", suffix: "T" },
          { label: "Military Spending", value: governmentData.militarySpending, prefix: "$", suffix: "T" }
        ],
        quickFacts: [
          "Global GDP: $105 trillion (2024)",
          "Largest Economy: United States ($28T)"
        ],
        sources: [
          { name: "World Health Organization", url: "https://www.who.int/", organization: "WHO" },
          { name: "International Monetary Fund", url: "https://www.imf.org/", organization: "IMF" }
        ]
      },
      detailPageLink: "/government"
    },
    {
      id: "society",
      icon: Smartphone,
      title: "Society & Media",
      color: "#EC4899",
      representativeCounter: {
        label: "Internet Users",
        value: societyData.internetUsers,
        suffix: "B"
      },
      expandedContent: {
        additionalStats: [
          { label: "Books Published", value: societyData.booksPublished, suffix: "M" },
          { label: "Newspapers Sold", value: societyData.newspapersSold, suffix: "M" }
        ],
        quickFacts: [
          "Internet Penetration: 66% of global population",
          "Mobile Users: 5.6 billion smartphone users"
        ],
        sources: [
          { name: "Internet World Stats", url: "https://www.internetworldstats.com/", organization: "Miniwatts Marketing Group" }
        ]
      },
      detailPageLink: "/society"
    },
    {
      id: "environment",
      icon: Leaf,
      title: "Environment",
      color: "#10B981",
      representativeCounter: {
        label: "CO₂ Emissions",
        value: environmentData.co2Emissions,
        suffix: "B tons"
      },
      expandedContent: {
        additionalStats: [
          { label: "Forest Loss", value: environmentData.forestLoss, suffix: "M hectares" }
        ],
        quickFacts: [
          "Paris Agreement: Limit warming to 1.5°C above pre-industrial",
          "Top Emitter: China (30% of global emissions)"
        ],
        sources: [
          { name: "IPCC", url: "https://www.ipcc.ch/", organization: "UN Climate Panel" },
          { name: "FAO", url: "http://www.fao.org/", organization: "Food and Agriculture Organization" }
        ]
      },
      detailPageLink: "/environment"
    },
    {
      id: "food",
      icon: Utensils,
      title: "Food",
      color: "#F59E0B",
      representativeCounter: {
        label: "Undernourished People",
        value: foodData.undernourished,
        suffix: "M"
      },
      expandedContent: {
        additionalStats: [
          { label: "Overweight Adults", value: foodData.overweight, suffix: "B" },
          { label: "Obese Adults", value: foodData.obese, suffix: "M" }
        ],
        quickFacts: [
          "Food Waste: 1.3 billion tons wasted annually",
          "Agriculture Land: 50% of habitable land used for farming"
        ],
        sources: [
          { name: "FAO", url: "http://www.fao.org/", organization: "Food and Agriculture Organization" },
          { name: "Global Nutrition Report", url: "https://globalnutritionreport.org/", organization: "Independent Organization" }
        ]
      },
      detailPageLink: "/food"
    },
    {
      id: "water",
      icon: Droplet,
      title: "Water",
      color: "#06B6D4",
      representativeCounter: {
        label: "People Without Safe Water",
        value: waterData.peopleWithoutSafeWater,
        suffix: "B"
      },
      expandedContent: {
        additionalStats: [
          { label: "Water Used This Year", value: waterData.waterUsed, suffix: " billion m³" }
        ],
        quickFacts: [
          "Freshwater: Only 2.5% of Earth's water is freshwater",
          "Agriculture Use: 70% of freshwater used for agriculture"
        ],
        sources: [
          { name: "WHO/UNICEF JMP", url: "https://washdata.org/", organization: "Joint Monitoring Programme" }
        ]
      },
      detailPageLink: "/water"
    },
    {
      id: "energy",
      icon: Zap,
      title: "Energy",
      color: "#EAB308",
      representativeCounter: {
        label: "Energy Used This Year",
        value: energyData.energyUsed,
        suffix: " TWh"
      },
      expandedContent: {
        additionalStats: [
          { label: "From Renewable Sources", value: energyData.renewable, suffix: "%" }
        ],
        quickFacts: [
          "Solar Growth: Solar capacity doubled 2020-2023",
          "Fossil Fuels: Still 80% of global energy mix"
        ],
        sources: [
          { name: "IEA", url: "https://www.iea.org/", organization: "International Energy Agency" },
          { name: "IRENA", url: "https://www.irena.org/", organization: "International Renewable Energy Agency" }
        ]
      },
      detailPageLink: "/energy"
    },
    {
      id: "health",
      icon: Heart,
      title: "Health",
      color: "#EF4444",
      representativeCounter: {
        label: "Deaths from Infectious Diseases",
        value: healthData.infectiousDeaths,
        suffix: "M"
      },
      expandedContent: {
        additionalStats: [
          { label: "Cancer Deaths This Year", value: healthData.cancerDeaths, suffix: "M" }
        ],
        quickFacts: [
          "Life Expectancy: Global average: 73 years",
          "Healthcare Access: 50% lack essential health services"
        ],
        sources: [
          { name: "WHO", url: "https://www.who.int/", organization: "World Health Organization" },
          { name: "IHME", url: "https://www.healthdata.org/", organization: "Institute for Health Metrics" }
        ]
      },
      detailPageLink: "/health"
    },
    {
      id: "tools",
      icon: Wrench,
      title: "Tools Hub",
      color: "#6366F1",
      representativeCounter: {
        label: "Explore Data Tools",
        value: 0,
        suffix: ""
      },
      expandedContent: {
        additionalStats: []
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {tiles.map((tile) => {
        if (tile.id === "tools") {
          return (
            <div 
              key={tile.id}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="p-3 rounded-xl"
                style={{ backgroundColor: `${tile.color}20` }}
              >
                <tile.icon className="w-6 h-6" style={{ color: tile.color }} />
              </div>
              <h3 className="text-xl font-bold">{tile.title}</h3>
              <div className="space-y-2 w-full">
                  <Link href="/compare">
                  <Button variant="default" className="w-full">
                    🧭 Compare Countries
                  </Button>
                </Link>
                  <Link href="/widgets">
                  <Button variant="outline" className="w-full">
                    📊 Embeddable Widgets
                  </Button>
                </Link>
                  <Link href="/data-methodology">
                  <Button variant="outline" className="w-full">
                    📚 Data Methodology
                  </Button>
                </Link>
              </div>
            </div>
          );
        }

        return (
          <CategoryGridTile
            key={tile.id}
            {...tile}
            isOpen={openTile === tile.id}
            onToggle={() => handleToggle(tile.id)}
          />
        );
      })}
    </div>
  );
};
