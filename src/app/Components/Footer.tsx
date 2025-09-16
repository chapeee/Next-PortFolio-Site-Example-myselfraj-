"use client"
import React, { useEffect, useRef } from 'react'
import Newsletter from './Newsletter'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

type Props = {}

export default function Footer({ }: Props) {
    const footerRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (footerRef.current && linksRef.current && logoRef.current) {
            // Animate footer links on scroll
            gsap.fromTo(linksRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: linksRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animate logo
            gsap.fromTo(logoRef.current,
                { opacity: 0, scale: 0.5, rotation: -180 },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: logoRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    }, []);

    return (
        <div ref={footerRef} className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden'>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-secondary/10 to-tertiary/10"></div>
            
            <div className="container m-auto relative z-10">
                <Newsletter />
                <div className="pt-0 mb-0 md:p-10 p-7 pb-0 -mt-[100px] md:-mt-[80px]">
                    <Image
                        src="/thankyou.png"
                        alt="thank you"
                        width={0}
                        sizes="100vw"
                        height={300}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        loading="lazy"
                        className="opacity-90"
                    />
                </div>
            </div>
            
            <div className='pb-0 w-full p-4 sm:-mt-[50px] relative z-10' style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}></div>
            
            <div ref={linksRef} className="grid grid-cols-1 pt-7 sm:grid-cols-3 w-full text-center pb-7 max-w-[900px] text-gray-100 m-auto relative z-10">
                <a
                    href="https://www.linkedin.com/in/myselfraj/"
                    className="text-2xl m-2 font-medium underline hover:text-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
                >
                    Follow on Linkedin
                </a>
                <a
                    href="https://github.com/chapeee"
                    className="text-2xl m-2 font-medium underline hover:text-secondary transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-secondary/25"
                >
                    Check My GitHub
                </a>
                <a
                    href="https://www.npmjs.com/~chapeee"
                    className="text-2xl m-2 font-medium underline hover:text-tertiary transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-tertiary/25"
                >
                    My Js/Ts Packages
                </a>
            </div>
            
            <div ref={logoRef} className="flex justify-center pb-4 relative z-10">
                <div className="p-2 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm border border-accent/30">
                    <Image
                        src="/rajneesh.svg"
                        alt="Rajneesh Logo"
                        width={32}
                        height={32}
                        loading="lazy"
                        className="hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    )
}