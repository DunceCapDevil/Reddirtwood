import { useScrollReveal } from "../hooks/useScrollReveal";
import { Check } from "lucide-react";

export function About() {
  const { ref } = useScrollReveal();

  return (
    <section 
      id="about" 
      className="py-16 md:py-24 bg-[hsl(var(--cream))] opacity-0 transform translate-y-5 transition-all duration-700" 
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Craftsman working with wood" 
              className="rounded-lg shadow-xl object-cover h-96 w-full" 
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-roboto-slab font-bold text-[hsl(var(--wood-dark))] mb-6">
              Crafted with Passion
            </h2>
            <p className="text-[hsl(var(--charcoal))] text-lg mb-8 leading-relaxed">
              At Reddirtwood, every piece tells a story. Nestled in the heart of Eufaula, Oklahoma, we handcraft functional works of art from locally sourced woods, with a special focus on the native Osage orange.
            </p>
            <p className="text-[hsl(var(--charcoal))] text-lg mb-8 leading-relaxed">
              Each bow stave, walking stick, and handmade item receives our undivided attention. We honor traditional woodworking methods while adding our own modern twist to create pieces that will last for generations.
            </p>
            <div className="flex flex-wrap gap-4">
              <FeatureCheck text="100% Handcrafted" />
              <FeatureCheck text="Locally Sourced Wood" />
              <FeatureCheck text="Sustainable Practices" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCheck({ text }: { text: string }) {
  return (
    <div className="flex items-center">
      <div className="bg-[hsl(var(--forest-medium))] rounded-full p-2 mr-4 flex items-center justify-center">
        <Check className="h-5 w-5 text-[hsl(var(--cream))]" />
      </div>
      <span className="text-[hsl(var(--charcoal))] font-medium">{text}</span>
    </div>
  );
}
