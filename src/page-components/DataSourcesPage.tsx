"use client";

import { Navigation } from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Database, RefreshCw, Shield } from "lucide-react";

const DataSourcesPage = () => {
  const sources = [
    {
      category: "Population & Demographics",
      sources: [
        { name: "United Nations Population Division", url: "https://population.un.org/", update: "Daily", reliability: "Official" },
        { name: "World Bank", url: "https://data.worldbank.org/", update: "Quarterly", reliability: "Official" },
        { name: "US Census Bureau", url: "https://www.census.gov/", update: "Annual", reliability: "Official" },
      ]
    },
    {
      category: "Health",
      sources: [
        { name: "World Health Organization (WHO)", url: "https://www.who.int/", update: "Monthly", reliability: "Official" },
        { name: "Institute for Health Metrics (IHME)", url: "https://www.healthdata.org/", update: "Annual", reliability: "Research" },
        { name: "Johns Hopkins University", url: "https://coronavirus.jhu.edu/", update: "Daily", reliability: "Academic" },
      ]
    },
    {
      category: "Environment & Climate",
      sources: [
        { name: "IPCC - Climate Change Reports", url: "https://www.ipcc.ch/", update: "Annual", reliability: "Official" },
        { name: "Food and Agriculture Organization (FAO)", url: "https://www.fao.org/", update: "Quarterly", reliability: "Official" },
        { name: "Global Carbon Project", url: "https://www.globalcarbonproject.org/", update: "Annual", reliability: "Research" },
      ]
    },
    {
      category: "Economy & Finance",
      sources: [
        { name: "International Monetary Fund (IMF)", url: "https://www.imf.org/", update: "Quarterly", reliability: "Official" },
        { name: "World Bank - GDP Data", url: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD", update: "Annual", reliability: "Official" },
        { name: "US Treasury", url: "https://fiscaldata.treasury.gov/", update: "Daily", reliability: "Official" },
      ]
    },
    {
      category: "Energy",
      sources: [
        { name: "International Energy Agency (IEA)", url: "https://www.iea.org/", update: "Annual", reliability: "Official" },
        { name: "IRENA - Renewable Energy", url: "https://www.irena.org/", update: "Annual", reliability: "Official" },
      ]
    },
    {
      category: "Society & Media",
      sources: [
        { name: "Internet World Stats", url: "https://www.internetworldstats.com/", update: "Quarterly", reliability: "Research" },
        { name: "WAN-IFRA - World Press Trends", url: "https://wan-ifra.org/", update: "Annual", reliability: "Industry" },
      ]
    },
    {
      category: "Food & Nutrition",
      sources: [
        { name: "FAO - Food Security", url: "https://www.fao.org/hunger/en/", update: "Annual", reliability: "Official" },
        { name: "Global Nutrition Report", url: "https://globalnutritionreport.org/", update: "Annual", reliability: "Research" },
      ]
    },
    {
      category: "Water",
      sources: [
        { name: "WHO/UNICEF Joint Monitoring", url: "https://washdata.org/", update: "Annual", reliability: "Official" },
        { name: "UN Water", url: "https://www.unwater.org/", update: "Annual", reliability: "Official" },
      ]
    },
  ];

  const reliabilityColors = {
    Official: "bg-green-500/10 text-green-500 border-green-500/20",
    Research: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    Academic: "bg-gray-100/10 text-muted-foreground border-border",
    Industry: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  };

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Data Sources & Methodology"
        description="Transparent data sourcing from UN, WHO, World Bank, IMF, and other trusted organizations. Learn about our methodology, update intervals, and data validation process."
        keywords="data sources, methodology, UN data, WHO statistics, World Bank, data transparency, verified data"
        canonical={`${typeof window !== 'undefined' ? window.location.origin : ''}/data-sources`}
      />
      <SchemaMarkup 
        type="WebPage" 
        data={{
          name: "Data Sources & Methodology",
          description: "Complete list of data sources and methodology used by CreatorMeter",
          url: `${typeof window !== 'undefined' ? window.location.origin : ''}/data-sources`
        }} 
      />
      <Navigation />
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: "Data Sources" }]} />
          
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <BackButton />
              <h1 className="text-4xl font-bold gradient-text mb-4">Data Sources & Methodology</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              CreatorMeter aggregates data from the world's most trusted organizations. All statistics are sourced from official databases, peer-reviewed research, and verified international agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <Database className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">50+ Trusted Sources</h3>
              <p className="text-sm text-muted-foreground">
                We aggregate data from UN agencies, WHO, World Bank, IMF, and leading research institutions.
              </p>
            </Card>
            <Card className="p-6">
              <RefreshCw className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Real-Time Updates</h3>
              <p className="text-sm text-muted-foreground">
                Our counters use official growth rates to provide live estimates between official publications.
              </p>
            </Card>
            <Card className="p-6">
              <Shield className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Verified & Transparent</h3>
              <p className="text-sm text-muted-foreground">
                Every metric includes source attribution, last update date, and methodology notes.
              </p>
            </Card>
          </div>

          <div className="space-y-8">
            {sources.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
                <div className="grid gap-4">
                  {category.sources.map((source, sidx) => (
                    <Card key={sidx} className="p-6 hover:bg-accent/50 transition-colors">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1 min-w-[200px]">
                          <h3 className="font-semibold mb-1 flex items-center gap-2">
                            {source.name}
                            <a 
                              href={source.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </h3>
                          <p className="text-sm text-muted-foreground">{source.url}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Badge variant="outline" className="whitespace-nowrap">
                            <RefreshCw className="w-3 h-3 mr-1" />
                            {source.update}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={reliabilityColors[source.reliability as keyof typeof reliabilityColors]}
                          >
                            {source.reliability}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-accent/30">
            <h2 className="text-2xl font-bold mb-4">Our Methodology</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Live Counter Calculations:</span> For metrics that update continuously (population, births, deaths, GDP), we use the most recent annual data from official sources and apply verified growth rates to provide real-time estimates.
              </p>
              <p>
                <span className="font-semibold text-foreground">Data Validation:</span> All data undergoes validation checks against multiple sources. Discrepancies are noted and resolved by prioritizing official governmental and international organization data.
              </p>
              <p>
                <span className="font-semibold text-foreground">Update Schedule:</span> Static datasets are refreshed according to their official publication schedules. Live counters run continuously with calculations verified against official releases.
              </p>
              <p>
                <span className="font-semibold text-foreground">Transparency Commitment:</span> We believe in complete transparency. Every statistic on CreatorMeter includes clear source attribution and links to original data where available.
              </p>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataSourcesPage;
