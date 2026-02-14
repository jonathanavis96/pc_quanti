'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
              className="text-pc-neutral-900 font-medium hover:text-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm px-1"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-pc-neutral-900 font-medium hover:text-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm px-1"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <Link href="/contact" className="hidden md:block">
            <Button variant="primary" size="md">Contact Us</Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-pc-neutral-900 hover:text-pc-blue focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              // Close icon (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-pc-neutral-900 font-medium hover:text-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm px-1 py-2"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-pc-neutral-900 font-semibold hover:text-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm px-1 py-2"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-pc-neutral-900 font-medium hover:text-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm px-1 py-2"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-pc-neutral-900 font-medium hover:text-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm px-1 py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <Link href="/contact" onClick={closeMobileMenu}>
                <Button variant="primary" size="md" className="w-full">Contact Us</Button>
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
