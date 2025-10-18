import { ExternalLink, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Source {
  name: string;
  url: string;
  organization: string;
}

interface SourceCitationProps {
  sources: Source[];
}

export const SourceCitation = ({ sources }: SourceCitationProps) => {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
          <div className="space-y-2 flex-1">
            <h4 className="font-semibold text-sm text-foreground">Sources:</h4>
            <ul className="space-y-2">
              {sources.map((source, index) => (
                <li key={index}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm text-primary hover:text-primary/80 transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>
                      <span className="font-medium">{source.name}</span>
                      <span className="text-muted-foreground"> - {source.organization}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
