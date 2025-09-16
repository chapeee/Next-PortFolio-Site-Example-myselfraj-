"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Social from "../Components/Social";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current && imageRef.current && textRef.current) {
      // Animate title
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "power2.out"
        }
      );

      // Animate image with floating effect
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: 50, scale: 0.8 },
        { 
          opacity: 1, 
          x: 0, 
          scale: 1,
          duration: 1.2,
          delay: 0.3,
          ease: "power2.out"
        }
      );

      // Add floating animation to image
      gsap.to(imageRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      // Animate text content
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          delay: 0.6,
          ease: "power2.out"
        }
      );
    }
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-[50px] md:pt-[100px] pb-[100px] relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-secondary/5 to-tertiary/5"></div>
      
      <div ref={containerRef} className="container p-5 m-auto text-left max-w-[800px] relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-4xl lg:text-5xl font-medium leading-[110%] md:leading-[140%] bg-gradient-to-r from-white via-gray-200 to-accent bg-clip-text text-transparent">
          About Me
        </h2>
        <div ref={imageRef} className="mt-14 sm:float-right sm:pl-11">
          <Image
            id="leftImage"
            src="https://avatars.githubusercontent.com/u/137584877?v=4"
            alt="Writings"
            width={0}
            sizes="100vw"
            height={300}
            style={{
              width: "100%",
              height: "350px",
              objectFit: "contain",
              borderRadius: "10px",
            }}
            loading="lazy"
            className="border-2 border-gray-700 hover:border-accent transition-all duration-300 shadow-xl shadow-accent/20"
          />
        </div>
        <div ref={textRef} className="mt-11">
          <p className="text-[20px] text-gray-300 leading-relaxed">
            My &quot;About Me&quot; has <b className="text-accent">three cool chapters!</b> First,
            I&apos;ll spill the beans on how I got my hands on my very first
            computer. Then, I&apos;ll dive into the story of how I caught the
            computer bug and got all excited about them. Lastly, you&apos;ll get
            the lowdown on how I kicked off my coding journey and set sail on
            the path to becoming a developer.
          </p>
        </div>
        <div className="hidden md:block"> <br></br><br></br><br></br><br></br></div>
        <div className="mt-10">
          <h2 className="text-[24px] font-bold text-left mb-3 text-white">
            My First Computer
          </h2>
          <p className="text-[20px] text-gray-300 leading-relaxed">
            Back in fourth grade, the magic happened—I got my hands on my first
            computer! Oh, the excitement! The whole neighborhood buzzed with
            curiosity as the computer engineer was setting up the PC right at my
            home. Those were the days! Although now my PC in the backyard
            doesn&apos;t hum with life anymore, yet I&apos;ve kept it as a
            treasured memory. Picture this: a <span className="text-accent font-semibold">Pentium 4 3.5GHZ Dual</span> inside the
            CPU, <span className="text-secondary font-semibold">512MB RAM</span>, integrated GPU, XP Pack 3, that iconic green
            wallpaper, and the welcome sound that made my day. Ah, and
            let&apos;s not forget the classic Samsung monitor. The first thing I
            did when I powered it on? Embarked on wild adventures in <span className="text-tertiary font-semibold">GTA Vice
            City</span>. As a kid, navigating the map was a challenge, but my sister
            became my guide— she used to help me with navigation turn right,
            turn left, go straight. Oh, what lovely days those were!
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-[24px] font-bold text-left mb-3 text-white">
            How i Became Computer Bug
          </h2>
          <p className="text-[20px] text-gray-300 leading-relaxed">
            Back in 5th grade, one day, my dad, who was in the army, walked in
            with a mysterious book titled something like <span className="text-accent font-semibold">&quot;Learn Command
            Prompt.&quot;</span> He unfolded the secrets of the terminal—opening it,
            creating directories, diving into them, making files, typing into
            files, saving changes, and doing all sorts of cool stuff on command
            prompt(Terminal) I was utterly fascinated! Excitedly, I went to
            school the next day, showing off my newfound skills to friends by
            typing commands on a black screen. They were like, <span className="text-secondary font-semibold">&quot;Whoa, how
            do you know all this?&quot;</span>
            <div className="mt-5">
              Then, in 6th grade, I crossed paths with a senior from 12th grade
              who handed me his <span className="text-tertiary font-semibold">HTML notes</span>. I got my hands on it, dabbled with
              the codes, and voila! I crafted my very first HTML, a simple
              college website page. And that, my friend, is how I got hooked on
              coding and turned into a computer bug!
            </div>
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-[24px] font-bold text-left mb-3 text-white">
            Path to becoming a developer
          </h2>
          <p className="text-[20px] text-gray-300 leading-relaxed">
            The journey hasn&apos;t been a walk in the park, and even today, it
            throws new challenges my way. But let&quot;s rewind to how my coding
            adventure kicked off. I studied <span className="text-accent font-semibold">BCA and MCA</span> in Computer Science and
            worked as a full-stack and front-end developer. I&quot;ve put my
            skills to the test on over a <span className="text-secondary font-semibold">hundred projects</span>, juggling both
            freelancing gigs and company projects. And hey, now I&quot;m
            steering my own ship at{" "}
            <a href="https://grapdevs.com" className="text-tertiary hover:text-accent transition-colors underline">
              Grapdevs.com
            </a>
            .
            <div className="mt-5">
              My official coding voyage began in <span className="text-accent font-semibold">2014</span>. <span className="text-secondary font-semibold">PHP</span> was the first
              language I tackled, along with a side of HTML and CSS. My debut
              project? Exploring locations! From there, I crafted a task
              scheduler and even ventured into building a DNS automation tool
              using <span className="text-tertiary font-semibold">Python</span>. Fast forward to today, I&quot;ve got my hands on
              more than <span className="text-accent font-semibold">15 technologies</span>, and I&apos;m on a daily quest to learn
              even more to stay ahead.
            </div>
          </p>
        </div>
        <h2 className="text-[24px] font-bold text-left mb-3 mt-8 text-white">
          That&quot;s All, Thank you!
        </h2>
        <div className="mt-[50px]">
          <Social/>
        </div>
      </div>
    </div>
  );
}
