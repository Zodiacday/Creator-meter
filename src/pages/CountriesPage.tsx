import { Navigation } from "@/components/Navigation";
import { Globe } from "lucide-react";

const CountriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--population))]/20">
            <Globe className="w-8 h-8 text-[hsl(var(--population))]" />
          </div>
          <h1 className="text-4xl font-bold gradient-text">Countries</h1>
        </div>
        <p className="text-muted-foreground">Population rankings, historical population data, and regional classifications.</p>
      </div>
    </div>
  );
};

export default CountriesPage;
