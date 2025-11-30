"use client";

import { Navigation } from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import { Map, Users, DollarSign, Heart, Zap, Droplet } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { QuickFacts } from "@/components/QuickFacts";
import { SourceCitation } from "@/components/SourceCitation";

const WorldMapPage = () => {
  const [selectedMetric, setSelectedMetric] = useState<'population' | 'gdp' | 'health' | 'energy' | 'water'>('population');

  const metrics = [
    { id: 'population', label: 'Population', icon: Users, color: 'hsl(var(--population))' },
    { id: 'gdp', label: 'GDP', icon: DollarSign, color: 'hsl(var(--government))' },
    { id: 'health', label: 'Healthcare', icon: Heart, color: 'hsl(var(--health))' },
    { id: 'energy', label: 'Energy', icon: Zap, color: 'hsl(var(--energy))' },
    { id: 'water', label: 'Water Access', icon: Droplet, color: 'hsl(var(--water))' },
  ];

  const topCountries = {
    population: [
      { country: "China", value: "1.41B", percentage: 17.5 },
      { country: "India", value: "1.40B", percentage: 17.4 },
      { country: "United States", value: "331M", percentage: 4.1 },
      { country: "Indonesia", value: "273M", percentage: 3.4 },
      { country: "Pakistan", value: "225M", percentage: 2.8 },
    ],
    gdp: [
      { country: "United States", value: "$25.5T", percentage: 24.9 },
      { country: "China", value: "$17.9T", percentage: 17.5 },
      { country: "Japan", value: "$4.2T", percentage: 4.1 },
      { country: "Germany", value: "$4.1T", percentage: 4.0 },
      { country: "United Kingdom", value: "$3.1T", percentage: 3.0 },
    ],
    health: [
      { country: "United States", value: "$4.3T", percentage: 16.8 },
      { country: "China", value: "$1.0T", percentage: 5.4 },
      { country: "Japan", value: "$0.7T", percentage: 10.9 },
      { country: "Germany", value: "$0.6T", percentage: 12.8 },
      { country: "France", value: "$0.4T", percentage: 12.2 },
    ],
    energy: [
      { country: "China", value: "149,280 TWh", percentage: 26.1 },
      { country: "United States", value: "97,680 TWh", percentage: 17.0 },
      { country: "India", value: "49,080 TWh", percentage: 8.6 },
      { country: "Russia", value: "32,640 TWh", percentage: 5.7 },
      { country: "Japan", value: "23,520 TWh", percentage: 4.1 },
    ],
    water: [
      { country: "China", value: "98%", percentage: 98 },
      { country: "United States", value: "99%", percentage: 99 },
      { country: "India", value: "93%", percentage: 93 },
      { country: "Russia", value: "95%", percentage: 95 },
      { country: "Brazil", value: "98%", percentage: 98 },
    ],
  };

  const currentMetric = metrics.find(m => m.id === selectedMetric)!;
  const currentData = topCountries[selectedMetric as keyof typeof topCountries];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--primary))]/20">
            <Map className="w-8 h-8 text-[hsl(var(--primary))]" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <BackButton />
              <h1 className="text-4xl font-bold gradient-text">Interactive World Map</h1>
            </div>
            <p className="text-muted-foreground mt-2">Visualize global statistics across different metrics</p>
          </div>
        </div>

        <div className="mb-8">
          <QuickFacts facts={[
            "Interactive visualizations help identify global patterns and disparities",
            "Data updated in real-time from authoritative international sources",
            "Compare countries across multiple dimensions: economy, health, resources",
            "Identify regional clusters and development trends",
            "Understand geographic distribution of global challenges and opportunities"
          ]} />
        </div>

        {/* Metric Selector */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Select Metric</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              const isSelected = selectedMetric === metric.id;
              return (
                <button
                  key={metric.id}
                  onClick={() => setSelectedMetric(metric.id as any)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    isSelected
                      ? 'border-primary bg-primary/10 scale-105'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Icon className="w-6 h-6" style={{ color: metric.color }} />
                    <span className="text-sm font-medium">{metric.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Map Visualization Placeholder */}
        <Card className="mb-8 border-border">
          <CardContent className="p-8">
            <div className="aspect-[2/1] bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
                <svg viewBox="0 0 100 50" className="w-full h-full">
                  {/* Simplified world map SVG paths */}
                  <path d="M10,25 Q20,20 30,25 T50,25 T70,25 T90,25" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
                  <circle cx="30" cy="25" r="3" fill="currentColor" opacity="0.5"/>
                  <circle cx="50" cy="20" r="4" fill="currentColor" opacity="0.5"/>
                  <circle cx="70" cy="28" r="3.5" fill="currentColor" opacity="0.5"/>
                </svg>
              </div>
              <div className="relative z-10 text-center">
                <Map className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-xl font-semibold mb-2">Interactive Map Visualization</p>
                <p className="text-muted-foreground">
                  Showing: <span style={{ color: currentMetric.color }} className="font-semibold">{currentMetric.label}</span>
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Full interactive map with country-level data and hover details
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Countries for Selected Metric */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <currentMetric.icon className="w-5 h-5" style={{ color: currentMetric.color }} />
                Top 5 Countries - {currentMetric.label}
              </h3>
              <div className="space-y-3">
                {currentData.map((item, index) => (
                  <div key={item.country} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{item.country}</span>
                        <span className="text-sm text-muted-foreground">{item.value}</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full transition-all duration-500"
                          style={{
                            width: `${item.percentage}%`,
                            backgroundColor: currentMetric.color,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Regional Insights</h3>
              <div className="space-y-4 text-sm">
                {selectedMetric === 'population' && (
                  <>
                    <p><strong>Asia:</strong> Home to 60% of world population, with China and India leading</p>
                    <p><strong>Africa:</strong> Fastest growing continent, expected to double by 2050</p>
                    <p><strong>Europe:</strong> Declining population in many countries due to low birth rates</p>
                  </>
                )}
                {selectedMetric === 'gdp' && (
                  <>
                    <p><strong>North America:</strong> Dominated by US economy, 24% of global GDP</p>
                    <p><strong>Asia:</strong> China's rapid growth, now 2nd largest economy</p>
                    <p><strong>Europe:</strong> Combined EU GDP rivals the United States</p>
                  </>
                )}
                {selectedMetric === 'health' && (
                  <>
                    <p><strong>Americas:</strong> US spends most per capita but outcomes vary</p>
                    <p><strong>Europe:</strong> Universal healthcare systems in most countries</p>
                    <p><strong>Africa:</strong> Improving access but faces infrastructure challenges</p>
                  </>
                )}
                {selectedMetric === 'energy' && (
                  <>
                    <p><strong>Asia:</strong> China leads consumption, driving renewable growth</p>
                    <p><strong>Middle East:</strong> Oil-rich nations, high per capita consumption</p>
                    <p><strong>Europe:</strong> Leading renewable energy transition efforts</p>
                  </>
                )}
                {selectedMetric === 'water' && (
                  <>
                    <p><strong>Developed Nations:</strong> 99%+ access to safe water</p>
                    <p><strong>Sub-Saharan Africa:</strong> Lowest access rates, improving rapidly</p>
                    <p><strong>Asia:</strong> Varies widely, urban-rural divide significant</p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <SourceCitation sources={[
            {
              name: "World Development Indicators",
              url: "https://datatopics.worldbank.org/world-development-indicators/",
              organization: "World Bank"
            },
            {
              name: "UNdata",
              url: "https://data.un.org/",
              organization: "United Nations Statistics Division"
            },
            {
              name: "OECD Statistics",
              url: "https://stats.oecd.org/",
              organization: "Organisation for Economic Co-operation and Development"
            }
          ]} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorldMapPage;
