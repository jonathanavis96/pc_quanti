import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="border-b border-pc-neutral-200 bg-white">
      <Container maxWidth="xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="PC Quanti logo"
              width={50}
              height={50}
              priority
            />
            <span className="text-xl font-semibold text-pc-neutral-900">PC Quanti</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link 
              href="/" 
              className="text-pc-neutral-900 font-medium hover:text-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm px-1"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-pc-neutral-900 font-semibold hover:text-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm px-1"
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="text-pc-neutral-600 hover:text-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm px-1"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-pc-neutral-600 hover:text-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm px-1"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link href="/contact">
            <Button variant="primary" size="md">Contact Us</Button>
          </Link>
        </div>
      </Container>
    </header>
  );
}
