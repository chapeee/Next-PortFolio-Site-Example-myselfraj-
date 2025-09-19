import React, { useEffect } from "react";

import Image from "next/image";

export default function HomeLearn() {
  return (
    <div className="relative z-[9] w-full bg-transparent">
      <div className="container m-auto px-6 pt-[40px] md:pt-[100px] pb-[100px] lg:max-w-[1100px]">
        <div className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-2xl backdrop-blur">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-balance text-4xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-[110%] md:leading-[140%] text-slate-900">
                Learn With Me
              </h2>
              <p className="text-base text-slate-600 md:text-lg max-w-[420px]">
                &quot;Learn with me&quot; is my initiative to teach people what I know and share the lessons collected from real projects.
              </p>
              <a href="/learn" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-siteDefaultColor hover:text-siteDefaultColor/80">
                Learn Tech
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              {["https://ik.imagekit.io/mq90sdk8y/myselfraj/nextjs.png?updatedAt=1707031375640","https://ik.imagekit.io/mq90sdk8y/myselfraj/react-js.png?updatedAt=1707031375922","https://ik.imagekit.io/mq90sdk8y/myselfraj/sql.png?updatedAt=1707031204601"].map((src, index) => (
                <a key={index} href="/learn" className="group block">
                  <Image
                    src={src}
                    width={0}
                    sizes="100vw"
                    height={300}
                    alt="Learn"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "20px",
                    }}
                    loading="lazy"
                    className="rounded-[24px] border border-slate-200/70 shadow-lg transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
