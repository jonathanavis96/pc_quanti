import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-pc-neutral-200 bg-pc-neutral-50">
      <Container maxWidth="xl">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold text-pc-neutral-900 mb-4">PC Quanti</h3>
              <p className="text-pc-neutral-600 mb-4">
                Professional project management and quantity surveying services across South Africa.
              </p>
              <div className="space-y-2">
                <p className="text-pc-neutral-600">
                  <a 
                    href="mailto:phil@pcquanti.co.za" 
                    className="hover:text-pc-blue transition-colors"
                  >
                    phil@pcquanti.co.za
                  </a>
                </p>
                <p className="text-pc-neutral-600">
                  <a 
                    href="tel:+27823456789" 
                    className="hover:text-pc-blue transition-colors"
                  >
                    +27 82 345 6789
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-pc-neutral-900 mb-4">Quick Links</h3>
              <nav className="space-y-2">
                <Link 
                  href="/" 
                  className="block text-pc-neutral-600 hover:text-pc-blue transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/services" 
                  className="block text-pc-neutral-600 hover:text-pc-blue transition-colors"
                >
                  Services
                </Link>
                <Link 
                  href="/about" 
                  className="block text-pc-neutral-600 hover:text-pc-blue transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-pc-neutral-600 hover:text-pc-blue transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-pc-neutral-900 mb-4">Services</h3>
              <nav className="space-y-2">
                <Link 
                  href="/services#project-management" 
                  className="block text-pc-neutral-600 hover:text-pc-blue transition-colors"
                >
                  Project Management
                </Link>
                <Link 
                  href="/services#quantity-surveying" 
                  className="block text-pc-neutral-600 hover:text-pc-blue transition-colors"
                >
                  Quantity Surveying
                </Link>
                <Link 
                  href="/services#contract-admin" 
                  className="block text-pc-neutral-600 hover:text-pc-blue transition-colors"
                >
                  Contract Administration
                </Link>
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-pc-neutral-200">
            <p className="text-center text-pc-neutral-600 text-sm">
              © {new Date().getFullYear()} PC Quanti. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
