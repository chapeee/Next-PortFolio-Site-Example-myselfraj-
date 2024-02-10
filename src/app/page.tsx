import React from "react";
import WeDeliver from "./Components/WeDeliver";
import "aos/dist/aos.css";
import HomeWriting from "./Components/HomeWriting";
import HomeLearn from "./Components/HomeLearn";
import Technology from "./Components/Technology";
import DigitalMarvels from "./Components/Homepage/DigitalMarvels";
import MoreAchiev from "./Components/Homepage/MoreAchiev";
export default function Home() {

  return (
    <main className="w-100 bg-gray-100 text-black" id="">
      <div className="w-full min-h-[600px] md:min-h-[100vh] sticky top-0 z-0">
        <div className="container p-5 pt-[70px] md:pt-[140px] m-auto text-center relative">
          <h1 className="text-[60px] sm:text-[64px] md:text-7xl lg:text-[86px] xlg:text-8xl leading-[120%]">
            Hi! I am <u>Rajneesh</u> AKA
            <span className="text-siteDefaultColor font-bold mt-10 rounded-lg ml-4 pl-3 pr-3">
              Raj
            </span>
            .
          </h1>
          <div className="mt-7 md:mt-14">
            <p className="lg:text-[25px] xlg:text-[25px] lg:max-w-[780px] xlg:max-w-[850px] m-auto ">
              I engage in the art of creation, a visionary who believes in the
              power of building visionay products. See you on Mars 🚀..
            </p>
          </div>
          <div className="bg-gray-50 p-5 mt-7 md:mt-14 lg:max-w-[700px] xlg:max-w-[800px] m-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-5xl">100+</div>
                <div className="text-1xl font-medium pt-3">Total Projects</div>
              </div>
              <div>
                <div className="text-5xl">40+</div>
                <div className="text-1xl font-medium pt-3">Total Clients</div>
              </div>
              <div>
                <div className="text-5xl">1</div>
                <div className="text-1xl font-medium pt-3">Open Sources</div>
              </div>
              <div>
                <div className="text-5xl">3</div>
                <div className="text-1xl font-medium pt-3">Own Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DigitalMarvels />
      <div
        id="starthere"
        className="container m-auto pt-[100px] bg-gray-100 z-[99] relative "
      >
        <div className="">
          <WeDeliver />
        </div>
      </div>
      <div>
        <MoreAchiev />
      </div>


      <Technology />
      <HomeWriting />
      <div className="">
        <HomeLearn />
      </div>

    </main>
  );
}
