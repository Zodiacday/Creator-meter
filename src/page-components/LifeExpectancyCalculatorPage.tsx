"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { ChartCard } from "@/components/ChartCard";
import { QuickFacts } from "@/components/QuickFacts";
import { SourceCitation } from "@/components/SourceCitation";
import { ExpandableInfo } from "@/components/ExpandableInfo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Activity, TrendingUp, Heart, Users } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const LifeExpectancyCalculatorPage = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateLifeExpectancy = () => {
    let baseExpectancy = 73;
    
    if (gender === "female") baseExpectancy += 5;
    if (country === "developed") baseExpectancy += 9;
    else if (country === "developing") baseExpectancy += 3;
    
    if (lifestyle === "healthy") baseExpectancy += 8;
    else if (lifestyle === "moderate") baseExpectancy += 3;
    else if (lifestyle === "poor") baseExpectancy -= 5;
    
    const ageNum = parseInt(age) || 0;
    const yearsRemaining = Math.max(0, baseExpectancy - ageNum);
    
    setResult(baseExpectancy);
  };

  const globalAverages = [
    { metric: "Global Average", years: 73, color: "#3b82f6" },
    { metric: "High Income", years: 80, color: "#10b981" },
    { metric: "Upper Middle", years: 75, color: "#f59e0b" },
    { metric: "Lower Middle", years: 70, color: "#8b5cf6" },
    { metric: "Low Income", years: 63, color: "#ec4899" }
  ];

  const topCountries = [
    { country: "Monaco", expectancy: 89 },
    { country: "Japan", expectancy: 85 },
    { country: "Switzerland", expectancy: 84 },
    { country: "Singapore", expectancy: 84 },
    { country: "Australia", expectancy: 83 },
    { country: "Spain", expectancy: 83 },
    { country: "Italy", expectancy: 83 },
    { country: "Canada", expectancy: 82 }
  ];

  const historicalTrend = [
    { year: "1960", expectancy: 53 },
    { year: "1970", expectancy: 58 },
    { year: "1980", expectancy: 63 },
    { year: "1990", expectancy: 65 },
    { year: "2000", expectancy: 68 },
    { year: "2010", expectancy: 71 },
    { year: "2020", expectancy: 73 },
    { year: "2024", expectancy: 73 }
  ];

  const faqData = [
    {
      question: "What is life expectancy?",
      answer: "Life expectancy is the average number of years a person is expected to live based on current mortality rates. It's calculated using statistical data from populations and considers factors like healthcare access, lifestyle, and environmental conditions."
    },
    {
      question: "Why do women live longer than men?",
      answer: "On average, women live 5 years longer than men globally. This is attributed to biological factors (stronger immune systems, genetic advantages), behavioral differences (lower risk-taking, better health-seeking behavior), and hormonal protection from certain diseases."
    },
    {
      question: "What factors affect life expectancy?",
      answer: "Key factors include genetics (20-30%), lifestyle choices (50-70% including diet, exercise, smoking, alcohol), healthcare access, socioeconomic status, education level, environmental conditions, and stress management."
    },
    {
      question: "How accurate is a life expectancy calculator?",
      answer: "Life expectancy calculators provide estimates based on statistical averages and known risk factors. They're useful for general guidance but cannot predict individual outcomes due to the complexity of genetic, environmental, and lifestyle factors."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Life Expectancy Calculator", url: "/life-expectancy-calculator" }
  ];

  return (
    <>
      <MetaTags
        title="Life Expectancy Calculator - Estimate Your Lifespan & Longevity 2025"
        description="Free life expectancy calculator - estimate how long you'll live based on age, gender, country, and lifestyle. Compare global averages, discover longevity factors with accurate 2025 data."
        keywords="life expectancy calculator, lifespan calculator, how long will I live, longevity calculator, life expectancy by country, factors affecting lifespan, life span estimator, longevity test"
        canonical="https://creatormeter.com/life-expectancy-calculator"
      />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Life Expectancy Statistics",
          description: "Interactive life expectancy calculator with global statistics and demographic factors",
          url: "https://creatormeter.com/life-expectancy-calculator",
          keywords: ["life expectancy", "longevity", "demographics", "health statistics"],
          temporalCoverage: "1960/2024",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Life Expectancy Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Calculate your estimated life expectancy based on demographics and lifestyle factors
            </p>
          </header>

          <section className="max-w-2xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-primary" />
                  Calculate Your Life Expectancy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="age">Current Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    min="0"
                    max="120"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country Development Level</Label>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select country type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="developed">Developed Country</SelectItem>
                      <SelectItem value="developing">Developing Country</SelectItem>
                      <SelectItem value="underdeveloped">Underdeveloped Country</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lifestyle">Lifestyle</Label>
                  <Select value={lifestyle} onValueChange={setLifestyle}>
                    <SelectTrigger id="lifestyle">
                      <SelectValue placeholder="Select lifestyle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthy">Healthy (Regular exercise, good diet, no smoking)</SelectItem>
                      <SelectItem value="moderate">Moderate (Some exercise, average diet)</SelectItem>
                      <SelectItem value="poor">Poor (Sedentary, poor diet, smoking)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={calculateLifeExpectancy} className="w-full" size="lg">
                  Calculate Life Expectancy
                </Button>

                {result && (
                  <Card className="border-primary/50 bg-primary/5">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">Estimated Life Expectancy</p>
                        <p className="text-4xl font-bold text-primary">{result} years</p>
                        <p className="text-sm text-muted-foreground mt-4">
                          This is an estimate based on statistical averages. Individual results may vary significantly.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard
              title="Life Expectancy by Income Level"
              icon={Heart}
              color="#3b82f6"
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={globalAverages}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="years" fill="#3b82f6" name="Years" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Top Countries by Life Expectancy"
              icon={Users}
              color="#10b981"
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topCountries} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="expectancy" fill="#10b981" name="Years" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Global Life Expectancy Trend"
              icon={TrendingUp}
              color="#f59e0b"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="expectancy" stroke="#f59e0b" strokeWidth={2} name="Life Expectancy (Years)" />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <QuickFacts
              facts={[
                "Global life expectancy has increased by 20 years since 1960",
                "Women live an average of 5 years longer than men",
                "Monaco has the highest life expectancy at 89 years",
                "Lifestyle factors account for 50-70% of longevity",
                "Regular exercise can add 3-7 years to life expectancy",
                "Life expectancy dropped slightly in 2020-2021 due to COVID-19"
              ]}
            />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <ExpandableInfo
                  key={index}
                  title={faq.question}
                >
                  {faq.answer}
                </ExpandableInfo>
              ))}
            </div>
          </section>

          <SourceCitation
            sources={[
              { name: "Life Expectancy Data", url: "https://www.who.int/data/gho/data/indicators/indicator-details/GHO/life-expectancy-at-birth-(years)", organization: "World Health Organization (WHO)" },
              { name: "Health Statistics", url: "https://data.worldbank.org/indicator/SP.DYN.LE00.IN", organization: "World Bank" },
              { name: "World Population Prospects", url: "https://population.un.org/wpp/", organization: "United Nations" },
              { name: "Global Health Data", url: "https://www.healthdata.org/", organization: "Institute for Health Metrics and Evaluation (IHME)" }
            ]}
          />
        </main>
      </div>
    </>
  );
};

export default LifeExpectancyCalculatorPage;
