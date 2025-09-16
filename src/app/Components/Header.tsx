"use client"
import React, { useEffect, useRef } from 'react'
import Image from "next/image";
import { gsap } from 'gsap';
import { usePathname  } from 'next/navigation';
import RouterLinks from './RouterLinks';

export default function Header() {
    const headerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    
    const IsLinkActive = (href : any) => {
      return usePathname() === href;
    };

    useEffect(() => {
      if (headerRef.current && logoRef.current) {
        // Header slide down animation
        gsap.fromTo(headerRef.current, 
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
        
        // Logo scale animation
        gsap.fromTo(logoRef.current,
          { scale: 0, rotation: -180 },
          { scale: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)", delay: 0.3 }
        );
      }
    }, []);

  return (
    <div ref={headerRef} className='sticky z-[999] top-[0px]'>
         <nav className="dark-card backdrop-blur-md bg-opacity-90 border-b border-gray-700/50">
          <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              ref={logoRef}
              href="/"
              className={`flex items-center rtl:space-x-reverse font-italic text-italic text-3xl font-bold italic border-4 rounded-full transition-all duration-300 hover:scale-110 ${
                IsLinkActive('/') ? 'border-indigo-500 shadow-lg shadow-indigo-500/25' : 'border-gray-600 hover:border-indigo-400'
              }`}
            >
              <Image
                src="https://ik.imagekit.io/mq90sdk8y/myselfraj/rajneesh.jpeg?updatedAt=1707033590888"
                alt="Rajneesh Portfolio"
                width={0}
                sizes="100vw"
                height={300}
                style={{
                  width: "46px",
                  height: "46px",
                  objectFit: "contain",
                  borderRadius: "100px",
                }}
                className="rounded-full"
                loading="lazy"
              />
            </a>
            <div className="dropdown dropdown-end sm:block block lg:hidden dropdown-hover">
              <div tabIndex={0} role="button" className="gradient-button">
                <svg style={{width:"15px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow dark-card rounded-box w-52">
                <RouterLinks />
              </ul>
            </div>
            <div
              className="hidden w-full lg:block md:w-auto"
              id="navbar-default"
            >
              <RouterLinks />
            </div>
          </div>
        </nav>
    </div>
  )
}