import { useScrollReveal } from "../hooks/useScrollReveal";
import { products } from "../lib/data";

export function Products() {
  const { ref } = useScrollReveal();

  return (
    <section 
      id="products" 
      className="py-16 md:py-24 bg-[hsl(var(--cream))] opacity-0 transform translate-y-5 transition-all duration-700" 
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-roboto-slab font-bold text-[hsl(var(--wood-dark))] mb-4">
            Our Handcrafted Products
          </h2>
          <p className="text-[hsl(var(--charcoal))] text-lg max-w-3xl mx-auto">
            Each piece is carefully crafted by hand, combining traditional techniques with wood's natural character.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.etsy.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[hsl(var(--reddirt-medium))] hover:bg-[hsl(var(--reddirt-dark))] text-[hsl(var(--cream))] font-medium rounded-md px-6 py-3 transition duration-300 ease-in-out"
          >
            View All Products on Etsy
          </a>
        </div>
      </div>
    </section>
  );
}

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-xl">
      <img 
        src={product.image} 
        alt={product.name} 
        className="h-64 w-full object-cover" 
      />
      <div className="p-6">
        <h3 className="text-xl font-roboto-slab font-bold text-[hsl(var(--wood-dark))] mb-2">{product.name}</h3>
        <p className="text-[hsl(var(--charcoal))] mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-[hsl(var(--wood-dark))]">{product.price}</span>
          <a 
            href="https://www.etsy.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[hsl(var(--forest-medium))] hover:bg-[hsl(var(--forest-dark))] text-[hsl(var(--cream))] font-medium rounded-md px-4 py-2 text-sm transition duration-300 ease-in-out"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
