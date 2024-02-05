import React from "react";
import Image from "next/image";
export default function Projects() {
  return (
    <div>
      <div className="w-full bg-gray-100 text-black pt-[50px] md:pt-[100px]  sticky top-0 z-0">
        <div className="container p-5 m-auto max-w-[900px] text-center">
          <h2 className="pt-3  text-4xl md:text-4xl lg:text-5xl font-medium  leading-[110%] md:leading-[140%]">
            Projects
          </h2>
          <p className="text-[18px] mt-7">
            So far, I've been a part of more than 100 projects. However, for my freelance work, I'll be focusing on 67 projects. These include various projects I've done for companies or clients. I've listed my top projects, covering everything about them – from the technologies used to the roles I played. This includes personal projects like open source work, ones I've sold, ongoing projects, and client projects. Additionally, I've highlighted some of my most favorite projects in this collection.
          </p>
        </div> </div>
      <div className="w-full m-auto bg-gray-100 md:pt-[100px] pt-[50px]">
        <div className="z-[9] relative bg-gray-100">
          <div className="bg-gray-950 text-white pt-[100px] pb-[100px]">
            <div className="container m-auto p-5 pt-0 pb-0">
              <div className="flex justify-between">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-gray-400">
                    My Open Source Library Creation
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left" style={{ lineHeight: "120%" }}

                  >
                    Breww Scroll-spyer:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-300" >This is my own library that I made during my free time. It helps you organize your scrollspy and adds cool animations to enhance the experience.</p>
                  <div className="mt-14 max-w-[400px]">
                    <div className="mockup-code">
                      <pre data-prefix="$" className="text-warning"><code>npm i @breww.io/scroll-spyer</code></pre>
                      <pre data-prefix=">"><code>installing...</code></pre>
                      <pre data-prefix=">" className="text-success"><code>Done ready to use!</code></pre>
                    </div>
                  </div>
                  <div className="mt-14">
                    <div className="flex md:gap-11">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Project</div>
                          <a href="https://scrollspyer.breww.io/" className="text-[20px] pt-1 text-gray-100 underline">Breww Scoll-spyer</a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Role</div>
                          <div className="text-[20px] pt-1 text-gray-100">Full Stack</div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Date</div>
                          <div className="text-[20px] pt-1 text-gray-100">2023 - Present</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="text-[18px] bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Javascript
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Typescript
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Webscript
                  </div>
                  <div className=" text-[18px] mt-5 bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Rollback
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div></div>
      <div className="bg-[#d7eef0] z-[9] relative w-full md:pt-[120px] pt-[50px]">  </div>
      <div className=" z-[9] relative w-full m-auto  bg-gray-100">
        <div className="bg-[#d7eef0] w-full h-[46em] absolute"></div>
        <div className="z-[9] relative">
          <div className=" text-black ">
            <div className="container m-auto p-5 pt-0 pb-0">
              <div className="flex justify-between">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-gray-500">
                    Client's Project
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left" style={{ lineHeight: "120%" }}

                  >
                    Water harvesting:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-600" >
                    Develop a user-friendly Internet of Things (IoT) web app for water harvesting. Client can monitor and evaluate water savings in specific zones like bathrooms, gardens, and pools. The application calculates total water savings, assigning rankings to assess its suitability for reuse in different areas.
                  </p>

                  <div className="mt-14">
                    <div className="flex md:gap-11">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Project</div>
                          <a href="#" className="text-[20px] pt-1 text-gray-600 ">Water harvesting</a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Role</div>
                          <div className="text-[20px] pt-1 text-gray-600">Front-End & API Dev</div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Date</div>
                          <div className="text-[20px] pt-1 text-gray-600">2021 - 2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="text-[18px] bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    Raspberry Pi
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    Nuxt/Vue
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    Python
                  </div>
                  <div className=" text-[18px] mt-5 bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    MongoDb
                  </div>
                  <div className=" text-[18px] mt-5 bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    TW & BS
                  </div>
                  <div className=" text-[18px] mt-5 bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
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
                  className="mt-[100px]  "
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
      <div className=" z-[9] relative w-full m-auto  bg-[#0d1520]">
        <div className="bg-gray-100 w-full h-[56em] absolute"></div>
        <div className="z-[9] relative">
          <div className=" text-black ">
            <div className="container m-auto p-5 md:pt-[120px] pt-[50px] pb-0">
              <div className="flex justify-between">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-gray-600">
                    Client's Project
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left" style={{ lineHeight: "120%" }}

                  >
                    VLE Platform:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-800" >
                    A platform for coaching centers enables online testing, score tracking, and self-improvement for students. It allows students to take tests, create and share notes. Teachers can upload their notes. During exams, camera and audio access is required to maintain integrity.
                  </p>

                  <div className="mt-14">
                    <div className="flex md:gap-11">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Project</div>
                          <a href="#" className="text-[20px] pt-1 text-gray-600 ">VLE Platform</a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Role</div>
                          <div className="text-[20px] pt-1 text-gray-600">Full Stack</div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Date</div>
                          <div className="text-[20px] pt-1 text-gray-600">2020 - 2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="text-[18px] bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    Raspberry Pi
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    CI/PHP/Python
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-600 border-gray-600 border  p-2 pl-5 pr-5 rounded-full">
                    SQL
                  </div>
                  <div className=" text-[18px] mt-5 bg-transparent text-gray-600 border-gray-600 border  p-2 pl-5 pr-5 rounded-full">
                    Jenkins
                  </div>
                  <div className=" text-[18px] mt-5 bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    Docker
                  </div>
                  <div className=" text-[18px] mt-5 bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
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
                  className="mt-[100px] border-2 border-gray-400"
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
      <div className=" z-[9] relative w-full m-auto  bg-[#ffe5e2]">
        <div className="bg-[#0d1520] w-full h-[50em] absolute"></div>
        <div className="z-[9] relative">
          <div className=" text-white ">
            <div className="container m-auto p-5 md:pt-[120px] pt-[50px] pb-0">
              <div className="flex justify-between">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-gray-400">
                    Client's Project
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left" style={{ lineHeight: "120%" }}

                  >
                    TV APP:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-300" >
                    I designed and supported developers in implementing AWS Transcoder for a TV and movie app. I ensured the seamless setup of channels and playback for both movies and shows using Vd CDN. My primary focus was on making sure the player could handle subtitles during video playback and manage subscriptions, similar to the features on Netflix.com.
                  </p>

                  <div className="mt-14">
                    <div className="flex md:gap-11">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Project</div>
                          <a href="#" className="text-[20px] pt-1 text-gray-300 ">Tv App</a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Role</div>
                          <div className="text-[20px] pt-1 text-gray-300">UI/UX & Front-End
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Date</div>
                          <div className="text-[20px] pt-1 text-gray-300">2023 - 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className=" text-[18px] bg-transparent text-gray-300 border-gray-400 border  p-2 pl-5 pr-5 rounded-full">
                    AWS Transcoder
                  </div>

                  <div className="text-[18px] mt-5  bg-transparent text-gray-300 border-gray-400 border  p-2 pl-5 pr-5 rounded-full">
                    React
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-300 border-gray-400 border  p-2 pl-5 pr-5 rounded-full">
                    Adbobe Xd
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-300 border-gray-400 border  p-2 pl-5 pr-5 rounded-full">
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
                  className="mt-[100px]"
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



      <div className=" z-[9] relative w-full m-auto  bg-[#1e2b7d]">
        <div className="bg-[#ffe5e2] w-full h-[50em] absolute"></div>
        <div className="z-[9] relative">
          <div className=" text-black ">
            <div className="container m-auto p-5 md:pt-[120px] pt-[50px] pb-0">
              <div className="flex justify-between">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-gray-600">
                    Client's Project
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left" style={{ lineHeight: "120%" }}

                  >
                    Choreless Laundry:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-600" >

                    One of my favorite projects involved working with a client who owns a laundry company. I assisted in organizing and managing the washers, optimizing their buisness order and processing layout, ensuring quality work from the washers, creating admin panels, web apps, websites, developing an app for order management, and implementing marketing and AI tools to enhance efficiency.
                  </p>

                  <div className="mt-14">
                    <div className="flex md:gap-11">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Project</div>
                          <a href="https://getchoreless.com/" className="underline text-[20px] pt-1 text-gray-600 ">Choreless</a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Role</div>
                          <div className="text-[20px] pt-1 text-gray-600">Full Stack
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Date</div>
                          <div className="text-[20px] pt-1 text-gray-600">2020 - 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className=" text-[18px] bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    Vue/Nuxt, React/Next
                  </div>

                  <div className="text-[18px] mt-5  bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    SQL, Firebase Db
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    Laravel, Core Php
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    Wordpress
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    AWS, Firebase & Cloudflare
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-600 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
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
                  className="mt-[100px]"
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
      <div className=" z-[9] relative w-full m-auto  bg-[#edebf9]">
        <div className="bg-[#1e2b7d] w-full h-[46em] absolute"></div>
        <div className="z-[9] relative">
          <div className=" text-white ">
            <div className="container m-auto p-5 md:pt-[120px] pt-[50px] pb-0">
              <div className="flex justify-between">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-gray-400">
                    Client's Project
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left" style={{ lineHeight: "120%" }}

                  >
                    Make My Post:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-200" >

                    "Make My Post" one of the best apps for creating Indian festival posters. I worked on improving the app's appearance (UI) and added features for user support through chat.
                  </p>

                  <div className="mt-14">
                    <div className="flex md:gap-11">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Project</div>
                          <a href="https://play.google.com/store/apps/details?id=make.mypost&hl=en_IN&gl=US" className="underline text-[20px] pt-1 text-gray-200 ">Make My Post</a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Role</div>
                          <div className="text-[20px] pt-1 text-gray-200">UI/UX & Dev
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-400">Date</div>
                          <div className="text-[20px] pt-1 text-gray-200">2022 - 2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className=" text-[18px] bg-transparent text-gray-300 border-gray-400 border  p-2 pl-5 pr-5 rounded-full">
                    Adobe Xd
                  </div>

                  <div className="text-[18px] mt-5  bg-transparent text-gray-300 border-gray-400 border  p-2 pl-5 pr-5 rounded-full">
                    Firebase Db
                  </div>
                  <div className="text-[18px] mt-5  bg-transparent text-gray-300 border-gray-400 border  p-2 pl-5 pr-5 rounded-full">
                    Vanilla js
                  </div>
                  <div className="text-[18px] mt-5  bg-transparent text-gray-300 border-gray-400 border  p-2 pl-5 pr-5 rounded-full">
                    Laravel
                  </div>
                </div>

              </div>
              <div className="max-w-[900px] m-auto">
                <Image


                  src="https://ik.imagekit.io/mq90sdk8y/myselfraj/makemypost.webp?updatedAt=1707110693205"
                  alt="makemypost"
                  width={0}
                  sizes="100vw"
                  height={300}
                  className="mt-[100px]"
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
      <div className=" z-[9] relative w-full m-auto  bg-[#fff]">
        <div className="bg-[#edebf9] w-full h-[53em] absolute"></div>
        <div className="z-[9] relative">
          <div className=" text-black ">
            <div className="container m-auto p-5 md:pt-[120px] pt-[50px] pb-0">
              <div className="flex justify-between">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-gray-500">
                    Client's Project
                  </span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium  text-left" style={{ lineHeight: "120%" }}

                  >
                    Oatrx:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-700" >

                    I assisted in redesigning their main website and admin panels. Additionally, I developed an image editor similar to Canva using Konva.js, integrated Firebase into the system, and collaborated with other developers to implement a patient and clinic management system. Furthermore, I incorporated online video and call consultation features.
                    I also contributed to the creation of forms and certificates using HTML and CSS and saving them as pdf into the system.
                  </p>

                  <div className="mt-14">
                    <div className="flex md:gap-11">
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Project</div>
                          <a href="https://oatrx.ca" className="underline text-[20px] pt-1 text-gray-600 "><u>Oatrx</u></a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Role</div>
                          <div className="text-[20px] pt-1 text-gray-600">UI/UX & Dev
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="text-[18px] text-gray-500">Date</div>
                          <div className="text-[20px] pt-1 text-gray-600">2021 - Present</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className=" text-[18px] bg-transparent text-gray-500 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    Adobe Xd
                  </div>

                  <div className="text-[18px] mt-5  bg-transparent text-gray-500 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    Laravel
                  </div>
                  <div className="text-[18px] mt-5  bg-transparent text-gray-500 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    Vanilla js
                  </div>
                  <div className="text-[18px] mt-5  bg-transparent text-gray-500 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    TypeScript
                  </div>
                  <div className="text-[18px] mt-5  bg-transparent text-gray-500 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    Konva Js
                  </div>
                  <div className="text-[18px] mt-5  bg-transparent text-gray-500 border-gray-500 border  p-2 pl-5 pr-5 rounded-full">
                    Firebase
                  </div>
                </div>

              </div>
              <div className="max-w-[900px] m-auto">
                <Image


                  src="https://ik.imagekit.io/mq90sdk8y/myselfraj/tr:q:90,w-1000/oatrx.png?updatedAt=1707112021220"
                  alt="oatrx"
                  width={0}
                  sizes="100vw"
                  height={300}
                  className="mt-[100px]"
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
      <div className="relative z-[99] pt-[80px] md:pt-[150px] bg-white ">
        <div className="container m-auto text-black text-center ">
        <h2 className="text-4xl  mb-14 md:text-6xl">Companies I have worked with</h2>
        <div className="flex flex-wrap md:gap-6 gap-4 text-[18px] max-w-[950px] m-auto text-gray-600 font-normal"> <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-bold  p-2">Choreless</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2  ">Jeff.co</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">Karat.io</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">Mithi.com</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">Fusioni Tech</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">Mithi</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">Marketing Crawlers</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium  p-2 ">PRM Digital</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">2paws</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">LegacyFlow</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">Wibyng</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">Kapiva</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">Fm1</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium  p-2">The Fold</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium  p-2">Wapka</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">Educrafter Education</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">Cynotech</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">Rayforce Greentech</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">HaitinFlix</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">Motosports</div>
        <div className="border boder-1 border-gray-300 rounded-full pl-5 pr-5 font-medium p-2 ">JFlex</div></div></div>
    </div>
    </div >
  );
}
