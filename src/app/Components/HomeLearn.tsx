import React, { useEffect } from "react";

import Image from "next/image";

export default function HomeLearn() {
  return (
    <div className="w-full z-[9] bg-gray-100 relative">
      <div className="container p-5 m-auto pt-[0px] md:pt-[100px] pb-[100px] lg:max-w-[1000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="mb-7">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-medium mb-3 leading-[110%] md:leading-[140%]">
              Learn With Me:
            </h2>
            <p className="text-[18px] max-w-[400px]">
              &quot;Learn with me&quot; is my initiative to teach people what I
              know and share my knowledge.
            </p>
            <div className="mt-3">
              <a href="/learn" className="text-[18px]">
                <u>Learn Tech</u>
              </a>
            </div>
          </div>
          <div className="grid  md:grid-cols-1 lg:grid-cols-2 gap-10">
            <a href="/learn">
              <Image
                src="https://ik.imagekit.io/mq90sdk8y/myselfraj/nextjs.png?updatedAt=1707031375640"
                width={0}
                sizes="100vw"
                height={300}
                alt="learn"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                loading="lazy"
                className="border border-1 border-black"
              />
            </a>
            <a href="/learn">
              <Image
                src="https://ik.imagekit.io/mq90sdk8y/myselfraj/react-js.png?updatedAt=1707031375922"
                alt="Writings"
                width={0}
                sizes="100vw"
                height={300}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                loading="lazy"
                className="border border-1 border-black"
              />
            </a>
            <a href="/learn">
              <Image
                src="https://ik.imagekit.io/mq90sdk8y/myselfraj/sql.png?updatedAt=1707031204601"
                alt="Writings"
                width={0}
                sizes="100vw"
                height={300}
                className="border border-1 border-black"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
