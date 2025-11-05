import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react";

const ComparePage = () => {
  const [country1, setCountry1] = useState("United States");
  const [country2, setCountry2] = useState("China");
  const [metric, setMetric] = useState("population");

  const countries = [
    "United States",
    "China",
    "India",
    "Germany",
    "United Kingdom",
    "France",
    "Japan",
    "Brazil",
    "Canada",
    "Australia",
  ];

  const metrics = [
    { value: "population", label: "Population" },
    { value: "gdp", label: "GDP" },
    { value: "co2", label: "CO₂ Emissions" },
    { value: "energy", label: "Energy Consumption" },
    { value: "life-expectancy", label: "Life Expectancy" },
  ];

  // Mock data - replace with real API data
  const comparisonData = {
    population: {
      "United States": { value: 331900000, change: 0.4 },
      China: { value: 1412000000, change: 0.3 },
      India: { value: 1408000000, change: 1.0 },
    },
    gdp: {
      "United States": { value: 25500000000000, change: 2.1 },
      China: { value: 17960000000000, change: 3.0 },
      India: { value: 3730000000000, change: 6.5 },
    },
    co2: {
      "United States": { value: 5000000000, change: -2.0 },
      China: { value: 11000000000, change: 1.5 },
      India: { value: 2700000000, change: 5.0 },
    },
  };

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
    return value.toLocaleString();
  };

  const data1 = comparisonData[metric as keyof typeof comparisonData]?.[country1];
  const data2 = comparisonData[metric as keyof typeof comparisonData]?.[country2];
  const difference = data1 && data2 ? ((data1.value - data2.value) / data2.value) * 100 : 0;

  return (
    <>
      <MetaTags
        title="Compare Countries | CreatorMeter"
        description="Compare global statistics between countries. Analyze population, GDP, CO₂ emissions, and more side-by-side."
        keywords="country comparison, global statistics, compare countries, data visualization"
        canonical="https://creatormeter.com/compare"
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
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
                  <Select value={country1} onValueChange={setCountry1}>
                    <SelectTrigger>
                      <SelectValue />
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
                  <Select value={country2} onValueChange={setCountry2}>
                    <SelectTrigger>
                      <SelectValue />
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
                  <Select value={metric} onValueChange={setMetric}>
                    <SelectTrigger>
                      <SelectValue />
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
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {data1.change > 0 ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                      <span>{Math.abs(data1.change)}% annual change</span>
                    </div>
                  </>
                ) : (
                  <p className="text-muted-foreground">Data not available</p>
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
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {data2.change > 0 ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                      <span>{Math.abs(data2.change)}% annual change</span>
                    </div>
                  </>
                ) : (
                  <p className="text-muted-foreground">Data not available</p>
                )}
              </CardContent>
            </Card>
          </div>

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
