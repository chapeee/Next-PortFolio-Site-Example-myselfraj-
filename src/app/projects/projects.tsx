import React from "react";

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
                    Ui/Ux
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Designer
                  </div>
                  <div className="text-[18px] mt-5 bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Front-End Manager
                  </div>
                  <div className=" text-[18px] mt-5 bg-transparent text-gray-200 border-gray-200 border  p-2 pl-5 pr-5 rounded-full">
                    Designer
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div></div>

    </div>
  );
}
