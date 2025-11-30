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
import { AlertCircle, MapPin, Activity, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

interface MarburgData {
  status: string;
  outbreak: string;
  totalCases: number;
  totalDeaths: number;
  fatalityRate: number;
  casesToday: number;
  deathsToday: number;
  affectedRegions: Array<{
    region: string;
    cases: number;
    deaths: number;
    status: string;
  }>;
  responseTimeline: Array<{
    date: string;
    event: string;
  }>;
  caseProgression: Array<{
    week: string;
    cases: number;
    deaths: number;
  }>;
  sources: string[];
  lastUpdated: string;
}

const MarburgVirusPage = () => {
  const { data, isLoading, error } = useBackendData<MarburgData>("marburg-virus");

  return (
    <>
      <MetaTags
        title="Marburg Virus Outbreak Ethiopia (2025) — Live Emergency Updates"
        description="Monitor the 2025 Marburg virus outbreak with live updates, case counts, outbreak intensity levels, and regional breakdowns."
        keywords="Marburg virus, Ethiopia outbreak, hemorrhagic fever, viral disease, 2025, emergency response"
        canonical={`${typeof window !== 'undefined' ? window.location.origin : ''}/data/marburg-virus-ethiopia-2025`}
      />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "Marburg Virus Outbreak Ethiopia 2025",
          description: "Real-time tracking of Marburg virus outbreak in Ethiopia with case counts and regional data",
          url: `${typeof window !== 'undefined' ? window.location.origin : ''}/data/marburg-virus-ethiopia-2025`,
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
            { label: "Marburg Virus Ethiopia" }
          ]} />

          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Marburg Virus Outbreak in Ethiopia — Real-Time Case Tracking (2025)
              </h1>
              <p className="text-lg text-muted-foreground">
                Live monitoring of the 2025 Marburg virus emergency with case counts and response coordination
              </p>
            </header>

            {error && (
              <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>Failed to load Marburg outbreak data. Please try again later.</AlertDescription>
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
                      <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Counter value={data.totalCases} className="text-2xl font-bold text-foreground" />
                      <p className="text-xs text-muted-foreground mt-2">
                        Source: {data.sources[0]} | Updated: {new Date(data.lastUpdated).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Total Deaths</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Counter value={data.totalDeaths} className="text-2xl font-bold text-red-500" />
                      <p className="text-xs text-muted-foreground mt-2">Fatality rate: {data.fatalityRate}%</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Cases Today</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Counter value={data.casesToday} className="text-2xl font-bold text-orange-500" />
                      <p className="text-xs text-muted-foreground mt-2">New infections</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Deaths Today</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Counter value={data.deathsToday} className="text-2xl font-bold text-red-500" />
                      <p className="text-xs text-muted-foreground mt-2">Daily fatalities</p>
                    </CardContent>
                  </Card>
                </div>

                <Alert className="mb-8 border-red-500/50 bg-red-500/10">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <AlertDescription className="text-red-500">
                    <strong>Status: {data.status}</strong> — The Marburg virus outbreak in Ethiopia remains a critical public health emergency requiring sustained international response and enhanced surveillance.
                  </AlertDescription>
                </Alert>

                {/* Background Information */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>About Marburg Virus Disease</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                    <p>
                      Marburg virus disease (MVD) is a severe, often fatal illness caused by the Marburg virus, one of the most dangerous pathogens known to humanity. The virus belongs to the same family as Ebola and causes hemorrhagic fever with case-fatality rates averaging 88% in this outbreak.
                    </p>
                    <p>
                      The 2025 Ethiopia outbreak began in February 2025 in the Amhara region, with rapid spread to neighboring areas. The virus transmits through direct contact with bodily fluids of infected individuals or contaminated materials. Healthcare workers and family members caring for patients face elevated risk without proper protective equipment.
                    </p>
                    <p>
                      The World Health Organization deployed emergency response teams immediately after confirmation of the first cases. Treatment centers were established to isolate patients and provide supportive care, including fluid management and treatment of specific symptoms. No approved vaccine or specific antiviral treatment exists yet, though experimental therapies are being evaluated.
                    </p>
                    <p>
                      Early symptoms include sudden high fever, severe headache, and muscle aches, progressing to severe bleeding, organ failure, and death in many cases. The incubation period ranges from 2-21 days. Rapid identification, isolation, and contact tracing remain critical to controlling spread. International health agencies continue coordinating medical supplies, training, and epidemiological support.
                    </p>
                  </CardContent>
                </Card>

                {/* Regional Distribution */}
                <Card className="mb-8">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <CardTitle>Affected Regions in Ethiopia</CardTitle>
                    </div>
                    <CardDescription>Case distribution across impacted areas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={350}>
                      <BarChart data={data.affectedRegions}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="region" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="cases" fill="hsl(var(--primary))" name="Cases" />
                        <Bar dataKey="deaths" fill="hsl(var(--destructive))" name="Deaths" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Case Progression */}
                <Card className="mb-8">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <CardTitle>Outbreak Progression</CardTitle>
                    </div>
                    <CardDescription>Weekly case and death counts since outbreak start</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={350}>
                      <LineChart data={data.caseProgression}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="cases" stroke="hsl(var(--primary))" strokeWidth={2} name="Cases" />
                        <Line type="monotone" dataKey="deaths" stroke="hsl(var(--destructive))" strokeWidth={2} name="Deaths" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Response Timeline */}
                <Card className="mb-8">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      <CardTitle>Emergency Response Timeline</CardTitle>
                    </div>
                    <CardDescription>Key milestones in outbreak response and containment efforts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {data.responseTimeline.map((event, index) => (
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
                  title="Marburg Virus Outbreak Ethiopia 2025"
                  description="Monitor the 2025 Marburg virus outbreak with live updates, case counts, outbreak intensity levels, and regional breakdowns."
                />

                <ExploreMoreStats currentPath="/data/marburg-virus-ethiopia-2025" />
              </>
            ) : null}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MarburgVirusPage;