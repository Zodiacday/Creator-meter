import { Users2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CategorySection } from "@/components/CategorySection";
import { StatCard } from "@/components/StatCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";

const SocietyPage = () => {
  const booksPublished = useRealtimeCounter({ initialValue: 2200000, incrementPerSecond: 0.07 });
  const newspapersCirculated = useRealtimeCounter({ initialValue: 456000000000, incrementPerSecond: 14462 });
  const tvsSold = useRealtimeCounter({ initialValue: 270000000, incrementPerSecond: 8.56 });
  const mobilePhonesSold = useRealtimeCounter({ initialValue: 1500000000, incrementPerSecond: 47.55 });
  const videogamesSold = useRealtimeCounter({ initialValue: 380000000, incrementPerSecond: 12.05 });
  const internetUsers = useRealtimeCounter({ initialValue: 5300000000, incrementPerSecond: 168.03 });
  const emailsSent = useRealtimeCounter({ initialValue: 333000000000000, incrementPerSecond: 10558659 });
  const blogPosts = useRealtimeCounter({ initialValue: 6000000000, incrementPerSecond: 190.26 });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <Link to="/" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Society & Media</h1>
            <p className="text-muted-foreground text-sm md:text-base">Digital and traditional media consumption worldwide</p>
          </div>

          <CategorySection
            title="Society & Media"
            icon={<Users2 className="w-6 h-6" />}
            color="hsl(var(--society))"
          >
            <StatCard
              icon={Users2}
              label="New book titles published"
              value={booksPublished}
              color="hsl(var(--society))"
              increment={0}
            />
            <StatCard
              icon={Users2}
              label="Newspapers circulated"
              value={newspapersCirculated}
              color="hsl(var(--society))"
              increment={14462}
            />
            <StatCard
              icon={Users2}
              label="TV sets sold"
              value={tvsSold}
              color="hsl(var(--society))"
              increment={9}
            />
            <StatCard
              icon={Users2}
              label="Mobile phones sold"
              value={mobilePhonesSold}
              color="hsl(var(--society))"
              increment={48}
            />
            <StatCard
              icon={Users2}
              label="Video games sold"
              value={videogamesSold}
              color="hsl(var(--society))"
              increment={12}
            />
            <StatCard
              icon={Users2}
              label="Internet users"
              value={internetUsers}
              color="hsl(var(--society))"
              increment={168}
            />
            <StatCard
              icon={Users2}
              label="Emails sent"
              value={emailsSent}
              color="hsl(var(--society))"
              increment={10558659}
            />
            <StatCard
              icon={Users2}
              label="Blog posts written"
              value={blogPosts}
              color="hsl(var(--society))"
              increment={190}
            />
          </CategorySection>
        </div>
      </main>
    </div>
  );
};

export default SocietyPage;
