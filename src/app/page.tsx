"use client";
import Image from "next/image";
import WeDeliver from "./Components/WeDeliver";

export default function Home() {
  return (
    <main className="w-100 bg-gray-100 text-black">
      <div className="w-full min-h-[100vh] sticky top-0 z-0">
        <div className="container md:pt-[140px] m-auto text-center relative">
          <h1 className="md:text-6xl lg:text-7xl xlg:text-8xl">
            Hi! I am <u>Rajneesh</u> AKA
            <span className="bg-siteDefaultColor text-white rounded-lg ml-4 pl-3 pr-3">
              Raj
            </span>
            .
          </h1>
          <div className="mt-14">
            <p className="lg:text-[20px] xlg:text-[25px] lg:max-w-[680px] xlg:max-w-[850px] m-auto ">
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
      <div className="z-[99] relative ">
        <div className="bg-siteDefaultColor text-white pt-14 pb-14 min-h-[100vh] flex justify-center">
            <div className="container m-auto">
              <div className="text-8xl font-medium text-center">
              Weaving Digital Marvels with Spider-Inspired Flair
              </div>
            </div>
        </div>
        <div id="starthere" className="container m-auto pt-[100px] bg-gray-100">
          <div >
            <WeDeliver />
          </div>
        </div>
      </div>
    </main>
  );
}
