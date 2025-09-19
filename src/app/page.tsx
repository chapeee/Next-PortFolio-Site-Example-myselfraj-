import React from "react";
import WeDeliver from "./Components/WeDeliver";
import "aos/dist/aos.css";
import HomeWriting from "./Components/HomeWriting";
import HomeLearn from "./Components/HomeLearn";
import Technology from "./Components/Technology";
import DigitalMarvels from "./Components/Homepage/DigitalMarvels";
import MoreAchiev from "./Components/Homepage/MoreAchiev";
import CompaniesIhaveWorked from "./Components/CompaniesIhaveWorked";
import Achievments from "./Components/Achievments";
export default function Home() {

  return (
    <main className="w-full text-slate-900" id="">
      <div className="relative w-full lg:min-h-[100vh] xl:min-h-[1000px] lg:sticky lg:pb-[150px] pb-[70px] lg:top-[150px] z-0">
        <div className="container relative mx-auto px-6 pt-[70px] md:pt-[100px] pb-[70px] md:pb-[100px] text-center">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-siteDefaultColor/20 blur-3xl" />
            <div className="absolute right-[10%] top-[30%] h-[260px] w-[260px] rounded-full bg-white/60 blur-3xl" />
            <div className="absolute left-[8%] bottom-[-140px] h-[300px] w-[300px] rounded-full bg-[#86e3e4]/30 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-3xl md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-siteDefaultColor/30 bg-siteDefaultColor/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-siteDefaultColor shadow-sm">
              Building
              <a
                href="grapdevs.com"
                className="inline-flex items-center gap-1 underline decoration-siteDefaultColor/40 decoration-2 underline-offset-4"
              >
                Grapdevs
              </a>
            </div>
            <h1 className="mt-8 text-balance text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-semibold leading-[1.05] tracking-tight">
              Hi! I am <span className="border-b-4 border-siteDefaultColor/40 pb-2">Rajneesh</span> AKA
              <span className="ml-3 inline-flex items-center rounded-full bg-gradient-to-r from-siteDefaultColor to-[#0aa0a4] px-5 py-1.5 text-2xl font-bold text-white shadow-lg md:text-3xl">
                Raj
              </span>
              .
            </h1>
            <div className="mt-7 md:mt-10">
              <p className="mx-auto max-w-[780px] text-lg leading-relaxed text-slate-600 md:text-xl">
                I engage in the art of creation, a visionary who believes in the
                power of building visionary products. See you on Mars 🚀...
              </p>
            </div>
            <div className="mt-10 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg">
              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
                <div className="rounded-2xl border border-slate-200/70 bg-white/90 px-6 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="text-4xl font-semibold text-slate-900 md:text-5xl">100+</div>
                  <div className="pt-3 text-xs font-medium uppercase tracking-[0.35em] text-slate-500">Total Projects</div>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/90 px-6 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="text-4xl font-semibold text-slate-900 md:text-5xl">40+</div>
                  <div className="pt-3 text-xs font-medium uppercase tracking-[0.35em] text-slate-500">Total Clients</div>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/90 px-6 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="text-4xl font-semibold text-slate-900 md:text-5xl">3</div>
                  <div className="pt-3 text-xs font-medium uppercase tracking-[0.35em] text-slate-500">Open Sources</div>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/90 px-6 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="text-4xl font-semibold text-slate-900 md:text-5xl">3</div>
                  <div className="pt-3 text-xs font-medium uppercase tracking-[0.35em] text-slate-500">Own Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DigitalMarvels />

      <div
        id="starthere"
        className="container relative z-[99] m-auto pt-[100px]"
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
      <div className="relative z-[99] pt-[80px] md:pt-[150px] bg-white border-b-2 pb-[80px] md:pb-[150px]">
        <CompaniesIhaveWorked />
      </div>
    </main>
  );
}
