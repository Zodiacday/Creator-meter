import { Navigation } from "@/components/Navigation";
import { Apple } from "lucide-react";

const FoodAgriculturePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--food))]/20">
            <Apple className="w-8 h-8 text-[hsl(var(--food))]" />
          </div>
          <h1 className="text-4xl font-bold gradient-text">Food & Agriculture</h1>
        </div>
        <p className="text-muted-foreground">Global food production, hunger, malnutrition, and crop statistics.</p>
      </div>
    </div>
  );
};

export default FoodAgriculturePage;
