import { useScrollReveal } from "../hooks/useScrollReveal";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  const { ref } = useScrollReveal();

  return (
    <footer 
      id="contact" 
      className="bg-[hsl(var(--charcoal))] text-[hsl(var(--cream))] py-12 opacity-0 transform translate-y-5 transition-all duration-700" 
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-roboto-slab font-bold mb-4">Reddirtwood</h3>
            <p className="mb-4 text-[hsl(var(--wood-light))]">
              Handcrafted wooden treasures from the heart of Oklahoma.
            </p>
            <p className="text-[hsl(var(--wood-light))]">
              Eufaula, Oklahoma
            </p>
          </div>
          <div>
            <h3 className="text-xl font-roboto-slab font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-[hsl(var(--wood-light))]">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[hsl(var(--reddirt-medium))]" />
                info@reddirtwood.com
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[hsl(var(--reddirt-medium))]" />
                (555) 123-4567
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <SocialLink href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </SocialLink>
              <SocialLink href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                </svg>
              </SocialLink>
              <SocialLink href="https://www.etsy.com" target="_blank">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.954 15.712c-.308.307-.567.676-.567 1.083 0 .422.174.623.551.623.537 0 1.006-.553 1.006-1.475 0-.436-.044-.8-.102-1.085-.257.309-.565.576-.888.854zm12.056-13.722v20h-20v-20h20zm-15.937 7.685c0-.541-.068-1.975-.068-2.991 0-.831-.108-1.513-.405-1.513-.209 0-.297.068-.5.502h-.716c-.023-.69.378-1.553 1.419-1.553 1.453 0 1.878 1.121 1.878 2.398 0 .243-.014 1.229-.054 2.176.73-.614 1.662-1.121 2.142-1.121.554 0 .742.466.742 1.148 0 .797-.175 1.958-.175 2.646 0 .635.162.892.392.892.554 0 1.31-1.378 1.838-2.485l.554.257c-.615 1.485-1.5 3.269-2.773 3.269-.865 0-1.419-.946-1.419-2.35 0-.648.108-1.418.108-2.053 0-.352-.068-.514-.284-.514-.297 0-.865.568-1.58 1.33.027.648.054 1.271.054 1.769 0 1.741-.216 3.537-1.31 3.537-1.229 0-1.958-1.418-1.958-2.573 0-.595.175-1.082.528-1.594l1.135.77c-.595.757-.717 1.058-.717 1.472 0 .499.175.77.419.77.501 0 .622-1.107.622-2.35 0-.541-.027-1.175-.054-1.796-.175.054-.392.108-.554.108-.554 0-.963-.312-.963-.811 0-.271.108-.42.243-.42.176 0 .501.096.839.096.162 0 .338-.28.501-.068-.027-.501-.041-1.175-.041-1.728 0-.826-.122-1.54-.392-1.54-.162 0-.338.203-.567.581h-.663c.108-.921.581-1.607 1.459-1.607.662 0 1.323.595 1.323 2.505 0 .757-.041 1.878-.041 2.371.527-.162 1.027-.257 1.486-.257.514 0 .933.189.933.635 0 .258-.68.338-.284.338-.406 0-.839-.149-1.391-.149-.216 0-.433.014-.649.054-.14.176-.014 1.001-.014 1.338 0 2.884.351 3.833 1.082 3.833.973 0 1.607-1.067 2.31-2.992l.594.189c-.31 1.013-.973 3.62-3.052 3.62-1.959 0-2.641-1.58-2.641-3.997 0-.257.014-.5.014-.757h-.014c-.96.757-1.79 1.58-2.398 1.58-1.217 0-1.85-1.026-1.85-2.398 0-.554.136-1.136.5-1.715l.988.473c-.257.434-.378.838-.378 1.256z"></path>
                </svg>
              </SocialLink>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-roboto-slab font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><FooterLink href="#">Home</FooterLink></li>
              <li><FooterLink href="#about">About Us</FooterLink></li>
              <li><FooterLink href="#products">Products</FooterLink></li>
              <li><FooterLink href="https://www.etsy.com" target="_blank">Etsy Shop</FooterLink></li>
              <li><FooterLink href="#contact">Contact</FooterLink></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[hsl(var(--wood-medium))] mt-12 pt-8 text-center text-[hsl(var(--wood-light))]">
          <p>&copy; {new Date().getFullYear()} Reddirtwood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, target, children }: { href: string, target?: string, children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
      className="text-[hsl(var(--cream))] hover:text-[hsl(var(--reddirt-medium))] transition duration-300"
    >
      {children}
    </a>
  );
}

function FooterLink({ href, target, children }: { href: string, target?: string, children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
      className="text-[hsl(var(--wood-light))] hover:text-[hsl(var(--cream))] transition duration-300"
    >
      {children}
    </a>
  );
}
