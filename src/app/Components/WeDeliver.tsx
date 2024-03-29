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
    <div className="bg-white text-black w-full">
      <div className="container  m-auto p-5 md:p-5 lg:p-14 ">
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 md:gap-[70px] lg:gap-[220px]">
          <div className="relative md:sticky md:top-[100px] md:h-[550px] lg:h-[620px]">
            <h2 className="text-3xl  md:text-3xl lg:text-5xl font-medium  leading-[110%] md:leading-[140%]">
              <span className="border-b-2 border-transparent border-siteDefaultColor ">
                Crafted Creations:{" "}
              </span>
              <br />
              <div className="mt-4 text-3xlf">
                My Unique Project Achievements
              </div>
            </h2>
            <div className="mb-8 mt-5 underline">
              {" "}
              <a className="text-[18px]" href="/projects">
                View All
              </a>{" "}
            </div>

            <div className="mockup-window border border-gray-600 hidden md:block">
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
                  borderRadius: "8px",
                }}
                loading="lazy"
              />
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
              className="md:hidden block"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "8px",
              }}
              loading="lazy"
            />
            <div
              className="pt-7 pb-14 md:pb-[250px] md:pt-[290px]"
              id="vle"
              style={{ opacity: opacityvle }}
            >
              <h3 className="mb-[14px] text-3xl md:text-[34px] font-[600] leading-[110%]">
                VLE Platform
              </h3>
              <p className="text-[18px]">
                I began this Virtual learning environment project as a college
                assignment during my final semester. Later, when I started
                freelancing, a client needed a similar solution. I introduced
                them with my platform, they liked it, and requested some
                modifications. We ended up making around 45% changes according
                to their requirements, and eventually, I sold the customized
                platform to them.
              </p>

              <div className="grid gap-3 grid-cols-3 mt-8">
                <div>
                  <div className="text-[16px] text-gray-700 font-bold">
                    Project
                  </div>
                  <div className="text-[18px] text-black pt-1">Acri</div>
                </div>
                <div>
                  <div className="text-[16px] text-gray-700 font-bold">
                    Role
                  </div>
                  <div className="text-[18px] text-black pt-1">
                    Full Stack Dev.
                  </div>
                </div>
                <div>
                  <div className="text-[16px] text-gray-700 font-bold">
                    Date
                  </div>
                  <div className="text-[18px] text-black pt-1">2020-2022</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-[16px] text-gray-700 font-bold">Tech</div>
                <div className="text-[18px] text-black pt-1">
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
              className="md:hidden block"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "8px",
              }}
              loading="lazy"
            />
            <div
              className="pt-7 pb-14 md:pb-[250px] duration-300"
              id="water"
              style={{ opacity: opacitywater }}
            >
              <h3 className="mb-[14px] text-3xl md:text-[34px]  font-[600] leading-[110%]">
                Water harvesting
              </h3>
              <p className="text-[18px]">
                Create an Internet of Things (IoT) web application for water
                harvesting that enables users to track and assess their water
                savings across various areas such as bathrooms, gardens, and
                pools. The app also calculates the overall water savings and
                provides a ranking to determine if the collected water is
                suitable for reuse for which areas.{" "}
              </p>
              <div className="grid gap-1 grid-cols-3 mt-8">
                <div>
                  <div className="text-[16px] text-gray-700 font-bold">
                    Project
                  </div>
                  <div className="text-[18px] text-black pt-1">Water Xo</div>
                </div>
                <div>
                  <div className="text-[16px] text-gray-700 font-bold">
                    Role
                  </div>
                  <div className="text-[18px] text-black pt-1">
                    Front-End & API Dev
                  </div>
                </div>
                <div>
                  <div className="text-[16px] text-gray-700 font-bold">
                    Date
                  </div>
                  <div className="text-[18px] text-black pt-1">2021-2022</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-[16px] text-gray-700 font-bold">Tech</div>
                <div className="text-[18px] text-black pt-1">
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
              className="md:hidden block"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "8px",
              }}
              loading="lazy"
            />
            <div
              className="pt-7 pb-14 md:pb-[150px] duration-300"
              id="tvapp"
              style={{ opacity: opacitytvapp }}
            >
              <h3 className="mb-[14px] text-3xl md:text-[34px]  font-[600] leading-[110%]">
                Tv App
              </h3>
              <p className="text-[18px]">
                I made a TV app for a company. I designed it and assisted the
                developers in getting channels and playing both channels and
                movies. My main focus was on making sure the player could handle
                subtitles during video playback, playing video and managing the
                subscription same as Netflix.com.
              </p>

              <div className="grid gap-1 grid-cols-3 mt-8">
                <div>
                  <div className="text-[16px] text-gray-700 font-bold">
                    Project
                  </div>
                  <div className="text-[18px] text-black pt-1">Tv App</div>
                </div>
                <div>
                  <div className="text-[16px] text-gray-700 font-bold">
                    Role
                  </div>
                  <div className="text-[18px] text-black pt-1">
                    UI/UX & Front-End
                  </div>
                </div>
                <div>
                  <div className="text-[16px] text-gray-700 font-bold">
                    Date
                  </div>
                  <div className="text-[18px] text-black pt-1">2023-2023</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-[16px] text-gray-700 font-bold">Tech</div>
                <div className="text-[18px] text-black pt-1">
                  React, Adbobe Xd, AWS Transcoder and Stripe
                </div>
              </div>
              <div className="container m-auto flex justify-center mt-14">
                <a
                  href="/projects"
                  className="mt-10 hover:cursor-pointer rounded-full bg-siteDefaultColor text-white h-[150px] w-[150px] p-4 flex items-center justify-center text-[20px] text-center font-medium"
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
