import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

export const NewsletterCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast.success("Thanks for subscribing! Check your email.");
    setEmail("");
  };

  return (
    <section className="py-12 animate-fade-in">
      <div className="bg-card border border-border rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Mail className="w-6 h-6 text-primary" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Get weekly data updates</h2>
        <p className="text-muted-foreground mb-6">Join 10,000+ readers tracking global trends</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="your@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};
