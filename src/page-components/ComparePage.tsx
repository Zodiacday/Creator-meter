"use client";

import { useState, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useBackendData } from "@/hooks/useBackendData";
import { ArrowRight, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

const ComparePage = () => {
  const [country1, setCountry1] = useState("United States");
  const [country2, setCountry2] = useState("China");
  const [metric, setMetric] = useState("population");

  // Fetch real data from edge functions
  const { data: countriesData, isLoading: loadingCountries } = useBackendData<any>('countries');
  const { data: gdpData, isLoading: loadingGdp } = useBackendData<any>('gdp');
  const { data: co2Data, isLoading: loadingCo2 } = useBackendData<any>('co2-emissions');
  const { data: energyData, isLoading: loadingEnergy } = useBackendData<any>('energy');

  const isLoading = loadingCountries || loadingGdp || loadingCo2 || loadingEnergy;

  const countries = [
    "United States",
    "China",
    "India",
    "Japan",
    "Germany",
    "United Kingdom",
    "France",
    "Brazil",
    "Canada",
    "Russia",
    "Indonesia",
    "Italy",
    "Mexico",
    "Nigeria",
    "Pakistan"
  ];

  const metrics = [
    { value: "population", label: "Population" },
    { value: "gdp", label: "GDP" },
    { value: "co2", label: "CO₂ Emissions" },
    { value: "energy", label: "Energy Consumption" },
  ];

  // Transform backend data into unified comparison format
  const comparisonData = useMemo(() => {
    if (!countriesData || !gdpData || !co2Data || !energyData) return {};

    const data: any = {};

    // Helper to normalize country names
    const normalizeCountry = (name: string) => {
      const mapping: Record<string, string> = {
        "USA": "United States",
        "UK": "United Kingdom",
      };
      return mapping[name] || name;
    };

    // Population data
    countriesData.topCountries?.forEach((country: any) => {
      const name = normalizeCountry(country.country);
      if (!data[name]) data[name] = {};
      data[name].population = {
        value: country.population,
        change: country.growthRate || 0
      };
    });

    // GDP data
    gdpData.topCountries?.forEach((country: any) => {
      const name = normalizeCountry(country.country);
      if (!data[name]) data[name] = {};
      data[name].gdp = {
        value: country.gdp,
        change: country.growthRate || 0
      };
    });

    // CO₂ data
    co2Data.topCountries?.forEach((country: any) => {
      const name = normalizeCountry(country.country);
      if (!data[name]) data[name] = {};
      // Calculate growth rate from historical data if available
      let growthRate = 0;
      if (co2Data.historical && co2Data.historical.length >= 2) {
        const recent = co2Data.historical[co2Data.historical.length - 1];
        const previous = co2Data.historical[co2Data.historical.length - 2];
        growthRate = ((recent.emissions - previous.emissions) / previous.emissions) * 100;
      }
      data[name].co2 = {
        value: country.emissions,
        change: growthRate
      };
    });

    // Energy data
    energyData.topConsumers?.forEach((country: any) => {
      const name = normalizeCountry(country.country);
      if (!data[name]) data[name] = {};
      data[name].energy = {
        value: country.consumption,
        change: 0 // Not provided in current API
      };
    });

    return data;
  }, [countriesData, gdpData, co2Data, energyData]);

  const formatValue = (value: number, metric: string) => {
    if (metric === "population") {
      return (value / 1000000).toFixed(1) + "M";
    }
    if (metric === "gdp") {
      return "$" + (value / 1000000000000).toFixed(2) + "T";
    }
    if (metric === "co2") {
      return (value / 1000000000).toFixed(2) + "B tonnes";
    }
    if (metric === "energy") {
      return (value / 1000000000000).toFixed(2) + " TWh";
    }
    return value.toLocaleString();
  };

  const data1 = comparisonData[country1]?.[metric];
  const data2 = comparisonData[country2]?.[metric];
  const difference = data1 && data2 ? ((data1.value - data2.value) / data2.value) * 100 : 0;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Compare Countries", href: "/compare" }
  ];

  return (
    <>
      <MetaTags
        title="Compare Countries | CreatorMeter - Side-by-Side Global Statistics"
        description="Compare global statistics between countries. Analyze population, GDP, CO₂ emissions, energy consumption, and more side-by-side with real data."
        keywords="country comparison, global statistics, compare countries, data visualization, GDP comparison, population comparison"
        canonical="https://www.creatormeter.com/compare"
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={breadcrumbs.map((crumb, index) => ({
          name: crumb.label,
          url: `https://www.creatormeter.com${crumb.href}`
        }))}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <Breadcrumbs items={breadcrumbs} />
        
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Compare Countries
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compare global statistics side-by-side to understand differences and trends
            </p>
          </div>

          {/* Selection Controls */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-5 gap-4 items-end">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Country 1</label>
                  <Select value={country1} onValueChange={setCountry1} disabled={isLoading}>
                    <SelectTrigger>
                      <SelectValue placeholder={isLoading ? "Loading..." : "Select country"} />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Country 2</label>
                  <Select value={country2} onValueChange={setCountry2} disabled={isLoading}>
                    <SelectTrigger>
                      <SelectValue placeholder={isLoading ? "Loading..." : "Select country"} />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-foreground">Metric</label>
                  <Select value={metric} onValueChange={setMetric} disabled={isLoading}>
                    <SelectTrigger>
                      <SelectValue placeholder={isLoading ? "Loading..." : "Select metric"} />
                    </SelectTrigger>
                    <SelectContent>
                      {metrics.map((m) => (
                        <SelectItem key={m.value} value={m.value}>
                          {m.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparison Results */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <Skeleton className="h-7 w-32" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-10 w-40 mb-2" />
                  <Skeleton className="h-4 w-32" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Skeleton className="h-7 w-32" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-10 w-40 mb-2" />
                  <Skeleton className="h-4 w-32" />
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>{country1}</CardTitle>
                </CardHeader>
                <CardContent>
                  {data1 ? (
                    <>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {formatValue(data1.value, metric)}
                      </div>
                      {data1.change !== 0 && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          {data1.change > 0 ? (
                            <TrendingUp className="h-4 w-4 text-green-500" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-500" />
                          )}
                          <span>{Math.abs(data1.change).toFixed(2)}% annual change</span>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <AlertCircle className="h-4 w-4" />
                      <p>Data not available</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{country2}</CardTitle>
                </CardHeader>
                <CardContent>
                  {data2 ? (
                    <>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {formatValue(data2.value, metric)}
                      </div>
                      {data2.change !== 0 && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          {data2.change > 0 ? (
                            <TrendingUp className="h-4 w-4 text-green-500" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-500" />
                          )}
                          <span>{Math.abs(data2.change).toFixed(2)}% annual change</span>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <AlertCircle className="h-4 w-4" />
                      <p>Data not available</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Difference Analysis */}
          {data1 && data2 && (
            <Card>
              <CardHeader>
                <CardTitle>Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {country1} has{" "}
                  <span className="font-bold text-foreground">
                    {Math.abs(difference).toFixed(1)}% {difference > 0 ? "more" : "less"}
                  </span>{" "}
                  {metrics.find((m) => m.value === metric)?.label.toLowerCase()} than {country2}.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Difference:</span>
                    <span className="font-semibold text-foreground">
                      {formatValue(Math.abs(data1.value - data2.value), metric)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ratio:</span>
                    <span className="font-semibold text-foreground">
                      {(data1.value / data2.value).toFixed(2)}:1
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick Compare Buttons */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Comparisons</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setCountry1("United States");
                  setCountry2("China");
                  setMetric("gdp");
                }}
              >
                US vs China GDP
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setCountry1("India");
                  setCountry2("China");
                  setMetric("population");
                }}
              >
                India vs China Population
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setCountry1("Germany");
                  setCountry2("France");
                  setMetric("co2");
                }}
              >
                Germany vs France CO₂
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ComparePage;
