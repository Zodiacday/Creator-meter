"use client";
import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export const BackButton = ({ className = "" }: { className?: string }) => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const goBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={goBack}
      aria-label="Go back"
      className={`inline-flex items-center justify-center w-9 h-9 rounded-md border border-border bg-card text-foreground hover:bg-opacity-95 transition-colors ${className}`}
    >
      <ChevronLeft className="w-4 h-4" />
    </button>
  );
};

export default BackButton;
