"use client";

import { Navigation } from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import { Users, Baby, GraduationCap, Briefcase, Heart } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const PopulationByAgePage = () => {
  const ageDistribution = [
    { age: "0-4", population: 680, color: "hsl(var(--chart-1))" },
    { age: "5-9", population: 665, color: "hsl(var(--chart-1))" },
    { age: "10-14", population: 642, color: "hsl(var(--chart-2))" },
    { age: "15-19", population: 620, color: "hsl(var(--chart-2))" },
    { age: "20-24", population: 638, color: "hsl(var(--chart-3))" },
    { age: "25-29", population: 652, color: "hsl(var(--chart-3))" },
    { age: "30-34", population: 643, color: "hsl(var(--chart-4))" },
    { age: "35-39", population: 625, color: "hsl(var(--chart-4))" },
    { age: "40-44", population: 591, color: "hsl(var(--chart-5))" },
    { age: "45-49", population: 548, color: "hsl(var(--chart-5))" },
    { age: "50-54", population: 516, color: "hsl(var(--chart-1))" },
    { age: "55-59", population: 472, color: "hsl(var(--chart-2))" },
    { age: "60-64", population: 410, color: "hsl(var(--chart-3))" },
    { age: "65+", population: 768, color: "hsl(var(--chart-4))" },
  ];

  const broadAgeGroups = [
    { group: "0-14 years", population: 2093, percentage: 25.4, color: "hsl(var(--chart-1))" },
    { group: "15-64 years", population: 5384, percentage: 65.3, color: "hsl(var(--chart-2))" },
    { group: "65+ years", population: 768, percentage: 9.3, color: "hsl(var(--chart-3))" },
  ];

  const regionalMedianAge = [
    { region: "Africa", medianAge: 19.7 },
    { region: "Asia", medianAge: 32.0 },
    { region: "Europe", medianAge: 43.1 },
    { region: "Latin America", medianAge: 31.0 },
    { region: "North America", medianAge: 38.6 },
    { region: "Oceania", medianAge: 33.3 },
  ];

  const faqData = [
    {
      question: "What is the world population by age distribution?",
      answer: "The global population is distributed as follows: 25.4% are aged 0-14 years (children), 65.3% are aged 15-64 years (working age), and 9.3% are aged 65+ years (elderly). This represents a relatively young global population, though aging is accelerating."
    },
    {
      question: "Which age group is the largest in the world?",
      answer: "The 25-29 age group is currently the largest single 5-year age cohort, with approximately 652 million people. The working-age population (15-64) as a whole makes up about 5.4 billion people."
    },
    {
      question: "How is the global population aging?",
      answer: "The global median age has increased from 24 years in 1950 to 30 years in 2024. By 2050, it's projected to reach 36 years as fertility rates decline and life expectancy increases worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MetaTags
        title="World Population by Age - Global Age Distribution Statistics"
        description="Explore world population by age groups. 25.4% children (0-14), 65.3% working age (15-64), 9.3% elderly (65+). Interactive charts and demographic trends."
        keywords="world population by age, age distribution, demographic pyramid, population age groups, median age, aging population"
        canonical={`${'https://www.creatormeter.com'}/world-population-by-age`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "World Population Age Distribution",
          description: "Demographic data on global population by age groups",
          url: `${'https://www.creatormeter.com'}/world-population-by-age`,
          keywords: ["demographics", "age distribution", "population pyramid", "median age"],
          temporalCoverage: "2024/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: 'https://www.creatormeter.com' },
          { name: "Population by Age", url: `${'https://www.creatormeter.com'}/world-population-by-age` }
        ]}
      />
      <Navigation />

      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="p-4 rounded-xl bg-[hsl(var(--population))]/20">
              <Users className="w-8 h-8 text-[hsl(var(--population))]" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <BackButton />
                <h1 className="text-4xl font-bold gradient-text">World Population by Age</h1>
              </div>
              <p className="text-muted-foreground mt-2">Global age distribution and demographic trends</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <StatCard 
              label="Children (0-14)" 
              value={2093000000} 
              icon={Baby} 
              color="hsl(var(--population))"
              subtitle="25.4% of population"
            />
            <StatCard 
              label="Working Age (15-64)" 
              value={5384000000} 
              icon={Briefcase} 
              color="hsl(var(--population))"
              subtitle="65.3% of population"
            />
            <StatCard 
              label="Elderly (65+)" 
              value={768000000} 
              icon={Heart} 
              color="hsl(var(--population))"
              subtitle="9.3% of population"
            />
            <StatCard 
              label="Global Median Age" 
              value={30} 
              icon={Users} 
              color="hsl(var(--population))"
              subtitle="years old"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 gap-6 mb-12">
            <ChartCard title="Population by 5-Year Age Groups (Millions)" icon={Users} color="hsl(var(--population))">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={ageDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="age" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="population" radius={[8, 8, 0, 0]}>
                    {ageDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Broad Age Group Distribution" icon={Users} color="hsl(var(--chart-2))">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={broadAgeGroups}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ group, percentage }) => `${group}: ${percentage}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="population"
                  >
                    {broadAgeGroups.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Median Age by Region" icon={GraduationCap} color="hsl(var(--population))">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={regionalMedianAge}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-45} textAnchor="end" height={80} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="medianAge" 
                    stroke="hsl(var(--population))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--population))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* FAQ Section */}
          <div className="mb-12 p-6 bg-card border border-border rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Sources */}
          <div className="p-6 bg-card border border-border rounded-xl">
            <p className="text-sm text-muted-foreground">
              <strong>Data Sources:</strong> United Nations Population Division (World Population Prospects 2024), U.S. Census Bureau, World Bank Population Estimates
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PopulationByAgePage;