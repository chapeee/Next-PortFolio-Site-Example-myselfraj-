"use client"
import React, { useEffect, useRef } from "react";
import WeDeliver from "./Components/WeDeliver";
import "aos/dist/aos.css";
import HomeWriting from "./Components/HomeWriting";
import HomeLearn from "./Components/HomeLearn";
import Technology from "./Components/Technology";
import DigitalMarvels from "./Components/Homepage/DigitalMarvels";
import MoreAchiev from "./Components/Homepage/MoreAchiev";
import CompaniesIhaveWorked from "./Components/CompaniesIhaveWorked";
import Achievments from "./Components/Achievments";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current && statsRef.current && badgeRef.current) {
      // Animate badge
      gsap.fromTo(badgeRef.current,
        { opacity: 0, y: -30, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)"
        }
      );

      // Split text animation for main title
      const titleText = titleRef.current.textContent;
      if (titleText) {
        titleRef.current.innerHTML = titleText
          .split('')
          .map(char => char === ' ' ? ' ' : `<span class="char">${char}</span>`)
          .join('');
        
        const chars = titleRef.current.querySelectorAll('.char');
        gsap.fromTo(chars,
          { opacity: 0, y: 50, rotationX: -90 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: "back.out(1.7)",
            delay: 0.3
          }
        );
      }

      // Animate subtitle with highlight effect on scroll
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          delay: 1,
          ease: "power2.out"
        }
      );

      // Create scrolling highlight effect for subtitle
      ScrollTrigger.create({
        trigger: subtitleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(subtitleRef.current, {
            backgroundImage: `linear-gradient(90deg, 
              rgb(var(--accent)) 0%, 
              rgb(var(--secondary)) ${progress * 100}%, 
              transparent ${progress * 100}%)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: progress > 0.1 ? 'transparent' : 'inherit',
            duration: 0.3
          });
        }
      });

      // Animate stats cards
      const statCards = statsRef.current.children;
      gsap.fromTo(statCards,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          delay: 1.5,
          ease: "back.out(1.7)"
        }
      );
    }
  }, []);

  return (
    <main className="w-100 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden" id="">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-secondary/5 to-tertiary/5"></div>
      
      <div ref={heroRef} className="w-full lg:min-h-[100vh] xl:min-h-[1000px] lg:sticky lg:pb-[150px] pb-[70px] lg:top-[150px] z-0 relative">
        <div className="container p-5 pt-[70px] md:pt-[90px] m-auto text-center relative z-10">
          <div ref={badgeRef} className="badge bg-gradient-to-r from-accent to-secondary text-white p-3 pl-4 pr-4 mb-5 text-[16px] shadow-lg shadow-accent/25">
            Building &nbsp;<a href="grapdevs.com" className="underline hover:text-gray-200"> Grapdevs</a>
          </div>
          <h1 ref={titleRef} className="text-[60px] sm:text-[64px] md:text-7xl lg:text-[86px] xlg:text-8xl leading-[120%] font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Hi! I am <u className="decoration-accent">Rajneesh</u> AKA
            <span className="text-accent font-bold mt-10 rounded-lg ml-4 pl-3 pr-3 bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm border border-accent/30">
              Raj
            </span>
            .
          </h1>
          <div className="mt-7 md:mt-14">
            <p ref={subtitleRef} className="lg:text-[25px] xlg:text-[25px] lg:max-w-[780px] xlg:max-w-[850px] m-auto text-gray-300 leading-relaxed">
              I engage in the art of creation, a visionary who believes in the
              power of building visionary products. See you on Mars 🚀...
            </p>
          </div>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 p-5 mt-7 md:mt-14 lg:max-w-[700px] xlg:max-w-[800px] m-auto rounded-xl shadow-xl">
            <div ref={statsRef} className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="gradient-card">
                <div className="text-5xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">100+</div>
                <div className="text-1xl font-medium pt-3 text-gray-300">Total Projects</div>
              </div>
              <div className="gradient-card">
                <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">40+</div>
                <div className="text-1xl font-medium pt-3 text-gray-300">Total Clients</div>
              </div>
              <div className="gradient-card">
                <div className="text-5xl font-bold bg-gradient-to-r from-tertiary to-accent bg-clip-text text-transparent">3</div>
                <div className="text-1xl font-medium pt-3 text-gray-300">Open Sources</div>
              </div>
              <div className="gradient-card">
                <div className="text-5xl font-bold bg-gradient-to-r from-accent to-tertiary bg-clip-text text-transparent">3</div>
                <div className="text-1xl font-medium pt-3 text-gray-300">Own Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DigitalMarvels />

      <div
        id="starthere"
        className="container m-auto pt-[100px] bg-gradient-to-b from-gray-900 to-gray-800 z-[99] relative"
      >
        <div className="">
          <WeDeliver />
        </div>
      </div>

      <div>
        <MoreAchiev  />
      </div>
      {/* <div className="bg-gray-200  z-[99] relative "> <Achievments /></div> */}

      <Technology />
      <HomeWriting />
      <div className="">
        <HomeLearn />
      </div>
      <div className="relative z-[99] pt-[80px] md:pt-[150px] bg-gradient-to-b from-gray-800 to-gray-900 border-b-2 border-gray-700/30 pb-[80px] md:pb-[150px]">
        <CompaniesIhaveWorked />
      </div>
    </main>
  );
}
