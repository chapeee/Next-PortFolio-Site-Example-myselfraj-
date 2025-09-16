import React from "react";
import Image from "next/image";
import CompaniesIhaveWorked from "../Components/CompaniesIhaveWorked";
export default function Projects() {
  return (
    <div>
      <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 pt-[50px] md:pt-[100px] sticky top-0 z-0 relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-secondary/10 to-tertiary/10"></div>
        
        <div className="container p-5 m-auto max-w-[900px] text-center relative z-10">
          <h2 className="pt-3 text-4xl md:text-4xl lg:text-5xl font-medium leading-[110%] md:leading-[140%] bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-[18px] mt-7 text-gray-300">
            So far, I&quot;ve been a part of more than 100 projects. However,
            for my freelance work, I&quot;ll be focusing on 67 projects. These
            include various projects I&quot;ve done for companies or clients.
            I&quot;ve listed my top projects, covering everything about them –
            from the technologies used to the roles I played. This includes
            personal projects like open source work, ones I&quot;ve sold,
            ongoing projects, and client projects. Additionally, I&quot;ve
            highlighted some of my most favorite projects in this collection.
          </p>
        </div>{" "}
      </div>
      <div className="w-full m-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 md:pt-[100px] pt-[50px] relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-secondary/5 to-tertiary/5"></div>
        
        <div className="z-[9] relative">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 pt-[100px] pb-[100px] relative">
            <div className="container m-auto p-5 pt-0 pb-0">
              <div className="flex lg:justify-between flex-col lg:flex-row">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-gray-400">
                    My Open Source Library Creation
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left"
                    style={{ lineHeight: "120%" }}
                  >
                    Breww Scroll-spyer:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-300">
                    This is my own library that I made during my free time. It
                    helps you organize your scrollspy and adds cool animations
                    to enhance the experience.
                  </p>
                  <div className="mt-14 max-w-[400px]">
                    <div className="mockup-code">
                      <pre data-prefix="$" className="text-warning">
                        <code>npm i @breww.io/scroll-spyer</code>
                      </pre>
                      <pre data-prefix=">">
                        <code>installing...</code>
                      </pre>
                      <pre data-prefix=">" className="text-success">
                        <code>Done ready to use!</code>
                      </pre>
                    </div>
                  </div>
                  <div className="mt-14">
                    <div className="flex gap-4 md:gap-11 flex-wrap">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">
                            Project
                          </div>
                          <a
                            href="https://scrollspyer.breww.io/"
                            className="text-[20px] pt-1 text-gray-100 underline"
                          >
                            Breww Scoll-spyer
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Role</div>
                          <div className="text-[20px] pt-1 text-gray-100">
                            Full Stack
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Date</div>
                          <div className="text-[20px] pt-1 text-gray-100">
                            2023 - Present
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap lg:flex-col flex-row lg:gap-o gap-4 lg:gap-0 items-start lg:items-end lg:mt-0 mt-10">
                  <div className="text-[18px] bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Javascript
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Typescript
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Webscript
                  </div>
                  <div className=" text-[18px] lg:mt-5 bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Rollback
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full m-auto bg-gray-100 ">
        <div className="z-[9] relative bg-gray-100">
          <div className="bg-[#0F084E] text-white pt-[100px] pb-[100px]">
            <div className="container m-auto p-5 pt-0 pb-0">
              <div className="flex lg:justify-between flex-col lg:flex-row">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-gray-400">
                    My Open Source Library Creation
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left"
                    style={{ lineHeight: "120%" }}
                  >
                    React Nextjs Github Gist:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-300">
                    A package help you to add github gist in react and next
                    client side with username and avatar with 900+ weekly
                    Downloads.
                  </p>
                  <div className="mt-14 max-w-[400px]">
                    <div className="mockup-code">
                      <pre data-prefix="$" className="text-warning">
                        <code>npm i &quot;@myselfraj/react-nextjs-github-gist&quot;</code>
                      </pre>
                      <pre data-prefix=">">
                        <code>installing...</code>
                      </pre>
                      <pre data-prefix=">" className="text-success">
                        <code>Done ready to use!</code>
                      </pre>
                    </div>
                  </div>
                  <div className="mt-14">
                    <div className="flex gap-4 md:gap-11 flex-wrap">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">
                            Project
                          </div>
                          <a
                            href="https://www.npmjs.com/package/@myselfraj/react-nextjs-github-gist"
                            className="text-[20px] pt-1 text-gray-100 underline"
                          >
                            @myselfraj/react-nextjs-github-gist
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Role</div>
                          <div className="text-[20px] pt-1 text-gray-100">
                            Full Stack
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Date</div>
                          <div className="text-[20px] pt-1 text-gray-100">
                            2024 - Present
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap lg:flex-col flex-row lg:gap-o gap-4 lg:gap-0 items-start lg:items-end lg:mt-0 mt-10">
                  <div className=" text-[18px] lg:mt-5 bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    React/Next
                  </div>
                  <div className="text-[18px] bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Javascript
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Typescript
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Tsdx
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 z-[9] relative w-full md:pt-[120px] pt-[50px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      </div>
      <div className=" z-[9] relative w-full m-auto  bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full  max-[350px]:h-[60em] max-[370px]:h-[55em]  max-[450px]:h-[55em] h-[47em] sm:h-[48em]  md:h-[46em] absolute"></div>
        <div className="z-[9] relative">
          <div className=" text-white ">
            <div className="container m-auto p-5 pt-0 pb-0">
              <div className="flex lg:justify-between flex-col lg:flex-row">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-blue-400">
                    Client&quot;s Project
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    style={{ lineHeight: "120%" }}
                  >
                    Water harvesting:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-300">
                    Develop a user-friendly Internet of Things (IoT) web app for
                    water harvesting. Client can monitor and evaluate water
                    savings in specific zones like bathrooms, gardens, and
                    pools. The application calculates total water savings,
                    assigning rankings to assess its suitability for reuse in
                    different areas.
                  </p>

                  <div className="mt-14">
                    <div className="flex gap-4 md:gap-11 flex-wrap">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">
                            Project
                          </div>
                          <a
                            href="#"
                            className="text-[20px] pt-1 text-white hover:text-blue-400 transition-colors"
                          >
                            Water harvesting
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Role</div>
                          <div className="text-[20px] pt-1 text-white">
                            Front-End & API Dev
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Date</div>
                          <div className="text-[20px] pt-1 text-white">
                            2021 - 2022
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap lg:flex-col flex-row lg:gap-o gap-4 lg:gap-0 items-start lg:items-end lg:mt-0 mt-10">
                  <div className="text-[18px] lg:mt-5  bg-transparent text-blue-400 border-blue-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-blue-500/10 transition-colors">
                    Raspberry Pi
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-blue-400 border-blue-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-blue-500/10 transition-colors">
                    Nuxt/Vue
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-blue-400 border-blue-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-blue-500/10 transition-colors">
                    Python
                  </div>
                  <div className=" text-[18px] lg:mt-5 bg-transparent text-blue-400 border-blue-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-blue-500/10 transition-colors">
                    MongoDb
                  </div>
                  <div className=" text-[18px] lg:mt-5 bg-transparent text-blue-400 border-blue-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-blue-500/10 transition-colors">
                    TW & BS
                  </div>
                  <div className=" text-[18px] lg:mt-5 bg-transparent text-blue-400 border-blue-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-blue-500/10 transition-colors">
                    Firebase
                  </div>
                </div>
              </div>
              <div className="max-w-[900px] m-auto">
                <Image
                  id="leftImage"
                  src="https://ik.imagekit.io/mq90sdk8y/myselfraj/water-har.png?updatedAt=1707019559105"
                  alt="water harvesting grapdevs"
                  width={0}
                  sizes="100vw"
                  height={300}
                  className="mt-[50px] md:mt-[100px] border border-gray-700 hover:border-blue-500 transition-colors"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" z-[9] relative w-full m-auto  bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full max-[370px]:h-[59em] max-[450px]:h-[52em] max-[500px]:h-[46em] h-[49em] md:h-[56em] absolute"></div>
        <div className="z-[9] relative">
          <div className=" text-white ">
            <div className="container m-auto p-5 md:pt-[120px] pt-[50px] pb-0">
              <div className="flex lg:justify-between flex-col lg:flex-row">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-purple-400">
                    Client&apos;s Project
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    style={{ lineHeight: "120%" }}
                  >
                    VLE Platform:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-300">
                    A platform for coaching centers enables online testing,
                    score tracking, and self-improvement for students. It allows
                    students to take tests, create and share notes. Teachers can
                    upload their notes. During exams, camera and audio access is
                    required to maintain integrity.
                  </p>

                  <div className="mt-14">
                    <div className="flex gap-4 md:gap-11 flex-wrap">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">
                            Project
                          </div>
                          <a
                            href="#"
                            className="text-[20px] pt-1 text-white hover:text-purple-400 transition-colors"
                          >
                            VLE Platform
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Role</div>
                          <div className="text-[20px] pt-1 text-white">
                            Full Stack
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Date</div>
                          <div className="text-[20px] pt-1 text-white">
                            2020 - 2022
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap lg:flex-col flex-row lg:gap-o gap-4 lg:gap-0 items-start lg:items-end lg:mt-0 mt-10">
                  <div className="text-[18px] lg:mt-5 bg-transparent text-purple-400 border-purple-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-purple-500/10 transition-colors">
                    CI/PHP/Python
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-purple-400 border-purple-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-purple-500/10 transition-colors">
                    SQL
                  </div>
                  <div className=" text-[18px] lg:mt-5 bg-transparent text-purple-400 border-purple-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-purple-500/10 transition-colors">
                    Jenkins
                  </div>
                  <div className=" text-[18px] lg:mt-5 bg-transparent text-purple-400 border-purple-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-purple-500/10 transition-colors">
                    Docker
                  </div>
                  <div className=" text-[18px] lg:mt-5 bg-transparent text-purple-400 border-purple-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-purple-500/10 transition-colors">
                    Bs
                  </div>
                </div>
              </div>
              <div className="max-w-[900px] m-auto ">
                <Image
                  id="leftImage"
                  src="https://ik.imagekit.io/mq90sdk8y/myselfraj/acri.png?updatedAt=17069618344912"
                  alt="vle platofrm grapdevs"
                  width={0}
                  sizes="100vw"
                  height={300}
                  className="mt-[50px] md:mt-[100px] border border-gray-700 hover:border-purple-500 transition-colors"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" z-[9] relative w-full m-auto  bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black w-full max-[340px]:h-[58em] max-[400px]:h-[57em] max-[422px]:h-[53em]  max-[767px]:h-[47em] h-[50em] absolute"></div>
        <div className="z-[9] relative">
          <div className=" text-white ">
            <div className="container m-auto p-5 md:pt-[120px] pt-[50px] pb-0">
              <div className="flex lg:justify-between flex-col lg:flex-row">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-green-400">
                    Client&quot;s Project
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    style={{ lineHeight: "120%" }}
                  >
                    TV APP:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-300">
                    I designed and supported developers in implementing AWS
                    Transcoder for a TV and movie app. I ensured the seamless
                    setup of channels and playback for both movies and shows
                    using Vd CDN. My primary focus was on making sure the player
                    could handle subtitles during video playback and manage
                    subscriptions, similar to the features on Netflix.com.
                  </p>

                  <div className="mt-14">
                    <div className="flex gap-4 md:gap-11 flex-wrap">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">
                            Project
                          </div>
                          <a
                            href="#"
                            className="text-[20px] pt-1 text-white hover:text-green-400 transition-colors"
                          >
                            Tv App
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Role</div>
                          <div className="text-[20px] pt-1 text-white">
                            UI/UX & Front-End
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Date</div>
                          <div className="text-[20px] pt-1 text-white">
                            2023 - 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap lg:flex-col flex-row lg:gap-o gap-4 lg:gap-0 items-start lg:items-end lg:mt-0 mt-10">
                  <div className=" text-[18px] bg-transparent text-green-400 border-green-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-green-500/10 transition-colors">
                    AWS Transcoder
                  </div>

                  <div className="text-[18px] lg:mt-5  bg-transparent text-green-400 border-green-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-green-500/10 transition-colors">
                    React
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-green-400 border-green-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-green-500/10 transition-colors">
                    Adbobe Xd
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-green-400 border-green-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-green-500/10 transition-colors">
                    Stripe
                  </div>
                </div>
              </div>
              <div className="max-w-[900px] m-auto">
                <Image
                  src="https://ik.imagekit.io/mq90sdk8y/myselfraj/tr:q:90,w-1200/app-tv.png?updatedAt=1707107652863"
                  alt="tv app grapdevs"
                  width={0}
                  sizes="100vw"
                  height={300}
                  className="mt-[50px] md:mt-[100px] border border-gray-700 hover:border-green-500 transition-colors"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" z-[9] relative w-full m-auto  bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full max-[360px]:h-[76em] max-[375px]:h-[69em] max-[413px]:h-[63em] max-[460px]:h-[58em] max-[580px]:h-[52em] h-[50em] absolute"></div>
        <div className="z-[9] relative">
          <div className=" text-white ">
            <div className="container m-auto p-5 md:pt-[120px] pt-[50px] pb-0">
              <div className="flex lg:justify-between flex-col lg:flex-row">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-orange-400">
                    Client&quot;s Project
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    style={{ lineHeight: "120%" }}
                  >
                    Choreless Laundry:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-300">
                    One of my favorite projects involved working with a client
                    who owns a laundry company. I assisted in organizing and
                    managing the washers, optimizing their buisness order and
                    processing layout, ensuring quality work from the washers,
                    creating admin panels, web apps, websites, developing an app
                    for order management, and implementing marketing and AI
                    tools to enhance efficiency.
                  </p>

                  <div className="mt-14">
                    <div className="flex gap-4 md:gap-11 flex-wrap">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">
                            Project
                          </div>
                          <a
                            href="https://getchoreless.com/"
                            className="underline text-[20px] pt-1 text-white hover:text-orange-400 transition-colors"
                          >
                            Choreless
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Role</div>
                          <div className="text-[20px] pt-1 text-white">
                            Full Stack
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Date</div>
                          <div className="text-[20px] pt-1 text-white">
                            2020 - 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap lg:flex-col flex-row lg:gap-o gap-4 lg:gap-0 items-start lg:items-end lg:mt-0 mt-10">
                  <div className=" text-[18px] bg-transparent text-orange-400 border-orange-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-orange-500/10 transition-colors">
                    Vue/Nuxt, React/Next
                  </div>

                  <div className="text-[18px] lg:mt-5  bg-transparent text-orange-400 border-orange-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-orange-500/10 transition-colors">
                    SQL, Firebase Db
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-orange-400 border-orange-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-orange-500/10 transition-colors">
                    Laravel, Core Php
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-orange-400 border-orange-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-orange-500/10 transition-colors">
                    Wordpress
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-orange-400 border-orange-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-orange-500/10 transition-colors">
                    AWS, Firebase & Cloudflare
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-orange-400 border-orange-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-orange-500/10 transition-colors">
                    Node
                  </div>
                </div>
              </div>
              <div className="max-w-[900px] m-auto">
                <Image
                  blurDataURL="https://ik.imagekit.io/mq90sdk8y/myselfraj/tr:q:70,w-1000/getchoreless-work.png?updatedAt=1707108593134"
                  src="https://ik.imagekit.io/mq90sdk8y/myselfraj/choreless-gif.gif?updatedAt=1706970481588s"
                  alt="Choreless"
                  width={0}
                  sizes="100vw"
                  height={300}
                  className="mt-[50px] md:mt-[100px] border border-gray-700 hover:border-orange-500 transition-colors"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" z-[9] relative w-full m-auto  bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black w-full max-[422px]:h-[48em] h-[41em]  md:h-[46em] absolute"></div>
        <div className="z-[9] relative">
          <div className=" text-white ">
            <div className="container m-auto p-5 md:pt-[120px] pt-[50px] pb-0">
              <div className="flex lg:justify-between flex-col lg:flex-row">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-pink-400">
                    Client&quot;s Project
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    style={{ lineHeight: "120%" }}
                  >
                    Author Dashboard
                  </div>
                  <p className="mt-5 text-[18px] text-gray-300">
                    This is an author dashboard designed for a publishing house.
                    Authors can use it to publish books, manage their
                    publications, track earnings from various platforms such as
                    Amazon and Flipkart, and also manage author copies.
                  </p>

                  <div className="mt-14">
                    <div className="flex gap-4 md:gap-11 flex-wrap">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">
                            Project
                          </div>
                          <a
                            href="https://rosewoodpub.com/"
                            className="underline text-[20px] pt-1 text-white hover:text-pink-400 transition-colors"
                          >
                            Rosewood Publications
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Role</div>
                          <div className="text-[20px] pt-1 text-white">
                            Full Stack
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Date</div>
                          <div className="text-[20px] pt-1 text-white">
                            2022 - 2022
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap lg:flex-col flex-row lg:gap-o gap-4 lg:gap-0 items-start lg:items-end lg:mt-0 mt-10">
                  <div className=" text-[18px] bg-transparent text-pink-400 border-pink-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-pink-500/10 transition-colors">
                    Adobe Xd
                  </div>

                  <div className="text-[18px] lg:mt-5  bg-transparent text-pink-400 border-pink-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-pink-500/10 transition-colors">
                    Firebase Db
                  </div>
                  <div className="text-[18px] lg:mt-5  bg-transparent text-pink-400 border-pink-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-pink-500/10 transition-colors">
                    CI
                  </div>
                  <div className="text-[18px] lg:mt-5  bg-transparent text-pink-400 border-pink-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-pink-500/10 transition-colors">
                    Bootstrap
                  </div>
                  <div className="text-[18px] lg:mt-5  bg-transparent text-pink-400 border-pink-500 border  p-2 pl-5 pr-5 rounded-full hover:bg-pink-500/10 transition-colors">
                    AI to Analyze Sales
                  </div>
                </div>
              </div>
              <div className="max-w-[900px] m-auto">
                <Image
                  src="https://ik.imagekit.io/mq90sdk8y/myselfraj/tr:q-70,w-1100/Screenshot%202024-03-07%20at%208.35.11%E2%80%AFAM.png?updatedAt=1709781123222"
                  alt="makemypost"
                  width={0}
                  sizes="100vw"
                  height={300}
                  className="mt-[50px] md:mt-[100px] border border-gray-700 hover:border-pink-500 transition-colors"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[99] pt-[80px] md:pt-[150px] pb-14 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <CompaniesIhaveWorked />
      </div>
    </div>
  );
}
