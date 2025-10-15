import { Navigation } from "@/components/Navigation";
import { DollarSign } from "lucide-react";

const GdpPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--government))]/20">
            <DollarSign className="w-8 h-8 text-[hsl(var(--government))]" />
          </div>
          <h1 className="text-4xl font-bold gradient-text">GDP by Country</h1>
        </div>
        <p className="text-muted-foreground">Economic output of countries, GDP per capita, and growth trends.</p>
      </div>
    </div>
  );
};

export default GdpPage;
