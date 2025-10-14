import { Counter } from "./Counter";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  color: string;
  subtitle?: string;
  increment?: number;
}

export const StatCard = ({ label, value, icon: Icon, color, subtitle, increment }: StatCardProps) => {
  return (
    <div className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 overflow-hidden">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, transparent 100%)`
        }}
      />
      
      <div className="relative z-10 flex items-start gap-4">
        <div 
          className="p-3 rounded-xl shrink-0"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <div className="flex items-baseline gap-2">
            <Counter 
              value={value} 
              className="text-2xl md:text-3xl font-bold text-foreground"
            />
            {increment && (
              <span className="text-xs text-muted-foreground">
                +{increment.toLocaleString()}/s
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};
