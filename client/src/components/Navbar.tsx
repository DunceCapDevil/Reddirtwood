import { useState } from "react";
import { Link } from "wouter";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[hsl(var(--wood-dark))] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-marker text-[hsl(var(--cream))] text-2xl md:text-3xl">Reddirtwood</span>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <a 
                href="https://www.etsy.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[hsl(var(--reddirt-medium))] text-[hsl(var(--cream))] hover:bg-[hsl(var(--reddirt-dark))] px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                Shop on Etsy
              </a>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button 
              type="button" 
              className="text-[hsl(var(--cream))] hover:text-[hsl(var(--wood-light))] focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="#products" onClick={() => setIsMenuOpen(false)}>Products</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          <a 
            href="https://www.etsy.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block bg-[hsl(var(--reddirt-medium))] text-[hsl(var(--cream))] hover:bg-[hsl(var(--reddirt-dark))] px-4 py-2 rounded-md text-base font-medium mt-3 transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop on Etsy
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="nav-link text-[hsl(var(--cream))] hover:text-[hsl(var(--wood-light))] px-3 py-2 text-sm font-medium relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[hsl(var(--cream))] after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick?: () => void, children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="block text-[hsl(var(--cream))] hover:text-[hsl(var(--wood-light))] px-3 py-2 text-base font-medium"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
