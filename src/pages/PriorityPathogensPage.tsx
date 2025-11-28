import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import { ExploreMoreStats } from "@/components/ExploreMoreStats";
import { useBackendData } from "@/hooks/useBackendData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PriorityPathogensPage = () => {
  const { data, isLoading } = useBackendData<any>("priority-pathogens");

  return (
    <>
      <MetaTags
        title="Priority Pathogens List (2025) — Disease X & High-Risk Threats"
        description="Explore the updated 2025 Priority Pathogens List, including emerging threats, Disease X preparedness, and high-risk pathogens."
        keywords="priority pathogens, Disease X, WHO, pandemic preparedness, 2025"
        canonical={`${window.location.origin}/data/priority-pathogens-2025`}
      />
      <Navigation />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Health", path: "/health" }, { label: "Priority Pathogens" }]} />
          <h1 className="text-3xl font-bold gradient-text mb-8">Priority Pathogens List — 2025 Update (Including Disease X)</h1>
          {isLoading ? <p>Loading...</p> : data && (
            <Card><CardHeader><CardTitle>Total Pathogens Tracked</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{data.totalPathogens}</p></CardContent></Card>
          )}
          <ShareButtons title="Priority Pathogens 2025" description="WHO priority pathogens list" />
          <ExploreMoreStats currentPath="/data/priority-pathogens-2025" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PriorityPathogensPage;