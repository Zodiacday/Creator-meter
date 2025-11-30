"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ExpandableInfoProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const ExpandableInfo = ({ title, children, defaultOpen = false }: ExpandableInfoProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Card className="border-border/50 hover:border-primary/30 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
      >
        <span className="text-sm font-medium text-foreground">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
      {isOpen && (
        <CardContent className="px-4 pb-4 pt-0 text-sm text-muted-foreground space-y-2 animate-fade-in">
          {children}
        </CardContent>
      )}
    </Card>
  );
};
