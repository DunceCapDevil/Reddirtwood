import { useScrollReveal } from "../hooks/useScrollReveal";
import { testimonials } from "../lib/data";
import { Star } from "lucide-react";

export function Testimonials() {
  const { ref } = useScrollReveal();

  return (
    <section 
      className="py-16 bg-[hsl(var(--wood-light))] opacity-0 transform translate-y-5 transition-all duration-700" 
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-roboto-slab font-bold text-[hsl(var(--wood-dark))] mb-4">
            Customer Testimonials
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--reddirt-medium))] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Testimonial {
  text: string;
  author: string;
  title: string;
  rating: number;
  initial: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex mb-4">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star 
            key={index} 
            className="w-5 h-5 text-[hsl(var(--reddirt-medium))]" 
            fill="currentColor" 
          />
        ))}
      </div>
      <p className="text-[hsl(var(--charcoal))] mb-4 italic">{testimonial.text}</p>
      <div className="flex items-center">
        <div className="rounded-full bg-[hsl(var(--forest-light))] w-10 h-10 flex items-center justify-center text-[hsl(var(--cream))] font-bold">
          {testimonial.initial}
        </div>
        <div className="ml-3">
          <h4 className="font-medium text-[hsl(var(--wood-dark))]">{testimonial.author}</h4>
          <p className="text-sm text-[hsl(var(--charcoal))]">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}
