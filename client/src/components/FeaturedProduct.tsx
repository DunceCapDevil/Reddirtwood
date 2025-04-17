import { useScrollReveal } from "../hooks/useScrollReveal";
import { Star } from "lucide-react";

export function FeaturedProduct() {
  const { ref } = useScrollReveal();

  return (
    <section 
      className="py-16 bg-cover bg-center relative opacity-0 transform translate-y-5 transition-all duration-700" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610459716431-e07abffa9c91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-[hsl(var(--charcoal))/60]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="text-[hsl(var(--cream))] font-marker text-lg">Featured Item</span>
          <h2 className="text-3xl md:text-4xl font-roboto-slab font-bold text-[hsl(var(--cream))] mt-2">
            Wood of the Month
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--reddirt-medium))] mx-auto mt-4"></div>
        </div>
        
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          <div className="mb-8 md:mb-0">
            <img 
              src="https://unsplash.com/photos/brown-wood-log-lot-6yelWDI3RE8" 
              alt="Osage Orange Bow Stave" 
              className="rounded-lg shadow-2xl object-cover h-96 w-full" 
            />
          </div>
          <div className="bg-[hsl(var(--cream))/90] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-roboto-slab font-bold text-[hsl(var(--wood-dark))] mb-4">
              Osage Orange Bow Stave
            </h3>
            <p className="text-[hsl(var(--charcoal))] mb-6 leading-relaxed">
              The crown jewel of our collection. Osage orange (Maclura pomifera) is prized by traditional bow makers for its exceptional strength, flexibility, and natural resistance to the elements. Each stave is carefully selected, cut, and aged to perfection.
            </p>
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-sm text-[hsl(var(--forest-dark))] font-medium">Premium Quality</span>
                <p className="text-2xl font-roboto-slab font-bold text-[hsl(var(--wood-dark))]">$89.99</p>
              </div>
              <a 
                href="https://www.etsy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[hsl(var(--reddirt-medium))] hover:bg-[hsl(var(--reddirt-dark))] text-[hsl(var(--cream))] font-medium rounded-md px-6 py-3 transition duration-300 ease-in-out"
              >
                Shop Now
              </a>
            </div>
            <div className="border-t border-[hsl(var(--wood-light))] pt-4">
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <Star 
                      key={index} 
                      className="w-5 h-5 text-[hsl(var(--reddirt-medium))]" 
                      fill="currentColor" 
                    />
                  ))}
                </div>
                <span className="ml-2 text-[hsl(var(--charcoal))]">4.9 (98 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
