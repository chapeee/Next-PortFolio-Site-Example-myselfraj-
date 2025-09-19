"use client";
import React, { useEffect } from "react";

import AOS from "aos";

export default function DigitalMarvels() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {" "}
      <div className="relative z-[999] bg-transparent">
        <div className="relative flex min-h-[60vh] items-center justify-center bg-gradient-to-br from-siteDefaultColor via-[#0a8f91] to-[#053f55] py-16 md:min-h-[500px] lg:min-h-[100vh]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/3 top-[-15%] h-[260px] w-[260px] rounded-full bg-white/20 blur-3xl" />
            <div className="absolute right-[10%] bottom-[-10%] h-[240px] w-[240px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute left-[8%] bottom-[20%] hidden h-[180px] w-[180px] rounded-full bg-[#86e3e4]/30 blur-3xl md:block" />
          </div>
          <div className="container relative z-10 mx-auto px-6">
            <div
              className="text-balance text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.15] text-center text-white drop-shadow-lg"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-delay="50"
              data-aos-duration="700"
            >
              Weaving Digital Marvels with Spider-Inspired Flair
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
