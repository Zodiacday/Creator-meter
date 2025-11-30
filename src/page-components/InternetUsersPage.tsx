"use client";

import { Navigation } from "@/components/Navigation";
import { Wifi, Globe, TrendingUp, Users } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Counter } from "@/components/Counter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const InternetUsersPage = () => {
  const internetUsers = useRealtimeCounter({ initialValue: 5400000000, incrementPerSecond: 10 });

  const usersByRegion = [
    { region: "Asia", users: 2900, color: "hsl(var(--chart-1))" },
    { region: "Europe", users: 750, color: "hsl(var(--chart-2))" },
    { region: "Africa", users: 600, color: "hsl(var(--chart-3))" },
    { region: "Americas", users: 850, color: "hsl(var(--chart-4))" },
    { region: "Oceania", users: 35, color: "hsl(var(--chart-5))" },
  ];

  const penetrationByCountry = [
    { country: "UAE", penetration: 99.7 },
    { country: "Denmark", penetration: 99.0 },
    { country: "South Korea", penetration: 98.8 },
    { country: "Qatar", penetration: 98.5 },
    { country: "Iceland", penetration: 98.3 },
    { country: "Bahrain", penetration: 98.0 },
  ];

  const growthTrend = [
    { year: 2000, users: 413, percentage: 6.7 },
    { year: 2005, users: 1024, percentage: 15.8 },
    { year: 2010, users: 1971, percentage: 28.8 },
    { year: 2015, users: 3185, percentage: 43.4 },
    { year: 2020, users: 4574, percentage: 59.5 },
    { year: 2024, users: 5400, percentage: 67.4 },
  ];

  const faqData = [
    {
      question: "How many people use the internet worldwide?",
      answer: "As of 2024, approximately 5.4 billion people use the internet globally, representing 67.4% of the world's population. This number continues to grow by millions each month."
    },
    {
      question: "Which region has the most internet users?",
      answer: "Asia has the most internet users with approximately 2.9 billion people online, representing over half of all global internet users. China and India alone account for over 1.5 billion users."
    },
    {
      question: "What percentage of the world is online?",
      answer: "About 67.4% of the global population has internet access. However, this varies dramatically by region - from over 90% in developed countries to less than 30% in some parts of Africa."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Internet Users Worldwide 2025 - Global Internet Statistics"
        description="5.4 billion people use the internet (67.4% of world population). Track real-time internet users, regional breakdowns, and penetration rates by country."
        keywords="internet users worldwide, global internet statistics, internet penetration, online population, digital divide"
        canonical={`${typeof window !== 'undefined' ? window.location.origin : ''}/internet-users-worldwide`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Global Internet Users Statistics",
          description: "Real-time data on internet users worldwide",
          url: `${typeof window !== 'undefined' ? window.location.origin : ''}/internet-users-worldwide`,
          keywords: ["internet users", "digital connectivity", "internet penetration", "online population"]
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />
      <Navigation />
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold gradient-text mb-8">Internet Users Worldwide</h1>
          <div className="text-center py-8 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl border border-border mb-12">
            <Wifi className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <p className="text-sm text-muted-foreground mb-2">People Online Right Now</p>
            <Counter value={internetUsers} className="text-5xl font-bold text-foreground counter-glow" />
            <p className="text-xs text-muted-foreground mt-2">67.4% of world population</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <StatCard label="Internet Penetration" value={67.4} icon={Globe} color="hsl(var(--chart-1))" subtitle="% of population" />
            <StatCard label="Mobile Internet Users" value={5100000000} icon={Users} color="hsl(var(--chart-2))" subtitle="people" />
            <StatCard label="New Users Per Day" value={864000} icon={TrendingUp} color="hsl(var(--chart-3))" subtitle="approximately" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Internet Users by Region (Millions)" icon={Globe} color="hsl(var(--chart-1))">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={usersByRegion}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ region, users }) => `${region}: ${users}M`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="users"
                  >
                    {usersByRegion.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
            <ChartCard title="Highest Internet Penetration (%)" icon={Wifi} color="hsl(var(--chart-2))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={penetrationByCountry}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" domain={[95, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="penetration" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
          <ChartCard title="Growth of Internet Users (Millions)" icon={TrendingUp} color="hsl(var(--population))">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))' }} />
                <Line type="monotone" dataKey="users" stroke="hsl(var(--population))" strokeWidth={3} dot={{ fill: 'hsl(var(--population))' }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
          <div className="mt-12 p-6 bg-card border border-border rounded-xl">
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
        </div>
      </main>
    </div>
  );
};

export default InternetUsersPage;
