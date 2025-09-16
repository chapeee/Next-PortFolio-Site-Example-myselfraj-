"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CompaniesIhaveWorked() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const companiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current && companiesRef.current) {
      // Animate title
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate company badges with stagger
      const companyBadges = companiesRef.current.children;
      gsap.fromTo(companyBadges,
        { opacity: 0, scale: 0.5, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: companiesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Add hover animations
      Array.from(companyBadges).forEach((badge) => {
        const element = badge as HTMLElement;
        element.addEventListener('mouseenter', () => {
          gsap.to(element, {
            scale: 1.1,
            y: -5,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }
  }, []);

  return (
    <div ref={containerRef}>
      <div className="container m-auto text-white text-center">
        <h2 
          ref={titleRef}
          className="text-4xl mb-14 md:text-6xl bg-gradient-to-r from-white via-gray-200 to-accent bg-clip-text text-transparent"
        >
          Companies I have worked with
        </h2>
        <div 
          ref={companiesRef}
          className="flex p-5 flex-wrap md:gap-6 gap-4 text-[18px] max-w-[950px] m-auto text-gray-300 font-medium justify-center"
        >
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Jeff.co
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Karat.io
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Mithi.com
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Petofy
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Cynotech
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Fusioni Tech
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Rosewood Publications
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Choreless
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Mithi
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Marketing Crawlers
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            PRM Digital
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            TrueDreamster Publications
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            LegacyFlow
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Wibyng
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Kapiva
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Fm1
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Dreamershelf Publications
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            The Fold
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Wapka
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Educrafter Education
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Rayforce Greentech
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            HaitinFlix
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            Motosports
          </div>
          <div className="border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-accent/20 hover:to-secondary/20 hover:border-accent rounded-full pl-5 pr-5 p-2 transition-all duration-300 cursor-pointer">
            JFlex
          </div>
        </div>
      </div>
    </div>
  )
}