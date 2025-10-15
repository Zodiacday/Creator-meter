import { Navigation } from "@/components/Navigation";
import { Map } from "lucide-react";

const WorldMapPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--primary))]/20">
            <Map className="w-8 h-8 text-[hsl(var(--primary))]" />
          </div>
          <h1 className="text-4xl font-bold gradient-text">World Map</h1>
        </div>
        <p className="text-muted-foreground">Interactive map displaying various statistics by country/region.</p>
      </div>
    </div>
  );
};

export default WorldMapPage;
