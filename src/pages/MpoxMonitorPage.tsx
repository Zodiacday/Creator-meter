import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import { ExploreMoreStats } from "@/components/ExploreMoreStats";
import { useBackendData } from "@/hooks/useBackendData";
import { Counter } from "@/components/Counter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MpoxMonitorPage = () => {
  const { data, isLoading } = useBackendData<any>("mpox-monitor");

  return (
    <>
      <MetaTags
        title="Mpox (Monkeypox) Global Tracker 2025 — Case Data & New Strains"
        description="Track global Mpox data in 2025, including case numbers, emerging strains, outbreak regions, and transmission patterns."
        keywords="mpox, monkeypox, outbreak tracker, 2025, global health"
        canonical={`${window.location.origin}/mpox-monitor`}
      />
      <Navigation />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Health", path: "/health" }, { label: "Mpox Monitor" }]} />
          <h1 className="text-3xl font-bold gradient-text mb-8">Mpox (Monkeypox) Global Outbreak Tracker — 2025 Case Data & Emerging Strains</h1>
          {isLoading ? <p>Loading...</p> : data && (
            <div className="grid gap-6">
              <Card><CardHeader><CardTitle>Total Cases</CardTitle></CardHeader><CardContent><Counter value={data.totalGlobalCases} className="text-2xl font-bold" /></CardContent></Card>
            </div>
          )}
          <ShareButtons title="Mpox Monitor 2025" description="Track global Mpox data" />
          <ExploreMoreStats currentPath="/mpox-monitor" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MpoxMonitorPage;
