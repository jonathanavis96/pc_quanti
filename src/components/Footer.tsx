import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-pc-neutral-900 text-white">
      <Container maxWidth="xl">
        <div className="py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Company Info */}
            <div>
              <p className="text-pc-neutral-200">
                Professional project management and quantity surveying services across South Africa and the United Kingdom.
              </p>
              <div className="mt-6 space-y-2 text-pc-neutral-200">
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a
                    href="mailto:info@pcquanti.com"
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pc-neutral-900 rounded-sm"
                  >
                    info@pcquanti.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+27823456789"
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pc-neutral-900 rounded-sm"
                  >
                    +27 82 345 6789
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <nav className="space-y-2 text-pc-neutral-200">
                <Link
                  href="/"
                  className="block hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pc-neutral-900 rounded-sm"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="block hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pc-neutral-900 rounded-sm"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="block hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pc-neutral-900 rounded-sm"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pc-neutral-900 rounded-sm"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <nav className="space-y-2 text-pc-neutral-200">
                <Link
                  href="/services/project-management"
                  className="block hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pc-neutral-900 rounded-sm"
                >
                  Project Management
                </Link>
                <Link
                  href="/services/quantity-surveying"
                  className="block hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pc-neutral-900 rounded-sm"
                >
                  Quantity Surveying
                </Link>
                <Link
                  href="/services/contract-administration"
                  className="block hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pc-neutral-900 rounded-sm"
                >
                  Contract Administration
                </Link>
                <Link
                  href="/services/claims-management"
                  className="block hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pc-neutral-900 rounded-sm"
                >
                  Claims Management
                </Link>
                <Link
                  href="/services/project-controls"
                  className="block hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pc-neutral-900 rounded-sm"
                >
                  Project Controls
                </Link>
                <Link
                  href="/services/risk-management"
                  className="block hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pc-neutral-900 rounded-sm"
                >
                  Risk Management
                </Link>
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-8 border-t border-pc-neutral-700">
            <p className="text-center text-pc-neutral-300 text-sm">
              © {new Date().getFullYear()} PC Quanti. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
