"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Database, Calculator, RefreshCw, Shield } from "lucide-react";

const DataMethodologyPage = () => {
  const dataSources = [
    {
      name: "United Nations",
      icon: Database,
      datasets: ["Population Statistics", "Development Indicators"],
      url: "https://data.un.org/",
    },
    {
      name: "World Bank",
      icon: Database,
      datasets: ["GDP Data", "Economic Indicators", "Poverty Statistics"],
      url: "https://data.worldbank.org/",
    },
    {
      name: "World Health Organization",
      icon: Database,
      datasets: ["Health Statistics", "Mortality Data", "Disease Tracking"],
      url: "https://www.who.int/data",
    },
    {
      name: "International Monetary Fund",
      icon: Database,
      datasets: ["Financial Data", "Economic Forecasts"],
      url: "https://www.imf.org/en/Data",
    },
    {
      name: "Food and Agriculture Organization",
      icon: Database,
      datasets: ["Food Production", "Agricultural Data", "Hunger Statistics"],
      url: "https://www.fao.org/statistics/en/",
    },
    {
      name: "International Energy Agency",
      icon: Database,
      datasets: ["Energy Statistics", "CO₂ Emissions", "Renewable Energy"],
      url: "https://www.iea.org/data-and-statistics",
    },
  ];

  const conversionExamples = [
    {
      metric: "Births per Second",
      formula: "annual_births ÷ 31,536,000",
      example: "140,000,000 births/year ÷ 31,536,000 seconds = ~4.4 births/second",
    },
    {
      metric: "Deaths per Second",
      formula: "annual_deaths ÷ 31,536,000",
      example: "60,000,000 deaths/year ÷ 31,536,000 seconds = ~1.9 deaths/second",
    },
    {
      metric: "CO₂ Emissions per Second",
      formula: "(annual_emissions_tonnes × 1000) ÷ 31,536,000",
      example: "37 billion tonnes/year × 1000 kg ÷ 31,536,000 = ~1,173 kg/second",
    },
    {
      metric: "GDP per Second",
      formula: "annual_gdp ÷ 31,536,000",
      example: "$100 trillion/year ÷ 31,536,000 = ~$3.17 million/second",
    },
  ];

  return (
    <>
      <MetaTags
        title="How Our Data Works | CreatorMeter Methodology"
        description="Learn how CreatorMeter collects, processes, and displays live global statistics. Explore our data sources, conversion formulas, and transparency policies."
        keywords="data methodology, data sources, UN data, World Bank data, statistics verification"
        canonical="https://creatormeter.com/data-methodology"
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How Our Data Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We turn verified global data into live, interactive insights. Learn about our sources, 
              methodology, and commitment to data transparency.
            </p>
          </div>

          {/* Data Sources */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Database className="h-6 w-6 text-primary" />
                  Our Data Sources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  We aggregate data from the world's most authoritative organizations and institutions. 
                  All data is verified, cross-referenced, and updated regularly.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {dataSources.map((source) => (
                    <Card key={source.name} className="border-border">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <source.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">
                              {source.name}
                            </h3>
                            <ul className="text-sm text-muted-foreground space-y-1 mb-2">
                              {source.datasets.map((dataset) => (
                                <li key={dataset}>• {dataset}</li>
                              ))}
                            </ul>
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline flex items-center gap-1"
                            >
                              Visit Source
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Conversion Formulas */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calculator className="h-6 w-6 text-primary" />
                  Conversion Formulas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Our live counters convert annual statistics into real-time data using precise mathematical formulas. 
                  Here's how we calculate the most common metrics:
                </p>
                <div className="space-y-4">
                  {conversionExamples.map((item) => (
                    <Card key={item.metric} className="border-border bg-muted/30">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground mb-2">
                          {item.metric}
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Formula: </span>
                            <code className="bg-background px-2 py-1 rounded text-primary">
                              {item.formula}
                            </code>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Example: </span>
                            <span className="text-foreground">{item.example}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> There are 31,536,000 seconds in a standard 365-day year. 
                    For metrics like births and deaths, we account for leap years and use the most recent 
                    annual data available.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Update Frequency */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <RefreshCw className="h-6 w-6 text-primary" />
                  Update Frequency & Estimation Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our data update frequency varies by source and metric type:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      <strong className="text-foreground">Live Counters:</strong> Updated every second 
                      using interpolation from annual data
                    </li>
                    <li>
                      <strong className="text-foreground">Annual Data:</strong> Refreshed when source 
                      organizations publish new statistics (typically yearly)
                    </li>
                    <li>
                      <strong className="text-foreground">Historical Data:</strong> Updated as revisions 
                      are published by source organizations
                    </li>
                    <li>
                      <strong className="text-foreground">Projections:</strong> Based on latest UN, 
                      World Bank, and IMF forecasts
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">Estimation Methodology</h4>
                    <p className="text-sm">
                      Our live counters use linear interpolation to estimate values between data points. 
                      For example, if we know there were 140 million births in 2023, we divide by the 
                      number of seconds in a year to estimate births per second. This provides a 
                      statistically accurate representation of real-time trends, though individual 
                      events are not tracked.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Data Ethics */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Shield className="h-6 w-6 text-primary" />
                  Data Transparency & Ethics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    CreatorMeter is committed to data transparency, accuracy, and ethical use of statistics:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      ✓ We only use data from verified, authoritative sources
                    </li>
                    <li>
                      ✓ All calculations and formulas are openly documented
                    </li>
                    <li>
                      ✓ We clearly indicate when data is estimated vs. measured
                    </li>
                    <li>
                      ✓ Source attribution is provided for every statistic
                    </li>
                    <li>
                      ✓ We update data promptly when source organizations publish revisions
                    </li>
                    <li>
                      ✓ We comply with GDPR, CCPA, and international data protection standards
                    </li>
                  </ul>
                  <div className="mt-6 flex gap-4">
                    <a 
                      href="/privacy" 
                      className="text-primary hover:underline font-medium"
                    >
                      Read Our Privacy Policy →
                    </a>
                    <a 
                      href="/about" 
                      className="text-primary hover:underline font-medium"
                    >
                      About CreatorMeter →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DataMethodologyPage;
