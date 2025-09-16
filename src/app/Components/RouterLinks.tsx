"use client"
import React, { useEffect, useRef } from "react";
import IsLinkActive from "../lib/CommonMethods";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function RouterLinks() {
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (linksRef.current) {
      const links = linksRef.current.querySelectorAll('li');
      gsap.fromTo(links, 
        { opacity: 0, y: -20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }
  }, []);

  return (
    <div>
      <ul 
        ref={linksRef}
        className="font-medium text-[18px] flex flex-col p-4 md:p-0 mt-4 border border-gray-700/30 rounded-lg bg-gray-800/50 backdrop-blur-sm lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 md:border-0 lg:bg-transparent"
      >
        <li>
          <a
            href="/about"
            className={`block py-2 px-3 text-gray-200 hover:bg-gray-700/30 border-b-2 hover:border-accent hover:text-accent transition-all duration-300 ${
              IsLinkActive("/about")
                ? "border-accent font-bold text-accent"
                : "border-transparent"
            }`}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="/learn"
            className={`block py-2 px-3 text-gray-200 hover:bg-gray-700/30 border-b-2 hover:border-accent hover:text-accent transition-all duration-300 ${
              IsLinkActive("/learn")
                ? "border-accent font-bold text-accent"
                : "border-transparent"
            }`}
          >
            Learn
          </a>
        </li>
        <li>
          <a
            href="/projects"
            className={`block py-2 px-3 text-gray-200 hover:bg-gray-700/30 border-b-2 hover:border-accent hover:text-accent transition-all duration-300 ${
              IsLinkActive("/projects")
                ? "border-accent font-bold text-accent"
                : "border-transparent"
            }`}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className={`block py-2 px-3 text-gray-200 hover:bg-gray-700/30 border-b-2 hover:border-accent hover:text-accent transition-all duration-300 ${
              IsLinkActive("/blog")
                ? "border-accent font-bold text-accent"
                : "border-transparent"
            }`}
          >
            My Writings
          </a>
        </li>

        <li>
          <a
            href="/dictionary"
            className={`block py-2 px-3 text-gray-200 hover:bg-gray-700/30 border-b-2 hover:border-accent hover:text-accent transition-all duration-300 ${
              IsLinkActive("/dictionary")
                ? "border-accent font-bold text-accent"
                : "border-transparent"
            }`}
          >
            Code Dictionary
          </a>
        </li>

        <li>
          <a
            target="blank"
            href="https://calendly.com/myselfraj/30min"
            className="block py-2 px-3 text-white bg-gradient-to-r from-accent to-secondary rounded-full pl-4 pr-4 border border-accent hover:from-secondary hover:to-accent hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
          >
            Lets Chat
          </a>
        </li>
      </ul>
    </div>
  );
}
