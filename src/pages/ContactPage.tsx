import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">Contact CreatorMeter</h1>
          </div>

          <p className="text-lg text-muted-foreground mb-12">
            We'd love to hear from you.
          </p>

          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2 text-foreground">General Inquiries</h2>
                  <p className="text-muted-foreground mb-4">
                    For general questions, feedback, or support
                  </p>
                  <Button asChild variant="outline">
                    <a href="mailto:Asteriuselos@gmail.com">
                      Email: Asteriuselos@gmail.com
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2 text-foreground">Media & Data Inquiries</h2>
                  <p className="text-muted-foreground mb-4">
                    For media requests, partnerships, or data-related questions
                  </p>
                  <Button asChild variant="outline">
                    <a href="mailto:Asteriuselos@gmail.com">
                      Email: Asteriuselos@gmail.com
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-6 border-l-4 border-l-primary/50">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Response Time</h3>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within 2-3 business days. Thank you for your patience.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
