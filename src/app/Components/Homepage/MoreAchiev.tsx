"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MoreAchiev() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (titleRef.current && buttonRef.current) {
      // Animate title with typewriter effect
      const titleText = titleRef.current.textContent;
      if (titleText) {
        titleRef.current.innerHTML = '';
        const words = titleText.split(' ');
        
        words.forEach((word, index) => {
          const span = document.createElement('span');
          span.textContent = word + ' ';
          span.style.opacity = '0';
          titleRef.current?.appendChild(span);
        });

        const wordSpans = titleRef.current.querySelectorAll('span');
        gsap.fromTo(wordSpans,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animate button with pulsing effect
      gsap.fromTo(buttonRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Add continuous pulsing animation to button
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }, []);

  return (
    <div>
      <div className="p-[50px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative z-[9]"></div>
      <div className="sticky top-0 z-0">
        <div className="relative min-h-[100vh] flex justify-center items-center z-[9999] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://ik.imagekit.io/mq90sdk8y/myselfraj/spacevide.mp4?updatedAt=1707024058330"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black bg-opacity-80 text-white flex flex-col items-center justify-center">
            <div className="container mx-auto p-5" ref={containerRef}>
              <div
                ref={titleRef}
                className="text-[48px] sm:text-[58px] lg:text-8xl font-medium text-center bg-gradient-to-r from-white via-accent to-secondary bg-clip-text text-transparent"
                style={{ lineHeight: "120%" }}
              >
                Browse more achievements from my crafted creations.
              </div>
              <div className="w-full flex justify-center items-center mt-14 pt-14">
                <a
                  ref={buttonRef}
                  href="/projects"
                  className="hover:cursor-pointer rounded-full bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-tertiary text-white h-[170px] w-[170px] flex items-center justify-center text-[28px] text-center font-medium transition-all duration-300 shadow-xl hover:shadow-accent/50 border-2 border-accent/30 hover:border-accent"
                >
                  View all Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
