import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { exportToCSV, exportToJSON } from "@/utils/exportData";

interface ExportButtonProps<T> {
  data: T[];
  filename: string;
  columns?: { key: string; label: string }[];
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export function ExportButton<T extends Record<string, any>>({
  data,
  filename,
  columns,
  variant = "default",
  size = "default"
}: ExportButtonProps<T>) {
  const handleExportCSV = () => {
    exportToCSV(data, filename, columns);
  };

  const handleExportJSON = () => {
    exportToJSON(data, filename);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant={variant} 
          size={size} 
          className="gap-2 shadow-lg hover:shadow-xl transition-shadow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          <Download className="h-5 w-5" />
          <span className="hidden sm:inline">Export Data</span>
          <span className="sm:hidden">Export</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={handleExportCSV} className="cursor-pointer">
          <Download className="h-4 w-4 mr-2" />
          Export as CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleExportJSON} className="cursor-pointer">
          <Download className="h-4 w-4 mr-2" />
          Export as JSON
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
