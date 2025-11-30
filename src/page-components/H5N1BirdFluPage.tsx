"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import { ExploreMoreStats } from "@/components/ExploreMoreStats";
import { useBackendData } from "@/hooks/useBackendData";
import { Counter } from "@/components/Counter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, TrendingUp, MapPin, Activity } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

interface H5N1Data {
  status: string;
  totalHumanCases: number;
  casesThisYear: number;
  fatalityRate: number;
  deaths: number;
  affectedCountries: number;
  regionalOutbreaks: Array<{
    region: string;
    cases: number;
    deaths: number;
  }>;
  severityTrend: Array<{
    month: string;
    cases: number;
    deaths: number;
  }>;
  keyEvents: Array<{
    date: string;
    event: string;
  }>;
  sources: string[];
  lastUpdated: string;
}

const H5N1BirdFluPage = () => {
  const { data, isLoading, error } = useBackendData<H5N1Data>("h5n1-bird-flu");

  return (
    <>
      <MetaTags
        title="H5N1 Bird Flu Outbreak Tracker (2025) — Global Human Cases & Spread"
        description="Track real-time H5N1 bird flu data for 2025, including human cases, regional outbreaks, and global activity updates."
        keywords="H5N1, bird flu, avian influenza, human cases, outbreak tracker, 2025, pandemic monitoring"
        canonical={`${'https://www.creatormeter.com'}/data/h5n1-bird-flu-2025`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "H5N1 Bird Flu Outbreak Tracker 2025",
          description: "Real-time tracking of H5N1 avian influenza human cases and global spread",
          url: `${'https://www.creatormeter.com'}/data/h5n1-bird-flu-2025`,
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{}}
      />

      <Navigation />

      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Health", path: "/health" },
            { label: "H5N1 Bird Flu Tracker" }
          ]} />

          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                H5N1 Bird Flu Outbreak Tracker — Human Cases, Spread, and Alerts (2025)
              </h1>
              <p className="text-lg text-muted-foreground">
                Real-time monitoring of H5N1 avian influenza human infections and global outbreak activity
              </p>
            </header>

            {error && (
              <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>Failed to load H5N1 data. Please try again later.</AlertDescription>
              </Alert>
            )}

            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading outbreak data...</p>
              </div>
            ) : data ? (
              <>
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Total Human Cases</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Counter value={data.totalHumanCases} className="text-2xl font-bold text-foreground" />
                      <p className="text-xs text-muted-foreground mt-2">
                        Source: {data.sources[0]} | Updated: {new Date(data.lastUpdated).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Cases This Year</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Counter value={data.casesThisYear} className="text-2xl font-bold text-orange-500" />
                      <p className="text-xs text-muted-foreground mt-2">2025 new infections</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Fatality Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-red-500">{data.fatalityRate}%</p>
                      <p className="text-xs text-muted-foreground mt-2">Highly lethal</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Affected Countries</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Counter value={data.affectedCountries} className="text-2xl font-bold text-foreground" />
                      <p className="text-xs text-muted-foreground mt-2">Global spread</p>
                    </CardContent>
                  </Card>
                </div>

                <Alert className="mb-8 border-red-500/50 bg-red-500/10">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <AlertDescription className="text-red-500">
                    <strong>Status: {data.status}</strong> — H5N1 continues to pose a significant public health risk with human-to-human transmission remaining limited but monitored closely.
                  </AlertDescription>
                </Alert>

                {/* Background Information */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>About H5N1 Avian Influenza</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                    <p>
                      H5N1 is a highly pathogenic avian influenza virus that primarily affects birds but can infect humans through close contact with infected poultry or contaminated environments. Since its emergence, H5N1 has caused sporadic human infections with a notably high case-fatality rate of over 50%.
                    </p>
                    <p>
                      In 2025, enhanced surveillance systems detected increased human cases across multiple regions, primarily linked to exposure in poultry markets and farms. While human-to-human transmission remains rare, health authorities worldwide maintain heightened vigilance due to the virus's pandemic potential.
                    </p>
                    <p>
                      The World Health Organization (WHO) and Centers for Disease Control and Prevention (CDC) have activated enhanced monitoring protocols. Affected countries have implemented culling measures, movement restrictions, and public health campaigns to limit exposure. Research into H5N1-specific vaccines and antiviral treatments continues at an accelerated pace.
                    </p>
                    <p>
                      Key symptoms include high fever, cough, sore throat, muscle aches, and in severe cases, acute respiratory distress. Early detection and treatment with antiviral medications can improve outcomes. Public health agencies recommend avoiding contact with sick or dead birds and practicing good hygiene in areas with known outbreaks.
                    </p>
                  </CardContent>
                </Card>

                {/* Regional Outbreaks */}
                <Card className="mb-8">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <CardTitle>Regional Outbreak Distribution</CardTitle>
                    </div>
                    <CardDescription>Human cases and deaths by geographic region</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={350}>
                      <BarChart data={data.regionalOutbreaks}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="cases" fill="hsl(var(--primary))" name="Cases" />
                        <Bar dataKey="deaths" fill="hsl(var(--destructive))" name="Deaths" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Severity Trend */}
                <Card className="mb-8">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      <CardTitle>2025 Severity Trend</CardTitle>
                    </div>
                    <CardDescription>Monthly progression of human cases and fatalities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={350}>
                      <LineChart data={data.severityTrend}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="cases" stroke="hsl(var(--primary))" strokeWidth={2} name="Cases" />
                        <Line type="monotone" dataKey="deaths" stroke="hsl(var(--destructive))" strokeWidth={2} name="Deaths" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Key Events Timeline */}
                <Card className="mb-8">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      <CardTitle>Key Events Timeline</CardTitle>
                    </div>
                    <CardDescription>Major developments in the 2025 H5N1 outbreak</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {data.keyEvents.map((event, index) => (
                        <div key={index} className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">{event.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <ShareButtons
                  title="H5N1 Bird Flu Outbreak Tracker 2025"
                  description="Track real-time H5N1 bird flu data for 2025, including human cases, regional outbreaks, and global activity updates."
                />

                <ExploreMoreStats currentPath="/data/h5n1-bird-flu-2025" />
              </>
            ) : null}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default H5N1BirdFluPage;