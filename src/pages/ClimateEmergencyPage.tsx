import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import { ExploreMoreStats } from "@/components/ExploreMoreStats";
import { useBackendData } from "@/hooks/useBackendData";
import { Counter } from "@/components/Counter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ClimateEmergencyPage = () => {
  const { data, isLoading } = useBackendData<any>("climate-emergency");

  return (
    <>
      <MetaTags
        title="Climate Emergency Data 2025 — Methane Levels, Progress Tracking & Global Targets"
        description="Track 2025 climate emergency metrics including methane emissions, environmental commitments, and global progress milestones."
        keywords="climate emergency, methane emissions, global warming, 2025, environmental data"
        canonical={`${window.location.origin}/climate-emergency`}
      />
      <Navigation />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Environment", path: "/environment" }, { label: "Climate Emergency" }]} />
          <h1 className="text-3xl font-bold gradient-text mb-8">Climate Emergency Metrics (2025) — Emissions, Global Progress & Environmental Targets</h1>
          {isLoading ? <p>Loading...</p> : data && (
            <Card><CardHeader><CardTitle>Methane Emissions This Year</CardTitle></CardHeader><CardContent><Counter value={data.methaneEmissions.thisYear} className="text-2xl font-bold" /></CardContent></Card>
          )}
          <ShareButtons title="Climate Emergency 2025" description="Track global climate metrics" />
          <ExploreMoreStats currentPath="/climate-emergency" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ClimateEmergencyPage;
