"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function WeDeliver() {
  const [opacityvle, setOpacityvle] = useState(1);
  const [opacitywater, setOpacitywater] = useState(0.3);
  const [opacitytvapp, setOpacitytvapp] = useState(0.3);

  useEffect(() => {
    const leftImage = document.getElementById("leftImage") as HTMLImageElement;
    const vleHeading = document.getElementById("vle");
    const waterHeading = document.getElementById("water");
    const tvappHeading = document.getElementById("tvapp");

    const isInView = (element: any) => {
      const rect = element.getBoundingClientRect();
      const middleOfImage =
        leftImage.getBoundingClientRect().top +
        leftImage.getBoundingClientRect().height / 2;

      return rect.top <= middleOfImage && rect.bottom >= middleOfImage;
    };

    const handleScroll = () => {
      if (window.innerWidth <= 767) {
        setOpacityvle(1);
        setOpacitywater(1);
        setOpacitytvapp(1);
        return true;
      }
      if (isInView(vleHeading)) {
        if (leftImage) {
          leftImage.src =
            "https://ik.imagekit.io/mq90sdk8y/myselfraj/acri.png?updatedAt=17069618344912";
          setOpacityvle(1);
          setOpacitywater(0.3);
          setOpacitytvapp(0.3);
        }
      } else if (isInView(waterHeading)) {
        if (leftImage) {
          leftImage.src =
            "https://ik.imagekit.io/mq90sdk8y/myselfraj/water-har.png?updatedAt=1707019559105";
          setOpacityvle(0.3);
          setOpacitywater(1);
          setOpacitytvapp(0.3);
        }
      } else if (isInView(tvappHeading)) {
        if (leftImage) {
          leftImage.src =
            "https://ik.imagekit.io/mq90sdk8y/myselfraj/tr:q:70,w-600/tvapp.png?updatedAt=1707019951457";
          setOpacityvle(0.3);
          setOpacitywater(0.3);
          setOpacitytvapp(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-white via-[#f5f7fb] to-[#eef2f5] text-slate-900">
      <div className="container m-auto px-6 py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-12 rounded-[40px] border border-white/60 bg-white/80 p-6 shadow-2xl backdrop-blur md:grid-cols-2 md:gap-[70px] lg:gap-[180px] lg:p-12">
          <div className="relative md:sticky md:top-[100px] md:h-[550px] lg:h-[620px] space-y-8">
            <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.2] text-slate-900">
              <span className="inline-flex items-center rounded-full bg-siteDefaultColor/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-siteDefaultColor">
                Crafted Creations
              </span>
              <span className="mt-4 block text-3xl md:text-[34px] lg:text-[40px] font-semibold text-slate-900">
                My Unique Project Achievements
              </span>
            </h2>
            <div className="mt-4">
              <a className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-siteDefaultColor hover:text-siteDefaultColor/80" href="/projects">
                View All
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="hidden md:block overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/80 p-4 shadow-xl">
              <div className="mockup-window border border-slate-200/80 bg-white/30">
                <Image
                  id="leftImage"
                  src="https://ik.imagekit.io/mq90sdk8y/myselfraj/acri.png?updatedAt=17069618344912"
                  alt="Deliver quality applications with Grapdevs Technologies"
                  width={0}
                  sizes="100vw"
                  height={300}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "18px",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="md:max-w-[500px] md:mt-0 mt-14 ">
            <Image
              id="leftImage"
              src="https://ik.imagekit.io/mq90sdk8y/myselfraj/acri.png?updatedAt=17069618344912"
              alt="Vle Platform"
              width={0}
              sizes="100vw"
              height={300}
              className="md:hidden block rounded-[28px] border border-slate-200/70 shadow-lg"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "20px",
              }}
              loading="lazy"
            />
            <div
              className="pt-12 pb-14 md:pb-[250px] md:pt-[320px] transition-opacity duration-300"
              id="vle"
              style={{ opacity: opacityvle }}
            >
              <h3 className="mb-6 text-3xl md:text-[34px] font-semibold leading-[110%] text-slate-900">
                VLE Platform
              </h3>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                I began this Virtual learning environment project as a college
                assignment during my final semester. Later, when I started
                freelancing, a client needed a similar solution. I introduced
                them with my platform, they liked it, and requested some
                modifications. We ended up making around 45% changes according
                to their requirements, and eventually, I sold the customized
                platform to them.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Project
                  </div>
                  <div className="pt-2 text-lg font-medium text-slate-800">Acri</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Role
                  </div>
                  <div className="pt-2 text-lg font-medium text-slate-800">
                    Full Stack Dev.
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Date
                  </div>
                  <div className="pt-2 text-lg font-medium text-slate-800">2020-2022</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Tech</div>
                <div className="pt-2 text-lg font-medium text-slate-800">
                  CI, Sql, Jenkins, Docker, Git, Python, and Bs
                </div>
              </div>
            </div>
            <Image
              id="leftImage"
              src="https://ik.imagekit.io/mq90sdk8y/myselfraj/water-har.png?updatedAt=1707019559105"
              alt="Water harvesting"
              width={0}
              sizes="100vw"
              height={300}
              className="md:hidden block rounded-[28px] border border-slate-200/70 shadow-lg"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "20px",
              }}
              loading="lazy"
            />
            <div
              className="pt-12 pb-14 md:pb-[250px] transition-opacity duration-300"
              id="water"
              style={{ opacity: opacitywater }}
            >
              <h3 className="mb-6 text-3xl md:text-[34px] font-semibold leading-[110%] text-slate-900">
                Water harvesting
              </h3>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                Create an Internet of Things (IoT) web application for water
                harvesting that enables users to track and assess their water
                savings across various areas such as bathrooms, gardens, and
                pools. The app also calculates the overall water savings and
                provides a ranking to determine if the collected water is
                suitable for reuse for which areas.{" "}
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Project
                  </div>
                  <div className="pt-2 text-lg font-medium text-slate-800">Water Xo</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Role
                  </div>
                  <div className="pt-2 text-lg font-medium text-slate-800">
                    Front-End & API Dev
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Date
                  </div>
                  <div className="pt-2 text-lg font-medium text-slate-800">2021-2022</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Tech</div>
                <div className="pt-2 text-lg font-medium text-slate-800">
                  Nuxt/Vue, MongoDb, Python, Raspberry Pi, Git, and Bs
                </div>
              </div>
            </div>
            <Image
              id="leftImage"
              src="https://ik.imagekit.io/mq90sdk8y/myselfraj/tr:q:70,w-600/tvapp.png?updatedAt=1707019951457"
              alt="TV App"
              width={0}
              sizes="100vw"
              height={300}
              className="md:hidden block rounded-[28px] border border-slate-200/70 shadow-lg"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "20px",
              }}
              loading="lazy"
            />
            <div
              className="pt-12 pb-14 md:pb-[150px] transition-opacity duration-300"
              id="tvapp"
              style={{ opacity: opacitytvapp }}
            >
              <h3 className="mb-6 text-3xl md:text-[34px] font-semibold leading-[110%] text-slate-900">
                Tv App
              </h3>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                I made a TV app for a company. I designed it and assisted the
                developers in getting channels and playing both channels and
                movies. My main focus was on making sure the player could handle
                subtitles during video playback, playing video and managing the
                subscription same as Netflix.com.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Project
                  </div>
                  <div className="pt-2 text-lg font-medium text-slate-800">Tv App</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Role
                  </div>
                  <div className="pt-2 text-lg font-medium text-slate-800">
                    UI/UX & Front-End
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Date
                  </div>
                  <div className="pt-2 text-lg font-medium text-slate-800">2023-2023</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Tech</div>
                <div className="pt-2 text-lg font-medium text-slate-800">
                  React, Adbobe Xd, AWS Transcoder and Stripe
                </div>
              </div>
              <div className="container m-auto flex justify-center mt-14">
                <a
                  href="/projects"
                  className="mt-10 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-gradient-to-r from-siteDefaultColor to-[#0aa0a4] text-center text-[20px] font-semibold text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
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
