import { Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface QuickFactsProps {
  facts: string[];
}

export const QuickFacts = ({ facts }: QuickFactsProps) => {
  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-foreground">Quick Facts:</h4>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {facts.map((fact, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
