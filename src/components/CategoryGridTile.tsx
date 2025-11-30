"use client";
import { useState } from "react";
import { LucideIcon, ChevronDown } from "lucide-react";
import { Counter } from "./Counter";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { QuickFacts } from "./QuickFacts";
import { ExpandableInfo } from "./ExpandableInfo";
import { SourceCitation } from "./SourceCitation";

interface CategoryGridTileProps {
  icon: LucideIcon;
  title: string;
  color: string;
  representativeCounter: {
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
  };
  expandedContent?: {
    additionalStats?: Array<{
      label: string;
      value: number;
      suffix?: string;
      prefix?: string;
    }>;
    quickFacts?: string[];
    expandableInfo?: Array<{ title: string; children: React.ReactNode }>;
    sources?: Array<{ name: string; url: string; organization: string }>;
  };
  isOpen: boolean;
  onToggle: () => void;
  detailPageLink?: string;
}

export const CategoryGridTile = ({
  icon: Icon,
  title,
  color,
  representativeCounter,
  expandedContent,
  isOpen,
  onToggle,
  detailPageLink
}: CategoryGridTileProps) => {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <div 
        className={cn(
          "group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300",
          isOpen ? "shadow-xl" : "shadow-sm hover:shadow-md"
        )}
      >
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, transparent 100%)`
          }}
        />
        
        {/* Main Content */}
        <CollapsibleTrigger className="w-full text-left p-6 cursor-pointer">
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div 
                  className="p-2.5 rounded-xl"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
              </div>
              <ChevronDown 
                className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </div>
            
            {/* Representative Counter */}
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">{representativeCounter.label}</p>
              <div className="flex items-baseline gap-2">
                {representativeCounter.prefix && (
                  <span className="text-2xl font-bold text-foreground">{representativeCounter.prefix}</span>
                )}
                <Counter 
                  value={representativeCounter.value} 
                  className="text-2xl font-bold text-foreground"
                />
                {representativeCounter.suffix && (
                  <span className="text-lg font-bold text-foreground">{representativeCounter.suffix}</span>
                )}
              </div>
            </div>
          </div>
        </CollapsibleTrigger>

        {/* Expanded Content */}
        <CollapsibleContent>
          <div className="px-6 pb-6 space-y-4 border-t border-border/50 pt-4">
            {/* Additional Stats */}
            {expandedContent?.additionalStats && (
              <div className="grid grid-cols-1 gap-3">
                {expandedContent.additionalStats.map((stat, idx) => (
                  <div key={idx} className="flex justify-between items-baseline p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <div className="flex items-baseline gap-1">
                      {stat.prefix && <span className="text-sm font-semibold">{stat.prefix}</span>}
                      <Counter value={stat.value} className="text-sm font-semibold text-foreground" />
                      {stat.suffix && <span className="text-sm font-semibold">{stat.suffix}</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quick Facts */}
            {expandedContent?.quickFacts && (
              <QuickFacts facts={expandedContent.quickFacts} />
            )}

            {/* Expandable Info */}
            {expandedContent?.expandableInfo && (
              <div className="space-y-2">
                {expandedContent.expandableInfo.map((info, idx) => (
                  <ExpandableInfo key={idx} title={info.title}>
                    {info.children}
                  </ExpandableInfo>
                ))}
              </div>
            )}

            {/* Sources */}
            {expandedContent?.sources && (
              <SourceCitation sources={expandedContent.sources} />
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};
