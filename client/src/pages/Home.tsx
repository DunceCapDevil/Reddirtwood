import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { PromoBar } from "../components/PromoBar";
import { About } from "../components/About";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { Products } from "../components/Products";
import { Testimonials } from "../components/Testimonials";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-cream">
      <Navbar />
      <Hero />
      <PromoBar />
      <About />
      <FeaturedProduct />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
