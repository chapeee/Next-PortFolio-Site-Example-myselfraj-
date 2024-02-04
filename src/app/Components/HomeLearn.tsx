import React, { useEffect } from "react";

import Image from "next/image";

export default function HomeLearn() {
  return (
    <div className="w-full z-[9] bg-gray-100 relative">
      <div className="container m-auto pt-[100px] pb-[100px] max-w-[1000px]">
        <div className="grid grid-cols-3 gap-7">
        <div className="mb-7">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-medium mb-3 leading-[110%] md:leading-[140%]">
            Learn With Me:
          </h2>
          <p className="text-[18px] ">   "Learn with me" is my initiative to teach people what I know and share my knowledge.</p>
        </div>
        <div>
        <Image
                  id="leftImage"
                  src="https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                />
        </div>
        </div>
        

        
      </div>
    </div>
  );
}
