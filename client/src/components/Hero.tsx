import { useState, useEffect } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          filter: "brightness(0.7)"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(var(--charcoal))/70]"></div>
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className={`font-roboto-slab text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--cream))] mb-4 transition-all duration-700 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Reddirtwood
          </h1>
          <div 
            className={`w-24 h-1 bg-[hsl(var(--reddirt-medium))] mx-auto mb-6 transition-all duration-700 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          ></div>
          <p 
            className={`font-marker text-2xl md:text-3xl text-[hsl(var(--cream))] mb-10 transition-all duration-700 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            Handcrafted in Eufaula, OK
          </p>
          <a 
            href="#products" 
            className={`inline-block bg-[hsl(var(--wood-dark))] hover:bg-[hsl(var(--wood-medium))] text-[hsl(var(--cream))] font-medium rounded-md px-6 py-3 mt-6 transition-all duration-700 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            Explore Our Crafts
          </a>
        </div>
      </div>
    </section>
  );
}
