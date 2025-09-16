"use client"
import React, { useEffect, useRef } from "react";
import { getPosts } from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import sanityclient from "../lib/createClient";
import Image from "next/image";
import Post from "../Components/Post";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default async function Writing() {
  const data = await getPosts();

  return (
    <main>
      <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-[50px] md:pt-[100px] relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-secondary/5 to-tertiary/5"></div>
        
        <div className="container p-5 m-auto text-center lg:max-w-[1000px] relative z-10">
          <h2 className="pt-3 text-4xl md:text-4xl lg:text-5xl font-medium leading-[110%] md:leading-[140%] bg-gradient-to-r from-white via-gray-200 to-accent bg-clip-text text-transparent">
            Writings
          </h2>
          <div className="mt-[0px] pb-[100px]">
            {!data ? (
              <p className="text-red-400">something went wrong</p>
            ) : (
              <div className="text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-7 mt-14">
                  {data.map((post: any, index: number) => (
                    <div key={index} className="mt-5">
                      <Post post={post} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
