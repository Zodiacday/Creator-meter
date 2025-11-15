import { Link } from "react-router-dom";
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
  return (
    <Link 
      to={link}
      className="group relative block p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-elegant"
    >
      <div className="flex flex-col gap-4">
        {/* Icon with gradient background */}
        <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground">
          {title}
        </h3>

        {/* Counter or Static Value */}
        <div className="text-3xl font-bold gradient-text">
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
        <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
          <span>GET MORE DETAILS</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};
