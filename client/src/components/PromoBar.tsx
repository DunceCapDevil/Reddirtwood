import { useEffect, useState } from "react";

export function PromoBar() {
  const [isPulsing, setIsPulsing] = useState(false);
  
  useEffect(() => {
    // Start pulsing animation after initial render
    setIsPulsing(true);
  }, []);

  return (
    <section className="bg-[hsl(var(--reddirt-medium))] py-3 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <div 
            className={`bg-[hsl(var(--cream))] text-[hsl(var(--reddirt-dark))] font-roboto-slab font-bold px-4 py-2 rounded-full mb-3 md:mb-0 md:mr-6 ${
              isPulsing ? 'animate-pulse' : ''
            }`}
          >
            FREE SHIPPING
          </div>
          <p className="text-[hsl(var(--cream))] font-medium text-base md:text-lg">
            Use code <span className="font-bold tracking-wider">FREESHIPOK</span> at checkout for free shipping on all orders!
          </p>
        </div>
      </div>
    </section>
  );
}
