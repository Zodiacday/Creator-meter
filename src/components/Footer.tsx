import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-xl py-6 md:py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* About Section */}
          <div>
            <h3 className="text-sm font-semibold mb-3 gradient-text">CreatorMeter</h3>
            <p className="text-xs text-muted-foreground">
              Real-time global data visualization platform presenting continuously updating statistics about the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Contact</h3>
            <p className="text-xs text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:Asteriuselos@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                Asteriuselos@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground mb-2">
            Data sources: United Nations, World Health Organization, International Energy Agency, and more
          </p>
          <p className="text-xs text-muted-foreground">
            Statistics are updated in real-time based on the latest available data
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} CreatorMeter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
