import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MetricTooltipProps {
  title: string;
  description: string;
  source: string;
  lastUpdated?: string;
}

export const MetricTooltip = ({ title, description, source, lastUpdated }: MetricTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            <Info className="w-4 h-4" />
            <span className="text-xs">About this metric</span>
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm p-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{title}</h4>
            <p className="text-xs text-muted-foreground">{description}</p>
            <div className="pt-2 border-t border-border text-xs space-y-1">
              <p><span className="font-medium">Source:</span> {source}</p>
              {lastUpdated && (
                <p><span className="font-medium">Last updated:</span> {lastUpdated}</p>
              )}
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
