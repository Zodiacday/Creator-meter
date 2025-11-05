import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause } from "lucide-react";

interface TimelineSliderProps {
  onYearChange: (year: number) => void;
  minYear?: number;
  maxYear?: number;
}

export const TimelineSlider = ({ 
  onYearChange, 
  minYear = 1950, 
  maxYear = 2050 
}: TimelineSliderProps) => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleYearChange = (value: number[]) => {
    const newYear = value[0];
    setYear(newYear);
    onYearChange(newYear);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // TODO: Implement auto-play animation
  };

  const milestones = [
    { year: 1950, label: "Post-War Era" },
    { year: 2000, label: "Millennium" },
    { year: 2024, label: "Today" },
    { year: 2050, label: "Projection" },
  ];

  return (
    <Card className="border-border bg-card/50">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">
              Historical Timeline
            </h3>
            <Button
              variant="outline"
              size="icon"
              onClick={togglePlay}
              className="h-8 w-8"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </div>

          <div className="space-y-2">
            <Slider
              value={[year]}
              onValueChange={handleYearChange}
              min={minYear}
              max={maxYear}
              step={1}
              className="w-full"
            />
            
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{minYear}</span>
              <span className="text-lg font-bold text-primary">{year}</span>
              <span>{maxYear}</span>
            </div>
          </div>

          <div className="flex justify-between pt-2">
            {milestones.map((milestone) => (
              <button
                key={milestone.year}
                onClick={() => handleYearChange([milestone.year])}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="font-semibold">{milestone.year}</div>
                <div>{milestone.label}</div>
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
