import { Navigation } from "@/components/Navigation";
import { Activity } from "lucide-react";

const CoronavirusPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--health))]/20">
            <Activity className="w-8 h-8 text-[hsl(var(--health))]" />
          </div>
          <h1 className="text-4xl font-bold gradient-text">Coronavirus</h1>
        </div>
        <p className="text-muted-foreground">COVID-19 cases, deaths, recoveries, age/sex breakdowns, and trends.</p>
      </div>
    </div>
  );
};

export default CoronavirusPage;
