"use client";
import React, { useEffect } from "react";
import AOS from "aos";

export default function MoreAchiev() {
  return (
    <div>
      <div className="p-[50px] bg-gray-100 relative  z-[9]"></div>
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
            <div className="container mx-auto p-5">
              <div
                className="text-[48px] sm:-[58px] lg:text-8xl lg:text-8xl font-medium text-center"
                style={{ lineHeight: "120%" }}
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
                  className="hover:cursor-pointer rounded-full bg-siteDefaultColor text-white h-[170px] w-[170px]  flex items-center justify-center text-[28px] text-center font-medium"
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
