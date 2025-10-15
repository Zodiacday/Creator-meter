import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ChartCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  children: React.ReactNode;
}

export const ChartCard = ({ title, icon: Icon, color, children }: ChartCardProps) => {
  return (
    <Card className="border-border hover:border-primary/50 transition-all duration-300 animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div 
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
          <span className="text-lg">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};