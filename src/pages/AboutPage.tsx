import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Info } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <Info className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">About CreatorMeter</h1>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <section className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-6">
              <p className="text-foreground leading-relaxed">
                CreatorMeter is a real-time global data visualization platform that presents continuously updating statistics about the world.
                Our mission is to make complex data understandable, engaging, and visually beautiful — allowing anyone to grasp the world's key trends in population, environment, health, energy, and more.
              </p>
            </section>

            <section className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">What We Do</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>We aggregate and visualize publicly available statistics and projections from verified international organizations and open datasets.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Our counters simulate real-time updates using dynamic modeling and estimation formulas based on the most recent annual data, similar to Worldometer's approach.</span>
                </li>
              </ul>
            </section>

            <section className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Our Goal</h2>
              <p className="text-muted-foreground leading-relaxed">
                To make data more human — turning numbers into stories. CreatorMeter is built for those who want to understand how fast the world moves, one counter at a time.
              </p>
            </section>

            <section className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-6 border-l-4 border-l-primary/50">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Disclaimer</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>All statistics are based on the latest known data and real-time projections.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>While we strive for accuracy, our numbers are estimates and should not be used for legal, financial, or medical decision-making.</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
