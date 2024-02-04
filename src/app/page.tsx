"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import WeDeliver from "./Components/WeDeliver";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeWriting from "./Components/HomeWriting";
import HomeLearn from "./Components/HomeLearn";
import Technology from "./Components/Technology";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="w-100 bg-gray-100 text-black" id="">
      <div className="w-full min-h-[100vh] sticky top-0 z-0">
        <div className="container md:pt-[140px] m-auto text-center relative">
          <h1 className="md:text-6xl lg:text-[86px] xlg:text-8xl">
            Hi! I am <u>Rajneesh</u> AKA
            <span className="text-siteDefaultColor font-bold mt-10 rounded-lg ml-4 pl-3 pr-3">
              Raj
            </span>
            .
          </h1>
          <div className="mt-14">
            <p className="lg:text-[25px] xlg:text-[25px] lg:max-w-[780px] xlg:max-w-[850px] m-auto ">
              I engage in the art of creation, a visionary who believes in the
              power of building visionay products. See you on Mars 🚀..
            </p>
          </div>
          <div className="bg-gray-50 p-5 mt-14 lg:max-w-[700px] xlg:max-w-[800px] m-auto">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div className="text-5xl">67</div>
                <div className="text-1xl font-medium pt-3">Total Projects</div>
              </div>
              <div>
                <div className="text-5xl">40+</div>
                <div className="text-1xl font-medium pt-3">Total Clients</div>
              </div>
              <div>
                <div className="text-5xl">3</div>
                <div className="text-1xl font-medium pt-3">Open Sources</div>
              </div>
              <div>
                <div className="text-5xl">10</div>
                <div className="text-1xl font-medium pt-3">Own Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-[99] relative bg-gray-100">
        <div className="bg-siteDefaultColor text-white pt-14 pb-14 min-h-[100vh] flex justify-center">
          <div className="container m-auto">
            <div
              className="text-8xl font-medium text-center"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-delay="50"
              data-aos-duration="700"
            >
              Weaving Digital Marvels with Spider-Inspired Flair
            </div>
          </div>
        </div>
        <div
          id="starthere"
          className="container m-auto pt-[100px] bg-gray-100  "
        >
          <div className="">
            <WeDeliver />
          </div>
        </div>
      </div>
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

        <div className="absolute inset-0 bg-black bg-opacity-85 text-white flex flex-col items-center justify-center">
          <div className="container mx-auto">
            <div
              className="text-8xl font-medium text-center"
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
                View Projects
              </a>
            </div>
          </div>
        </div></div>
      </div>

      <Technology />
      <HomeWriting />
      <div className="">
      <HomeLearn />
      </div>
      
    </main>
  );
}
