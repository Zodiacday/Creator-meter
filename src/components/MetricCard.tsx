"use client";
import Link from "next/link";
import { Counter } from "./Counter";
import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface MetricCardProps {
  title: string;
  value?: number;
  staticValue?: string;
  subtitle: string;
  icon: LucideIcon;
  link: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  staticValue,
  subtitle, 
  icon: Icon, 
  link,
  gradientFrom = "from-primary",
  gradientTo = "to-primary/60"
}: MetricCardProps) => {
  // Convert a Tailwind "from-xxx" token into a solid background class like "bg-xxx"
  const iconBgClass = gradientFrom.startsWith("from-") ? gradientFrom.replace("from-", "bg-") : gradientFrom;

  return (
    <Link
      href={link}
      className="group relative block p-6 rounded-xl bg-card border border-border hover:brightness-105 transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="flex flex-col gap-4">
        {/* Header row: icon inline with title */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center justify-center w-8 h-8 rounded-md ${iconBgClass}`}> 
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            {title}
          </h3>
        </div>

        {/* Counter or Static Value (larger) */}
        <div className="text-4xl font-bold text-foreground">
          {value !== undefined ? (
            <Counter value={value} />
          ) : (
            staticValue || "—"
          )}
        </div>

        {/* Subtitle */}
        <p className="text-sm text-muted-foreground">
          {subtitle}
        </p>

        {/* Get More Details Indicator */}
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground dark:text-[rgba(255,255,255,0.8)] group-hover:gap-3 transition-all duration-300">
          <span>GET MORE DETAILS</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};
