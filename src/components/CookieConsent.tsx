import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

export const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-in-right">
      <Card className="max-w-4xl mx-auto border-border bg-card shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">
                We Value Your Privacy
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                We use essential cookies to ensure our website functions properly and analytics cookies to understand how you interact with our site. 
                Your data is processed in accordance with GDPR and CCPA regulations. 
                <a href="/privacy" className="text-primary hover:underline ml-1">
                  Learn more in our Privacy Policy
                </a>
              </p>
              <div className="flex gap-3">
                <Button onClick={acceptCookies} size="sm">
                  Accept All
                </Button>
                <Button onClick={declineCookies} variant="outline" size="sm">
                  Essential Only
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={declineCookies}
              className="shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
