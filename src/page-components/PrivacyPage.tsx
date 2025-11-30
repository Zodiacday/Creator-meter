"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">Privacy Policy</h1>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            Effective Date: January 2025
          </p>

          {/* Content Sections */}
          <div className="space-y-8">
            <section className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-6">
              <p className="text-foreground leading-relaxed">
                At CreatorMeter, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
              </p>
            </section>

            <section className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">1. Data We Collect</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">Analytics data:</span>
                  <span>We use tools like Google Analytics or similar to track anonymous visitor statistics (e.g., page visits, duration, referrer).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">Cookies:</span>
                  <span>Used only to improve site performance and ad personalization (via Google AdSense).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">Contact Form Submissions:</span>
                  <span>If you contact us, we collect your name, email, and message content for support purposes only.</span>
                </li>
              </ul>
            </section>

            <section className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">2. How We Use Data</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To improve site performance and user experience.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To show relevant ads (Google AdSense).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To respond to user inquiries.</span>
                </li>
              </ul>
            </section>

            <section className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">3. Third-Party Services</h2>
              <p className="text-muted-foreground mb-3">
                <span className="font-semibold text-foreground">Google Analytics & AdSense:</span> Track website performance and display personalized ads.
              </p>
              <p className="text-muted-foreground">
                These services may use cookies and tracking technologies in accordance with their own privacy policies.
              </p>
            </section>

            <section className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">4. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain analytics data for internal reporting only. Contact form submissions are deleted within 90 days after resolution.
              </p>
            </section>

            <section className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">5. Your Rights</h2>
              <p className="text-muted-foreground">
                You can disable cookies via your browser or opt out of personalized ads via{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Ad Settings
                </a>
                .
              </p>
            </section>

            <section className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">6. Contact</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please email us at{" "}
                <a
                  href="mailto:Asteriuselos@gmail.com"
                  className="text-primary hover:underline"
                >
                  Asteriuselos@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
