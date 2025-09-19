"use client";
import React, { useEffect } from "react";
import AOS from "aos";

export default function MoreAchiev() {
  return (
    <div>
      <div className="p-[50px] bg-gradient-to-b from-transparent via-[#eef2f5] to-[#e4ebf5] relative  z-[9]"></div>
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

          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/80 to-slate-900/75 backdrop-blur-[2px] text-white flex flex-col items-center justify-center">
            <div className="container mx-auto px-6">
              <div
                className="text-balance text-4xl sm:text-5xl lg:text-7xl font-semibold text-center leading-[1.1] drop-shadow-xl"
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-delay="50"
                data-aos-duration="700"
              >
                Browse more achievements from my crafted creations.
              </div>
              <div className="w-full flex justify-center items-center mt-14 pt-14">
                <a
                  href="/projects"
                  className="flex h-[170px] w-[170px] items-center justify-center rounded-full bg-gradient-to-r from-siteDefaultColor to-[#0aa0a4] text-center text-[28px] font-semibold text-white shadow-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
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
