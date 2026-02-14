'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from './Button';
import { Container } from './Container';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [underline, setUnderline] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const activeHref = useMemo(() => {
    if (!pathname) return '/';
    if (pathname === '/') return '/';
    const match = navItems.find((item) => pathname.startsWith(item.href) && item.href !== '/');
    return match?.href ?? '/';
  }, [pathname]);

  const updateUnderline = (href: string) => {
    const link = linkRefs.current[href];
    const container = navRef.current;
    if (!link || !container) return;

    const linkRect = link.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setUnderline({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  };

  useEffect(() => {
    updateUnderline(activeHref);
  }, [activeHref]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => updateUnderline(activeHref);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeHref]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header 
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur border-pc-neutral-200' 
          : 'bg-white border-pc-neutral-200'
      }`}
    >
      <Container maxWidth="xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image
              src="/logo.webp"
              alt="PC Quanti logo"
              width={50}
              height={50}
              priority
            />
            <span className="text-xl font-semibold text-pc-neutral-900">PC Quanti</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block relative" ref={navRef}>
            <nav className="flex items-center gap-8" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => { linkRefs.current[item.href] = el; }}
                  className={`text-pc-neutral-900 font-medium hover:text-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm px-2 py-2 ${
                    activeHref === item.href ? 'text-pc-blue' : ''
                  }`}
                  onMouseEnter={() => updateUnderline(item.href)}
                  onMouseLeave={() => updateUnderline(activeHref)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Simple visible underline - testing first */}
            <motion.div
              className="absolute bottom-0 h-0.5 bg-pc-blue pointer-events-none"
              style={{ left: underline.left, width: underline.width }}
              animate={{ 
                left: underline.left, 
                width: underline.width,
                opacity: underline.opacity 
              }}
              transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </div>

          {/* Desktop CTA Button */}
          <Link href="/contact" className="hidden md:block">
            <Button variant="primary" size="md">Contact Us</Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-pc-neutral-900 hover:text-pc-blue focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-pc-neutral-900 font-medium hover:text-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm px-1 py-2"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
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
