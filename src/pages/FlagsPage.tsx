import { Navigation } from "@/components/Navigation";
import { Flag } from "lucide-react";

const FlagsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--primary))]/20">
            <Flag className="w-8 h-8 text-[hsl(var(--primary))]" />
          </div>
          <h1 className="text-4xl font-bold gradient-text">Flags</h1>
        </div>
        <p className="text-muted-foreground">Visual flag charts and country details.</p>
      </div>
    </div>
  );
};

export default FlagsPage;
