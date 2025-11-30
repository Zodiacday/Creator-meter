"use client";

import { Navigation } from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import { Users2, BookOpen, Newspaper, Smartphone, Wifi, Mail, Tv, Gamepad2 } from "lucide-react";
import { Counter } from "@/components/Counter";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";

const SocietyPage = () => {
  // Updated from Worldometer.info Jan 2025
  const booksPublished = useRealtimeCounter({ initialValue: 2410000, incrementPerSecond: 0.076 });
  const newspapersCirculated = useRealtimeCounter({ initialValue: 409000000, incrementPerSecond: 4734 });
  const tvsSold = useRealtimeCounter({ initialValue: 612000, incrementPerSecond: 7.08 });
  const mobilePhonesSold = useRealtimeCounter({ initialValue: 7330000, incrementPerSecond: 84.8 });
  const videogamesSold = useRealtimeCounter({ initialValue: 308000000, incrementPerSecond: 3565 });
  const internetUsers = useRealtimeCounter({ initialValue: 6897000000, incrementPerSecond: 12 });
  const emailsSent = useRealtimeCounter({ initialValue: 291800000000, incrementPerSecond: 3377315 });
  const blogPosts = useRealtimeCounter({ initialValue: 11480000, incrementPerSecond: 133 });

  // Internet adoption by region (%)
  const internetData = [
    { region: "North America", penetration: 90 },
    { region: "Europe", penetration: 87 },
    { region: "Latin America", penetration: 68 },
    { region: "Middle East", penetration: 70 },
    { region: "Asia", penetration: 62 },
    { region: "Africa", penetration: 33 },
  ];

  // Social media users by platform (billions)
  const socialMediaData = [
    { name: "Facebook", value: 3.0, color: "#3b5998" },
    { name: "YouTube", value: 2.7, color: "#FF0000" },
    { name: "WhatsApp", value: 2.5, color: "#25D366" },
    { name: "Instagram", value: 2.0, color: "#E4405F" },
    { name: "TikTok", value: 1.5, color: "#000000" },
    { name: "Twitter/X", value: 0.6, color: "#1DA1F2" },
  ];

  // Digital content consumption (hours per day)
  const consumptionData = [
    { activity: "Social Media", hours: 2.3 },
    { activity: "Streaming Video", hours: 3.1 },
    { activity: "Gaming", hours: 1.6 },
    { activity: "News", hours: 0.8 },
    { activity: "Music", hours: 1.4 },
  ];

  // Mobile vs desktop usage
  const deviceData = [
    { name: "Mobile", value: 58, color: "hsl(var(--chart-1))" },
    { name: "Desktop", value: 39, color: "hsl(var(--chart-2))" },
    { name: "Tablet", value: 3, color: "hsl(var(--chart-3))" },
  ];

  // Internet traffic growth (exabytes per month)
  const trafficData = [
    { year: 2010, traffic: 21 },
    { year: 2012, traffic: 44 },
    { year: 2014, traffic: 60 },
    { year: 2016, traffic: 96 },
    { year: 2018, traffic: 131 },
    { year: 2020, traffic: 200 },
    { year: 2022, traffic: 278 },
    { year: 2024, traffic: 348 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MetaTags
        title="Society & Media Statistics - Digital & Traditional Media"
        description="Real-time global media consumption and digital connectivity statistics. Track internet users, social media, emails sent, and traditional media worldwide."
        keywords="media statistics, internet users, social media stats, digital consumption, email statistics, global connectivity"
        canonical={`${typeof window !== 'undefined' ? window.location.origin : ''}/society`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Global Society & Media Statistics",
          description: "Real-time data on digital and traditional media consumption, internet usage, and social connectivity",
          url: `${typeof window !== 'undefined' ? window.location.origin : ''}/society`,
          keywords: ["society", "media", "internet", "social media", "digital consumption"],
          temporalCoverage: "2010/..",
          spatialCoverage: "Global"
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={[
          { name: "Home", url: window.location.origin },
          { name: "Society & Media", url: `${typeof window !== 'undefined' ? window.location.origin : ''}/society` }
        ]}
      />
      <Navigation />

      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="p-4 rounded-xl bg-[hsl(var(--society))]/20">
              <Users2 className="w-8 h-8 text-[hsl(var(--society))]" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <BackButton />
                <h1 className="text-4xl font-bold gradient-text">Society & Media</h1>
              </div>
              <p className="text-muted-foreground mt-2">Digital and traditional media consumption worldwide</p>
            </div>
          </div>

          {/* Main Counter */}
          <div className="relative mb-12 text-center py-12 bg-gradient-to-br from-[hsl(var(--society))]/10 to-transparent rounded-3xl border border-border animate-fade-in">
            <Wifi className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--society))]" />
            <p className="text-sm text-muted-foreground mb-2">Internet Users Worldwide</p>
            <Counter value={internetUsers} className="text-5xl md:text-7xl font-bold text-foreground counter-glow" />
            <p className="text-sm text-muted-foreground mt-2">84% of world population</p>
            <div className="absolute -inset-4 bg-[hsl(var(--society))]/20 blur-3xl -z-10 animate-pulse-glow rounded-full pointer-events-none" aria-hidden="true" />
          </div>

          {/* Real-time Counters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard 
              label="Books Published This Year" 
              value={booksPublished} 
              icon={BookOpen} 
              color="hsl(var(--society))"
            />
            <StatCard 
              label="Mobile Phones Sold" 
              value={mobilePhonesSold} 
              icon={Smartphone} 
              color="hsl(var(--chart-2))"
              subtitle="this year"
            />
            <StatCard 
              label="Emails Sent Today" 
              value={emailsSent} 
              icon={Mail} 
              color="hsl(var(--chart-3))"
            />
            <StatCard 
              label="Video Games Sold" 
              value={videogamesSold} 
              icon={Gamepad2} 
              color="hsl(var(--chart-4))"
              subtitle="this year"
            />
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <StatCard 
              label="TV Sets Sold" 
              value={tvsSold} 
              icon={Tv} 
              color="hsl(var(--society))"
              subtitle="this year"
            />
            <StatCard 
              label="Newspapers Circulated" 
              value={newspapersCirculated} 
              icon={Newspaper} 
              color="hsl(var(--chart-5))"
              subtitle="this year"
            />
            <StatCard 
              label="Blog Posts Today" 
              value={blogPosts} 
              icon={BookOpen} 
              color="hsl(var(--chart-1))"
            />
            <StatCard 
              label="Global Literacy Rate" 
              value={87} 
              icon={BookOpen} 
              color="hsl(var(--chart-3))"
              subtitle="% of population"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Internet Penetration by Region (%)" icon={Wifi} color="hsl(var(--society))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={internetData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-15} textAnchor="end" height={70} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="penetration" fill="hsl(var(--society))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Social Media Users (Billions)" icon={Users2} color="hsl(var(--chart-2))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={socialMediaData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="value" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard title="Daily Digital Content Consumption (Hours)" icon={Smartphone} color="hsl(var(--chart-3))">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={consumptionData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="activity" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="hours" fill="hsl(var(--chart-3))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Device Usage Distribution (%)" icon={Smartphone} color="hsl(var(--chart-4))">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
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
          </div>

          <ChartCard title="Global Internet Traffic Growth (Exabytes/Month)" icon={Wifi} color="hsl(var(--society))">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="traffic" 
                  stroke="hsl(var(--society))" 
                  fill="hsl(var(--society))"
                  fillOpacity={0.3}
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Data Sources */}
          <div className="mt-12 p-6 bg-card border border-border rounded-xl">
            <p className="text-sm text-muted-foreground">
              <strong>Data Sources:</strong> International Telecommunication Union (ITU), Statista, We Are Social, DataReportal, Pew Research Center, UNESCO Institute for Statistics
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SocietyPage;
