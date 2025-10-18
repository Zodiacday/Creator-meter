import { ReactNode } from "react";
import { ExpandableInfo } from "./ExpandableInfo";
import { QuickFacts } from "./QuickFacts";
import { SourceCitation } from "./SourceCitation";

interface Source {
  name: string;
  url: string;
  organization: string;
}

interface CategorySectionEnhancedProps {
  title: string;
  icon: ReactNode;
  color: string;
  children: ReactNode;
  description?: string;
  quickFacts?: string[];
  sources?: Source[];
  expandableContent?: {
    title: string;
    content: ReactNode;
  }[];
}

export const CategorySectionEnhanced = ({
  title,
  icon,
  color,
  children,
  description,
  quickFacts,
  sources,
  expandableContent
}: CategorySectionEnhancedProps) => {
  return (
    <section className="mb-12 md:mb-16 animate-fade-in">
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-3 rounded-xl"
            style={{ backgroundColor: `${color}20` }}
          >
            <div style={{ color }}>{icon}</div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
        </div>
        
        {description && (
          <p className="text-muted-foreground text-sm md:text-base mb-4">{description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
        {children}
      </div>

      {quickFacts && quickFacts.length > 0 && (
        <div className="mb-4">
          <QuickFacts facts={quickFacts} />
        </div>
      )}

      {expandableContent && expandableContent.length > 0 && (
        <div className="space-y-3 mb-4">
          {expandableContent.map((item, index) => (
            <ExpandableInfo key={index} title={item.title}>
              {item.content}
            </ExpandableInfo>
          ))}
        </div>
      )}

      {sources && sources.length > 0 && (
        <SourceCitation sources={sources} />
      )}
    </section>
  );
};
