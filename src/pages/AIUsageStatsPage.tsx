import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import { ExploreMoreStats } from "@/components/ExploreMoreStats";
import { useBackendData } from "@/hooks/useBackendData";
import { Counter } from "@/components/Counter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AIUsageStatsPage = () => {
  const { data, isLoading } = useBackendData<any>("ai-usage-stats");

  return (
    <>
      <MetaTags
        title="AI Usage Statistics 2025 — Global Adoption Rates, Workforce Impact & Trends"
        description="See how AI adoption grew in 2025. Explore usage trends, workforce transformation data, and industry-wide adoption metrics."
        keywords="AI statistics, artificial intelligence, adoption rates, workforce impact, 2025"
        canonical={`${window.location.origin}/data/ai-usage-statistics-2025`}
      />
      <Navigation />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Technology", path: "/society" }, { label: "AI Usage Statistics" }]} />
          <h1 className="text-3xl font-bold gradient-text mb-8">Global AI Usage Statistics (2025) — Adoption Rates, Workforce Trends & Industry Impact</h1>
          {isLoading ? <p>Loading...</p> : data && (
            <Card><CardHeader><CardTitle>Total AI Users</CardTitle></CardHeader><CardContent><Counter value={data.globalAdoption.totalUsers} className="text-2xl font-bold" /></CardContent></Card>
          )}
          <ShareButtons title="AI Usage Statistics 2025" description="Global AI adoption data" />
          <ExploreMoreStats currentPath="/data/ai-usage-statistics-2025" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AIUsageStatsPage;