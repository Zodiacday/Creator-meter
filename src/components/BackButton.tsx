import { ChevronLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const BackButton = ({ className = "" }: { className?: string }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") return null;

  const goBack = () => {
    navigate(-1);
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
