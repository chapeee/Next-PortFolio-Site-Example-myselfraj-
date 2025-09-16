"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

export default function Header() {
    const headerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const navLinksRef = useRef<HTMLDivElement>(null);
    const ctaButtonRef = useRef<HTMLAnchorElement>(null);
    
    const pathname = usePathname();
    
    const IsLinkActive = (href: string) => {
      return pathname === href;
    };

    useEffect(() => {
      if (headerRef.current && logoRef.current && navLinksRef.current && ctaButtonRef.current) {
        // Header slide down animation
        gsap.fromTo(headerRef.current, 
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
        
        // Logo animation
        gsap.fromTo(logoRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
        );

        // Navigation links stagger animation
        const navItems = navLinksRef.current.querySelectorAll('a');
        gsap.fromTo(navItems,
          { opacity: 0, y: -20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.4
          }
        );

        // CTA button animation
        gsap.fromTo(ctaButtonRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)", delay: 0.6 }
        );
      }
    }, []);

  return (
    <div ref={headerRef} className='sticky z-[999] top-0'>
      <nav className="bg-black/95 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div ref={logoRef} className="flex-shrink-0">
              <a
                href="/"
                className="text-white text-xl font-bold tracking-wide hover:text-gray-300 transition-colors duration-200"
              >
                RAJNEESH
              </a>
            </div>

            {/* Desktop Navigation */}
            <div ref={navLinksRef} className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="/about"
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    IsLinkActive('/about')
                      ? 'text-white border-b-2 border-white'
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-400'
                  }`}
                >
                  About Me
                </a>
                <a
                  href="/projects"
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    IsLinkActive('/projects')
                      ? 'text-white border-b-2 border-white'
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-400'
                  }`}
                >
                  Projects
                </a>
                <a
                  href="/blog"
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    IsLinkActive('/blog')
                      ? 'text-white border-b-2 border-white'
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-400'
                  }`}
                >
                  My Writings
                </a>
                <a
                  href="/learn"
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    IsLinkActive('/learn')
                      ? 'text-white border-b-2 border-white'
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-400'
                  }`}
                >
                  Learn
                </a>
              </div>
            </div>

            {/* Right side - Member login and CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Member login</span>
              <a
                ref={ctaButtonRef}
                href="/projects"
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Review my portfolio</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <a
              href="/about"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                IsLinkActive('/about')
                  ? 'text-white bg-gray-800'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              About Me
            </a>
            <a
              href="/projects"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                IsLinkActive('/projects')
                  ? 'text-white bg-gray-800'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Projects
            </a>
            <a
              href="/blog"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                IsLinkActive('/blog')
                  ? 'text-white bg-gray-800'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              My Writings
            </a>
            <a
              href="/learn"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                IsLinkActive('/learn')
                  ? 'text-white bg-gray-800'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Learn
            </a>
            <div className="border-t border-gray-700 pt-4">
              <a
                href="/projects"
                className="block px-3 py-2 text-base font-medium bg-white text-black rounded-md hover:bg-gray-200 transition-colors duration-200"
              >
                Review my portfolio →
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}