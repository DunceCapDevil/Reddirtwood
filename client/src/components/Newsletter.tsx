import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const { ref } = useScrollReveal();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real application, this would connect to an API
    toast({
      title: "Thank you for subscribing!",
      description: "You've been added to our newsletter.",
    });
    
    setEmail("");
  };

  return (
    <section 
      className="py-12 bg-[hsl(var(--wood-dark))] opacity-0 transform translate-y-5 transition-all duration-700" 
      ref={ref}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-roboto-slab font-bold text-[hsl(var(--cream))] mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-[hsl(var(--wood-light))] mb-8">
          Stay updated with new products, special offers, and woodworking tips.
        </p>
        <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubscribe}>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address" 
            className="flex-1 p-3 rounded-md text-[hsl(var(--charcoal))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--reddirt-medium))]" 
          />
          <button 
            type="submit" 
            className="bg-[hsl(var(--reddirt-medium))] hover:bg-[hsl(var(--reddirt-dark))] text-[hsl(var(--cream))] font-medium rounded-md px-6 py-3 transition duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
        <p className="text-[hsl(var(--wood-light))] text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
