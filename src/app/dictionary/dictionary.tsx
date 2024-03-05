"use client";
import React from "react";
import GitGist from "@breww.io/react-nextjs-github-gist";
export default function Dictionary() {
  return (
    <div>
      <div className="w-full bg-gray-100 text-black pt-[50px] md:pt-[100px]  sticky top-0 z-0">
        <div className="container p-5 m-auto max-w-[1100px] text-center">
          <h2 className="pt-3  text-4xl md:text-4xl lg:text-5xl font-medium  leading-[110%] md:leading-[140%]">
            Code Dictionary, Its Code Snipits/or samples{" "}
            <div className="mt-3">Just do ctrl + C & ctrl + V</div>
          </h2>
          <div className="mt-[70px] pb-[70px] text-center">
            <div className="grid grid-cols-1 md:grid-cols-1">
              <a className="card bg-white p-2 pl-4 pr-4 rounded-sm" href="">
                Protect Your Routes With Next 14 Routes Middleware
              </a>
            </div>
            <div className="mt-10">
              <GitGist
                id="1036aa9bf78709602485f0a9f9e47e50"
                file=""
                userName="chapeee"
                getProfile="true"
                height="700px"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
