import { Navigation } from "@/components/Navigation";
import { Cloud } from "lucide-react";

const Co2EmissionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--environment))]/20">
            <Cloud className="w-8 h-8 text-[hsl(var(--environment))]" />
          </div>
          <h1 className="text-4xl font-bold gradient-text">CO₂ Emissions</h1>
        </div>
        <p className="text-muted-foreground">Global carbon dioxide emissions, trends, and historical data.</p>
      </div>
    </div>
  );
};

export default Co2EmissionsPage;
