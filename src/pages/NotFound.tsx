import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { Button } from "@/components/ui/button";
import { Home, Search, TrendingUp, Globe } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <MetaTags
        title="404 - Page Not Found | CreatorMeter"
        description="The page you're looking for doesn't exist. Explore live global statistics on population, economy, environment, and more."
        canonical={`https://www.creatormeter.com${location.pathname}`}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-9xl font-bold text-primary">404</h1>
            <h2 className="mb-4 text-3xl font-semibold text-foreground">Page Not Found</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              The page you're looking for doesn't exist or may have been moved.
            </p>
            
            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go to Homepage
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/world-population-live">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Live Statistics
                </Link>
              </Button>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-4 flex items-center justify-center gap-2 text-xl font-semibold">
                <Globe className="h-6 w-6 text-primary" />
                Explore Popular Pages
              </h3>
              <div className="grid gap-3 text-left sm:grid-cols-2">
                <Link to="/world-population-live" className="text-primary hover:underline">
                  → World Population Live
                </Link>
                <Link to="/global-gdp-by-country" className="text-primary hover:underline">
                  → Global GDP by Country
                </Link>
                <Link to="/co2-emissions" className="text-primary hover:underline">
                  → CO2 Emissions
                </Link>
                <Link to="/compare" className="text-primary hover:underline">
                  → Compare Countries
                </Link>
                <Link to="/data-sources" className="text-primary hover:underline">
                  → Data Sources
                </Link>
                <Link to="/blog" className="text-primary hover:underline">
                  → Blog & Insights
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
