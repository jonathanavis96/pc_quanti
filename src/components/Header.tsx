'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from './Button';
import { Container } from './Container';
import { withBasePath } from '@/src/lib/basePath';

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
  const [underline, setUnderline] = useState({ left: 0, width: 0 });
  const [activeRing, setActiveRing] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [isUnderlineVisible, setIsUnderlineVisible] = useState(false);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
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
    });
  };

  const updateActiveRing = (href: string) => {
    const link = linkRefs.current[href];
    const container = navRef.current;
    if (!link || !container) return;

    const linkRect = link.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setActiveRing({
      left: linkRect.left - containerRect.left,
      top: linkRect.top - containerRect.top,
      width: linkRect.width,
      height: linkRect.height,
    });
  };

  useEffect(() => {
    updateActiveRing(activeHref);
  }, [activeHref]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      updateActiveRing(activeHref);
      if (isUnderlineVisible) {
        const hoveredHref = navItems.find((item) => linkRefs.current[item.href])?.href;
        if (hoveredHref) {
          updateUnderline(hoveredHref);
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeHref, isUnderlineVisible]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        isScrolled
          ? 'bg-[rgba(0,0,204,0.75)] backdrop-blur border-transparent'
          : 'bg-pc-blue border-transparent'
      }`}
    >
      <Container maxWidth="xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              src={withBasePath('/logo.webp')}
              alt="PC Quanti logo"
              width={220}
              height={80}
              priority
              className="h-16 w-auto"
            />
          </Link>

          <div className="hidden md:block relative" ref={navRef}>
            <nav
              className="flex items-center gap-20"
              aria-label="Main navigation"
              onMouseLeave={() => {
                setIsUnderlineVisible(false);
                setIsHoveringNav(false);
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => {
                    linkRefs.current[item.href] = el;
                  }}
                  className="text-white font-medium hover:text-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-pc-blue rounded-sm px-4 py-3"
                  onMouseEnter={() => {
                    setIsUnderlineVisible(true);
                    setIsHoveringNav(true);
                    updateUnderline(item.href);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <motion.div
              className="absolute bottom-0 h-0.5 bg-white pointer-events-none"
              style={{
                left: underline.left,
                width: underline.width,
                transformOrigin: isUnderlineVisible ? 'left' : 'right',
              }}
              animate={{
                left: underline.left,
                width: underline.width,
                scaleX: isUnderlineVisible ? 1 : 0,
              }}
              transition={{
                left: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
                width: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
                scaleX: {
                  duration: isUnderlineVisible ? 0.7 : 0.2,
                  ease: [0.2, 0.8, 0.2, 1],
                },
              }}
            />

            <div
              className="absolute border-2 border-white/90 rounded-lg pointer-events-none"
              style={{
                left: activeRing.left,
                top: activeRing.top,
                width: activeRing.width,
                height: activeRing.height,
                transformOrigin: isHoveringNav ? 'right' : 'left',
                transform: `scaleX(${isHoveringNav ? 0 : 1})`,
                opacity: isHoveringNav ? 0 : 1,
                transition: 'transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 200ms cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
            />
          </div>

          <Link href="/contact" className="hidden md:block">
            <Button
              variant="primary"
              size="md"
              className="bg-pc-blue-light !text-pc-blue border border-white/40 shadow-[inset_0_3px_0_rgba(255,255,255,0.85),inset_0_-4px_0_rgba(31,1,153,0.45),0_3px_0_rgba(0,0,0,0.08)] hover:bg-pc-blue-light/95 active:bg-pc-blue-light/85 active:shadow-[inset_0_2px_0_rgba(255,255,255,0.75),inset_0_-3px_0_rgba(31,1,153,0.45),0_2px_0_rgba(0,0,0,0.08)]"
            >
              Contact Us
            </Button>
          </Link>

          <button
            className="md:hidden p-2 text-white hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-pc-blue rounded-sm"
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

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white font-medium hover:text-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-pc-blue rounded-sm px-3 py-3"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={closeMobileMenu}>
                <Button variant="primary" size="md" className="w-full bg-white text-pc-blue">
                  Contact Us
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
